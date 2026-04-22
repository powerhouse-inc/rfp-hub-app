import { type SignalDispatch } from "document-model";
import type { PublishPolicyAction, SupersedePolicyAction } from "./actions.js";
import type { GovernanceState } from "../types.js";

export interface GovernancePoliciesOperations {
  publishPolicyOperation: (
    state: GovernanceState,
    action: PublishPolicyAction,
    dispatch?: SignalDispatch,
  ) => void;
  supersedePolicyOperation: (
    state: GovernanceState,
    action: SupersedePolicyAction,
    dispatch?: SignalDispatch,
  ) => void;
}
