import { useState } from "react";
import type { ProjectState } from "document-models/project";

type On = {
  setOwnerDid: (v: string) => void;
  addSameAs: (v: string) => void;
  removeSameAs: (v: string) => void;
};

export function ProjectIdentity({
  state,
  on,
}: {
  state: ProjectState;
  on: On;
}) {
  const [sameAsDraft, setSameAsDraft] = useState("");

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Identity</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Owner DID</span>
        <input
          className="rfp-input"
          defaultValue={state.ownerDid ?? ""}
          placeholder="did:pkh:eip155:1:0x…"
          onBlur={(e) => {
            const v = e.target.value.trim();
            if (v) on.setOwnerDid(v);
          }}
        />
      </label>
      <div className="rfp-col">
        <span className="rfp-label">Canonical identity (sameAs)</span>
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            value={sameAsDraft}
            onChange={(e) => setSameAsDraft(e.target.value)}
            placeholder="https://…"
            onKeyDown={(e) => {
              if (e.key === "Enter" && sameAsDraft.trim()) {
                e.preventDefault();
                on.addSameAs(sameAsDraft.trim());
                setSameAsDraft("");
              }
            }}
          />
          <button
            type="button"
            className="rfp-btn-secondary"
            disabled={!sameAsDraft.trim()}
            onClick={() => {
              if (sameAsDraft.trim()) {
                on.addSameAs(sameAsDraft.trim());
                setSameAsDraft("");
              }
            }}
          >
            Add
          </button>
        </div>
        {state.sameAs.length === 0 ? (
          <div className="rfp-empty">No identity links yet.</div>
        ) : (
          <ul className="rfp-list">
            {state.sameAs.map((url) => (
              <li key={url} className="rfp-list-item">
                <span>{url}</span>
                <button
                  type="button"
                  className="rfp-btn-ghost"
                  onClick={() => on.removeSameAs(url)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
