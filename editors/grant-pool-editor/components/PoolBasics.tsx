import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  setPoolName: (v: string) => void;
  setDescription: (v: string) => void;
  setCode: (v: string) => void;
  setBriefingUri: (v: string) => void;
};

export function PoolBasics({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Basics</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Pool name</span>
        <input
          className="rfp-input"
          defaultValue={state.name ?? ""}
          placeholder="e.g. Web3 Community Round"
          onBlur={(e) => on.setPoolName(e.target.value.trim())}
        />
      </label>
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Short code</span>
          <input
            className="rfp-input"
            defaultValue={state.code ?? ""}
            placeholder="e.g. RFP-23"
            onBlur={(e) => on.setCode(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Briefing URL</span>
          <input
            className="rfp-input"
            defaultValue={state.briefingURI ?? ""}
            placeholder="https://…"
            onBlur={(e) => on.setBriefingUri(e.target.value.trim())}
          />
        </label>
      </div>
      <label className="rfp-field">
        <span className="rfp-label">Summary</span>
        <textarea
          className="rfp-textarea"
          defaultValue={state.description ?? ""}
          placeholder="What this pool funds, who it's for, what the expected outcome looks like."
          onBlur={(e) => on.setDescription(e.target.value.trim())}
        />
      </label>
    </section>
  );
}
