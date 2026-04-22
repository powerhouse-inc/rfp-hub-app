import type { GrantApplicationState } from "document-models/grant-application";

type On = {
  setContent: (v: string) => void;
  setDiscussions: (v: string) => void;
};

export function ApplicationContent({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Application</h2>
      <hr className="rfp-divider" />
      <label className="rfp-field">
        <span className="rfp-label">Proposal content URL</span>
        <input
          className="rfp-input"
          defaultValue={state.contentURI ?? ""}
          placeholder="https://… (your proposal markdown / PDF)"
          onBlur={(e) => on.setContent(e.target.value.trim())}
        />
      </label>
      <label className="rfp-field">
        <span className="rfp-label">Discussion thread</span>
        <input
          className="rfp-input"
          defaultValue={state.discussionsTo ?? ""}
          placeholder="https://forum.example.org/…"
          onBlur={(e) => on.setDiscussions(e.target.value.trim())}
        />
      </label>
    </section>
  );
}
