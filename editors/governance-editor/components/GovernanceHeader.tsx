import type { GovernanceState } from "document-models/governance";

export function GovernanceHeader({ state }: { state: GovernanceState }) {
  const openDisputes = (state.disputes ?? []).filter(
    (d) => d.status === "OPEN" || d.status === "INVESTIGATING",
  ).length;
  const activeRfcs = (state.rfcs ?? []).filter((r) =>
    ["PROPOSED", "UNDER_REVIEW"].includes(r.status),
  ).length;
  const hasPendingWork = openDisputes > 0 || activeRfcs > 0;

  return (
    <header className="rfp-header">
      <div className="rfp-header-row">
        <div className="rfp-col" style={{ gap: 4 }}>
          <span className="rfp-meta">Hub Governance</span>
          <h1 className="rfp-h1">RFP Hub governance</h1>
          <p className="rfp-hint">
            {state.disputes.length} dispute
            {state.disputes.length === 1 ? "" : "s"} · {state.rfcs.length} RFC
            {state.rfcs.length === 1 ? "" : "s"} · {state.policies.length}{" "}
            polic{state.policies.length === 1 ? "y" : "ies"}
          </p>
        </div>
        <span
          className={`rfp-status-badge ${
            openDisputes > 0
              ? "rfp-status-rejected"
              : hasPendingWork
                ? "rfp-status-pending"
                : "rfp-status-approved"
          }`}
        >
          {openDisputes > 0
            ? `${openDisputes} open dispute${openDisputes === 1 ? "" : "s"}`
            : hasPendingWork
              ? "Pending work"
              : "All clear"}
        </span>
      </div>
    </header>
  );
}
