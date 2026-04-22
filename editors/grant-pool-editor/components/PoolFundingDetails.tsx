import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  addPoolSizeEntry: (value: number, unit: string) => void;
  removePoolSizeEntry: (id: string) => void;
  setGrantBounds: (
    minValue: number,
    minUnit: string,
    maxValue: number,
    maxUnit: string,
  ) => void;
};

function fmt(amount: { value?: number | null; unit?: string | null } | null | undefined) {
  if (!amount) return "—";
  const v = amount.value;
  const u = amount.unit || "";
  if (v == null) return "—";
  return `${v.toLocaleString()} ${u}`.trim();
}

export function PoolFundingDetails({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const [entryValue, setEntryValue] = useState("");
  const [entryUnit, setEntryUnit] = useState("USDC");
  const [minValue, setMinValue] = useState(
    state.minGrant[0]?.amount?.value != null
      ? String(state.minGrant[0].amount.value)
      : "",
  );
  const [minUnit, setMinUnit] = useState(
    state.minGrant[0]?.amount?.unit ?? "USD",
  );
  const [maxValue, setMaxValue] = useState(
    state.maxGrant[0]?.amount?.value != null
      ? String(state.maxGrant[0].amount.value)
      : "",
  );
  const [maxUnit, setMaxUnit] = useState(
    state.maxGrant[0]?.amount?.unit ?? "USD",
  );

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Pool size & grant bounds</h2>
      <hr className="rfp-divider" />

      {/* Pool size entries */}
      <div className="rfp-col">
        <span className="rfp-label">Total pool size entries</span>
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            type="number"
            step="any"
            value={entryValue}
            onChange={(e) => setEntryValue(e.target.value)}
            placeholder="Amount"
          />
          <input
            className="rfp-input"
            style={{ maxWidth: 140 }}
            value={entryUnit}
            onChange={(e) => setEntryUnit(e.target.value)}
            placeholder="USDC"
          />
          <button
            className="rfp-btn-secondary"
            disabled={!entryValue.trim() || !entryUnit.trim()}
            onClick={() => {
              const v = parseFloat(entryValue);
              if (Number.isFinite(v)) {
                on.addPoolSizeEntry(v, entryUnit.trim());
                setEntryValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {state.totalGrantPoolSize.length === 0 ? (
          <div className="rfp-empty">No pool size entries yet.</div>
        ) : (
          <ul className="rfp-list">
            {state.totalGrantPoolSize.map((entry) => (
              <li key={entry.id} className="rfp-list-item">
                <span>{fmt(entry.amount)}</span>
                <button
                  className="rfp-btn-ghost"
                  onClick={() => on.removePoolSizeEntry(entry.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="rfp-divider" />

      {/* Grant bounds */}
      <div className="rfp-col">
        <span className="rfp-label">Per-grant bounds (min / max)</span>
        <p className="rfp-hint">
          The smallest and largest grant a single applicant can receive from
          this pool. Saving replaces current bounds.
        </p>
        <div className="rfp-grid-2">
          <div className="rfp-row">
            <input
              className="rfp-input"
              type="number"
              step="any"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              placeholder="Min"
            />
            <input
              className="rfp-input"
              style={{ maxWidth: 100 }}
              value={minUnit}
              onChange={(e) => setMinUnit(e.target.value)}
              placeholder="USD"
            />
          </div>
          <div className="rfp-row">
            <input
              className="rfp-input"
              type="number"
              step="any"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              placeholder="Max"
            />
            <input
              className="rfp-input"
              style={{ maxWidth: 100 }}
              value={maxUnit}
              onChange={(e) => setMaxUnit(e.target.value)}
              placeholder="USD"
            />
          </div>
        </div>
        <button
          className="rfp-btn-secondary"
          disabled={!minValue.trim() || !maxValue.trim()}
          onClick={() => {
            const mv = parseFloat(minValue);
            const Mv = parseFloat(maxValue);
            if (Number.isFinite(mv) && Number.isFinite(Mv)) {
              on.setGrantBounds(mv, minUnit.trim() || "USD", Mv, maxUnit.trim() || "USD");
            }
          }}
          style={{ alignSelf: "flex-start" }}
        >
          Save bounds
        </button>
        {state.minGrant.length > 0 || state.maxGrant.length > 0 ? (
          <div className="rfp-hint">
            Current: min {fmt(state.minGrant[0]?.amount)} · max{" "}
            {fmt(state.maxGrant[0]?.amount)}
          </div>
        ) : null}
      </div>
    </section>
  );
}
