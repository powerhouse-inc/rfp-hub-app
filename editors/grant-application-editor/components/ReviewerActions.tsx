import { useState } from "react";
import type {
  GrantApplicationState,
  ReviewStage,
} from "document-models/grant-application";

type On = {
  openApplication: () => void;
  startReview: (reviewerDid: string) => void;
  requestRevision: (feedback: string) => void;
  approve: (reviewerDid: string) => void;
  conditionallyApprove: (reviewerDid: string, conditions: string) => void;
  reject: (reviewerDid: string, reason: string) => void;
};

export function ReviewerActions({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const stage: ReviewStage = state.reviewStage;
  const canOpen: boolean = stage === "SUBMITTED";
  const canStartReview: boolean = (
    ["SUBMITTED", "OPENED"] as ReviewStage[]
  ).includes(stage);
  const canRequestRevision: boolean = stage === "UNDER_REVIEW";
  const canDecide: boolean = (
    ["UNDER_REVIEW", "REVISED"] as ReviewStage[]
  ).includes(stage);

  const [reviewerDid, setReviewerDid] = useState("");
  const [feedback, setFeedback] = useState("");

  if (!canOpen && !canStartReview && !canRequestRevision && !canDecide) {
    return null;
  }

  return (
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
        {canOpen ? (
          <button
            type="button"
            className="rfp-btn-ghost"
            onClick={on.openApplication}
          >
            Open (acknowledge)
          </button>
        ) : null}
        {canStartReview ? (
          <button
            type="button"
            className="rfp-btn-secondary"
            disabled={!reviewerDid.trim()}
            onClick={() => on.startReview(reviewerDid.trim())}
          >
            Start review
          </button>
        ) : null}
        {canDecide ? (
          <>
            <button
              type="button"
              className="rfp-btn-primary"
              disabled={!reviewerDid.trim()}
              onClick={() => on.approve(reviewerDid.trim())}
            >
              Approve
            </button>
            <button
              type="button"
              className="rfp-btn-secondary"
              disabled={!reviewerDid.trim() || !feedback.trim()}
              onClick={() =>
                on.conditionallyApprove(reviewerDid.trim(), feedback.trim())
              }
            >
              Conditional approve
            </button>
            <button
              type="button"
              className="rfp-btn-secondary"
              disabled={!reviewerDid.trim() || !feedback.trim()}
              onClick={() => on.reject(reviewerDid.trim(), feedback.trim())}
              style={{ color: "var(--rfp-error)" }}
            >
              Reject
            </button>
          </>
        ) : null}
      </div>
      {canRequestRevision || canDecide ? (
        <label className="rfp-field">
          <span className="rfp-label">
            Feedback (for rejection or revision request)
          </span>
          <textarea
            className="rfp-textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What needs to change or why reject…"
          />
        </label>
      ) : null}
      {canRequestRevision ? (
        <button
          type="button"
          className="rfp-btn-secondary"
          disabled={!feedback.trim()}
          onClick={() => {
            on.requestRevision(feedback.trim());
            setFeedback("");
          }}
          style={{ alignSelf: "flex-start" }}
        >
          Request revision
        </button>
      ) : null}
    </section>
  );
}
