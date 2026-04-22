import { useState } from "react";
import type { GovernanceState } from "document-models/governance";
import { DISPUTE_STATUS_CLASS } from "./constants.js";

type DisputeKind =
  | "DUPLICATE_CLAIM"
  | "INACCURATE_ENTRY"
  | "PUBLISHER_CONDUCT"
  | "REVIEW_DECISION"
  | "POLICY_VIOLATION"
  | "OTHER";

type On = {
  fileDispute: (
    filedBy: string,
    subjectRef: string,
    summary: string,
    kind: DisputeKind,
  ) => void;
  assignInvestigator: (id: string, assignedTo: string) => void;
  resolveDispute: (id: string, resolution: string) => void;
  dismissDispute: (id: string, reason: string) => void;
  appealDispute: (id: string, reason: string) => void;
};

const DISPUTE_KINDS: DisputeKind[] = [
  "DUPLICATE_CLAIM",
  "INACCURATE_ENTRY",
  "PUBLISHER_CONDUCT",
  "REVIEW_DECISION",
  "POLICY_VIOLATION",
  "OTHER",
];

export function DisputesSection({
  state,
  on,
}: {
  state: GovernanceState;
  on: On;
}) {
  const [filedBy, setFiledBy] = useState("");
  const [subjectRef, setSubjectRef] = useState("");
  const [summary, setSummary] = useState("");
  const [kind, setKind] = useState<DisputeKind>("POLICY_VIOLATION");
  const [actionDraft, setActionDraft] = useState<Record<string, string>>({});

  const canFile =
    !!filedBy.trim() && !!subjectRef.trim() && !!summary.trim();

  const updateDraft = (id: string, v: string) =>
    setActionDraft((prev) => ({ ...prev, [id]: v }));

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Disputes</h2>
      <hr className="rfp-divider" />

      {/* File */}
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={filedBy}
          onChange={(e) => setFiledBy(e.target.value)}
          placeholder="Filed by (DID)"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={subjectRef}
          onChange={(e) => setSubjectRef(e.target.value)}
          placeholder="Subject ref (PHID)"
        />
        <select
          className="rfp-select"
          style={{ maxWidth: 200 }}
          value={kind}
          onChange={(e) => setKind(e.target.value as DisputeKind)}
        >
          {DISPUTE_KINDS.map((k) => (
            <option key={k} value={k}>
              {k.toLowerCase().replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="rfp-textarea"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="What's the dispute about?"
      />
      <button
        type="button"
        className="rfp-btn-primary"
        disabled={!canFile}
        onClick={() => {
          if (canFile) {
            on.fileDispute(
              filedBy.trim(),
              subjectRef.trim(),
              summary.trim(),
              kind,
            );
            setFiledBy("");
            setSubjectRef("");
            setSummary("");
          }
        }}
        style={{ alignSelf: "flex-start" }}
      >
        File dispute
      </button>

      {state.disputes.length === 0 ? (
        <div className="rfp-empty">No disputes filed.</div>
      ) : (
        <ul className="rfp-list">
          {state.disputes.map((d) => {
            const canAssign = d.status === "OPEN";
            const canResolve =
              d.status === "OPEN" || d.status === "INVESTIGATING";
            const canAppeal =
              d.status === "RESOLVED" || d.status === "DISMISSED";
            const draft = actionDraft[d.id] ?? "";
            return (
              <li key={d.id} className="rfp-list-item" style={{ flexDirection: "column", alignItems: "stretch" }}>
                <div className="rfp-col" style={{ gap: 4 }}>
                  <div className="rfp-row" style={{ gap: 8 }}>
                    <span
                      className={`rfp-status-badge ${
                        DISPUTE_STATUS_CLASS[d.status] ?? "rfp-status-draft"
                      }`}
                    >
                      {d.status.toLowerCase()}
                    </span>
                    <span className="rfp-chip">
                      {d.disputeKind.toLowerCase().replace(/_/g, " ")}
                    </span>
                    {d.assignedTo ? (
                      <span className="rfp-chip">→ {d.assignedTo}</span>
                    ) : null}
                  </div>
                  <div className="rfp-body">{d.summary}</div>
                  <div className="rfp-hint">
                    Subject: {d.subjectRef} · Filed{" "}
                    {new Date(d.filedAt).toLocaleString()} by {d.filedBy}
                  </div>
                  {d.resolution ? (
                    <div className="rfp-hint">
                      <strong>Resolution:</strong> {d.resolution}
                      {d.resolvedAt
                        ? ` (${new Date(d.resolvedAt).toLocaleString()})`
                        : ""}
                    </div>
                  ) : null}
                  {d.appealReason ? (
                    <div className="rfp-hint">
                      <strong>Appeal:</strong> {d.appealReason}
                      {d.appealAt
                        ? ` (${new Date(d.appealAt).toLocaleString()})`
                        : ""}
                    </div>
                  ) : null}
                </div>

                {(canAssign || canResolve || canAppeal) && (
                  <>
                    <input
                      className="rfp-input"
                      value={draft}
                      onChange={(e) => updateDraft(d.id, e.target.value)}
                      placeholder={
                        canAssign
                          ? "Investigator DID / reason / appeal text"
                          : "Reason / resolution / appeal text"
                      }
                    />
                    <div className="rfp-row" style={{ gap: 8, flexWrap: "wrap" }}>
                      {canAssign ? (
                        <button
                          className="rfp-btn-secondary"
                          disabled={!draft.trim()}
                          onClick={() => {
                            on.assignInvestigator(d.id, draft.trim());
                            updateDraft(d.id, "");
                          }}
                        >
                          Assign investigator
                        </button>
                      ) : null}
                      {canResolve ? (
                        <>
                          <button
                            className="rfp-btn-primary"
                            disabled={!draft.trim()}
                            onClick={() => {
                              on.resolveDispute(d.id, draft.trim());
                              updateDraft(d.id, "");
                            }}
                          >
                            Resolve
                          </button>
                          <button
                            className="rfp-btn-secondary"
                            disabled={!draft.trim()}
                            onClick={() => {
                              on.dismissDispute(d.id, draft.trim());
                              updateDraft(d.id, "");
                            }}
                            style={{ color: "var(--rfp-on-surface-variant)" }}
                          >
                            Dismiss
                          </button>
                        </>
                      ) : null}
                      {canAppeal ? (
                        <button
                          className="rfp-btn-secondary"
                          disabled={!draft.trim()}
                          onClick={() => {
                            on.appealDispute(d.id, draft.trim());
                            updateDraft(d.id, "");
                          }}
                          style={{ color: "var(--rfp-error)" }}
                        >
                          Appeal
                        </button>
                      ) : null}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
