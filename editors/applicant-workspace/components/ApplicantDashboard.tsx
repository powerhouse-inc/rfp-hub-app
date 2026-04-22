import type { EditorProps, PHDocument } from "document-model";
import {
  addDocument,
  setSelectedNode,
  useDocumentsInSelectedDrive,
  useSelectedDrive,
} from "@powerhousedao/reactor-browser";
import { useCallback, useMemo, useState } from "react";
import type { ProjectDocument } from "../../../document-models/project/v1/gen/types.js";
import type {
  GrantApplicationDocument,
  ReviewStage,
} from "../../../document-models/grant-application/v1/gen/types.js";
import { DocumentBrowser } from "./DocumentBrowser.js";

const DOC_TYPE = {
  project: "rfp-hub/project",
  grantApplication: "rfp-hub/grant-application",
} as const;

const REVIEW_STAGE_CLASS: Record<ReviewStage, string> = {
  DRAFT: "rfp-status-draft",
  SUBMITTED: "rfp-status-pending",
  OPENED: "rfp-status-pending",
  UNDER_REVIEW: "rfp-status-review",
  NEEDS_REVISION: "rfp-status-pending",
  REVISED: "rfp-status-review",
  APPROVED: "rfp-status-approved",
  CONDITIONALLY_APPROVED: "rfp-status-approved",
  REJECTED: "rfp-status-rejected",
  WITHDRAWN: "rfp-status-closed",
  FUNDED: "rfp-status-funded",
  COMPLETED: "rfp-status-completed",
};

type GroupKey = "drafts" | "inFlight" | "decided" | "funded";

const GROUPS: ReadonlyArray<{
  key: GroupKey;
  label: string;
  description: string;
  stages: ReadonlyArray<ReviewStage>;
}> = [
  {
    key: "drafts",
    label: "Drafts",
    description: "Not submitted yet",
    stages: ["DRAFT", "NEEDS_REVISION"],
  },
  {
    key: "inFlight",
    label: "In flight",
    description: "Awaiting funder review",
    stages: ["SUBMITTED", "OPENED", "UNDER_REVIEW", "REVISED"],
  },
  {
    key: "decided",
    label: "Decided",
    description: "Outcome received",
    stages: [
      "APPROVED",
      "CONDITIONALLY_APPROVED",
      "REJECTED",
      "WITHDRAWN",
    ],
  },
  {
    key: "funded",
    label: "Funded / Active",
    description: "Money received or work completed",
    stages: ["FUNDED", "COMPLETED"],
  },
];

function isDocumentOfType(doc: PHDocument, type: string): boolean {
  return doc.header.documentType === type;
}

export function ApplicantDashboard({ children }: EditorProps) {
  const showDocumentEditor = !!children;
  const documents = useDocumentsInSelectedDrive();
  const [selectedDrive] = useSelectedDrive();
  const [creatingType, setCreatingType] = useState<string | null>(null);

  const driveId = selectedDrive?.header.id;

  const projects = useMemo(
    () =>
      (documents ?? []).filter((d): d is ProjectDocument =>
        isDocumentOfType(d, DOC_TYPE.project),
      ),
    [documents],
  );

  const applications = useMemo(
    () =>
      (documents ?? []).filter((d): d is GrantApplicationDocument =>
        isDocumentOfType(d, DOC_TYPE.grantApplication),
      ),
    [documents],
  );

  const hasProject = projects.length > 0;

  const handleCreate = useCallback(
    async (documentType: string, name: string) => {
      if (!driveId || creatingType) return;
      setCreatingType(documentType);
      try {
        const node = await addDocument(driveId, name, documentType);
        if (node?.id) setSelectedNode(node.id);
      } catch (err) {
        console.error(`Failed to create ${documentType}:`, err);
      } finally {
        setCreatingType(null);
      }
    },
    [driveId, creatingType],
  );

  const applicationsByGroup = useMemo(() => {
    const grouped: Record<GroupKey, GrantApplicationDocument[]> = {
      drafts: [],
      inFlight: [],
      decided: [],
      funded: [],
    };
    for (const app of applications) {
      const stage = app.state.global.reviewStage;
      const group = GROUPS.find((g) =>
        (g.stages as ReadonlyArray<string>).includes(stage),
      );
      if (group) grouped[group.key].push(app);
    }
    return grouped;
  }, [applications]);

  const needsRevision = useMemo(
    () =>
      applications.filter(
        (a) => a.state.global.reviewStage === "NEEDS_REVISION",
      ),
    [applications],
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <DocumentBrowser
        mode="applicant"
        onCreate={handleCreate}
        creatingType={creatingType}
        canCreate={!!driveId}
      />
      <div style={{ flex: 1, overflowY: "auto" }}>
        {showDocumentEditor ? (
          children
        ) : (
          <div className="rfp-page">
            <div className="rfp-page-inner">
              {!hasProject ? (
                <OnboardingHero
                  isCreating={creatingType === DOC_TYPE.project}
                  onCreate={() =>
                    handleCreate(DOC_TYPE.project, "My project")
                  }
                />
              ) : (
                <>
                  <header className="rfp-header">
                    <span className="rfp-meta">
                      RFP Hub · My workspace
                    </span>
                    <h1 className="rfp-h1">Your applications</h1>
                    <p className="rfp-hint">
                      Keep your project profile fresh and track every
                      application you've submitted.
                    </p>
                  </header>

                  {/* Reviewer feedback spotlight */}
                  {needsRevision.length > 0 ? (
                    <ReviewerFeedbackSpotlight apps={needsRevision} />
                  ) : null}

                  {/* Stats */}
                  <div className="rfp-grid-4">
                    <StatTile
                      label="Drafts"
                      value={applicationsByGroup.drafts.length}
                    />
                    <StatTile
                      label="In flight"
                      value={applicationsByGroup.inFlight.length}
                    />
                    <StatTile
                      label="Decided"
                      value={applicationsByGroup.decided.length}
                    />
                    <StatTile
                      label="Funded"
                      value={applicationsByGroup.funded.length}
                    />
                  </div>

                  {/* Project profile list */}
                  <section className="rfp-card rfp-section">
                    <div
                      className="rfp-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h2 className="rfp-section-subtitle">
                        Project profile · {projects.length}
                      </h2>
                      <button
                        type="button"
                        className="rfp-btn-secondary"
                        disabled={
                          creatingType === DOC_TYPE.project || !driveId
                        }
                        onClick={() =>
                          handleCreate(
                            DOC_TYPE.project,
                            `Project ${projects.length + 1}`,
                          )
                        }
                      >
                        {creatingType === DOC_TYPE.project
                          ? "Creating…"
                          : "+ Add another project"}
                      </button>
                    </div>
                    <hr className="rfp-divider" />
                    <ul className="rfp-list">
                      {projects.map((p) => (
                        <ProjectListItem
                          key={p.header.id}
                          project={p}
                          onClick={() => setSelectedNode(p.header.id)}
                        />
                      ))}
                    </ul>
                  </section>

                  {/* Applications list */}
                  <section className="rfp-card rfp-section">
                    <div
                      className="rfp-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h2 className="rfp-section-subtitle">
                        Applications · {applications.length}
                      </h2>
                      <span className="rfp-meta">
                        DAOIP-5 GrantApplication
                      </span>
                    </div>
                    <hr className="rfp-divider" />
                    {applications.length === 0 ? (
                      <EmptyApplicationsCallout />
                    ) : (
                      <div className="rfp-col" style={{ gap: 24 }}>
                        {GROUPS.map((group) => {
                          const apps = applicationsByGroup[group.key];
                          if (apps.length === 0) return null;
                          return (
                            <div
                              key={group.key}
                              className="rfp-col"
                              style={{ gap: 12 }}
                            >
                              <div
                                className="rfp-row"
                                style={{
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  className="rfp-col"
                                  style={{ gap: 2 }}
                                >
                                  <h3 className="rfp-stage-column-title">
                                    {group.label} · {apps.length}
                                  </h3>
                                  <span className="rfp-locked-hint">
                                    {group.description}
                                  </span>
                                </div>
                              </div>
                              <div className="rfp-grid-2">
                                {apps.map((app) => (
                                  <ApplicationCard
                                    key={app.header.id}
                                    app={app}
                                    onClick={() =>
                                      setSelectedNode(app.header.id)
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>

                  {/* Fusion discovery callout */}
                  <FusionDiscoveryCallout />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OnboardingHero({
  isCreating,
  onCreate,
}: {
  isCreating: boolean;
  onCreate: () => void;
}) {
  return (
    <div style={{ padding: "48px 0" }}>
      <div className="rfp-hero">
        <span className="rfp-hero-badge">Step 1 of 2</span>
        <h2 className="rfp-hero-title">Complete your profile</h2>
        <p className="rfp-hero-body">
          Welcome to your Applicant Workspace. Start by creating your project
          profile — it becomes your reusable "common application" across every
          pool you apply to. No profile, no applications.
        </p>
        <button
          type="button"
          className="rfp-btn-primary-lg"
          onClick={onCreate}
          disabled={isCreating}
        >
          {isCreating ? "Creating…" : "Create your project profile →"}
        </button>
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rfp-stat-tile">
      <span className="rfp-stat-tile-label">{label}</span>
      <span className="rfp-stat-tile-value">{value}</span>
    </div>
  );
}

function ProjectListItem({
  project,
  onClick,
}: {
  project: ProjectDocument;
  onClick: () => void;
}) {
  const state = project.state.global;
  return (
    <li
      className="rfp-list-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
        <strong>
          {state.name ?? project.header.name ?? "Unnamed project"}
        </strong>
        {state.description ? (
          <span
            className="rfp-meta"
            style={{
              textTransform: "none",
              letterSpacing: "normal",
              maxWidth: 520,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {state.description}
          </span>
        ) : (
          <span className="rfp-meta">rfp-hub/project</span>
        )}
      </div>
      <span className="rfp-chip">
        {state.relevantTo?.length ?? 0} pools
      </span>
    </li>
  );
}

function ApplicationCard({
  app,
  onClick,
}: {
  app: GrantApplicationDocument;
  onClick: () => void;
}) {
  const state = app.state.global;
  const stageClass =
    REVIEW_STAGE_CLASS[state.reviewStage] ?? "rfp-status-draft";
  return (
    <div
      className="rfp-doc-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <span className="rfp-doc-card-title">
        {state.grantPoolName ?? "Unlinked pool"}
      </span>
      <span className="rfp-doc-card-meta">
        {state.projectName ?? app.header.name ?? "Unnamed application"}
      </span>
      <div
        className="rfp-row"
        style={{ justifyContent: "space-between", gap: 6 }}
      >
        <span className={`rfp-status-badge ${stageClass}`}>
          {state.reviewStage.replace(/_/g, " ").toLowerCase()}
        </span>
        {state.revisionCount > 0 ? (
          <span className="rfp-doc-card-meta">
            rev {state.revisionCount}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function ReviewerFeedbackSpotlight({
  apps,
}: {
  apps: GrantApplicationDocument[];
}) {
  return (
    <section className="rfp-feedback-card">
      <h3 className="rfp-feedback-card-title">
        Needs revision · {apps.length}
      </h3>
      {apps.slice(0, 3).map((app) => (
        <div key={app.header.id} className="rfp-col" style={{ gap: 4 }}>
          <strong className="rfp-body" style={{ fontWeight: 600 }}>
            {app.state.global.projectName ?? app.header.name} →{" "}
            {app.state.global.grantPoolName ?? "pool"}
          </strong>
          <p className="rfp-feedback-card-body">
            {app.state.global.feedbackNotes ??
              "Reviewer requested changes. Open the application to see details."}
          </p>
          <button
            type="button"
            className="rfp-btn-secondary"
            style={{ alignSelf: "flex-start" }}
            onClick={() => setSelectedNode(app.header.id)}
          >
            Address feedback →
          </button>
        </div>
      ))}
    </section>
  );
}

function FusionDiscoveryCallout() {
  return (
    <section className="rfp-fusion-card">
      <span className="rfp-meta">Discover</span>
      <h3 className="rfp-h2" style={{ fontSize: 20 }}>
        Looking for new pools?
      </h3>
      <p className="rfp-body" style={{ margin: 0 }}>
        Browse open calls on Fusion — the public discovery frontend. Click{" "}
        <strong>Apply</strong> on any pool that fits your project; a new
        grant application will be provisioned in this workspace,
        pre-filled from your project profile.
      </p>
      <button
        type="button"
        className="rfp-fusion-link"
        onClick={() => {
          // Placeholder until Fusion is embedded
          if (typeof window !== "undefined") {
            window.open("https://fusion.powerhouse.inc", "_blank");
          }
        }}
      >
        Browse pools on Fusion →
      </button>
    </section>
  );
}

function EmptyApplicationsCallout() {
  return (
    <div className="rfp-empty" style={{ padding: 24, textAlign: "left" }}>
      <div className="rfp-col" style={{ gap: 8 }}>
        <strong style={{ color: "var(--rfp-on-surface)" }}>
          No applications yet.
        </strong>
        <span>
          Applications are created by applying to a pool from Fusion. Open
          Fusion, find a pool that fits your project, and click{" "}
          <strong>Apply</strong> — a new{" "}
          <code>rfp-hub/grant-application</code> document will be provisioned
          here, pre-filled from your project profile.
        </span>
      </div>
    </div>
  );
}
