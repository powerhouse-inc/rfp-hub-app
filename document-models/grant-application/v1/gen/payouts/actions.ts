/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type { MarkCompletedInput, RecordPayoutInput } from "../types.js";

export type RecordPayoutAction = Action & {
  type: "RECORD_PAYOUT";
  input: RecordPayoutInput;
};
export type MarkCompletedAction = Action & {
  type: "MARK_COMPLETED";
  input: MarkCompletedInput;
};

export type GrantApplicationPayoutsAction =
  | RecordPayoutAction
  | MarkCompletedAction;
