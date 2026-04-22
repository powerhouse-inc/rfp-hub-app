import { useState } from "react";
import type { GovernanceState } from "document-models/governance";
import { RFC_STATUS_CLASS } from "./constants.js";

type On = {
  proposeRfc: (title: string, summary: string, author: string) => void;
  startRfcReview: (id: string) => void;
  ratifyRfc: (id: string) => void;
  implementRfc: (id: string) => void;
  rejectRfc: (id: string) => void;
  withdrawRfc: (id: string) => void;
};

export function RfcsSection({
  state,
  on,
}: {
  state: GovernanceState;
  on: On;
}) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");

  const canPropose = !!title.trim() && !!summary.trim() && !!author.trim();

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">RFCs</h2>
      <hr className="rfp-divider" />
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="RFC title"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author DID"
        />
      </div>
      <textarea
        className="rfp-textarea"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Short summary"
      />
      <button
        type="button"
        className="rfp-btn-primary"
        disabled={!canPropose}
        onClick={() => {
          if (canPropose) {
            on.proposeRfc(title.trim(), summary.trim(), author.trim());
            setTitle("");
            setSummary("");
            setAuthor("");
          }
        }}
        style={{ alignSelf: "flex-start" }}
      >
        Propose RFC
      </button>

      {state.rfcs.length === 0 ? (
        <div className="rfp-empty">No RFCs yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.rfcs.map((r) => {
            const canStart = r.status === "PROPOSED";
            const canRatify = r.status === "UNDER_REVIEW" || r.status === "PROPOSED";
            const canImplement = r.status === "RATIFIED";
            const canReject =
              r.status === "PROPOSED" || r.status === "UNDER_REVIEW";
            const canWithdraw =
              r.status === "PROPOSED" || r.status === "UNDER_REVIEW";
            return (
              <li
                key={r.id}
                className="rfp-list-item"
                style={{ flexDirection: "column", alignItems: "stretch" }}
              >
                <div className="rfp-col" style={{ gap: 4 }}>
                  <div className="rfp-row" style={{ gap: 8 }}>
                    <strong>{r.title}</strong>
                    <span
                      className={`rfp-status-badge ${
                        RFC_STATUS_CLASS[r.status] ?? "rfp-status-draft"
                      }`}
                    >
                      {r.status.toLowerCase().replace(/_/g, " ")}
                    </span>
                  </div>
                  <div className="rfp-body">{r.summary}</div>
                  <div className="rfp-hint">
                    by {r.author} · proposed{" "}
                    {new Date(r.proposedAt).toLocaleDateString()}
                    {r.ratifiedAt
                      ? ` · ratified ${new Date(r.ratifiedAt).toLocaleDateString()}`
                      : ""}
                    {r.implementedAt
                      ? ` · implemented ${new Date(r.implementedAt).toLocaleDateString()}`
                      : ""}
                  </div>
                </div>
                <div className="rfp-row" style={{ gap: 8, flexWrap: "wrap" }}>
                  {canStart ? (
                    <button
                      className="rfp-btn-secondary"
                      onClick={() => on.startRfcReview(r.id)}
                    >
                      Start review
                    </button>
                  ) : null}
                  {canRatify ? (
                    <button
                      className="rfp-btn-primary"
                      onClick={() => on.ratifyRfc(r.id)}
                    >
                      Ratify
                    </button>
                  ) : null}
                  {canImplement ? (
                    <button
                      className="rfp-btn-primary"
                      onClick={() => on.implementRfc(r.id)}
                    >
                      Mark implemented
                    </button>
                  ) : null}
                  {canReject ? (
                    <button
                      className="rfp-btn-secondary"
                      onClick={() => on.rejectRfc(r.id)}
                      style={{ color: "var(--rfp-error)" }}
                    >
                      Reject
                    </button>
                  ) : null}
                  {canWithdraw ? (
                    <button
                      className="rfp-btn-ghost"
                      onClick={() => on.withdrawRfc(r.id)}
                    >
                      Withdraw
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
