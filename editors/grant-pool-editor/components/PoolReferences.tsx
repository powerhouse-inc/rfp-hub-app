import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  setGrantSystemRef: (v: string) => void;
  setApplicationsUri: (v: string) => void;
  setGovernanceUri: (v: string) => void;
  setAttestationIssuersUri: (v: string) => void;
};

export function PoolReferences({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">References</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Grant System (PHID)</span>
        <input
          className="rfp-input"
          defaultValue={state.grantSystemRef ?? ""}
          placeholder="PHID of the owning grant-system document"
          onBlur={(e) => {
            const v = e.target.value.trim();
            if (v) on.setGrantSystemRef(v);
          }}
        />
      </label>
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Applications URI</span>
          <input
            className="rfp-input"
            defaultValue={state.applicationsURI ?? ""}
            placeholder="https://…"
            onBlur={(e) => on.setApplicationsUri(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Governance URI</span>
          <input
            className="rfp-input"
            defaultValue={state.governanceURI ?? ""}
            placeholder="https://…"
            onBlur={(e) => on.setGovernanceUri(e.target.value.trim())}
          />
        </label>
      </div>
      <label className="rfp-field">
        <span className="rfp-label">Attestation issuers URI</span>
        <input
          className="rfp-input"
          defaultValue={state.attestationIssuersURI ?? ""}
          placeholder="https://…"
          onBlur={(e) => on.setAttestationIssuersUri(e.target.value.trim())}
        />
      </label>
    </section>
  );
}
