import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback, useState } from "react";
import {
  useSelectedProjectDocument,
  actions,
} from "document-models/project";
import type { ProjectState } from "document-models/project";
import "../design-tokens.css";

export default function Editor() {
  const [document, dispatch] = useSelectedProjectDocument();
  if (!document) return null;
  const state = document.state.global as ProjectState;

  const setName = useCallback(
    (name: string) => dispatch(actions.setProjectName({ name })),
    [dispatch],
  );
  const setDesc = useCallback(
    (description: string) =>
      dispatch(actions.setProjectDescription({ description })),
    [dispatch],
  );
  const setContent = useCallback(
    (contentURI: string) => dispatch(actions.setContentUri({ contentURI })),
    [dispatch],
  );
  const setEmail = useCallback(
    (email: string) => dispatch(actions.setProjectEmail({ email })),
    [dispatch],
  );
  const setImage = useCallback(
    (image: string) => dispatch(actions.setProjectImage({ image })),
    [dispatch],
  );
  const setOwnerDid = useCallback(
    (ownerDid: string) => dispatch(actions.setOwnerDid({ ownerDid })),
    [dispatch],
  );
  const setLicenseUri = useCallback(
    (licenseURI: string) => dispatch(actions.setLicenseUri({ licenseURI })),
    [dispatch],
  );
  const addSameAs = useCallback(
    (url: string) => dispatch(actions.addProjectSameAs({ url })),
    [dispatch],
  );
  const removeSameAs = useCallback(
    (url: string) => dispatch(actions.removeProjectSameAs({ url })),
    [dispatch],
  );
  const addSocial = useCallback(
    (name: string, value: string) =>
      dispatch(actions.addProjectSocial({ id: generateId(), name, value })),
    [dispatch],
  );
  const removeSocial = useCallback(
    (id: string) => dispatch(actions.removeProjectSocial({ id })),
    [dispatch],
  );

  const [socialName, setSocialName] = useState("");
  const [socialValue, setSocialValue] = useState("");
  const [sameAsDraft, setSameAsDraft] = useState("");

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <header className="rfp-header">
            <span className="rfp-meta">Project · DAOIP-5</span>
            <h1 className="rfp-h1">{state.name || "Untitled project"}</h1>
            {state.ownerDid ? (
              <p className="rfp-hint">Owner: {state.ownerDid}</p>
            ) : null}
          </header>

          <section className="rfp-card rfp-section">
            <h2 className="rfp-section-subtitle">Project profile</h2>
            <hr className="rfp-divider" />
            <label className="rfp-field">
              <span className="rfp-label">Name</span>
              <input
                className="rfp-input"
                defaultValue={state.name ?? ""}
                placeholder="Your project name"
                onBlur={(e) => setName(e.target.value.trim())}
              />
            </label>
            <label className="rfp-field">
              <span className="rfp-label">Description</span>
              <textarea
                className="rfp-textarea"
                defaultValue={state.description ?? ""}
                placeholder="What the project does, who it serves, what it needs."
                onBlur={(e) => setDesc(e.target.value.trim())}
              />
            </label>
            <div className="rfp-grid-2">
              <label className="rfp-field">
                <span className="rfp-label">Pitch / content URL</span>
                <input
                  className="rfp-input"
                  defaultValue={state.contentURI ?? ""}
                  placeholder="https://…"
                  onBlur={(e) => setContent(e.target.value.trim())}
                />
              </label>
              <label className="rfp-field">
                <span className="rfp-label">Contact email</span>
                <input
                  className="rfp-input"
                  type="email"
                  defaultValue={state.email ?? ""}
                  placeholder="hello@project.xyz"
                  onBlur={(e) => setEmail(e.target.value.trim())}
                />
              </label>
            </div>
            <div className="rfp-grid-2">
              <label className="rfp-field">
                <span className="rfp-label">Logo URL</span>
                <input
                  className="rfp-input"
                  defaultValue={state.image ?? ""}
                  placeholder="https://…"
                  onBlur={(e) => setImage(e.target.value.trim())}
                />
              </label>
              <label className="rfp-field">
                <span className="rfp-label">License URL</span>
                <input
                  className="rfp-input"
                  defaultValue={state.licenseURI ?? ""}
                  placeholder="https://opensource.org/…"
                  onBlur={(e) => setLicenseUri(e.target.value.trim())}
                />
              </label>
            </div>
          </section>

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
                  if (v) setOwnerDid(v);
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
                      addSameAs(sameAsDraft.trim());
                      setSameAsDraft("");
                    }
                  }}
                />
                <button
                  className="rfp-btn-secondary"
                  onClick={() => {
                    if (sameAsDraft.trim()) {
                      addSameAs(sameAsDraft.trim());
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
                        className="rfp-btn-ghost"
                        onClick={() => removeSameAs(url)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

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
                className="rfp-btn-secondary"
                onClick={() => {
                  if (socialName.trim() && socialValue.trim()) {
                    addSocial(socialName.trim(), socialValue.trim());
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
                      className="rfp-btn-ghost"
                      onClick={() => removeSocial(s.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
