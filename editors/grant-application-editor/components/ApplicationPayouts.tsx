import { useState } from "react";
import type { GrantApplicationState } from "document-models/grant-application";

type On = {
  recordPayout: (
    payoutType: string,
    value: string,
    proof: string,
  ) => void;
  markCompleted: () => void;
};

const PAYOUT_TYPES = [
  "OnchainTransaction",
  "CallDataEVM",
  "StripePayment",
  "InvoicePayment",
  "Other",
];

export function ApplicationPayouts({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const [payoutType, setPayoutType] = useState("OnchainTransaction");
  const [value, setValue] = useState("");
  const [proof, setProof] = useState("");

  const canComplete = state.reviewStage === "FUNDED";

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Payouts</h2>
      <hr className="rfp-divider" />

      <div className="rfp-col">
        <span className="rfp-label">Record a payout</span>
        <div className="rfp-grid-2">
          <select
            className="rfp-select"
            value={payoutType}
            onChange={(e) => setPayoutType(e.target.value)}
          >
            {PAYOUT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <input
            className="rfp-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="tx hash / invoice id / payment id"
          />
        </div>
        <input
          className="rfp-input"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          placeholder="Proof (etherscan URL, receipt link, etc.) — optional"
        />
        <button
          className="rfp-btn-primary"
          disabled={!value.trim()}
          onClick={() => {
            on.recordPayout(payoutType, value.trim(), proof.trim());
            setValue("");
            setProof("");
          }}
          style={{ alignSelf: "flex-start" }}
        >
          Record payout
        </button>
      </div>

      {state.payouts.length === 0 ? (
        <div className="rfp-empty">No payouts recorded yet.</div>
      ) : (
        <ul className="rfp-list">
          {state.payouts.map((p) => (
            <li key={p.id} className="rfp-list-item">
              <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
                <div className="rfp-row" style={{ gap: 8 }}>
                  <span className="rfp-chip">{p.payoutType}</span>
                  <strong>{p.value}</strong>
                </div>
                {p.proof ? (
                  <a
                    href={p.proof}
                    target="_blank"
                    rel="noreferrer"
                    className="rfp-hint"
                  >
                    Proof ↗
                  </a>
                ) : null}
                <div className="rfp-hint">
                  {new Date(p.timestamp).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        className="rfp-btn-secondary"
        disabled={!canComplete}
        onClick={on.markCompleted}
        style={{ alignSelf: "flex-start" }}
      >
        Mark completed
      </button>
    </section>
  );
}
