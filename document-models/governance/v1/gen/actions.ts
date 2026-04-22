import type { GovernanceDisputesAction } from "./disputes/actions.js";
import type { GovernancePublisherDecisionsAction } from "./publisher-decisions/actions.js";
import type { GovernanceRfcsAction } from "./rfcs/actions.js";
import type { GovernancePoliciesAction } from "./policies/actions.js";

export * from "./disputes/actions.js";
export * from "./publisher-decisions/actions.js";
export * from "./rfcs/actions.js";
export * from "./policies/actions.js";

export type GovernanceAction =
  | GovernanceDisputesAction
  | GovernancePublisherDecisionsAction
  | GovernanceRfcsAction
  | GovernancePoliciesAction;
