import { useState } from "react";
import type { GrantApplicationState } from "document-models/grant-application";

type Amount = { value?: number | null; unit?: string | null };

type On = {
  addFundsAsked: (value: number, unit: string) => void;
  removeFundsAsked: (id: string) => void;
  setFundsAskedUsd: (v: Amount) => void;
  addFundsApproved: (value: number, unit: string) => void;
  setFundsApprovedUsd: (v: Amount) => void;
  setPayoutAddress: (addressType: string, value: string) => void;
  setPaymentTerm: (v: GrantApplicationState["paymentTerm"]) => void;
};

const PAYMENT_TERMS = [
  "MILESTONE_BASED_FIXED_PRICE",
  "MILESTONE_BASED_ADVANCE_PAYMENT",
  "RETAINER_BASED",
  "VARIABLE_COST",
  "ESCROW",
] as const;

const ADDRESS_TYPES = [
  "EthereumAddress",
  "CAIP10Address",
  "IBAN",
  "SWIFT_BIC",
  "StripePaymentMethod",
  "Other",
];

function formatAmount(a: { value?: number | null; unit?: string | null } | null | undefined) {
  if (!a) return "—";
  const v = a.value;
  const u = a.unit || "";
  if (v == null) return "—";
  return `${v.toLocaleString()} ${u}`.trim();
}

export function ApplicationFunding({
  state,
  on,
}: {
  state: GrantApplicationState;
  on: On;
}) {
  const [askValue, setAskValue] = useState("");
  const [askUnit, setAskUnit] = useState("USDC");
  const [approvedValue, setApprovedValue] = useState("");
  const [approvedUnit, setApprovedUnit] = useState("USDC");
  const [addressType, setAddressType] = useState(
    state.payoutAddress?.addressType ?? "EthereumAddress",
  );
  const [addressValue, setAddressValue] = useState(
    state.payoutAddress?.value ?? "",
  );

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Funding</h2>
      <hr className="rfp-divider" />

      {/* Funds asked */}
      <div className="rfp-col">
        <span className="rfp-label">Funds asked</span>
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            type="number"
            step="any"
            value={askValue}
            onChange={(e) => setAskValue(e.target.value)}
            placeholder="Amount (e.g. 50000)"
          />
          <input
            className="rfp-input"
            style={{ maxWidth: 140 }}
            value={askUnit}
            onChange={(e) => setAskUnit(e.target.value)}
            placeholder="USDC"
          />
          <button
            className="rfp-btn-secondary"
            disabled={!askValue.trim() || !askUnit.trim()}
            onClick={() => {
              const v = parseFloat(askValue);
              if (Number.isFinite(v)) {
                on.addFundsAsked(v, askUnit.trim());
                setAskValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {state.fundsAsked.length === 0 ? (
          <div className="rfp-empty">No amounts requested yet.</div>
        ) : (
          <ul className="rfp-list">
            {state.fundsAsked.map((entry) => (
              <li key={entry.id} className="rfp-list-item">
                <span>{formatAmount(entry.amount)}</span>
                <button
                  className="rfp-btn-ghost"
                  onClick={() => on.removeFundsAsked(entry.id)}
                  aria-label="Remove"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <label className="rfp-field">
          <span className="rfp-label">Total asked, USD (normalized)</span>
          <input
            className="rfp-input"
            type="number"
            step="any"
            defaultValue={state.fundsAskedInUSD?.value ?? ""}
            placeholder="Total in USD"
            onBlur={(e) => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v))
                on.setFundsAskedUsd({ value: v, unit: "USD" });
            }}
          />
        </label>
      </div>

      <hr className="rfp-divider" />

      {/* Funds approved — read-mostly, only reviewers typically add */}
      <div className="rfp-col">
        <span className="rfp-label">Funds approved</span>
        <div className="rfp-row">
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            type="number"
            step="any"
            value={approvedValue}
            onChange={(e) => setApprovedValue(e.target.value)}
            placeholder="Approved amount"
          />
          <input
            className="rfp-input"
            style={{ maxWidth: 140 }}
            value={approvedUnit}
            onChange={(e) => setApprovedUnit(e.target.value)}
            placeholder="USDC"
          />
          <button
            className="rfp-btn-secondary"
            disabled={!approvedValue.trim() || !approvedUnit.trim()}
            onClick={() => {
              const v = parseFloat(approvedValue);
              if (Number.isFinite(v)) {
                on.addFundsApproved(v, approvedUnit.trim());
                setApprovedValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {state.fundsApproved.length === 0 ? (
          <div className="rfp-empty">No amounts approved yet.</div>
        ) : (
          <ul className="rfp-list">
            {state.fundsApproved.map((entry) => (
              <li key={entry.id} className="rfp-list-item">
                <span>{formatAmount(entry.amount)}</span>
              </li>
            ))}
          </ul>
        )}
        <label className="rfp-field">
          <span className="rfp-label">Total approved, USD</span>
          <input
            className="rfp-input"
            type="number"
            step="any"
            defaultValue={state.fundsApprovedInUSD?.value ?? ""}
            placeholder="Total in USD"
            onBlur={(e) => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v))
                on.setFundsApprovedUsd({ value: v, unit: "USD" });
            }}
          />
        </label>
      </div>

      <hr className="rfp-divider" />

      {/* Payout address */}
      <div className="rfp-col">
        <span className="rfp-label">Payout address</span>
        <div className="rfp-row">
          <select
            className="rfp-select"
            style={{ maxWidth: 200 }}
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
          >
            {ADDRESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
            placeholder="0x… or IBAN…"
          />
          <button
            className="rfp-btn-secondary"
            disabled={!addressValue.trim()}
            onClick={() => on.setPayoutAddress(addressType, addressValue.trim())}
          >
            Save
          </button>
        </div>
        {state.payoutAddress ? (
          <div className="rfp-hint">
            Current: <strong>{state.payoutAddress.addressType}</strong> ·{" "}
            {state.payoutAddress.value}
          </div>
        ) : null}
      </div>

      <label className="rfp-field">
        <span className="rfp-label">Payment term</span>
        <select
          className="rfp-select"
          value={state.paymentTerm ?? ""}
          onChange={(e) => {
            const v = e.target.value;
            if (v) on.setPaymentTerm(v as GrantApplicationState["paymentTerm"]);
          }}
        >
          <option value="" disabled>
            Select payment term…
          </option>
          {PAYMENT_TERMS.map((t) => (
            <option key={t} value={t}>
              {t.toLowerCase().replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
