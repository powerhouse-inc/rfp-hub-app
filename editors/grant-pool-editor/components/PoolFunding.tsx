import type { GrantPoolState } from "document-models/grant-pool";

const MECHANISMS = [
  "REQUEST_FOR_PROPOSAL",
  "DIRECT_GRANTS",
  "QUADRATIC_FUNDING",
  "RETRO_FUNDING",
  "BOUNTIES",
  "STREAMING_QUADRATIC_FUNDING",
  "CONVICTION_VOTING",
  "SELF_CURATED_REGISTRIES",
  "GIFT_CIRCLES",
  "SOCIAL_MEDIA_CAPITAL_ALLOCATION",
  "FUTARCHY",
  "ASSURANCE_CONTRACTS",
  "COOKIE_JAR",
  "IMPACT_ATTESTATIONS",
  "STOKVEL",
  "DELEGATED_DOMAIN_ALLOCATION",
  "EVOLUTIONARY_GRANTS_GAMES",
  "DIRECT_TO_CONTRACT_INCENTIVES",
  "ANGEL_INVESTMENT",
  "DOMINANT_ASSURANCE_CONTRACTS",
  "COMMUNITY_CURRENCIES",
  "UNIVERSAL_BASIC_INCOME",
  "GNOSIS_SAFE",
  "WAQF",
  "RANKED_CHOICE_VOTING",
  "HONOUR",
  "MUTUAL_AID_NETWORKS",
  "BONDING_CURVES",
  "ZAKAT",
  "DECENTRALIZED_VALIDATORS",
  "REVNETS",
  "OTHER",
] as const;

type On = {
  setFundingMechanism: (m: GrantPoolState["grantFundingMechanism"]) => void;
  setTotalPoolSizeUsd: (v: { value?: number; unit?: string }) => void;
};

export function PoolFunding({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const totalUsd = state.totalGrantPoolSizeInUSD;
  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Funding</h2>
      <hr className="rfp-divider" />
      <div className="rfp-grid-2">
        <label className="rfp-field">
          <span className="rfp-label">Funding mechanism</span>
          <select
            className="rfp-select"
            value={state.grantFundingMechanism ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              if (v)
                on.setFundingMechanism(
                  v as GrantPoolState["grantFundingMechanism"],
                );
            }}
          >
            <option value="" disabled>
              Select mechanism…
            </option>
            {MECHANISMS.map((m) => (
              <option key={m} value={m}>
                {m.toLowerCase().replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </label>
        <label className="rfp-field">
          <span className="rfp-label">Total pool size (USD)</span>
          <input
            className="rfp-input"
            type="number"
            defaultValue={totalUsd?.value ?? ""}
            placeholder="e.g. 100000"
            onBlur={(e) => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v))
                on.setTotalPoolSizeUsd({ value: v, unit: "USD" });
            }}
          />
        </label>
      </div>
    </section>
  );
}
