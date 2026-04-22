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

const STATUS_CLASS: Record<string, string> = {
  pending: "rfp-status-pending",
  in_review: "rfp-status-review",
  approved: "rfp-status-approved",
  funded: "rfp-status-funded",
  rejected: "rfp-status-rejected",
  completed: "rfp-status-completed",
};

export function ApplicantDashboard({ children }: EditorProps) {
  const showDocumentEditor = !!children;
  const [driveDoc] = useSelectedDrive() as any;
  const nodes: DriveNode[] =
    driveDoc?.state?.global?.nodes?.filter((n: any) => n.kind === "file") ??
    [];

  const projects = nodes.filter((n) => n.documentType === "rfp-hub/project");
  const applications = nodes.filter(
    (n) => n.documentType === "rfp-hub/grant-application",
  );

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
                <span className="rfp-meta">RFP Hub · My workspace</span>
                <h1 className="rfp-h1">Your applications</h1>
                <p className="rfp-hint">
                  Maintain your project profile and track every application
                  you've submitted.
                </p>
              </header>

              <section className="rfp-card rfp-section">
                <div className="rfp-row" style={{ justifyContent: "space-between" }}>
                  <h2 className="rfp-section-subtitle">
                    Project profile · {projects.length}
                  </h2>
                  <span className="rfp-meta">DAOIP-5 Project</span>
                </div>
                <hr className="rfp-divider" />
                {projects.length === 0 ? (
                  <div className="rfp-empty">
                    No project profile yet. Create one — it becomes your
                    reusable "common application" across all pools you apply to.
                  </div>
                ) : (
                  <ul className="rfp-list">
                    {projects.map((p) => (
                      <li key={p.id} className="rfp-list-item">
                        <div className="rfp-col" style={{ flex: 1 }}>
                          <strong>{p.name}</strong>
                          <span className="rfp-meta">rfp-hub/project</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="rfp-card rfp-section">
                <div className="rfp-row" style={{ justifyContent: "space-between" }}>
                  <h2 className="rfp-section-subtitle">
                    Applications · {applications.length}
                  </h2>
                  <span className="rfp-meta">DAOIP-5 GrantApplication</span>
                </div>
                <hr className="rfp-divider" />
                {applications.length === 0 ? (
                  <div className="rfp-empty">
                    No applications yet. Start from the Fusion discovery page
                    and click <strong>Apply</strong> — it provisions a new
                    application here.
                  </div>
                ) : (
                  <ul className="rfp-list">
                    {applications.map((a) => (
                      <ApplicationRow key={a.id} app={a} />
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

function ApplicationRow({ app }: { app: DriveNode }) {
  return (
    <li className="rfp-list-item">
      <div className="rfp-col" style={{ flex: 1 }}>
        <strong>{app.name}</strong>
        <span className="rfp-meta">{app.documentType}</span>
      </div>
    </li>
  );
}
