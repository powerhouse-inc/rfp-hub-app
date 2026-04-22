import type { EditorProps } from "document-model";
import { useSelectedDrive } from "@powerhousedao/reactor-browser";
import { FolderTree } from "./FolderTree.js";

type DriveNode = {
  id: string;
  kind: string;
  name: string;
  documentType?: string;
  parentFolder?: string | null;
};

export function BackOfficeDashboard({ children }: EditorProps) {
  const showDocumentEditor = !!children;
  const [driveDoc] = useSelectedDrive() as any;
  const nodes: DriveNode[] =
    driveDoc?.state?.global?.nodes?.filter((n: any) => n.kind === "file") ??
    [];

  const byType = {
    grantSystem: nodes.filter(
      (n) => n.documentType === "rfp-hub/grant-system",
    ),
    grantPool: nodes.filter(
      (n) => n.documentType === "rfp-hub/grant-pool",
    ),
    grantApplication: nodes.filter(
      (n) => n.documentType === "rfp-hub/grant-application",
    ),
    governance: nodes.filter(
      (n) => n.documentType === "rfp-hub/governance",
    ),
    other: nodes.filter(
      (n) => !n.documentType?.startsWith("rfp-hub/"),
    ),
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <FolderTree />
      <div style={{ flex: 1, overflowY: "auto" }}>
        {showDocumentEditor ? (
          children
        ) : (
          <div className="rfp-page">
            <div className="rfp-page-inner">
              <header className="rfp-header">
                <span className="rfp-meta">RFP Hub · Back office</span>
                <h1 className="rfp-h1">Funder dashboard</h1>
                <p className="rfp-hint">
                  Manage your grant system, pools, applications, and governance.
                </p>
              </header>

              <div className="rfp-grid-2">
                <TypeCard
                  label="Organization"
                  type="rfp-hub/grant-system"
                  docs={byType.grantSystem}
                  emptyHint="Create a grant-system doc to publish your organization identity."
                  accent
                />
                <TypeCard
                  label="Governance"
                  type="rfp-hub/governance"
                  docs={byType.governance}
                  emptyHint="Create a governance doc to track disputes, RFCs, and policies."
                />
              </div>

              <section className="rfp-card rfp-section">
                <div className="rfp-row" style={{ justifyContent: "space-between" }}>
                  <h2 className="rfp-section-subtitle">
                    Grant pools · {byType.grantPool.length}
                  </h2>
                  <span className="rfp-meta">DAOIP-5 GrantPool</span>
                </div>
                <hr className="rfp-divider" />
                {byType.grantPool.length === 0 ? (
                  <div className="rfp-empty">
                    No grant pools yet. Drop a <code>rfp-hub/grant-pool</code> doc
                    or create one from the sidebar.
                  </div>
                ) : (
                  <ul className="rfp-list">
                    {byType.grantPool.map((p) => (
                      <DocRow key={p.id} doc={p} />
                    ))}
                  </ul>
                )}
              </section>

              <section className="rfp-card rfp-section">
                <div className="rfp-row" style={{ justifyContent: "space-between" }}>
                  <h2 className="rfp-section-subtitle">
                    Applications review · {byType.grantApplication.length}
                  </h2>
                  <span className="rfp-meta">DAOIP-5 GrantApplication</span>
                </div>
                <hr className="rfp-divider" />
                {byType.grantApplication.length === 0 ? (
                  <div className="rfp-empty">
                    No submitted applications yet.
                  </div>
                ) : (
                  <ul className="rfp-list">
                    {byType.grantApplication.map((a) => (
                      <DocRow key={a.id} doc={a} />
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TypeCard({
  label,
  type,
  docs,
  emptyHint,
  accent,
}: {
  label: string;
  type: string;
  docs: DriveNode[];
  emptyHint: string;
  accent?: boolean;
}) {
  return (
    <section
      className="rfp-card rfp-section"
      style={
        accent
          ? { boxShadow: "0px 4px 20px rgba(176,35,43,0.08)" }
          : undefined
      }
    >
      <div className="rfp-row" style={{ justifyContent: "space-between" }}>
        <h3 className="rfp-section-subtitle">{label}</h3>
        <span className="rfp-chip">{docs.length}</span>
      </div>
      <hr className="rfp-divider" />
      {docs.length === 0 ? (
        <div className="rfp-empty">{emptyHint}</div>
      ) : (
        <ul className="rfp-list">
          {docs.map((d) => (
            <DocRow key={d.id} doc={d} />
          ))}
        </ul>
      )}
    </section>
  );
}

function DocRow({ doc }: { doc: DriveNode }) {
  return (
    <li className="rfp-list-item">
      <div className="rfp-col" style={{ gap: 4, flex: 1 }}>
        <strong>{doc.name}</strong>
        <span className="rfp-meta">{doc.documentType}</span>
      </div>
    </li>
  );
}
