import { type SignalDispatch } from "document-model";
import type { RecordPayoutAction, MarkCompletedAction } from "./actions.js";
import type { GrantApplicationState } from "../types.js";

export interface GrantApplicationPayoutsOperations {
  recordPayoutOperation: (
    state: GrantApplicationState,
    action: RecordPayoutAction,
    dispatch?: SignalDispatch,
  ) => void;
  markCompletedOperation: (
    state: GrantApplicationState,
    action: MarkCompletedAction,
    dispatch?: SignalDispatch,
  ) => void;
}
