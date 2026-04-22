import { useState } from "react";
import { setSelectedNode } from "@powerhousedao/reactor-browser";
import type { GrantApplicationDocument } from "../../../../document-models/grant-application/v1/gen/types.js";
import {
  KANBAN_COLUMNS,
  REVIEW_STAGE_CLASS,
  daysSince,
} from "./constants.js";

const COLLAPSED_PER_COLUMN = 3;

function groupByColumn(
  apps: GrantApplicationDocument[],
): Record<string, GrantApplicationDocument[]> {
  const out: Record<string, GrantApplicationDocument[]> = {};
  for (const col of KANBAN_COLUMNS) out[col.key] = [];
  for (const app of apps) {
    const stage = app.state.global.reviewStage;
    const col = KANBAN_COLUMNS.find((c) =>
      (c.stages as ReadonlyArray<string>).includes(stage),
    );
    if (col) out[col.key].push(app);
  }
  return out;
}

function KanbanCard({ app }: { app: GrantApplicationDocument }) {
  const state = app.state.global;
  const days = daysSince(state.submittedAt);
  return (
    <div
      className="rfp-doc-card"
      onClick={() => setSelectedNode(app.header.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          setSelectedNode(app.header.id);
      }}
    >
      <span className="rfp-doc-card-title">
        {state.projectName ?? app.header.name ?? "Unnamed application"}
      </span>
      <span className="rfp-doc-card-meta">
        → {state.grantPoolName ?? "No pool linked"}
      </span>
      <div
        className="rfp-row"
        style={{ justifyContent: "space-between", gap: 6 }}
      >
        <span
          className={`rfp-status-badge ${
            REVIEW_STAGE_CLASS[state.reviewStage] ?? "rfp-status-draft"
          }`}
        >
          {state.reviewStage.replace(/_/g, " ").toLowerCase()}
        </span>
        <span className="rfp-doc-card-meta">
          {state.revisionCount > 0 ? `rev ${state.revisionCount} · ` : ""}
          {days !== null ? `${days}d` : "—"}
        </span>
      </div>
    </div>
  );
}

export function ReviewKanban({
  applications,
  hasPools,
}: {
  applications: GrantApplicationDocument[];
  hasPools: boolean;
}) {
  const grouped = groupByColumn(applications);
  const [expandAll, setExpandAll] = useState(false);
  const [expandedColumns, setExpandedColumns] = useState<Set<string>>(
    () => new Set(),
  );

  // Count only apps that fall into a visible column (drafts are intentionally
  // hidden from the review queue), so the header count matches what renders.
  const visibleTotal = KANBAN_COLUMNS.reduce(
    (sum, col) => sum + (grouped[col.key]?.length ?? 0),
    0,
  );
  const overflowColumns = KANBAN_COLUMNS.filter(
    (col) => (grouped[col.key]?.length ?? 0) > COLLAPSED_PER_COLUMN,
  );
  const hasAnyOverflow = overflowColumns.length > 0;

  function toggleColumn(key: string) {
    setExpandedColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function toggleAll() {
    if (expandAll) {
      setExpandAll(false);
      setExpandedColumns(new Set());
    } else {
      setExpandAll(true);
      setExpandedColumns(new Set(overflowColumns.map((c) => c.key)));
    }
  }

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h2 className="rfp-section-subtitle">
          Review queue · {visibleTotal}
        </h2>
        <div className="rfp-row" style={{ gap: 10 }}>
          {hasAnyOverflow ? (
            <button
              type="button"
              className="rfp-link-button"
              onClick={toggleAll}
            >
              {expandAll ? "Collapse all" : "Expand all"}
            </button>
          ) : null}
          <span className="rfp-meta">DAOIP-5 GrantApplication</span>
        </div>
      </div>
      <hr className="rfp-divider" />
      {!hasPools ? (
        <p className="rfp-locked-hint">
          Applications appear once a grant pool is published and receives
          submissions.
        </p>
      ) : visibleTotal === 0 ? (
        <div className="rfp-empty">
          Waiting for the first application. Applicants submit through Fusion
          — new submissions land here automatically.
        </div>
      ) : (
        <div className="rfp-kanban">
          {KANBAN_COLUMNS.map((col) => {
            const apps = grouped[col.key];
            const hasOverflow = apps.length > COLLAPSED_PER_COLUMN;
            const isExpanded = expandedColumns.has(col.key);
            const visibleApps =
              hasOverflow && !isExpanded
                ? apps.slice(0, COLLAPSED_PER_COLUMN)
                : apps;
            const hiddenCount = apps.length - visibleApps.length;
            return (
              <div key={col.key} className="rfp-stage-column">
                <div className="rfp-stage-column-header">
                  <h3 className="rfp-stage-column-title">{col.label}</h3>
                  <span className="rfp-chip">{apps.length}</span>
                </div>
                {apps.length === 0 ? (
                  <span className="rfp-locked-hint">Empty</span>
                ) : (
                  <>
                    {visibleApps.map((app) => (
                      <KanbanCard key={app.header.id} app={app} />
                    ))}
                    {hasOverflow ? (
                      <button
                        type="button"
                        className="rfp-link-button rfp-kanban-more"
                        onClick={() => toggleColumn(col.key)}
                      >
                        {isExpanded
                          ? "Show less"
                          : `Show ${hiddenCount} more`}
                      </button>
                    ) : null}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
