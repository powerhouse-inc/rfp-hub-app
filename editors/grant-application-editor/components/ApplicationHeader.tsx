import type { GrantApplicationState } from "document-models/grant-application";
import { STAGE_CLASS, STAGE_LABEL } from "./constants.js";

export function ApplicationHeader({
  state,
}: {
  state: GrantApplicationState;
}) {
  const stage = state.reviewStage;
  return (
    <header className="rfp-header">
      <div className="rfp-header-row">
        <div className="rfp-col">
          <span className="rfp-meta">Grant Application · DAOIP-5</span>
          <h1 className="rfp-h1">
            {state.projectName || "Unnamed project"} →{" "}
            {state.grantPoolName || "pool"}
          </h1>
          <p className="rfp-hint">
            DAOIP-5 status: <strong>{state.status}</strong>
            {state.revisionCount > 0
              ? ` · ${state.revisionCount} revision${state.revisionCount > 1 ? "s" : ""}`
              : ""}
          </p>
        </div>
        <span
          className={`rfp-status-badge ${STAGE_CLASS[stage] ?? "rfp-status-draft"}`}
        >
          {STAGE_LABEL[stage] ?? stage}
        </span>
      </div>
    </header>
  );
}
