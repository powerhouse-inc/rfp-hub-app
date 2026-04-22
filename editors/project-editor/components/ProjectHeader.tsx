import type { ProjectState } from "document-models/project";

export function ProjectHeader({ state }: { state: ProjectState }) {
  return (
    <header className="rfp-header">
      <div className="rfp-header-row">
        <div className="rfp-col" style={{ gap: 4 }}>
          <span className="rfp-meta">Project · DAOIP-5</span>
          <h1 className="rfp-h1">{state.name || "Untitled project"}</h1>
          {state.ownerDid ? (
            <p className="rfp-hint">Owner: {state.ownerDid}</p>
          ) : null}
        </div>
        <span
          className={`rfp-status-badge ${
            state.ownerDid ? "rfp-status-approved" : "rfp-status-draft"
          }`}
        >
          {state.ownerDid ? "Identified" : "Draft"}
        </span>
      </div>
      {state.description ? (
        <p className="rfp-body" style={{ maxWidth: 680 }}>
          {state.description}
        </p>
      ) : null}
    </header>
  );
}
