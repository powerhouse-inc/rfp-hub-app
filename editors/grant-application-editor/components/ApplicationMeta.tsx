import type { GrantApplicationState } from "document-models/grant-application";

type On = {
  setLicenseUri: (v: string) => void;
  setIsInactive: (v: boolean) => void;
  setCompletionRate: (v: number | null) => void;
};

export function ApplicationMeta({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Application metadata</h2>
      <hr className="rfp-divider" />

      {/* Read-only refs */}
      <div className="rfp-grid-2">
        <div className="rfp-field">
          <span className="rfp-label">Grant pool</span>
          <div className="rfp-hint">
            {state.grantPoolName || "—"}
            {state.grantPoolId ? (
              <span className="rfp-chip" style={{ marginLeft: 8 }}>
                {String(state.grantPoolId).slice(0, 12)}…
              </span>
            ) : null}
          </div>
        </div>
        <div className="rfp-field">
          <span className="rfp-label">Project</span>
          <div className="rfp-hint">
            {state.projectName || "—"}
            {state.projectId ? (
              <span className="rfp-chip" style={{ marginLeft: 8 }}>
                {String(state.projectId).slice(0, 12)}…
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rfp-grid-2">
        <div className="rfp-field">
          <span className="rfp-label">Created</span>
          <div className="rfp-hint">
            {state.createdAt
              ? new Date(state.createdAt).toLocaleString()
              : "—"}
          </div>
        </div>
        <div className="rfp-field">
          <span className="rfp-label">DAOIP-5 status</span>
          <div className="rfp-hint">
            <strong>{state.status}</strong>
            {state.revisionCount > 0 ? (
              <span style={{ marginLeft: 8 }}>
                · {state.revisionCount} revision
                {state.revisionCount > 1 ? "s" : ""}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Editable meta */}
      <label className="rfp-field">
        <span className="rfp-label">License URL</span>
        <input
          className="rfp-input"
          defaultValue={state.licenseURI ?? ""}
          placeholder="https://opensource.org/licenses/MIT"
          onBlur={(e) => on.setLicenseUri(e.target.value.trim())}
        />
      </label>

      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Completion rate (%)</span>
          <input
            className="rfp-input"
            type="number"
            min="0"
            max="100"
            step="1"
            defaultValue={
              state.applicationCompletionRate != null
                ? String(state.applicationCompletionRate)
                : ""
            }
            placeholder="0 – 100"
            onBlur={(e) => {
              const raw = e.target.value.trim();
              if (!raw) {
                on.setCompletionRate(null);
                return;
              }
              const v = parseFloat(raw);
              if (Number.isFinite(v))
                on.setCompletionRate(Math.max(0, Math.min(100, v)));
            }}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Active</span>
          <div className="rfp-row" style={{ paddingTop: 10 }}>
            <input
              type="checkbox"
              checked={!state.isInactive}
              onChange={(e) => on.setIsInactive(!e.target.checked)}
              id="is-active-toggle"
            />
            <label
              htmlFor="is-active-toggle"
              className="rfp-hint"
              style={{ cursor: "pointer" }}
            >
              {state.isInactive
                ? "Marked inactive"
                : "Active application"}
            </label>
          </div>
        </label>
      </div>

      {/* Review audit trail — read-only */}
      {(state.submitter || state.reviewedBy) && (
        <div className="rfp-grid-2">
          {state.submitter ? (
            <div className="rfp-field">
              <span className="rfp-label">Submitted by</span>
              <div className="rfp-hint">
                <span className="rfp-chip">
                  {state.submitter.submitterType.toLowerCase().replace(/_/g, " ")}
                </span>
                <span style={{ marginLeft: 8 }}>
                  {state.submitter.identifier}
                </span>
                {state.submittedAt ? (
                  <div style={{ marginTop: 4 }}>
                    {new Date(state.submittedAt).toLocaleString()}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          {state.reviewedBy ? (
            <div className="rfp-field">
              <span className="rfp-label">Reviewed by</span>
              <div className="rfp-hint">
                {state.reviewedBy}
                {state.reviewedAt ? (
                  <div style={{ marginTop: 4 }}>
                    {new Date(state.reviewedAt).toLocaleString()}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
