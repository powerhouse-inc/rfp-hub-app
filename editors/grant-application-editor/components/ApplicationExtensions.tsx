import { useState } from "react";
import type { GrantApplicationState } from "document-models/grant-application";

type On = {
  setExtensions: (v: string) => void;
};

export function ApplicationExtensions({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasData = !!state.extensions;

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">
          DAOIP-5 extensions {hasData ? "· set" : "· empty"}
        </h2>
        <button
          type="button"
          className="rfp-btn-ghost"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Hide" : "Show"}
        </button>
      </div>
      {expanded ? (
        <>
          <hr className="rfp-divider" />
          <p className="rfp-hint">
            JSON-serialized payload forwarded into the DAOIP-5 projection as
            <code> extensions.powerhouse.*</code>. Custom integrator fields go here.
          </p>
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
