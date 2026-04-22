import { setSelectedNode } from "@powerhousedao/reactor-browser";
import type { GrantPoolDocument } from "../../../../document-models/grant-pool/v1/gen/types.js";
import type { GrantApplicationDocument } from "../../../../document-models/grant-application/v1/gen/types.js";
import { POOL_LIFECYCLE_CLASS, daysUntil } from "./constants.js";

function formatUsd(value: number | undefined | null): string {
  if (value == null || value === 0) return "USD not set";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}k`;
  return `$${value.toFixed(0)}`;
}

function PoolCard({
  pool,
  appCount,
}: {
  pool: GrantPoolDocument;
  appCount: number;
}) {
  const state = pool.state.global;
  const lifecycle = state.lifecycle;
  const statusClass = POOL_LIFECYCLE_CLASS[lifecycle] ?? "rfp-status-draft";
  const closesInDays = daysUntil(state.closeDate);
  const usd = state.totalGrantPoolSizeInUSD?.value;

  return (
    <div
      className="rfp-doc-card"
      onClick={() => setSelectedNode(pool.header.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          setSelectedNode(pool.header.id);
      }}
      style={{ padding: "16px 18px" }}
    >
      <div
        className="rfp-row"
        style={{ justifyContent: "space-between", gap: 8 }}
      >
        <span className="rfp-doc-card-title">
          {state.name ?? pool.header.name ?? "Untitled pool"}
        </span>
        <span className={`rfp-status-badge ${statusClass}`}>
          {lifecycle.replace(/_/g, " ").toLowerCase()}
        </span>
      </div>
      {state.code ? (
        <span className="rfp-chip" style={{ alignSelf: "flex-start" }}>
          {state.code}
        </span>
      ) : null}
      {state.description ? (
        <span
          className="rfp-doc-card-meta"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {state.description}
        </span>
      ) : null}
      <div
        className="rfp-row"
        style={{ justifyContent: "space-between", gap: 6 }}
      >
        <span className="rfp-doc-card-meta">{formatUsd(usd)}</span>
        <span className="rfp-doc-card-meta">
          {appCount} application{appCount === 1 ? "" : "s"}
        </span>
      </div>
      {lifecycle === "OPEN" && closesInDays !== null ? (
        <span className="rfp-doc-card-meta">
          {closesInDays > 0
            ? `${closesInDays}d until close`
            : closesInDays === 0
              ? "Closes today"
              : "Past close date"}
        </span>
      ) : null}
    </div>
  );
}

export function PoolsGrid({
  pools,
  applications,
  onCreate,
  creating,
  canCreate,
}: {
  pools: GrantPoolDocument[];
  applications: GrantApplicationDocument[];
  onCreate: () => void;
  creating: boolean;
  canCreate: boolean;
}) {
  const appsByPool = new Map<string, number>();
  for (const app of applications) {
    const id = app.state.global.grantPoolId;
    if (id) appsByPool.set(id, (appsByPool.get(id) ?? 0) + 1);
  }

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">
          Grant pools · {pools.length}
        </h2>
        <button
          type="button"
          className="rfp-btn-primary"
          disabled={creating || !canCreate}
          onClick={onCreate}
        >
          {creating ? "Creating…" : "+ Create pool"}
        </button>
      </div>
      <hr className="rfp-divider" />
      {pools.length === 0 ? (
        <div className="rfp-empty">
          No grant pools yet. Create one to open a funding call — RFP,
          bounty, QF round, or retro.
        </div>
      ) : (
        <div className="rfp-grid-2">
          {pools.map((pool) => (
            <PoolCard
              key={pool.header.id}
              pool={pool}
              appCount={appsByPool.get(pool.header.id) ?? 0}
            />
          ))}
          <button
            type="button"
            className="rfp-doc-card"
            disabled={creating || !canCreate}
            onClick={onCreate}
            style={{
              border: "1.5px dashed var(--rfp-outline-variant)",
              background: "transparent",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 140,
              cursor: canCreate && !creating ? "pointer" : "not-allowed",
              color: "var(--rfp-primary)",
              fontWeight: 600,
            }}
          >
            {creating ? "Creating…" : "+ New pool"}
          </button>
        </div>
      )}
    </section>
  );
}
