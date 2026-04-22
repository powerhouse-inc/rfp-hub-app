import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback, useState } from "react";
import {
  useSelectedGovernanceDocument,
  actions,
} from "document-models/governance";
import type { GovernanceState } from "document-models/governance";
import "../design-tokens.css";

const DISPUTE_STATUS_CLASS: Record<string, string> = {
  OPEN: "rfp-status-pending",
  INVESTIGATING: "rfp-status-review",
  RESOLVED: "rfp-status-approved",
  DISMISSED: "rfp-status-closed",
  APPEALED: "rfp-status-rejected",
};

const RFC_STATUS_CLASS: Record<string, string> = {
  PROPOSED: "rfp-status-pending",
  UNDER_REVIEW: "rfp-status-review",
  RATIFIED: "rfp-status-approved",
  IMPLEMENTED: "rfp-status-completed",
  REJECTED: "rfp-status-rejected",
  WITHDRAWN: "rfp-status-closed",
};

export default function Editor() {
  const [document, dispatch] = useSelectedGovernanceDocument();
  if (!document) return null;
  const state = document.state.global as GovernanceState;

  const fileDispute = useCallback(
    (filedBy: string, subjectRef: string, summary: string) =>
      dispatch(
        actions.fileDispute({
          id: generateId(),
          disputeKind: "POLICY_VIOLATION",
          subjectRef,
          filedBy,
          filedAt: new Date().toISOString(),
          summary,
        }),
      ),
    [dispatch],
  );
  const resolveDispute = useCallback(
    (id: string, resolution: string) =>
      dispatch(
        actions.resolveDispute({
          id,
          resolvedAt: new Date().toISOString(),
          resolution,
        }),
      ),
    [dispatch],
  );
  const proposeRfc = useCallback(
    (title: string, summary: string, author: string) =>
      dispatch(
        actions.proposeRfc({
          id: generateId(),
          title,
          summary,
          author,
          proposedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const ratifyRfc = useCallback(
    (id: string) =>
      dispatch(
        actions.ratifyRfc({
          id,
          ratifiedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const publishPolicy = useCallback(
    (name: string, summary: string, content: string) =>
      dispatch(
        actions.publishPolicy({
          id: generateId(),
          name,
          summary,
          content,
          effectiveFrom: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );

  const [disputeFiledBy, setDisputeFiledBy] = useState("");
  const [disputeSubject, setDisputeSubject] = useState("");
  const [disputeSummary, setDisputeSummary] = useState("");

  const [rfcTitle, setRfcTitle] = useState("");
  const [rfcSummary, setRfcSummary] = useState("");
  const [rfcAuthor, setRfcAuthor] = useState("");

  const [policyName, setPolicyName] = useState("");
  const [policySummary, setPolicySummary] = useState("");
  const [policyContent, setPolicyContent] = useState("");

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <header className="rfp-header">
            <span className="rfp-meta">Hub Governance</span>
            <h1 className="rfp-h1">RFP Hub governance</h1>
            <p className="rfp-hint">
              {state.disputes.length} dispute
              {state.disputes.length === 1 ? "" : "s"} · {state.rfcs.length} RFC
              {state.rfcs.length === 1 ? "" : "s"} · {state.policies.length}{" "}
              polic{state.policies.length === 1 ? "y" : "ies"}
            </p>
          </header>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Disputes</h2>
            <hr className="rfp-divider" />
            <div className="rfp-row">
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={disputeFiledBy}
                onChange={(e) => setDisputeFiledBy(e.target.value)}
                placeholder="Filed by (DID)"
              />
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={disputeSubject}
                onChange={(e) => setDisputeSubject(e.target.value)}
                placeholder="Subject ref (PHID)"
              />
            </div>
            <textarea
              className="rfp-textarea"
              value={disputeSummary}
              onChange={(e) => setDisputeSummary(e.target.value)}
              placeholder="What's the dispute about?"
            />
            <button
              className="rfp-btn-primary"
              disabled={
                !disputeFiledBy.trim() ||
                !disputeSubject.trim() ||
                !disputeSummary.trim()
              }
              onClick={() => {
                fileDispute(
                  disputeFiledBy.trim(),
                  disputeSubject.trim(),
                  disputeSummary.trim(),
                );
                setDisputeFiledBy("");
                setDisputeSubject("");
                setDisputeSummary("");
              }}
              style={{ alignSelf: "flex-start" }}
            >
              File dispute
            </button>

            {state.disputes.length === 0 ? (
              <div className="rfp-empty">No disputes filed.</div>
            ) : (
              <ul className="rfp-list">
                {state.disputes.map((d) => (
                  <li key={d.id} className="rfp-list-item">
                    <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
                      <div className="rfp-row" style={{ gap: 8 }}>
                        <span
                          className={`rfp-status-badge ${
                            DISPUTE_STATUS_CLASS[d.status] ??
                            "rfp-status-draft"
                          }`}
                        >
                          {d.status.toLowerCase()}
                        </span>
                        <span className="rfp-chip">
                          {d.disputeKind.toLowerCase().replace(/_/g, " ")}
                        </span>
                      </div>
                      <div className="rfp-body">{d.summary}</div>
                      <div className="rfp-hint">
                        Filed {new Date(d.filedAt).toLocaleString()} by{" "}
                        {d.filedBy}
                      </div>
                    </div>
                    {d.status === "OPEN" || d.status === "INVESTIGATING" ? (
                      <button
                        className="rfp-btn-secondary"
                        onClick={() =>
                          resolveDispute(d.id, "Resolved via standard review.")
                        }
                      >
                        Resolve
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">RFCs</h2>
            <hr className="rfp-divider" />
            <div className="rfp-row">
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={rfcTitle}
                onChange={(e) => setRfcTitle(e.target.value)}
                placeholder="RFC title"
              />
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={rfcAuthor}
                onChange={(e) => setRfcAuthor(e.target.value)}
                placeholder="Author DID"
              />
            </div>
            <textarea
              className="rfp-textarea"
              value={rfcSummary}
              onChange={(e) => setRfcSummary(e.target.value)}
              placeholder="Short summary"
            />
            <button
              className="rfp-btn-primary"
              disabled={
                !rfcTitle.trim() || !rfcSummary.trim() || !rfcAuthor.trim()
              }
              onClick={() => {
                proposeRfc(
                  rfcTitle.trim(),
                  rfcSummary.trim(),
                  rfcAuthor.trim(),
                );
                setRfcTitle("");
                setRfcSummary("");
                setRfcAuthor("");
              }}
              style={{ alignSelf: "flex-start" }}
            >
              Propose RFC
            </button>

            {state.rfcs.length === 0 ? (
              <div className="rfp-empty">No RFCs yet.</div>
            ) : (
              <ul className="rfp-list">
                {state.rfcs.map((r) => (
                  <li key={r.id} className="rfp-list-item">
                    <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
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
                      <div className="rfp-hint">by {r.author}</div>
                    </div>
                    {r.status === "PROPOSED" || r.status === "UNDER_REVIEW" ? (
                      <button
                        className="rfp-btn-secondary"
                        onClick={() => ratifyRfc(r.id)}
                      >
                        Ratify
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Policies</h2>
            <hr className="rfp-divider" />
            <input
              className="rfp-input"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
              placeholder="Policy name (e.g. Inclusion Policy v1)"
            />
            <input
              className="rfp-input"
              value={policySummary}
              onChange={(e) => setPolicySummary(e.target.value)}
              placeholder="Policy summary"
            />
            <textarea
              className="rfp-textarea"
              value={policyContent}
              onChange={(e) => setPolicyContent(e.target.value)}
              placeholder="Full policy text (markdown supported)"
            />
            <button
              className="rfp-btn-primary"
              disabled={
                !policyName.trim() ||
                !policySummary.trim() ||
                !policyContent.trim()
              }
              onClick={() => {
                publishPolicy(
                  policyName.trim(),
                  policySummary.trim(),
                  policyContent.trim(),
                );
                setPolicyName("");
                setPolicySummary("");
                setPolicyContent("");
              }}
              style={{ alignSelf: "flex-start" }}
            >
              Publish policy
            </button>

            {state.policies.length === 0 ? (
              <div className="rfp-empty">No policies published.</div>
            ) : (
              <ul className="rfp-list">
                {state.policies.map((p) => (
                  <li key={p.id} className="rfp-list-item">
                    <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
                      <strong>{p.name}</strong>
                      <div className="rfp-body">{p.summary}</div>
                      <div className="rfp-hint">
                        Effective{" "}
                        {new Date(p.effectiveFrom).toLocaleDateString()}
                        {p.supersededAt ? " · superseded" : ""}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
