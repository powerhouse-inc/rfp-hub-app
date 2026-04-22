import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type Scope = "INTERNAL" | "EXTERNAL";
type ReviewerKind = "HUMAN" | "GROUP" | "AI";

type On = {
  addReviewer: (
    did: string,
    scope: Scope,
    reviewerType: ReviewerKind,
    name: string,
  ) => void;
  removeReviewer: (id: string) => void;
};

export function PoolReviewers({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const [did, setDid] = useState("");
  const [name, setName] = useState("");
  const [scope, setScope] = useState<Scope>("INTERNAL");
  const [kind, setKind] = useState<ReviewerKind>("HUMAN");

  const add = () => {
    if (!did.trim() || !name.trim()) return;
    on.addReviewer(did.trim(), scope, kind, name.trim());
    setDid("");
    setName("");
  };

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Invited reviewers</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Reviewers who can score applications. Internal = part of the funder
        team; external = outside experts or AI agents.
      </p>
      <div className="rfp-grid-2">
        <input
          className="rfp-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Reviewer name"
        />
        <input
          className="rfp-input"
          value={did}
          onChange={(e) => setDid(e.target.value)}
          placeholder="did:pkh:eip155:1:0x…"
        />
      </div>
      <div className="rfp-row">
        <select
          className="rfp-select"
          style={{ maxWidth: 160 }}
          value={scope}
          onChange={(e) => setScope(e.target.value as Scope)}
        >
          <option value="INTERNAL">Internal</option>
          <option value="EXTERNAL">External</option>
        </select>
        <select
          className="rfp-select"
          style={{ maxWidth: 160 }}
          value={kind}
          onChange={(e) => setKind(e.target.value as ReviewerKind)}
        >
          <option value="HUMAN">Human</option>
          <option value="GROUP">Group</option>
          <option value="AI">AI</option>
        </select>
        <button
          className="rfp-btn-secondary"
          onClick={add}
          disabled={!did.trim() || !name.trim()}
        >
          Add reviewer
        </button>
      </div>
      {state.reviewers.length === 0 ? (
        <div className="rfp-empty">No reviewers invited yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.reviewers.map((r) => (
            <li key={r.id} className="rfp-list-item">
              <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
                <div className="rfp-row" style={{ gap: 8 }}>
                  <strong>{r.name}</strong>
                  <span className="rfp-chip">{r.scope.toLowerCase()}</span>
                  <span className="rfp-chip">
                    {r.reviewerType.toLowerCase()}
                  </span>
                </div>
                <div className="rfp-hint">{r.did}</div>
              </div>
              <button
                className="rfp-btn-ghost"
                onClick={() => on.removeReviewer(r.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
