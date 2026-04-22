import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  addCategory: (v: string) => void;
  removeCategory: (v: string) => void;
  addEcosystem: (v: string) => void;
  removeEcosystem: (v: string) => void;
  addTag: (v: string) => void;
  removeTag: (v: string) => void;
};

function ChipList({
  label,
  hint,
  items,
  onAdd,
  onRemove,
  placeholder,
}: {
  label: string;
  hint: string;
  items: string[];
  onAdd: (v: string) => void;
  onRemove: (v: string) => void;
  placeholder: string;
}) {
  const [draft, setDraft] = useState("");
  const commit = () => {
    const v = draft.trim();
    if (!v) return;
    onAdd(v);
    setDraft("");
  };
  return (
    <div className="rfp-col">
      <span className="rfp-label">{label}</span>
      <p className="rfp-hint">{hint}</p>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
          }}
        />
        <button className="rfp-btn-secondary" onClick={commit}>
          Add
        </button>
      </div>
      {items.length === 0 ? (
        <div className="rfp-empty">None yet.</div>
      ) : (
        <div className="rfp-row" style={{ flexWrap: "wrap", gap: 8 }}>
          {items.map((v) => (
            <span key={v} className="rfp-chip">
              {v}
              <button
                className="rfp-chip-close"
                onClick={() => onRemove(v)}
                aria-label={`Remove ${v}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function PoolClassification({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Classification</h2>
      <hr className="rfp-divider" />
      <ChipList
        label="Categories"
        hint="Topic/focus area (e.g. infrastructure, research, education)."
        items={state.categories}
        onAdd={on.addCategory}
        onRemove={on.removeCategory}
        placeholder="Add a category…"
      />
      <ChipList
        label="Ecosystems"
        hint="Blockchain/protocol ecosystems this pool applies to."
        items={state.ecosystems}
        onAdd={on.addEcosystem}
        onRemove={on.removeEcosystem}
        placeholder="e.g. ethereum, optimism, arbitrum"
      />
      <ChipList
        label="Tags"
        hint="Free-form labels."
        items={state.tags}
        onAdd={on.addTag}
        onRemove={on.removeTag}
        placeholder="Add a tag…"
      />
    </section>
  );
}
