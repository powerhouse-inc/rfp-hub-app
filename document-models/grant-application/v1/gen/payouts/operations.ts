/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantApplicationGlobalState } from "../types.js";
import type { MarkCompletedAction, RecordPayoutAction } from "./actions.js";

export interface GrantApplicationPayoutsOperations {
  recordPayoutOperation: (
    state: GrantApplicationGlobalState,
    action: RecordPayoutAction,
    dispatch?: SignalDispatch,
  ) => void;
  markCompletedOperation: (
    state: GrantApplicationGlobalState,
    action: MarkCompletedAction,
    dispatch?: SignalDispatch,
  ) => void;
}
