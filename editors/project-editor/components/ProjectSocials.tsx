import { useState } from "react";
import type { ProjectState } from "document-models/project";

type On = {
  addSocial: (name: string, value: string) => void;
  removeSocial: (id: string) => void;
};

export function ProjectSocials({
  state,
  on,
}: {
  state: ProjectState;
  on: On;
}) {
  const [socialName, setSocialName] = useState("");
  const [socialValue, setSocialValue] = useState("");

  const canAdd = !!socialName.trim() && !!socialValue.trim();

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Socials</h2>
      <hr className="rfp-divider" />
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ maxWidth: 180 }}
          value={socialName}
          onChange={(e) => setSocialName(e.target.value)}
          placeholder="Platform (Twitter…)"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={socialValue}
          onChange={(e) => setSocialValue(e.target.value)}
          placeholder="https://…"
        />
        <button
          type="button"
          className="rfp-btn-secondary"
          disabled={!canAdd}
          onClick={() => {
            if (canAdd) {
              on.addSocial(socialName.trim(), socialValue.trim());
              setSocialName("");
              setSocialValue("");
            }
          }}
        >
          Add
        </button>
      </div>
      {state.socials.length === 0 ? (
        <div className="rfp-empty">No socials yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.socials.map((s) => (
            <li key={s.id} className="rfp-list-item">
              <div className="rfp-row" style={{ gap: 12 }}>
                <span className="rfp-chip">{s.name}</span>
                <span>{s.value}</span>
              </div>
              <button
                type="button"
                className="rfp-btn-ghost"
                onClick={() => on.removeSocial(s.id)}
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
