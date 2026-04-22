import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  setEligibility: (v: string) => void;
  setEvaluation: (v: string) => void;
};

export function PoolCriteria({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Criteria</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Eligibility</span>
        <textarea
          className="rfp-textarea"
          defaultValue={state.eligibilityCriteria ?? ""}
          placeholder="Who may apply (e.g. individuals + teams, open-source only, EU residents only, etc.)"
          onBlur={(e) => on.setEligibility(e.target.value.trim())}
        />
      </label>
      <label className="rfp-field">
        <span className="rfp-label">Evaluation</span>
        <textarea
          className="rfp-textarea"
          defaultValue={state.evaluationCriteria ?? ""}
          placeholder="How applications will be scored (technical merit, impact, alignment, budget fit, etc.)"
          onBlur={(e) => on.setEvaluation(e.target.value.trim())}
        />
      </label>
    </section>
  );
}
