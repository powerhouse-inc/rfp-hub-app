import { type ISubgraph } from "@powerhousedao/reactor-api";
import type { IReactorClient } from "@powerhousedao/reactor";
import { generateId } from "document-model";
import type { PHDocument } from "document-model";
import {
  addFile,
  addFolder,
  driveCreateDocument,
} from "@powerhousedao/shared/document-drive";
import type {
  DocumentDriveDocument,
  Node,
} from "@powerhousedao/shared/document-drive";
import type { GrantPoolDocument } from "../../document-models/grant-pool/v1/gen/types.js";
import { GrantApplication } from "../../document-models/grant-application/v1/module.js";
import { Project } from "../../document-models/project/v1/module.js";

/**
 * Field-level behavior is defined by the document model GraphQL specs:
 * - `document-models/grant-application/v1/schema.graphql` (GrantApplicationState, pool/project refs)
 * - `document-models/project/v1/schema.graphql` (ProjectState, relevantTo / RelevantPool)
 * - `document-models/grant-pool/v1/schema.graphql` (GrantPoolState, bounds / credentials)
 */

interface ApplyToPoolInput {
  grantPoolId: string;
  applicantName: string;
  applicantEmail?: string | null;
}

/** Placeholder URIs; DAOIP-5 fields require valid URLs. Replace when Fusion/Connect expose canonical registries. */
const GRANT_POOLS_REGISTRY_URI = "https://local.invalid/grant-pools";
const PROJECTS_REGISTRY_URI = "https://local.invalid/projects";

/** Stopwords dropped from pool-name acronym (keeps acronym compact and readable). */
const ACRONYM_STOPWORDS = new Set([
  "the",
  "a",
  "an",
  "of",
  "and",
  "or",
  "for",
  "to",
  "in",
  "on",
  "at",
  "with",
  "by",
  "from",
  "as",
]);

function getRedirectUrl(driveSlug: string, applicationId: string): string {
  return `http://localhost:3001/?driveUrl=http://localhost:4001/d/${encodeURIComponent(
    driveSlug,
  )}&docId=${encodeURIComponent(applicationId)}`;
}

/** Lowercase, hyphenate, strip non-url-safe chars, clamp length. Returns "" if nothing usable. */
function slugifyName(name: string, max = 24): string {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max)
    .replace(/-+$/g, "");
}

/**
 * Turn a multi-word pool name into a short uppercase acronym of first letters.
 * "RFP Hub: Standard RFP Object and Public Aggregation API" → "RHSROPAA"
 * "Web3 Community Round" → "WCR"
 * Drops common stopwords. Clamped to `max` letters.
 */
function poolAcronym(name: string, max = 10): string {
  const cleaned = name.replace(/[^a-zA-Z0-9\s]/g, " ");
  const tokens = cleaned
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 0 && !ACRONYM_STOPWORDS.has(w.toLowerCase()));
  const letters = tokens.map((w) => w[0].toUpperCase()).slice(0, max);
  return letters.join("") || "RFP";
}

/**
 * Build a drive slug that is unique across applicants AND across repeat
 * applications from the same applicant. Shape:
 *   apply-<poolShortId>-<applicantSlug>-<rand4>
 * Falls back to a sensible default if applicantName has no url-safe chars.
 */
function slugForDrive(grantPoolId: string, applicantName: string): string {
  const poolShort = grantPoolId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 12);
  const applicantSlug = slugifyName(applicantName) || "applicant";
  const rand = generateId().slice(0, 4);
  return `apply-${poolShort || "pool"}-${applicantSlug}-${rand}`;
}

function truncateName(name: string, max: number): string {
  const t = name.trim();
  return t.length <= max ? t : t.slice(0, max);
}

/**
 * Drive node names are validated by the node reducer in
 * `@powerhousedao/shared/document-drive` against `/^[a-zA-Z0-9-_.\s()]+$/`.
 * Drop anything outside that set so the reducer accepts the file; otherwise
 * `reactor.execute` silently skips the ADD_FILE op.
 */
function sanitizeNodeName(raw: string): string {
  return raw
    .replace(/[^a-zA-Z0-9-_.\s()]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Very lenient email sanity check. Falsy if obviously invalid. */
function normalizeEmail(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const v = raw.trim();
  if (!v) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return null;
  return v;
}

/**
 * A funder (operator) drive is one whose children include the given grant pool
 * document (same idea as getOperatorDrive for resource templates).
 */
async function getFunderDriveForGrantPool(
  reactorClient: IReactorClient,
  grantPoolId: string,
): Promise<DocumentDriveDocument | undefined> {
  const { results: drives } = await reactorClient.find({
    type: "powerhouse/document-drive",
  });

  for (const drive of drives) {
    if (drive.state.document.isDeleted) continue;
    const driveDoc = drive as DocumentDriveDocument;
    const { results: children } = await reactorClient.getChildren(
      driveDoc.header.id,
    );
    if (children.some((child: PHDocument) => child.header.id === grantPoolId)) {
      return driveDoc;
    }
  }
  return undefined;
}

/** Document IDs on drives that are themselves soft-deleted. */
async function getDeletedDriveDocIds(
  reactorClient: IReactorClient,
): Promise<Set<string>> {
  const { results: drives } = await reactorClient.find({
    type: "powerhouse/document-drive",
  });
  const ids = new Set<string>();
  for (const drive of drives) {
    if (!drive.state.document.isDeleted) continue;
    const driveDoc = drive as DocumentDriveDocument;
    for (const node of driveDoc.state.global.nodes) {
      if (node.kind === "file") {
        ids.add(node.id);
      }
    }
  }
  return ids;
}

export const getResolvers = (subgraph: ISubgraph): Record<string, unknown> => {
  const reactor: IReactorClient = subgraph.reactorClient;

  return {
    Query: {
      applyTo: () => ({}),
    },
    ApplyToQueries: {
      example: (_parent: unknown, args: { driveId: string }) => {
        return `example: ${args.driveId}`;
      },
    },
    Mutation: {
      applyToPool: async (
        _parent: unknown,
        args: { input: ApplyToPoolInput },
      ) => {
        const { input } = args;
        const grantPoolId = input.grantPoolId?.trim();
        const applicantName = input.applicantName?.trim() ?? "";
        const applicantEmail = normalizeEmail(input.applicantEmail);

        if (!grantPoolId) {
          return {
            success: false,
            data: null,
            errors: ["Grant pool id is required"],
          };
        }
        if (!applicantName) {
          return {
            success: false,
            data: null,
            errors: ["Applicant name is required"],
          };
        }
        if (
          input.applicantEmail &&
          input.applicantEmail.trim() &&
          !applicantEmail
        ) {
          return {
            success: false,
            data: null,
            errors: ["Applicant email format is invalid"],
          };
        }

        try {
          const deletedDriveDocIds = await getDeletedDriveDocIds(reactor);
          let grantPoolDoc: GrantPoolDocument;
          try {
            grantPoolDoc = await reactor.get<GrantPoolDocument>(grantPoolId);
          } catch {
            return {
              success: false,
              data: null,
              errors: ["Grant pool not found"],
            };
          }
          if (
            grantPoolDoc.header.documentType !== "rfp-hub/grant-pool" ||
            grantPoolDoc.state.document.isDeleted ||
            deletedDriveDocIds.has(grantPoolId)
          ) {
            return {
              success: false,
              data: null,
              errors: ["Grant pool not found"],
            };
          }

          const poolState = grantPoolDoc.state.global;
          const poolName = poolState.name?.trim() || "Grant pool";
          const acronym = poolAcronym(poolName);

          // Drive display: "<Applicant> — <ACRONYM>" — short + distinct per applicant
          // e.g. "Liberuum — RHSROPAA"
          const driveDisplayName = truncateName(
            `${applicantName} — ${acronym}`,
            64,
          );
          const driveSlug = slugForDrive(grantPoolId, applicantName);

          const driveDoc = driveCreateDocument();
          driveDoc.header.name = driveDisplayName;
          driveDoc.state.global.name = driveDisplayName;
          driveDoc.state.global.icon =
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
          driveDoc.header.slug = driveSlug;
          if (!driveDoc.header.meta) driveDoc.header.meta = {};
          driveDoc.header.meta.preferredEditor = "applicant-workspace";

          const drive = await reactor.create<DocumentDriveDocument>(driveDoc);
          const driveId = drive.header.id;

          // Create child docs with parentIdentifier so reactor records the link.
          // `createEmpty` guarantees CREATE_DOCUMENT is persisted before returning.
          const projectDoc = await reactor.createEmpty("rfp-hub/project", {
            parentIdentifier: driveId,
          });
          const grantApplicationDoc = await reactor.createEmpty(
            "rfp-hub/grant-application",
            { parentIdentifier: driveId },
          );

          const projectFileName = truncateName(
            sanitizeNodeName(`${applicantName} Project`),
            64,
          );
          const applicationFileName = truncateName(
            sanitizeNodeName(`${acronym} Application`),
            64,
          );

          // Folder structure inside applicant drive — one execute call that
          // creates folders AND files (with parentFolder refs) in a single
          // batch, matching the builder-team-admin reference pattern in
          // demos/service-offering/subgraphs/resources-services/resolvers.ts.
          const projectFolderId = generateId();
          const applicationsFolderId = generateId();

          await reactor.execute(driveId, "main", [
            addFolder({
              id: projectFolderId,
              name: "My Project",
            }),
            addFolder({
              id: applicationsFolderId,
              name: "Applications",
            }),
            addFile({
              documentType: "rfp-hub/project",
              id: projectDoc.header.id,
              name: projectFileName,
              parentFolder: projectFolderId,
            }),
            addFile({
              documentType: "rfp-hub/grant-application",
              id: grantApplicationDoc.header.id,
              name: applicationFileName,
              parentFolder: applicationsFolderId,
            }),
          ]);

          // ---------------- Project pre-population ----------------
          const projectLabel = truncateName(applicantName, 120);

          const projectActions: ReturnType<
            (typeof Project.actions)[keyof typeof Project.actions]
          >[] = [
              Project.actions.setProjectName({ name: projectLabel }),
              Project.actions.addRelevantPool({
                id: generateId(),
                poolId: grantPoolId,
                poolName,
              }),
            ];
          if (applicantEmail) {
            projectActions.push(
              Project.actions.setProjectEmail({ email: applicantEmail }),
            );
          }
          await reactor.execute(projectDoc.header.id, "main", projectActions);

          // ---------------- Application pre-population -------------
          const now = new Date().toISOString();

          const appActions: ReturnType<
            (typeof GrantApplication.actions)[keyof typeof GrantApplication.actions]
          >[] = [
              GrantApplication.actions.setPoolRef({
                grantPoolId,
                grantPoolName: poolName,
                grantPoolsURI: GRANT_POOLS_REGISTRY_URI,
              }),
              GrantApplication.actions.setProjectRef({
                projectId: projectDoc.header.id,
                projectName: projectLabel,
                projectsURI: PROJECTS_REGISTRY_URI,
              }),
              GrantApplication.actions.setCreatedAt({ createdAt: now }),
            ];

          // Seed a fundsAsked entry using the pool's min grant so the applicant
          // has a realistic starting number they can adjust up to max.
          const minGrantAmount = poolState.minGrant?.[0]?.amount;
          if (
            minGrantAmount &&
            typeof minGrantAmount.value === "number" &&
            typeof minGrantAmount.unit === "string" &&
            minGrantAmount.unit.trim()
          ) {
            appActions.push(
              GrantApplication.actions.addFundsAsked({
                id: generateId(),
                amount: {
                  value: minGrantAmount.value,
                  unit: minGrantAmount.unit,
                },
              }),
            );
          }

          // Same for USD normalized value if pool has a USD min/total reference.
          const minUsdRaw = minGrantAmount;
          if (
            minUsdRaw &&
            typeof minUsdRaw.value === "number" &&
            (minUsdRaw.unit === "USD" || minUsdRaw.unit === "USDC")
          ) {
            appActions.push(
              GrantApplication.actions.setFundsAskedUsd({
                fundsAskedInUSD: { value: minUsdRaw.value, unit: "USD" },
              }),
            );
          }

          await reactor.execute(
            grantApplicationDoc.header.id,
            "main",
            appActions,
          );

          // ---------------- Mirror into funder drive ----------------
          const funderDrive = await getFunderDriveForGrantPool(
            reactor,
            grantPoolId,
          );
          if (funderDrive) {
            let funderAppsFolderId = funderDrive.state.global.nodes.find(
              (node: Node) =>
                node.kind === "folder" && node.name === "Applications",
            )?.id;

            if (!funderAppsFolderId) {
              funderAppsFolderId = generateId();
              await reactor.execute(funderDrive.header.id, "main", [
                addFolder({
                  id: funderAppsFolderId,
                  name: "Applications",
                }),
              ]);
            }

            // Reactor-level relationship so Connect syncs the child doc.
            await reactor.addChildren(funderDrive.header.id, [
              grantApplicationDoc.header.id,
            ]);

            // Funder-facing label. Keep applicant name prominent.
            const funderFileName = truncateName(
              sanitizeNodeName(`${applicantName} ${acronym}`),
              64,
            );
            await reactor.execute(funderDrive.header.id, "main", [
              addFile({
                documentType: "rfp-hub/grant-application",
                id: grantApplicationDoc.header.id,
                name: funderFileName,
                parentFolder: funderAppsFolderId,
              }),
            ]);
          } else {
            console.warn(
              "applyToPool: no document drive found containing this grant pool; funder will not get a cross-drive file entry yet.",
            );
          }

          return {
            success: true,
            data: {
              driveId,
              applicationId: grantApplicationDoc.header.id,
              projectId: projectDoc.header.id,
              driveSlug,
              redirectUrl: getRedirectUrl(
                driveSlug,
                grantApplicationDoc.header.id,
              ),
            },
            errors: [] as string[],
          };
        } catch (error) {
          console.error("applyToPool failed:", error);
          return {
            success: false,
            data: null,
            errors: [
              error instanceof Error
                ? error.message
                : "An unexpected error occurred",
            ],
          };
        }
      },
    },
  };
};
