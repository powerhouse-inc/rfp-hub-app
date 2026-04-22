import type { GrantSystemState } from "document-models/grant-system";

type Props = { state: GrantSystemState["verificationState"] };

const LABEL: Record<string, string> = {
  UNVERIFIED: "Unverified",
  PENDING_REVIEW: "Pending review",
  VERIFIED: "Verified",
  SUSPENDED: "Suspended",
  REVOKED: "Revoked",
};

const CLASS: Record<string, string> = {
  UNVERIFIED: "rfp-status-draft",
  PENDING_REVIEW: "rfp-status-pending",
  VERIFIED: "rfp-status-approved",
  SUSPENDED: "rfp-status-closed",
  REVOKED: "rfp-status-rejected",
};

export function VerificationBadge({ state }: Props) {
  return (
    <span className={`rfp-status-badge ${CLASS[state] ?? "rfp-status-draft"}`}>
      {LABEL[state] ?? state}
    </span>
  );
}
