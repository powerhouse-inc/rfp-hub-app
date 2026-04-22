import type { GrantPoolDocument } from "../../../../document-models/grant-pool/v1/gen/types.js";
import type { GrantApplicationDocument } from "../../../../document-models/grant-application/v1/gen/types.js";
import type { GovernanceDocument } from "../../../../document-models/governance/v1/gen/types.js";

function sumFundedUsd(apps: GrantApplicationDocument[]): number {
  return apps.reduce((acc, app) => {
    const usd = app.state.global.fundsApprovedInUSD;
    if (usd && typeof usd.value === "number") return acc + usd.value;
    return acc;
  }, 0);
}

function formatUsd(value: number): string {
  if (value === 0) return "$0";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}k`;
  return `$${value.toFixed(0)}`;
}

export function StatsRow({
  pools,
  applications,
  governance,
  onPoolsClick,
  onApplicationsClick,
}: {
  pools: GrantPoolDocument[];
  applications: GrantApplicationDocument[];
  governance: GovernanceDocument[];
  onPoolsClick?: () => void;
  onApplicationsClick?: () => void;
}) {
  const openPools = pools.filter((p) => p.state.global.lifecycle === "OPEN");
  const closedPools = pools.filter((p) =>
    ["CLOSED", "AWARDED", "NOT_AWARDED", "CANCELLED"].includes(
      p.state.global.lifecycle,
    ),
  );

  const activeApps = applications.filter((a) =>
    ["SUBMITTED", "OPENED", "UNDER_REVIEW", "REVISED", "NEEDS_REVISION"].includes(
      a.state.global.reviewStage,
    ),
  );
  const fundedApps = applications.filter((a) =>
    ["FUNDED", "COMPLETED"].includes(a.state.global.reviewStage),
  );
  const fundedUsd = sumFundedUsd(applications);

  const openDisputes = governance.reduce(
    (sum, g) =>
      sum +
      (g.state.global.disputes ?? []).filter(
        (d) => d.status === "OPEN" || d.status === "INVESTIGATING",
      ).length,
    0,
  );

  const tiles: ReadonlyArray<{
    label: string;
    value: string | number;
    sub: string;
    danger?: boolean;
    onClick?: () => void;
  }> = [
    {
      label: "Pools",
      value: pools.length,
      sub: `${openPools.length} open · ${closedPools.length} closed`,
      onClick: onPoolsClick,
    },
    {
      label: "Active applications",
      value: activeApps.length,
      sub: "Pending · in review · needs revision",
      onClick: onApplicationsClick,
    },
    {
      label: "Funded",
      value: fundedApps.length,
      sub: formatUsd(fundedUsd),
    },
    {
      label: "Disputes",
      value: openDisputes,
      sub: openDisputes === 0 ? "All clear" : "Open governance items",
      danger: openDisputes > 0,
    },
  ];

  return (
    <div className="rfp-grid-4">
      {tiles.map((tile) => (
        <button
          key={tile.label}
          type="button"
          className={`rfp-stat-tile${tile.danger ? " rfp-stat-tile-danger" : ""}`}
          onClick={tile.onClick}
          style={{
            cursor: tile.onClick ? "pointer" : "default",
            textAlign: "left",
            border: 0,
            font: "inherit",
          }}
        >
          <span className="rfp-stat-tile-label">{tile.label}</span>
          <span className="rfp-stat-tile-value">{tile.value}</span>
          <span className="rfp-hint">{tile.sub}</span>
        </button>
      ))}
    </div>
  );
}
