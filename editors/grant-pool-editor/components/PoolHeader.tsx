import type { GrantPoolState } from "document-models/grant-pool";

const LIFECYCLE_CLASS: Record<string, string> = {
  DRAFT: "rfp-status-draft",
  REQUEST_FOR_COMMENTS: "rfp-status-pending",
  UPCOMING: "rfp-status-review",
  OPEN: "rfp-status-approved",
  CLOSED: "rfp-status-closed",
  AWARDED: "rfp-status-funded",
  NOT_AWARDED: "rfp-status-rejected",
  CANCELLED: "rfp-status-rejected",
};

export function PoolHeader({ state }: { state: GrantPoolState }) {
  const lifecycle = state.lifecycle;
  const mechLabel = state.grantFundingMechanism
    ? state.grantFundingMechanism.toLowerCase().replace(/_/g, " ")
    : "mechanism not set";
  return (
    <header className="rfp-header">
      <div className="rfp-header-row">
        <div className="rfp-col">
          <span className="rfp-meta">Grant Pool · DAOIP-5</span>
          <h1 className="rfp-h1">{state.name || "Unnamed pool"}</h1>
          <div className="rfp-row" style={{ gap: 8, marginTop: 4 }}>
            <span className="rfp-chip">{mechLabel}</span>
            {state.code ? <span className="rfp-chip">{state.code}</span> : null}
          </div>
        </div>
        <span
          className={`rfp-status-badge ${
            LIFECYCLE_CLASS[lifecycle] ?? "rfp-status-draft"
          }`}
        >
          {lifecycle.toLowerCase().replace(/_/g, " ")}
        </span>
      </div>
      {state.description ? (
        <p className="rfp-body" style={{ maxWidth: 680 }}>
          {state.description}
        </p>
      ) : null}
    </header>
  );
}
