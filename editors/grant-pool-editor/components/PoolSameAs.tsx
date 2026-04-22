import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  addSameAs: (url: string) => void;
  removeSameAs: (url: string) => void;
};

export function PoolSameAs({
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
    on.addSameAs(v);
    setDraft("");
  };
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Identity links (schema.org sameAs)</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Canonical pool pages on external sites (Gitcoin round URL, program page,
        etc.) for identity disambiguation.
      </p>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="https://…"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <button
          className="rfp-btn-secondary"
          onClick={add}
          disabled={!draft.trim()}
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
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {url}
              </a>
              <button
                className="rfp-btn-ghost"
                onClick={() => on.removeSameAs(url)}
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
