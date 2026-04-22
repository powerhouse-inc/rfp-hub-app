import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  addRequiredCredential: (v: string) => void;
  removeRequiredCredential: (v: string) => void;
};

export function PoolCredentials({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const v = draft.trim();
    if (!v) return;
    on.addRequiredCredential(v);
    setDraft("");
  };
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Required credentials</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Applicant must hold these attestations (e.g.{" "}
        <code>IdentityVerification</code>, <code>DAOContributor</code>).
      </p>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Credential name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <button className="rfp-btn-secondary" onClick={add} disabled={!draft.trim()}>
          Add
        </button>
      </div>
      {state.requiredCredentials.length === 0 ? (
        <div className="rfp-empty">No credentials required.</div>
      ) : (
        <div className="rfp-row" style={{ flexWrap: "wrap", gap: 8 }}>
          {state.requiredCredentials.map((c) => (
            <span key={c} className="rfp-chip">
              {c}
              <button
                className="rfp-chip-close"
                onClick={() => on.removeRequiredCredential(c)}
                aria-label={`Remove ${c}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
