import { useState } from "react";
import type { GovernanceState } from "document-models/governance";

type On = {
  publishPolicy: (name: string, summary: string, content: string) => void;
  supersedePolicy: (id: string, supersededBy: string) => void;
};

export function PoliciesSection({
  state,
  on,
}: {
  state: GovernanceState;
  on: On;
}) {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [supersedeDraft, setSupersedeDraft] = useState<
    Record<string, string>
  >({});

  const canPublish =
    !!name.trim() && !!summary.trim() && !!content.trim();

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Policies</h2>
      <hr className="rfp-divider" />
      <input
        className="rfp-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Policy name (e.g. Inclusion Policy v1)"
      />
      <input
        className="rfp-input"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Policy summary"
      />
      <textarea
        className="rfp-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Full policy text (markdown supported)"
      />
      <button
        type="button"
        className="rfp-btn-primary"
        disabled={!canPublish}
        onClick={() => {
          if (canPublish) {
            on.publishPolicy(name.trim(), summary.trim(), content.trim());
            setName("");
            setSummary("");
            setContent("");
          }
        }}
        style={{ alignSelf: "flex-start" }}
      >
        Publish policy
      </button>

      {state.policies.length === 0 ? (
        <div className="rfp-empty">No policies published.</div>
      ) : (
        <ul className="rfp-list">
          {state.policies.map((p) => {
            const draft = supersedeDraft[p.id] ?? "";
            const canSupersede = !p.supersededAt;
            return (
              <li
                key={p.id}
                className="rfp-list-item"
                style={{ flexDirection: "column", alignItems: "stretch" }}
              >
                <div className="rfp-col" style={{ gap: 4 }}>
                  <div className="rfp-row" style={{ gap: 8 }}>
                    <strong>{p.name}</strong>
                    {p.supersededAt ? (
                      <span className="rfp-chip">superseded</span>
                    ) : (
                      <span className="rfp-chip rfp-chip-primary">active</span>
                    )}
                  </div>
                  <div className="rfp-body">{p.summary}</div>
                  <pre
                    className="rfp-hint"
                    style={{
                      whiteSpace: "pre-wrap",
                      fontFamily: "var(--rfp-font)",
                      margin: 0,
                    }}
                  >
                    {p.content}
                  </pre>
                  <div className="rfp-hint">
                    Effective{" "}
                    {new Date(p.effectiveFrom).toLocaleDateString()}
                    {p.supersededAt
                      ? ` · superseded ${new Date(p.supersededAt).toLocaleDateString()}`
                      : ""}
                    {p.supersededBy ? ` · by ${p.supersededBy}` : ""}
                  </div>
                </div>
                {canSupersede ? (
                  <div className="rfp-row">
                    <input
                      className="rfp-input"
                      style={{ flex: 1 }}
                      value={draft}
                      onChange={(e) =>
                        setSupersedeDraft((prev) => ({
                          ...prev,
                          [p.id]: e.target.value,
                        }))
                      }
                      placeholder="ID of superseding policy"
                    />
                    <button
                      className="rfp-btn-secondary"
                      disabled={!draft.trim()}
                      onClick={() => {
                        on.supersedePolicy(p.id, draft.trim());
                        setSupersedeDraft((prev) => ({
                          ...prev,
                          [p.id]: "",
                        }));
                      }}
                    >
                      Supersede
                    </button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
