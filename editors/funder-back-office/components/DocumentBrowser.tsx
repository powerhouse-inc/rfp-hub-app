import type { PHDocument } from "document-model";
import {
  setSelectedNode,
  useDocumentsInSelectedDrive,
  useSelectedNode,
} from "@powerhousedao/reactor-browser";
import { useMemo, useState } from "react";
import type { GrantSystemDocument } from "../../../document-models/grant-system/v1/gen/types.js";
import type { GrantPoolDocument } from "../../../document-models/grant-pool/v1/gen/types.js";
import type { GrantApplicationDocument } from "../../../document-models/grant-application/v1/gen/types.js";
import type { ProjectDocument } from "../../../document-models/project/v1/gen/types.js";

type DocGroup = {
  key: string;
  label: string;
  docType: string;
  creatable: boolean;
  createLabel: string;
  itemFor: (doc: PHDocument) => {
    title: string;
    dotClass: string;
  };
  /** Optional additional filter applied after doc-type matching. */
  filter?: (doc: PHDocument) => boolean;
};

function pickPoolDotClass(state: GrantPoolDocument["state"]["global"]): string {
  switch (state.lifecycle) {
    case "OPEN":
      return "rfp-dot-open";
    case "UPCOMING":
      return "rfp-dot-upcoming";
    case "CLOSED":
      return "rfp-dot-closed";
    case "AWARDED":
      return "rfp-dot-awarded";
    case "CANCELLED":
      return "rfp-dot-cancelled";
    case "REQUEST_FOR_COMMENTS":
      return "rfp-dot-rfc";
    case "NOT_AWARDED":
      return "rfp-dot-rejected";
    default:
      return "rfp-dot-draft";
  }
}

function pickAppDotClass(
  stage: GrantApplicationDocument["state"]["global"]["reviewStage"],
): string {
  switch (stage) {
    case "SUBMITTED":
    case "OPENED":
    case "NEEDS_REVISION":
      return "rfp-dot-pending";
    case "UNDER_REVIEW":
    case "REVISED":
      return "rfp-dot-review";
    case "APPROVED":
    case "CONDITIONALLY_APPROVED":
      return "rfp-dot-approved";
    case "REJECTED":
      return "rfp-dot-rejected";
    case "WITHDRAWN":
      return "rfp-dot-closed";
    case "FUNDED":
      return "rfp-dot-funded";
    case "COMPLETED":
      return "rfp-dot-completed";
    default:
      return "rfp-dot-draft";
  }
}

function pickSystemDotClass(
  verificationState: GrantSystemDocument["state"]["global"]["verificationState"],
): string {
  switch (verificationState) {
    case "VERIFIED":
      return "rfp-dot-approved";
    case "PENDING_REVIEW":
      return "rfp-dot-pending";
    case "SUSPENDED":
      return "rfp-dot-closed";
    case "REVOKED":
      return "rfp-dot-rejected";
    default:
      return "rfp-dot-draft";
  }
}

export type DocumentBrowserMode = "funder" | "applicant";

export function DocumentBrowser({
  mode,
  onCreate,
  creatingType,
  canCreate,
  extraDocuments,
}: {
  mode: DocumentBrowserMode;
  onCreate: (docType: string, name: string) => void;
  creatingType: string | null;
  canCreate: boolean;
  /**
   * Documents to merge in on top of `useDocumentsInSelectedDrive()`. Used by
   * the funder back-office to inject cross-drive applications fetched from
   * the switchboard so the sidebar count matches the kanban. Deduped by
   * `header.id` — entries from `extraDocuments` win on conflict (fresher).
   */
  extraDocuments?: ReadonlyArray<PHDocument>;
}) {
  const driveDocs = useDocumentsInSelectedDrive() ?? [];
  const documents = useMemo(() => {
    if (!extraDocuments?.length) return driveDocs;
    const byId = new Map<string, PHDocument>();
    for (const d of driveDocs) byId.set(d.header.id, d);
    for (const d of extraDocuments) byId.set(d.header.id, d);
    return Array.from(byId.values());
  }, [driveDocs, extraDocuments]);
  const selected = useSelectedNode();
  const selectedId = selected?.id;

  const groups: DocGroup[] = useMemo(() => {
    if (mode === "funder") {
      return [
        {
          key: "systems",
          label: "Grant systems",
          docType: "rfp-hub/grant-system",
          creatable: true,
          createLabel: "+ New grant system",
          itemFor: (doc) => {
            const d = doc as GrantSystemDocument;
            return {
              title:
                d.state.global.name ??
                doc.header.name ??
                "Unnamed organization",
              dotClass: pickSystemDotClass(d.state.global.verificationState),
            };
          },
        },
        {
          key: "pools",
          label: "Grant pools",
          docType: "rfp-hub/grant-pool",
          creatable: true,
          createLabel: "+ New grant pool",
          itemFor: (doc) => {
            const d = doc as GrantPoolDocument;
            return {
              title:
                d.state.global.name ?? doc.header.name ?? "Untitled pool",
              dotClass: pickPoolDotClass(d.state.global),
            };
          },
        },
        {
          key: "applications",
          label: "Applications",
          docType: "rfp-hub/grant-application",
          creatable: false,
          createLabel: "",
          // Funder view: hide applicant drafts, only show SUBMITTED onwards.
          filter: (doc) =>
            (doc as GrantApplicationDocument).state.global.reviewStage !==
            "DRAFT",
          itemFor: (doc) => {
            const d = doc as GrantApplicationDocument;
            return {
              title:
                d.state.global.projectName ??
                doc.header.name ??
                "Unnamed application",
              dotClass: pickAppDotClass(d.state.global.reviewStage),
            };
          },
        },
        {
          key: "governance",
          label: "Governance",
          docType: "rfp-hub/governance",
          creatable: true,
          createLabel: "+ New governance",
          itemFor: (doc) => ({
            title: doc.header.name ?? "Governance",
            dotClass: "rfp-dot-draft",
          }),
        },
      ];
    }
    return [
      {
        key: "projects",
        label: "Projects",
        docType: "rfp-hub/project",
        creatable: true,
        createLabel: "+ New project",
        itemFor: (doc) => {
          const d = doc as ProjectDocument;
          // Prefer the in-document project name (set via SET_PROJECT_NAME)
          // over the drive file-node name, which is typically a generic
          // "<Applicant> Project" string from the apply-to resolver.
          const stateName = d.state.global.name?.trim();
          const headerName = doc.header.name?.trim();
          return {
            title: stateName || headerName || "Unnamed project",
            dotClass: "rfp-dot-approved",
          };
        },
      },
      {
        key: "applications",
        label: "Applications",
        docType: "rfp-hub/grant-application",
        creatable: false,
        createLabel: "",
        itemFor: (doc) => {
          const d = doc as GrantApplicationDocument;
          return {
            title:
              d.state.global.projectName ??
              doc.header.name ??
              "Unnamed application",
            dotClass: pickAppDotClass(d.state.global.reviewStage),
          };
        },
      },
    ];
  }, [mode]);

  const grouped = useMemo(() => {
    const result: Record<string, PHDocument[]> = {};
    for (const group of groups) {
      result[group.key] = documents.filter(
        (d) =>
          d.header.documentType === group.docType &&
          (group.filter ? group.filter(d) : true),
      );
    }
    return result;
  }, [documents, groups]);

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  const totalDocs = documents.length;

  return (
    <aside className="rfp-browser">
      <button
        type="button"
        className="rfp-browser-header rfp-browser-home-button"
        onClick={() => setSelectedNode(undefined)}
        aria-label={
          selected
            ? "Back to dashboard"
            : "Dashboard home"
        }
        title={
          selected
            ? "Back to dashboard"
            : "You are on the dashboard"
        }
      >
        <div className="rfp-browser-home-button-inner">
          <h3 className="rfp-browser-title">
            {mode === "funder" ? "Back office" : "My workspace"}
          </h3>
          <span className="rfp-hint">
            {totalDocs} document{totalDocs === 1 ? "" : "s"}
          </span>
        </div>
        {selected ? (
          <span className="rfp-browser-back-hint">← Back</span>
        ) : null}
      </button>

      {groups.map((group) => {
        const docs = grouped[group.key];
        const isCollapsed = collapsed[group.key] === true;
        const creating = creatingType === group.docType;
        return (
          <div className="rfp-browser-group" key={group.key}>
            <button
              type="button"
              className="rfp-browser-group-header"
              onClick={() => toggle(group.key)}
              aria-expanded={!isCollapsed}
            >
              <span className="rfp-browser-group-label">
                {isCollapsed ? "▸" : "▾"} {group.label}
              </span>
              <span className="rfp-browser-group-count">{docs.length}</span>
            </button>

            {!isCollapsed && (
              <>
                {docs.length === 0 ? (
                  <div className="rfp-browser-empty">No documents yet.</div>
                ) : (
                  docs.map((doc) => {
                    const meta = group.itemFor(doc);
                    const active = selectedId === doc.header.id;
                    return (
                      <button
                        key={doc.header.id}
                        type="button"
                        className={`rfp-browser-item${active ? " rfp-browser-item-active" : ""}`}
                        onClick={() => setSelectedNode(doc.header.id)}
                        title={meta.title}
                      >
                        <span
                          className={`rfp-browser-dot ${meta.dotClass}`}
                        />
                        <span className="rfp-browser-item-name">
                          {meta.title}
                        </span>
                      </button>
                    );
                  })
                )}
                {group.creatable && canCreate ? (
                  <button
                    type="button"
                    className="rfp-browser-create"
                    disabled={creating}
                    onClick={() =>
                      onCreate(
                        group.docType,
                        `${group.label.replace(/s$/, "")} ${docs.length + 1}`,
                      )
                    }
                  >
                    {creating ? "Creating…" : group.createLabel}
                  </button>
                ) : null}
              </>
            )}
          </div>
        );
      })}
    </aside>
  );
}

// Re-export helper so dashboards can reuse the dot classifier for other widgets.
export const dotClassForPool = pickPoolDotClass;
export const dotClassForApp = pickAppDotClass;
export const dotClassForSystem = pickSystemDotClass;
