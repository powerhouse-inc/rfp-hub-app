import { useState } from "react";
import type { GrantApplicationState } from "document-models/grant-application";

type On = {
  addSocial: (platform: string, url: string) => void;
  removeSocial: (id: string) => void;
};

export function ApplicationSocials({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    if (!platform.trim() || !url.trim()) return;
    on.addSocial(platform.trim(), url.trim());
    setPlatform("");
    setUrl("");
  };

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Application socials</h2>
      <hr className="rfp-divider" />
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ maxWidth: 180 }}
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          placeholder="Platform (Twitter, Farcaster…)"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://…"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
        />
        <button
          className="rfp-btn-secondary"
          onClick={handleAdd}
          disabled={!platform.trim() || !url.trim()}
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
                <span className="rfp-chip">{s.platform}</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {s.url}
                </a>
              </div>
              <button
                className="rfp-btn-ghost"
                onClick={() => on.removeSocial(s.id)}
                aria-label="Remove social"
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
