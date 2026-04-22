import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  setExtensions: (v: string) => void;
};

export function PoolExtensions({
  state,
  on,
}: {
  state: GrantPoolState;
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
          <p className="rfp-hint">
            JSON blob forwarded to the DAOIP-5 projection as{" "}
            <code>extensions</code>. Integrator-specific fields go here.
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
