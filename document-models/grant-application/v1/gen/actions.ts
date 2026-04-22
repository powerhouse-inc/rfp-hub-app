import type { GrantApplicationMetadataAction } from "./metadata/actions.js";
import type { GrantApplicationFundingAction } from "./funding/actions.js";
import type { GrantApplicationReviewAction } from "./review/actions.js";
import type { GrantApplicationPayoutsAction } from "./payouts/actions.js";

export * from "./metadata/actions.js";
export * from "./funding/actions.js";
export * from "./review/actions.js";
export * from "./payouts/actions.js";

export type GrantApplicationAction =
  | GrantApplicationMetadataAction
  | GrantApplicationFundingAction
  | GrantApplicationReviewAction
  | GrantApplicationPayoutsAction;
