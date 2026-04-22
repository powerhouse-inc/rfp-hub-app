export const DISPUTE_STATUS_CLASS: Record<string, string> = {
  OPEN: "rfp-status-pending",
  INVESTIGATING: "rfp-status-review",
  RESOLVED: "rfp-status-approved",
  DISMISSED: "rfp-status-closed",
  APPEALED: "rfp-status-rejected",
};

export const RFC_STATUS_CLASS: Record<string, string> = {
  PROPOSED: "rfp-status-pending",
  UNDER_REVIEW: "rfp-status-review",
  RATIFIED: "rfp-status-approved",
  IMPLEMENTED: "rfp-status-completed",
  REJECTED: "rfp-status-rejected",
  WITHDRAWN: "rfp-status-closed",
};
