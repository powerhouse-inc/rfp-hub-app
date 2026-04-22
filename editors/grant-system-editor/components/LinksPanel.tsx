import { useState } from "react";
import type { GrantSystemState } from "document-models/grant-system";

type Props = {
  state: GrantSystemState;
  onAddSameAs: (url: string) => void;
  onRemoveSameAs: (url: string) => void;
  onAddSocial: (platform: string, url: string) => void;
  onRemoveSocial: (id: string) => void;
  onUpdateSocialUrl: (id: string, url: string) => void;
};

const SOCIAL_PLATFORMS = [
  "TWITTER",
  "DISCORD",
  "TELEGRAM",
  "GITHUB",
  "LINKEDIN",
  "FARCASTER",
  "LENS",
  "MIRROR",
  "WEBSITE",
] as const;

export function LinksPanel(p: Props) {
  const [sameAsDraft, setSameAsDraft] = useState("");
  const [platformDraft, setPlatformDraft] =
    useState<(typeof SOCIAL_PLATFORMS)[number]>("TWITTER");
  const [urlDraft, setUrlDraft] = useState("");

  const handleAddSameAs = () => {
    const v = sameAsDraft.trim();
    if (!v) return;
    p.onAddSameAs(v);
    setSameAsDraft("");
  };

  const handleAddSocial = () => {
    const v = urlDraft.trim();
    if (!v) return;
    p.onAddSocial(platformDraft, v);
    setUrlDraft("");
  };

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-col">
        <h2 className="rfp-section-subtitle">Identity links</h2>
        <p className="rfp-hint">
          schema.org <code>sameAs</code> references (Wikipedia, Wikidata,
          official site) and social media channels.
        </p>
      </div>
      <hr className="rfp-divider" />

      <div className="rfp-col">
        <span className="rfp-label">Canonical identity (sameAs)</span>
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            placeholder="https://…"
            value={sameAsDraft}
            onChange={(e) => setSameAsDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSameAs();
              }
            }}
          />
          <button className="rfp-btn-secondary" onClick={handleAddSameAs}>
            Add
          </button>
        </div>
        {p.state.sameAs.length === 0 ? (
          <div className="rfp-empty">No identity links yet.</div>
        ) : (
          <ul className="rfp-list">
            {p.state.sameAs.map((url) => (
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
                  onClick={() => p.onRemoveSameAs(url)}
                  aria-label="Remove link"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rfp-col">
        <span className="rfp-label">Socials</span>
        <div className="rfp-row">
          <select
            className="rfp-select"
            style={{ maxWidth: 160 }}
            value={platformDraft}
            onChange={(e) =>
              setPlatformDraft(
                e.target.value as (typeof SOCIAL_PLATFORMS)[number],
              )
            }
          >
            {SOCIAL_PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p.toLowerCase()}
              </option>
            ))}
          </select>
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            placeholder="https://twitter.com/…"
            value={urlDraft}
            onChange={(e) => setUrlDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSocial();
              }
            }}
          />
          <button className="rfp-btn-secondary" onClick={handleAddSocial}>
            Add
          </button>
        </div>
        {p.state.socials.length === 0 ? (
          <div className="rfp-empty">No socials yet.</div>
        ) : (
          <ul className="rfp-list">
            {p.state.socials.map((s) => (
              <li key={s.id} className="rfp-list-item">
                <div
                  className="rfp-row"
                  style={{ gap: 12, flex: 1, minWidth: 0 }}
                >
                  <span className="rfp-chip">{s.platform.toLowerCase()}</span>
                  <input
                    className="rfp-input"
                    style={{ flex: 1 }}
                    defaultValue={s.url}
                    onBlur={(e) => {
                      const v = e.target.value.trim();
                      if (v && v !== s.url) p.onUpdateSocialUrl(s.id, v);
                    }}
                  />
                </div>
                <button
                  className="rfp-btn-ghost"
                  onClick={() => p.onRemoveSocial(s.id)}
                  aria-label="Remove social"
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
