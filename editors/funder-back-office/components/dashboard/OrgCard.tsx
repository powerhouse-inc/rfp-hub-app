import { setSelectedNode } from "@powerhousedao/reactor-browser";
import type { GrantSystemDocument } from "../../../../document-models/grant-system/v1/gen/types.js";

const VERIFICATION_LABEL: Record<string, string> = {
  UNVERIFIED: "Unverified",
  PENDING_REVIEW: "Pending review",
  VERIFIED: "Verified",
  SUSPENDED: "Suspended",
  REVOKED: "Revoked",
};

const VERIFICATION_CLASS: Record<string, string> = {
  UNVERIFIED: "rfp-status-draft",
  PENDING_REVIEW: "rfp-status-pending",
  VERIFIED: "rfp-status-approved",
  SUSPENDED: "rfp-status-closed",
  REVOKED: "rfp-status-rejected",
};

export function OrgCard({ system }: { system: GrantSystemDocument }) {
  const state = system.state.global;
  return (
    <button
      type="button"
      className="rfp-card"
      onClick={() => setSelectedNode(system.header.id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        cursor: "pointer",
        textAlign: "left",
        border: 0,
        font: "inherit",
        padding: "16px 20px",
      }}
    >
      <div className="rfp-col" style={{ gap: 4 }}>
        <span className="rfp-meta">Organization</span>
        <strong className="rfp-body" style={{ fontWeight: 600 }}>
          {state.name ?? system.header.name ?? "Unnamed organization"}
        </strong>
        <span className="rfp-hint">
          {state.type
            ? state.type.charAt(0) + state.type.slice(1).toLowerCase()
            : "Type not set"}
        </span>
      </div>
      <span
        className={`rfp-status-badge ${
          VERIFICATION_CLASS[state.verificationState] ?? "rfp-status-draft"
        }`}
      >
        {VERIFICATION_LABEL[state.verificationState] ?? state.verificationState}
      </span>
    </button>
  );
}
