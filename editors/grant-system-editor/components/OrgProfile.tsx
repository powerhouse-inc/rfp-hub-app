import type { GrantSystemState } from "document-models/grant-system";

type Props = {
  state: GrantSystemState;
  onSetOrgName: (name: string) => void;
  onSetType: (type: GrantSystemState["type"]) => void;
  onSetCode: (code: string) => void;
  onSetDescription: (description: string) => void;
  onSetGrantPoolsUri: (uri: string) => void;
  onSetImage: (url: string) => void;
  onSetCoverImage: (url: string) => void;
};

const TYPE_OPTIONS = [
  "DAO",
  "FOUNDATION",
  "PROTOCOL",
  "COMPANY",
  "PROGRAM",
  "PERSON",
  "OTHER",
] as const;

export function OrgProfile(p: Props) {
  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-col">
        <h2 className="rfp-section-subtitle">Organization profile</h2>
        <p className="rfp-hint">DAOIP-5 Grant System identity fields.</p>
      </div>
      <hr className="rfp-divider" />

      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Name</span>
          <input
            className="rfp-input"
            defaultValue={p.state.name ?? ""}
            placeholder="e.g. Ethereum Foundation"
            onBlur={(e) => {
              const v = e.target.value.trim();
              if (v !== (p.state.name ?? "")) p.onSetOrgName(v);
            }}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Type</span>
          <select
            className="rfp-select"
            value={p.state.type ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              if (v) p.onSetType(v as GrantSystemState["type"]);
            }}
          >
            <option value="" disabled>
              Select type…
            </option>
            {TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t.toLowerCase()}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Short code</span>
          <input
            className="rfp-input"
            defaultValue={p.state.code ?? ""}
            placeholder="e.g. EF, OCS, OPTIMISM"
            onBlur={(e) => p.onSetCode(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Grant pools index URI</span>
          <input
            className="rfp-input"
            defaultValue={p.state.grantPoolsURI ?? ""}
            placeholder="https://…"
            onBlur={(e) => p.onSetGrantPoolsUri(e.target.value.trim())}
          />
        </label>
      </div>

      <label className="rfp-field">
        <span className="rfp-label">Description</span>
        <textarea
          className="rfp-textarea"
          defaultValue={p.state.description ?? ""}
          placeholder="What this organization funds and why."
          onBlur={(e) => p.onSetDescription(e.target.value.trim())}
        />
      </label>

      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Logo URL</span>
          <input
            className="rfp-input"
            defaultValue={p.state.image ?? ""}
            placeholder="https://…"
            onBlur={(e) => p.onSetImage(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Cover image URL</span>
          <input
            className="rfp-input"
            defaultValue={p.state.coverImage ?? ""}
            placeholder="https://…"
            onBlur={(e) => p.onSetCoverImage(e.target.value.trim())}
          />
        </label>
      </div>
    </section>
  );
}
