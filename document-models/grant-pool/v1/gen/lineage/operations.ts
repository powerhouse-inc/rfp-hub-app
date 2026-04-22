import { type SignalDispatch } from "document-model";
import type {
  MarkSupersedesAction,
  MarkClaimedFromEntryAction,
  MarkDuplicateOfAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolLineageOperations {
  markSupersedesOperation: (
    state: GrantPoolState,
    action: MarkSupersedesAction,
    dispatch?: SignalDispatch,
  ) => void;
  markClaimedFromEntryOperation: (
    state: GrantPoolState,
    action: MarkClaimedFromEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  markDuplicateOfOperation: (
    state: GrantPoolState,
    action: MarkDuplicateOfAction,
    dispatch?: SignalDispatch,
  ) => void;
}
