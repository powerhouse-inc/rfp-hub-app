import { useState } from "react";
import type { GovernanceState } from "document-models/governance";

type PublisherDecisionKind =
  | "APPROVED"
  | "REVOKED"
  | "SUSPENDED"
  | "REINSTATED";

type On = {
  recordPublisherDecision: (
    grantSystemRef: string,
    decision: PublisherDecisionKind,
    decidedBy: string,
    reason: string,
  ) => void;
};

const DECISION_CLASS: Record<PublisherDecisionKind, string> = {
  APPROVED: "rfp-status-approved",
  REVOKED: "rfp-status-rejected",
  SUSPENDED: "rfp-status-closed",
  REINSTATED: "rfp-status-approved",
};

export function PublisherDecisionsSection({
  state,
  on,
}: {
  state: GovernanceState;
  on: On;
}) {
  const [grantSystemRef, setGrantSystemRef] = useState("");
  const [decision, setDecision] =
    useState<PublisherDecisionKind>("APPROVED");
  const [decidedBy, setDecidedBy] = useState("");
  const [reason, setReason] = useState("");

  const canRecord = !!grantSystemRef.trim() && !!decidedBy.trim();

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">
        Publisher decisions · {state.publisherDecisions.length}
      </h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Audit trail of approve / revoke / suspend decisions on verified
        publishers. Each decision is an immutable record.
      </p>

      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={grantSystemRef}
          onChange={(e) => setGrantSystemRef(e.target.value)}
          placeholder="Grant system PHID"
        />
        <select
          className="rfp-select"
          style={{ maxWidth: 160 }}
          value={decision}
          onChange={(e) =>
            setDecision(e.target.value as PublisherDecisionKind)
          }
        >
          <option value="APPROVED">Approve</option>
          <option value="REVOKED">Revoke</option>
          <option value="SUSPENDED">Suspend</option>
          <option value="REINSTATED">Reinstate</option>
        </select>
      </div>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={decidedBy}
          onChange={(e) => setDecidedBy(e.target.value)}
          placeholder="Decided by (DID)"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason (optional)"
        />
      </div>
      <button
        className="rfp-btn-primary"
        disabled={!canRecord}
        onClick={() => {
          on.recordPublisherDecision(
            grantSystemRef.trim(),
            decision,
            decidedBy.trim(),
            reason.trim(),
          );
          setGrantSystemRef("");
          setDecidedBy("");
          setReason("");
        }}
        style={{ alignSelf: "flex-start" }}
      >
        Record decision
      </button>

      {state.publisherDecisions.length === 0 ? (
        <div className="rfp-empty">No publisher decisions yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.publisherDecisions.map((d) => (
            <li key={d.id} className="rfp-list-item">
              <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
                <div className="rfp-row" style={{ gap: 8 }}>
                  <span
                    className={`rfp-status-badge ${
                      DECISION_CLASS[d.decision as PublisherDecisionKind] ??
                      "rfp-status-draft"
                    }`}
                  >
                    {d.decision.toLowerCase()}
                  </span>
                  <span className="rfp-hint">{d.grantSystemRef}</span>
                </div>
                {d.reason ? (
                  <div className="rfp-body">{d.reason}</div>
                ) : null}
                <div className="rfp-hint">
                  by {d.decidedBy} ·{" "}
                  {new Date(d.decidedAt).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
