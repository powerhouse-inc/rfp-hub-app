/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  MarkClaimedFromEntryAction,
  MarkDuplicateOfAction,
  MarkSupersedesAction,
} from "./actions.js";

export interface GrantPoolLineageOperations {
  markSupersedesOperation: (
    state: GrantPoolGlobalState,
    action: MarkSupersedesAction,
    dispatch?: SignalDispatch,
  ) => void;
  markClaimedFromEntryOperation: (
    state: GrantPoolGlobalState,
    action: MarkClaimedFromEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  markDuplicateOfOperation: (
    state: GrantPoolGlobalState,
    action: MarkDuplicateOfAction,
    dispatch?: SignalDispatch,
  ) => void;
}
