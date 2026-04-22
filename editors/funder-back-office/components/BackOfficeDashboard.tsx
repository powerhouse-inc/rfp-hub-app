import type { EditorProps, PHDocument } from "document-model";
import {
  addDocument,
  useDocumentsInSelectedDrive,
  useSelectedDrive,
} from "@powerhousedao/reactor-browser";
import { useCallback, useMemo, useState } from "react";
import type { GrantPoolDocument } from "../../../document-models/grant-pool/v1/gen/types.js";
import type { GrantApplicationDocument } from "../../../document-models/grant-application/v1/gen/types.js";
import type { GovernanceDocument } from "../../../document-models/governance/v1/gen/types.js";
import type { GrantSystemDocument } from "../../../document-models/grant-system/v1/gen/types.js";
import { DocumentBrowser } from "./DocumentBrowser.js";
import { DOC_TYPE } from "./dashboard/constants.js";
import { StatsRow } from "./dashboard/StatsRow.js";
import { ReviewKanban } from "./dashboard/ReviewKanban.js";
import { PoolsGrid } from "./dashboard/PoolsGrid.js";
import { GovernanceHealth } from "./dashboard/GovernanceHealth.js";
import { ActivityFeed } from "./dashboard/ActivityFeed.js";
import { OrgCard } from "./dashboard/OrgCard.js";

function isDocumentOfType(doc: PHDocument, type: string): boolean {
  return doc.header.documentType === type;
}

export function BackOfficeDashboard({ children }: EditorProps) {
  const showDocumentEditor = !!children;
  const documents = useDocumentsInSelectedDrive();
  const [selectedDrive] = useSelectedDrive();
  const [creatingType, setCreatingType] = useState<string | null>(null);

  const driveId = selectedDrive?.header.id;

  const grantSystems = useMemo(
    () =>
      (documents ?? []).filter((d): d is GrantSystemDocument =>
        isDocumentOfType(d, DOC_TYPE.grantSystem),
      ),
    [documents],
  );
  const grantPools = useMemo(
    () =>
      (documents ?? []).filter((d): d is GrantPoolDocument =>
        isDocumentOfType(d, DOC_TYPE.grantPool),
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
  const governance = useMemo(
    () =>
      (documents ?? []).filter((d): d is GovernanceDocument =>
        isDocumentOfType(d, DOC_TYPE.governance),
      ),
    [documents],
  );

  const hasGrantSystem = grantSystems.length > 0;

  const handleCreate = useCallback(
    async (documentType: string, name: string) => {
      if (!driveId || creatingType) return;
      setCreatingType(documentType);
      try {
        await addDocument(driveId, name, documentType);
      } catch (err) {
        console.error(`Failed to create ${documentType}:`, err);
      } finally {
        setCreatingType(null);
      }
    },
    [driveId, creatingType],
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <DocumentBrowser
        mode="funder"
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
              {!hasGrantSystem ? (
                <OnboardingHero
                  isCreating={creatingType === DOC_TYPE.grantSystem}
                  onCreate={() =>
                    handleCreate(DOC_TYPE.grantSystem, "Grant System")
                  }
                />
              ) : (
                <DashboardBody
                  grantSystems={grantSystems}
                  grantPools={grantPools}
                  applications={applications}
                  governance={governance}
                  documents={documents ?? []}
                  creatingType={creatingType}
                  canCreate={!!driveId}
                  onCreate={handleCreate}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DashboardBody({
  grantSystems,
  grantPools,
  applications,
  governance,
  documents,
  creatingType,
  canCreate,
  onCreate,
}: {
  grantSystems: GrantSystemDocument[];
  grantPools: GrantPoolDocument[];
  applications: GrantApplicationDocument[];
  governance: GovernanceDocument[];
  documents: PHDocument[];
  creatingType: string | null;
  canCreate: boolean;
  onCreate: (docType: string, name: string) => void;
}) {
  const primarySystem = grantSystems[0];

  return (
    <>
      <header className="rfp-header">
        <div className="rfp-header-row">
          <div className="rfp-col" style={{ gap: 6 }}>
            <span className="rfp-meta">RFP Hub · Back office</span>
            <h1 className="rfp-h1">Funder dashboard</h1>
            <p className="rfp-hint" style={{ maxWidth: 640 }}>
              Set up pools, review applications, and manage governance from
              one control center.
            </p>
          </div>
          {primarySystem ? (
            <div style={{ minWidth: 260, maxWidth: 360 }}>
              <OrgCard system={primarySystem} />
            </div>
          ) : null}
        </div>
      </header>

      <StatsRow
        pools={grantPools}
        applications={applications}
        governance={governance}
      />

      <ReviewKanban
        applications={applications}
        hasPools={grantPools.length > 0}
      />

      <PoolsGrid
        pools={grantPools}
        applications={applications}
        creating={creatingType === DOC_TYPE.grantPool}
        canCreate={canCreate}
        onCreate={() =>
          onCreate(
            DOC_TYPE.grantPool,
            `Grant pool ${grantPools.length + 1}`,
          )
        }
      />

      <div className="rfp-grid-2">
        <GovernanceHealth
          governance={governance}
          creating={creatingType === DOC_TYPE.governance}
          canCreate={canCreate}
          onCreate={() => onCreate(DOC_TYPE.governance, "Governance")}
        />
        <ActivityFeed documents={documents} />
      </div>
    </>
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
        <span className="rfp-hero-badge">Stage 1 of 4</span>
        <h2 className="rfp-hero-title">Set up your organization</h2>
        <p className="rfp-hero-body">
          Welcome to the Funder Back Office. Before you can publish a grant
          pool or review applications, publish your organization identity as
          a <code>rfp-hub/grant-system</code> document. This becomes the
          parent record for everything you fund.
        </p>
        <button
          type="button"
          className="rfp-btn-primary-lg"
          onClick={onCreate}
          disabled={isCreating}
        >
          {isCreating ? "Creating…" : "Create your Grant System →"}
        </button>
      </div>
    </div>
  );
}
