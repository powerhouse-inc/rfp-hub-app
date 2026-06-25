/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type { PublishPolicyInput, SupersedePolicyInput } from "../types.js";

export type PublishPolicyAction = Action & {
  type: "PUBLISH_POLICY";
  input: PublishPolicyInput;
};
export type SupersedePolicyAction = Action & {
  type: "SUPERSEDE_POLICY";
  input: SupersedePolicyInput;
};

export type GovernancePoliciesAction =
  | PublishPolicyAction
  | SupersedePolicyAction;
