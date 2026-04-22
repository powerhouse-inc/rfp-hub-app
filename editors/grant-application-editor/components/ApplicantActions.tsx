import { useState } from "react";
import type {
  GrantApplicationState,
  ReviewStage,
} from "document-models/grant-application";

type On = {
  submit: (identifier: string) => void;
  markRevised: () => void;
  withdraw: (reason: string) => void;
};

export function ApplicantActions({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const stage: ReviewStage = state.reviewStage;
  const canSubmit: boolean = (
    ["DRAFT", "REVISED", "NEEDS_REVISION"] as ReviewStage[]
  ).includes(stage);
  const canMarkRevised: boolean = stage === "NEEDS_REVISION";
  const canWithdraw: boolean = (
    [
      "DRAFT",
      "SUBMITTED",
      "OPENED",
      "UNDER_REVIEW",
      "NEEDS_REVISION",
      "REVISED",
    ] as ReviewStage[]
  ).includes(stage);

  const [identifier, setIdentifier] = useState("");

  if (!canSubmit && !canMarkRevised && !canWithdraw) {
    return null;
  }

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Applicant actions</h2>
      <hr className="rfp-divider" />
      {canSubmit ? (
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Your DID (did:pkh:eip155:1:0x…)"
          />
          <button
            type="button"
            className="rfp-btn-primary"
            disabled={!identifier.trim()}
            onClick={() => on.submit(identifier.trim())}
          >
            {stage === "NEEDS_REVISION" ? "Resubmit" : "Submit"}
          </button>
        </div>
      ) : null}
      {canMarkRevised ? (
        <button
          type="button"
          className="rfp-btn-secondary"
          onClick={on.markRevised}
          style={{ alignSelf: "flex-start" }}
        >
          Mark as revised
        </button>
      ) : null}
      {canWithdraw ? (
        <button
          type="button"
          className="rfp-btn-ghost"
          onClick={() => on.withdraw("Withdrawn by applicant")}
          style={{
            alignSelf: "flex-start",
            color: "var(--rfp-error)",
          }}
        >
          Withdraw application
        </button>
      ) : null}
    </section>
  );
}
