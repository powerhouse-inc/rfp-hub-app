import type { Action } from "document-model";
import type { RecordPayoutInput, MarkCompletedInput } from "../types.js";

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
