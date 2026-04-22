import type { ReviewStage } from "../../../../document-models/grant-application/v1/gen/types.js";

export const DOC_TYPE = {
  grantSystem: "rfp-hub/grant-system",
  grantPool: "rfp-hub/grant-pool",
  grantApplication: "rfp-hub/grant-application",
  governance: "rfp-hub/governance",
} as const;

export const POOL_LIFECYCLE_CLASS: Record<string, string> = {
  DRAFT: "rfp-status-draft",
  REQUEST_FOR_COMMENTS: "rfp-status-rfc",
  UPCOMING: "rfp-status-upcoming",
  OPEN: "rfp-status-open",
  CLOSED: "rfp-status-closed",
  AWARDED: "rfp-status-awarded",
  NOT_AWARDED: "rfp-status-rejected",
  CANCELLED: "rfp-status-cancelled",
};

export const REVIEW_STAGE_CLASS: Record<ReviewStage, string> = {
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

export type KanbanColumn = {
  key: "incoming" | "inReview" | "needsRevision" | "decided" | "active";
  label: string;
  stages: ReadonlyArray<ReviewStage>;
};

export const KANBAN_COLUMNS: ReadonlyArray<KanbanColumn> = [
  { key: "incoming", label: "Incoming", stages: ["SUBMITTED", "OPENED"] },
  {
    key: "inReview",
    label: "In review",
    stages: ["UNDER_REVIEW", "REVISED"],
  },
  {
    key: "needsRevision",
    label: "Needs revision",
    stages: ["NEEDS_REVISION"],
  },
  {
    key: "decided",
    label: "Decided",
    stages: [
      "APPROVED",
      "CONDITIONALLY_APPROVED",
      "REJECTED",
      "WITHDRAWN",
    ],
  },
  {
    key: "active",
    label: "Active / Completed",
    stages: ["FUNDED", "COMPLETED"],
  },
];

export function formatRelativeTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  const date = new Date(iso);
  const ms = Date.now() - date.getTime();
  if (Number.isNaN(ms)) return "—";
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString();
}

export function daysSince(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const ms = Date.now() - new Date(iso).getTime();
  if (Number.isNaN(ms)) return null;
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

export function daysUntil(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const ms = new Date(iso).getTime() - Date.now();
  if (Number.isNaN(ms)) return null;
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}
