import type { ProjectState } from "document-models/project";

type On = {
  setName: (v: string) => void;
  setDesc: (v: string) => void;
  setContent: (v: string) => void;
  setEmail: (v: string) => void;
  setImage: (v: string) => void;
  setCoverImage: (v: string) => void;
  setLicenseUri: (v: string) => void;
  setCode: (v: string) => void;
};

export function ProjectProfile({
  state,
  on,
}: {
  state: ProjectState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Project profile</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Name</span>
        <input
          className="rfp-input"
          defaultValue={state.name ?? ""}
          placeholder="Your project name"
          onBlur={(e) => on.setName(e.target.value.trim())}
        />
      </label>
      <label className="rfp-field">
        <span className="rfp-label">Description</span>
        <textarea
          className="rfp-textarea"
          defaultValue={state.description ?? ""}
          placeholder="What the project does, who it serves, what it needs."
          onBlur={(e) => on.setDesc(e.target.value.trim())}
        />
      </label>
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Pitch / content URL</span>
          <input
            className="rfp-input"
            defaultValue={state.contentURI ?? ""}
            placeholder="https://…"
            onBlur={(e) => on.setContent(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Contact email</span>
          <input
            className="rfp-input"
            type="email"
            defaultValue={state.email ?? ""}
            placeholder="hello@project.xyz"
            onBlur={(e) => on.setEmail(e.target.value.trim())}
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
            onBlur={(e) => on.setImage(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Cover image URL</span>
          <input
            className="rfp-input"
            defaultValue={state.coverImage ?? ""}
            placeholder="https://…"
            onBlur={(e) => on.setCoverImage(e.target.value.trim())}
          />
        </label>
      </div>
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">License URL</span>
          <input
            className="rfp-input"
            defaultValue={state.licenseURI ?? ""}
            placeholder="https://opensource.org/…"
            onBlur={(e) => on.setLicenseUri(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Short code</span>
          <input
            className="rfp-input"
            defaultValue={state.code ?? ""}
            placeholder="Short reference"
            onBlur={(e) => on.setCode(e.target.value.trim())}
          />
        </label>
      </div>
    </section>
  );
}
