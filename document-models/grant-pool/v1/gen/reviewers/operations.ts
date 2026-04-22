import { type SignalDispatch } from "document-model";
import type { AddReviewerAction, RemoveReviewerAction } from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolReviewersOperations {
  addReviewerOperation: (
    state: GrantPoolState,
    action: AddReviewerAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeReviewerOperation: (
    state: GrantPoolState,
    action: RemoveReviewerAction,
    dispatch?: SignalDispatch,
  ) => void;
}
