import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type On = {
  advanceLifecycle: (target: GrantPoolState["lifecycle"]) => void;
  publishPool: () => void;
  closePool: () => void;
  cancelPool: (reason: string) => void;
};

export function PoolPublishPanel({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const lifecycle = state.lifecycle;
  const [cancelReason, setCancelReason] = useState("");

  const canPublish =
    state.governanceState !== "APPROVED" && lifecycle !== "CANCELLED";
  const canOpen = lifecycle === "UPCOMING";
  const canClose = lifecycle === "OPEN";
  const canAward = lifecycle === "CLOSED";
  const canCancel = lifecycle !== "CANCELLED" && lifecycle !== "AWARDED";

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Lifecycle</h2>
      <hr className="rfp-divider" />

      <div className="rfp-row" style={{ gap: 12, flexWrap: "wrap" }}>
        <button
          className="rfp-btn-primary"
          disabled={!canPublish}
          onClick={on.publishPool}
        >
          Publish
        </button>
        <button
          className="rfp-btn-secondary"
          disabled={!canOpen}
          onClick={() => on.advanceLifecycle("OPEN")}
        >
          Open for applications
        </button>
        <button
          className="rfp-btn-secondary"
          disabled={!canClose}
          onClick={on.closePool}
        >
          Close
        </button>
        <button
          className="rfp-btn-secondary"
          disabled={!canAward}
          onClick={() => on.advanceLifecycle("AWARDED")}
        >
          Mark awarded
        </button>
        <button
          className="rfp-btn-secondary"
          disabled={!canAward}
          onClick={() => on.advanceLifecycle("NOT_AWARDED")}
        >
          Mark not awarded
        </button>
      </div>

      {canCancel ? (
        <div className="rfp-col" style={{ marginTop: 16 }}>
          <span className="rfp-label">Cancel this pool</span>
          <div className="rfp-row">
            <input
              className="rfp-input"
              style={{ flex: 1 }}
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Reason (optional)"
            />
            <button
              className="rfp-btn-ghost"
              onClick={() => {
                on.cancelPool(cancelReason.trim());
                setCancelReason("");
              }}
              style={{ color: "var(--rfp-error)" }}
            >
              Cancel pool
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
