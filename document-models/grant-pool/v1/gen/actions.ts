import type { GrantPoolMetadataAction } from "./metadata/actions.js";
import type { GrantPoolFundingAction } from "./funding/actions.js";
import type { GrantPoolScheduleAction } from "./schedule/actions.js";
import type { GrantPoolClassificationAction } from "./classification/actions.js";
import type { GrantPoolResourcesAction } from "./resources/actions.js";
import type { GrantPoolReviewersAction } from "./reviewers/actions.js";
import type { GrantPoolGovernanceAction } from "./governance/actions.js";
import type { GrantPoolLineageAction } from "./lineage/actions.js";

export * from "./metadata/actions.js";
export * from "./funding/actions.js";
export * from "./schedule/actions.js";
export * from "./classification/actions.js";
export * from "./resources/actions.js";
export * from "./reviewers/actions.js";
export * from "./governance/actions.js";
export * from "./lineage/actions.js";

export type GrantPoolAction =
  | GrantPoolMetadataAction
  | GrantPoolFundingAction
  | GrantPoolScheduleAction
  | GrantPoolClassificationAction
  | GrantPoolResourcesAction
  | GrantPoolReviewersAction
  | GrantPoolGovernanceAction
  | GrantPoolLineageAction;
