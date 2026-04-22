import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  setOpenDate: (iso: string) => void;
  setCloseDate: (iso: string) => void;
};

function toLocalInputValue(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 16);
}

export function PoolSchedule({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Schedule</h2>
      <hr className="rfp-divider" />
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Opens</span>
          <input
            className="rfp-input"
            type="datetime-local"
            defaultValue={toLocalInputValue(state.openDate)}
            onBlur={(e) => {
              if (e.target.value)
                on.setOpenDate(new Date(e.target.value).toISOString());
            }}
          />
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Closes</span>
          <input
            className="rfp-input"
            type="datetime-local"
            defaultValue={toLocalInputValue(state.closeDate)}
            onBlur={(e) => {
              if (e.target.value)
                on.setCloseDate(new Date(e.target.value).toISOString());
            }}
          />
        </label>
      </div>
    </section>
  );
}
