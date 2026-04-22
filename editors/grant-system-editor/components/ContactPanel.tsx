import type { GrantSystemState } from "document-models/grant-system";

type Props = {
  state: GrantSystemState;
  onSetEmail: (email: string) => void;
  onSetContactName: (name: string) => void;
};

export function ContactPanel({ state, onSetEmail, onSetContactName }: Props) {
  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-col">
        <h2 className="rfp-section-subtitle">Contact</h2>
      </div>
      <hr className="rfp-divider" />
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Primary contact name</span>
          <input
            className="rfp-input"
            defaultValue={state.contactName ?? ""}
            placeholder="e.g. Grants Team"
            onBlur={(e) => onSetContactName(e.target.value.trim())}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Email</span>
          <input
            className="rfp-input"
            type="email"
            defaultValue={state.email ?? ""}
            placeholder="grants@example.org"
            onBlur={(e) => onSetEmail(e.target.value.trim())}
          />
        </label>
      </div>
    </section>
  );
}
