import { useState } from "react";
import type { GrantSystemState } from "document-models/grant-system";

type On = {
  setExtensions: (v: string) => void;
};

export function ExtensionsPanel({
  state,
  on,
}: {
  state: GrantSystemState;
  on: On;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">
          DAOIP-5 extensions {state.extensions ? "· set" : "· empty"}
        </h2>
        <button
          className="rfp-btn-ghost"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Hide" : "Show"}
        </button>
      </div>
      {expanded ? (
        <>
          <hr className="rfp-divider" />
          <label className="rfp-field">
            <span className="rfp-label">Extensions (JSON)</span>
            <textarea
              className="rfp-textarea"
              defaultValue={state.extensions ?? ""}
              placeholder='{"vendorKey": "value"}'
              onBlur={(e) => on.setExtensions(e.target.value)}
              style={{ fontFamily: "monospace", minHeight: 120 }}
            />
          </label>
        </>
      ) : null}
    </section>
  );
}
