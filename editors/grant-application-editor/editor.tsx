import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { useCallback, useState } from "react";
import {
  useSelectedGrantApplicationDocument,
  actions,
} from "document-models/grant-application";
import type { GrantApplicationState } from "document-models/grant-application";
import "../design-tokens.css";

const STAGE_CLASS: Record<string, string> = {
  DRAFT: "rfp-status-draft",
  SUBMITTED: "rfp-status-pending",
  OPENED: "rfp-status-pending",
  UNDER_REVIEW: "rfp-status-review",
  NEEDS_REVISION: "rfp-status-pending",
  REVISED: "rfp-status-review",
  APPROVED: "rfp-status-approved",
  CONDITIONALLY_APPROVED: "rfp-status-approved",
  REJECTED: "rfp-status-rejected",
  WITHDRAWN: "rfp-status-closed",
  FUNDED: "rfp-status-funded",
  COMPLETED: "rfp-status-completed",
};

export default function Editor() {
  const [document, dispatch] = useSelectedGrantApplicationDocument();
  if (!document) return null;
  const state = document.state.global as GrantApplicationState;

  const setContent = useCallback(
    (contentURI: string) =>
      dispatch(actions.setAppContentUri({ contentURI })),
    [dispatch],
  );
  const setDiscussions = useCallback(
    (discussionsTo: string) =>
      dispatch(actions.setDiscussionsTo({ discussionsTo })),
    [dispatch],
  );

  const submit = useCallback(
    (identifier: string) =>
      dispatch(
        actions.submitApplication({
          submittedAt: new Date().toISOString(),
          submitterType: "COMMUNITY",
          identifier,
        }),
      ),
    [dispatch],
  );
  const startReview = useCallback(
    (reviewerDid: string) =>
      dispatch(
        actions.startReview({
          reviewerDid,
          startedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const requestRevision = useCallback(
    (feedbackNotes: string) =>
      dispatch(
        actions.requestRevision({
          feedbackNotes,
          requestedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const markRevised = useCallback(
    () =>
      dispatch(
        actions.markRevised({ revisedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );
  const approve = useCallback(
    (reviewerDid: string) =>
      dispatch(
        actions.approveApplication({
          approvedAt: new Date().toISOString(),
          reviewerDid,
        }),
      ),
    [dispatch],
  );
  const reject = useCallback(
    (reviewerDid: string, reason: string) =>
      dispatch(
        actions.rejectApplication({
          rejectedAt: new Date().toISOString(),
          reviewerDid,
          reason,
        }),
      ),
    [dispatch],
  );
  const withdraw = useCallback(
    (reason: string) =>
      dispatch(
        actions.withdrawApplication({
          withdrawnAt: new Date().toISOString(),
          reason,
        }),
      ),
    [dispatch],
  );

  const [identifier, setIdentifier] = useState("");
  const [reviewerDid, setReviewerDid] = useState("");
  const [feedback, setFeedback] = useState("");

  const stage = state.reviewStage;
  const canSubmit = ["DRAFT", "REVISED", "NEEDS_REVISION"].includes(stage);
  const canStartReview = ["SUBMITTED", "OPENED"].includes(stage);
  const canRequestRevision = stage === "UNDER_REVIEW";
  const canMarkRevised = stage === "NEEDS_REVISION";
  const canDecide = ["UNDER_REVIEW", "REVISED"].includes(stage);
  const canWithdraw = [
    "DRAFT",
    "SUBMITTED",
    "OPENED",
    "UNDER_REVIEW",
    "NEEDS_REVISION",
    "REVISED",
  ].includes(stage);

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <header className="rfp-header">
            <div className="rfp-header-row">
              <div className="rfp-col">
                <span className="rfp-meta">Grant Application · DAOIP-5</span>
                <h1 className="rfp-h1">
                  {state.projectName || "Unnamed project"} →{" "}
                  {state.grantPoolName || "pool"}
                </h1>
                <p className="rfp-hint">
                  DAOIP-5 status:{" "}
                  <strong>{state.status}</strong>
                  {state.revisionCount > 0
                    ? ` · ${state.revisionCount} revision${state.revisionCount > 1 ? "s" : ""}`
                    : ""}
                </p>
              </div>
              <span
                className={`rfp-status-badge ${
                  STAGE_CLASS[stage] ?? "rfp-status-draft"
                }`}
              >
                {stage.toLowerCase().replace(/_/g, " ")}
              </span>
            </div>
          </header>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Application</h2>
            <hr className="rfp-divider" />
            <label className="rfp-field">
              <span className="rfp-label">Proposal content URL</span>
              <input
                className="rfp-input"
                defaultValue={state.contentURI ?? ""}
                placeholder="https://… (your proposal markdown / PDF)"
                onBlur={(e) => setContent(e.target.value.trim())}
              />
            </label>
            <label className="rfp-field">
              <span className="rfp-label">Discussion thread</span>
              <input
                className="rfp-input"
                defaultValue={state.discussionsTo ?? ""}
                placeholder="https://forum.example.org/…"
                onBlur={(e) => setDiscussions(e.target.value.trim())}
              />
            </label>
            {state.feedbackNotes ? (
              <div className="rfp-card" style={{ background: "var(--rfp-status-pending)" }}>
                <span className="rfp-label">Reviewer feedback</span>
                <p className="rfp-body" style={{ marginTop: 4 }}>
                  {state.feedbackNotes}
                </p>
              </div>
            ) : null}
          </section>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Applicant actions</h2>
            <hr className="rfp-divider" />
            <div className="rfp-row">
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Your DID (did:pkh:eip155:1:0x…)"
              />
              <button
                className="rfp-btn-primary"
                disabled={!canSubmit || !identifier.trim()}
                onClick={() => submit(identifier.trim())}
              >
                {stage === "NEEDS_REVISION" ? "Resubmit" : "Submit"}
              </button>
            </div>
            {canMarkRevised ? (
              <button
                className="rfp-btn-secondary"
                onClick={markRevised}
                style={{ alignSelf: "flex-start" }}
              >
                Mark as revised
              </button>
            ) : null}
            {canWithdraw ? (
              <button
                className="rfp-btn-ghost"
                onClick={() => withdraw("Withdrawn by applicant")}
                style={{
                  alignSelf: "flex-start",
                  color: "var(--rfp-error)",
                }}
              >
                Withdraw application
              </button>
            ) : null}
          </section>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Reviewer actions</h2>
            <hr className="rfp-divider" />
            <label className="rfp-field">
              <span className="rfp-label">Reviewer DID</span>
              <input
                className="rfp-input"
                value={reviewerDid}
                onChange={(e) => setReviewerDid(e.target.value)}
                placeholder="did:pkh:eip155:1:0x…"
              />
            </label>
            <div className="rfp-row" style={{ gap: 12, flexWrap: "wrap" }}>
              <button
                className="rfp-btn-secondary"
                disabled={!canStartReview || !reviewerDid.trim()}
                onClick={() => startReview(reviewerDid.trim())}
              >
                Start review
              </button>
              <button
                className="rfp-btn-primary"
                disabled={!canDecide || !reviewerDid.trim()}
                onClick={() => approve(reviewerDid.trim())}
              >
                Approve
              </button>
              <button
                className="rfp-btn-secondary"
                disabled={!canDecide || !reviewerDid.trim() || !feedback.trim()}
                onClick={() => reject(reviewerDid.trim(), feedback.trim())}
                style={{ color: "var(--rfp-error)" }}
              >
                Reject
              </button>
            </div>
            {(canRequestRevision || canDecide) && (
              <label className="rfp-field">
                <span className="rfp-label">Feedback (for rejection or revision request)</span>
                <textarea
                  className="rfp-textarea"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="What needs to change or why reject…"
                />
              </label>
            )}
            {canRequestRevision ? (
              <button
                className="rfp-btn-secondary"
                disabled={!feedback.trim()}
                onClick={() => {
                  requestRevision(feedback.trim());
                  setFeedback("");
                }}
                style={{ alignSelf: "flex-start" }}
              >
                Request revision
              </button>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  );
}
