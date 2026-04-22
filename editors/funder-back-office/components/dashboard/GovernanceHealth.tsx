import { setSelectedNode } from "@powerhousedao/reactor-browser";
import type { GovernanceDocument } from "../../../../document-models/governance/v1/gen/types.js";

export function GovernanceHealth({
  governance,
  onCreate,
  creating,
  canCreate,
}: {
  governance: GovernanceDocument[];
  onCreate: () => void;
  creating: boolean;
  canCreate: boolean;
}) {
  const hasAny = governance.length > 0;

  const openDisputes = governance.reduce(
    (sum, g) =>
      sum +
      (g.state.global.disputes ?? []).filter(
        (d) => d.status === "OPEN" || d.status === "INVESTIGATING",
      ).length,
    0,
  );
  const activeRfcs = governance.reduce(
    (sum, g) =>
      sum +
      (g.state.global.rfcs ?? []).filter((r) =>
        ["PROPOSED", "UNDER_REVIEW"].includes(r.status),
      ).length,
    0,
  );
  const publishedPolicies = governance.reduce(
    (sum, g) =>
      sum +
      (g.state.global.policies ?? []).filter((p) => !p.supersededAt).length,
    0,
  );

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">Governance health</h2>
        {!hasAny && canCreate ? (
          <button
            type="button"
            className="rfp-btn-secondary"
            disabled={creating}
            onClick={onCreate}
          >
            {creating ? "Creating…" : "+ Create governance doc"}
          </button>
        ) : null}
      </div>
      <hr className="rfp-divider" />
      {!hasAny ? (
        <div className="rfp-empty">
          No governance document yet. Create one to track disputes, RFCs,
          and policies in one place.
        </div>
      ) : (
        <>
          <div className="rfp-grid-3">
            <button
              type="button"
              className={`rfp-stat-tile${openDisputes > 0 ? " rfp-stat-tile-danger" : ""}`}
              onClick={() => setSelectedNode(governance[0].header.id)}
              style={{
                cursor: "pointer",
                textAlign: "left",
                border: 0,
                font: "inherit",
              }}
            >
              <span className="rfp-stat-tile-label">Open disputes</span>
              <span className="rfp-stat-tile-value">{openDisputes}</span>
              <span className="rfp-hint">Open · investigating</span>
            </button>
            <button
              type="button"
              className="rfp-stat-tile"
              onClick={() => setSelectedNode(governance[0].header.id)}
              style={{
                cursor: "pointer",
                textAlign: "left",
                border: 0,
                font: "inherit",
              }}
            >
              <span className="rfp-stat-tile-label">Active RFCs</span>
              <span className="rfp-stat-tile-value">{activeRfcs}</span>
              <span className="rfp-hint">Proposed · under review</span>
            </button>
            <button
              type="button"
              className="rfp-stat-tile"
              onClick={() => setSelectedNode(governance[0].header.id)}
              style={{
                cursor: "pointer",
                textAlign: "left",
                border: 0,
                font: "inherit",
              }}
            >
              <span className="rfp-stat-tile-label">Policies</span>
              <span className="rfp-stat-tile-value">{publishedPolicies}</span>
              <span className="rfp-hint">Currently in effect</span>
            </button>
          </div>
        </>
      )}
    </section>
  );
}
