import { useEffect, useMemo, useRef, useState } from "react";
import {
  getSwitchboardGatewayUrlFromDriveUrl,
  useSelectedDriveId,
  useSyncList,
  driveCollectionId,
} from "@powerhousedao/reactor-browser";
import type { GrantApplicationDocument } from "../../../document-models/grant-application/v1/gen/types.js";

/**
 * Polls the switchboard's auto-registered `GrantApplication` subgraph for
 * every application doc that exists in the reactor, then filters client-side
 * down to those whose `state.global.grantPoolId` matches one of the pools the
 * funder cares about.
 *
 * Needed because `useDocumentsInSelectedDrive` only returns docs in the
 * *currently open drive*, so applications produced by `applyToPool` — which
 * live in per-applicant drives — are invisible to the funder dashboard
 * without this cross-drive fetch.
 */

const REFRESH_INTERVAL_MS = 15_000;

/**
 * Remote shape — just the fields the dashboard actually reads.
 * `Amount_Fiat` is a custom scalar in the auto-registered subgraphs, so
 * `fundsApprovedInUSD` / `fundsAskedInUSD` come back as opaque JSON values
 * (typically `{ value, unit }` objects after the scalar parses). We keep the
 * type as `unknown` here and narrow inside `toApplicationDoc`.
 */
type RemoteAppItem = {
  id: string;
  name: string | null;
  createdAtUtcIso: string | null;
  lastModifiedAtUtcIso: string | null;
  state: {
    global: {
      grantPoolId: string | null;
      grantPoolName: string | null;
      projectId: string | null;
      projectName: string | null;
      reviewStage: GrantApplicationDocument["state"]["global"]["reviewStage"];
      createdAt: string | null;
      submittedAt: string | null;
      reviewedAt: string | null;
      reviewedBy: string | null;
      revisionCount: number;
      isInactive: boolean;
      fundsApprovedInUSD: unknown;
      fundsAskedInUSD: unknown;
    };
  };
};

function narrowAmount(
  raw: unknown,
): { value: number; unit: string } | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as { value?: unknown; unit?: unknown };
  if (typeof o.value !== "number") return null;
  if (typeof o.unit !== "string") return null;
  return { value: o.value, unit: o.unit };
}

type GqlResponse = {
  data?: {
    GrantApplication?: {
      findDocuments?: {
        totalCount: number;
        items: RemoteAppItem[];
      };
    };
  };
  errors?: Array<{ message?: string }>;
};

const QUERY = `{
  GrantApplication {
    findDocuments {
      totalCount
      items {
        id
        name
        createdAtUtcIso
        lastModifiedAtUtcIso
        state {
          global {
            grantPoolId
            grantPoolName
            projectId
            projectName
            reviewStage
            createdAt
            submittedAt
            reviewedAt
            reviewedBy
            revisionCount
            isInactive
            fundsApprovedInUSD
            fundsAskedInUSD
          }
        }
      }
    }
  }
}`;

/**
 * Reconstructs a partial `GrantApplicationDocument` from a `RemoteAppItem` so
 * the rest of the dashboard (which is strongly typed against the full doc
 * shape) can consume remote results side-by-side with local-drive ones.
 * Only the fields the dashboard reads are filled in — operations, signatures,
 * and header/meta extras are stubbed.
 */
function toApplicationDoc(item: RemoteAppItem): GrantApplicationDocument {
  const globalState = item.state.global;
  // The full `GrantApplicationState` has ~25 fields, most of which the
  // dashboard never reads. Rather than synthesize them all, we cast through
  // `unknown` and supply only the fields used by StatsRow, ReviewKanban,
  // ActivityFeed and DocumentBrowser. Any consumer that reads an unsupplied
  // field would get `undefined`, which is acceptable for a read-only summary.
  const stub = {
    header: {
      id: item.id,
      name: item.name ?? "",
      documentType: "rfp-hub/grant-application",
      createdAtUtcIso: item.createdAtUtcIso ?? "",
      lastModifiedAtUtcIso: item.lastModifiedAtUtcIso ?? "",
      revision: { global: 0, document: 0 },
      slug: item.id,
      branch: "main",
      sig: { nonce: "", publicKey: {} },
      protocolVersions: {},
      meta: {},
    },
    state: {
      auth: {},
      document: { hash: { encoding: "base64", algorithm: "sha1" }, version: 0 },
      global: {
        createdAt: globalState.createdAt,
        fundsApproved: [],
        fundsApprovedInUSD: narrowAmount(globalState.fundsApprovedInUSD),
        fundsAsked: [],
        fundsAskedInUSD: narrowAmount(globalState.fundsAskedInUSD),
        grantPoolId: globalState.grantPoolId,
        grantPoolName: globalState.grantPoolName,
        isInactive: globalState.isInactive,
        projectId: globalState.projectId,
        projectName: globalState.projectName,
        reviewStage: globalState.reviewStage,
        reviewedAt: globalState.reviewedAt,
        reviewedBy: globalState.reviewedBy,
        revisionCount: globalState.revisionCount,
        submittedAt: globalState.submittedAt,
      },
      local: {},
    },
    operations: { global: [], local: [] },
    clipboard: [],
    initialState: {},
  };
  return stub as unknown as GrantApplicationDocument;
}

/**
 * Resolve the switchboard `/graphql` endpoint for the currently-selected
 * drive. Priority:
 *   1. The drive's own remote `GqlRequestChannel` URL (truth if the drive is
 *      cloud-synced) stripped to `/graphql`.
 *   2. `window.location.origin + '/graphql'` when the drive is local
 *      (reasonable default in dev since `ph vetra` runs Connect on 3001 but
 *      the switchboard on the same host at 4001 — see fallback below).
 *   3. `http://localhost:4001/graphql` as the final local-dev fallback.
 */
function useSwitchboardGqlUrl(): string | null {
  const driveId = useSelectedDriveId();
  const syncList = useSyncList();
  return useMemo(() => {
    if (!driveId) return null;
    const remote = syncList.find(
      (r) => r.collectionId === driveCollectionId("main", driveId),
    );
    const channel = remote?.channel as { config?: { url?: string } } | undefined;
    const driveUrl = channel?.config?.url;
    if (driveUrl) return getSwitchboardGatewayUrlFromDriveUrl(driveUrl);
    if (typeof window !== "undefined") {
      // `ph vetra` runs Connect on :3001 and the switchboard on :4001.
      // Connect-in-browser can't infer this, so hardcode the dev fallback.
      return "http://localhost:4001/graphql";
    }
    return null;
  }, [driveId, syncList]);
}

export type UseRemoteApplicationsResult = {
  applications: GrantApplicationDocument[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
};

/**
 * Fetch every GrantApplication on the switchboard and filter to those
 * matching one of the provided `poolIds`. Re-fetches every 15 s and exposes
 * a manual `refresh` for "applied just now" UX flows.
 */
export function useRemoteApplicationsForPools(
  poolIds: ReadonlyArray<string>,
): UseRemoteApplicationsResult {
  const url = useSwitchboardGqlUrl();
  const [applications, setApplications] = useState<GrantApplicationDocument[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keep a ref to `poolIds` so the polling effect doesn't tear down every
  // time the caller produces a new array identity.
  const poolIdsRef = useRef(poolIds);
  poolIdsRef.current = poolIds;

  const [tick, setTick] = useState(0);
  const refresh = () => setTick((t) => t + 1);

  useEffect(() => {
    if (!url) return;
    let cancelled = false;

    async function fetchOnce() {
      setLoading(true);
      setError(null);
      try {
        if (!url) return;
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: QUERY }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as GqlResponse;
        if (json.errors?.length)
          throw new Error(json.errors[0].message ?? "GraphQL error");
        const items = json.data?.GrantApplication?.findDocuments?.items ?? [];
        const allowed = new Set(poolIdsRef.current);
        const matching = items
          .filter((i) =>
            i.state.global.grantPoolId
              ? allowed.has(i.state.global.grantPoolId)
              : false,
          )
          .map(toApplicationDoc);
        if (!cancelled) setApplications(matching);
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to fetch");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void fetchOnce();
    const id = setInterval(fetchOnce, REFRESH_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [url, tick]);

  return { applications, loading, error, refresh };
}
