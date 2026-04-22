import type { ProjectState } from "document-models/project";

type On = {
  setMembersUri: (v: string) => void;
  setAttestationIssuersUri: (v: string) => void;
};

export function ProjectAttestations({
  state,
  on,
}: {
  state: ProjectState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Members & attestations</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        URLs pointing to member profiles and trusted attestation issuers
        (DAOIP-3). Funders read these during application review.
      </p>
      <label className="rfp-field">
        <span className="rfp-label">Members URI</span>
        <input
          className="rfp-input"
          defaultValue={state.membersURI ?? ""}
          placeholder="https://…"
          onBlur={(e) => on.setMembersUri(e.target.value.trim())}
        />
      </label>
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
