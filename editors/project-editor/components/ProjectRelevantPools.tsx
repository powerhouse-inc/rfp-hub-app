import { useState } from "react";
import type { ProjectState } from "document-models/project";

type On = {
  addRelevantPool: (poolId: string, poolName: string) => void;
  removeRelevantPool: (id: string) => void;
};

export function ProjectRelevantPools({
  state,
  on,
}: {
  state: ProjectState;
  on: On;
}) {
  const [poolId, setPoolId] = useState("");
  const [poolName, setPoolName] = useState("");
  const add = () => {
    if (!poolId.trim() || !poolName.trim()) return;
    on.addRelevantPool(poolId.trim(), poolName.trim());
    setPoolId("");
    setPoolName("");
  };
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Relevant grant pools</h2>
      <hr className="rfp-divider" />
      <p className="rfp-hint">
        Pools this project is interested in — acts as a soft signal until a
        formal application is submitted.
      </p>
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={poolId}
          onChange={(e) => setPoolId(e.target.value)}
          placeholder="Pool PHID"
        />
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={poolName}
          onChange={(e) => setPoolName(e.target.value)}
          placeholder="Pool name (cached)"
        />
        <button
          className="rfp-btn-secondary"
          onClick={add}
          disabled={!poolId.trim() || !poolName.trim()}
        >
          Add
        </button>
      </div>
      {state.relevantTo.length === 0 ? (
        <div className="rfp-empty">No relevant pools yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.relevantTo.map((r) => (
            <li key={r.id} className="rfp-list-item">
              <div className="rfp-col" style={{ gap: 2, flex: 1 }}>
                <strong>{r.poolName}</strong>
                <span className="rfp-hint">{r.poolId}</span>
              </div>
              <button
                className="rfp-btn-ghost"
                onClick={() => on.removeRelevantPool(r.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
