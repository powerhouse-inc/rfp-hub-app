import type { ReviewStage } from "document-models/grant-application";

export const STAGE_CLASS: Record<ReviewStage, string> = {
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

export const STAGE_LABEL: Record<ReviewStage, string> = {
  DRAFT: "Draft",
  SUBMITTED: "Submitted",
  OPENED: "Opened",
  UNDER_REVIEW: "Under review",
  NEEDS_REVISION: "Needs revision",
  REVISED: "Revised",
  APPROVED: "Approved",
  CONDITIONALLY_APPROVED: "Conditionally approved",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
  FUNDED: "Funded",
  COMPLETED: "Completed",
};
