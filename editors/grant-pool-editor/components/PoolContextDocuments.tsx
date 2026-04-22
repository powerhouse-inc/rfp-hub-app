import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  addContextDocument: (name: string, url: string) => void;
  removeContextDocument: (id: string) => void;
};

export function PoolContextDocuments({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const add = () => {
    if (!name.trim() || !url.trim()) return;
    on.addContextDocument(name.trim(), url.trim());
    setName("");
    setUrl("");
  };
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Context documents</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Supplementary PDFs, templates, or reference URLs applicants should read.
      </p>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ maxWidth: 220 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Document name"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://…"
        />
        <button
          className="rfp-btn-secondary"
          onClick={add}
          disabled={!name.trim() || !url.trim()}
        >
          Add
        </button>
      </div>
      {state.contextDocuments.length === 0 ? (
        <div className="rfp-empty">No context documents yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.contextDocuments.map((doc) => (
            <li key={doc.id} className="rfp-list-item">
              <div className="rfp-col" style={{ gap: 2, flex: 1 }}>
                <strong>{doc.name}</strong>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rfp-hint"
                >
                  {doc.url} ↗
                </a>
              </div>
              <button
                className="rfp-btn-ghost"
                onClick={() => on.removeContextDocument(doc.id)}
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
