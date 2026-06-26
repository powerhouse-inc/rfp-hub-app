/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type { AddReviewerAction, RemoveReviewerAction } from "./actions.js";

export interface GrantPoolReviewersOperations {
  addReviewerOperation: (
    state: GrantPoolGlobalState,
    action: AddReviewerAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeReviewerOperation: (
    state: GrantPoolGlobalState,
    action: RemoveReviewerAction,
    dispatch?: SignalDispatch,
  ) => void;
}
