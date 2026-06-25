/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GovernanceGlobalState } from "../types.js";
import type { PublishPolicyAction, SupersedePolicyAction } from "./actions.js";

export interface GovernancePoliciesOperations {
  publishPolicyOperation: (
    state: GovernanceGlobalState,
    action: PublishPolicyAction,
    dispatch?: SignalDispatch,
  ) => void;
  supersedePolicyOperation: (
    state: GovernanceGlobalState,
    action: SupersedePolicyAction,
    dispatch?: SignalDispatch,
  ) => void;
}
