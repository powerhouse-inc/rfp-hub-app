import type { Action } from "document-model";
import type { AddReviewerInput, RemoveReviewerInput } from "../types.js";

export type AddReviewerAction = Action & {
  type: "ADD_REVIEWER";
  input: AddReviewerInput;
};
export type RemoveReviewerAction = Action & {
  type: "REMOVE_REVIEWER";
  input: RemoveReviewerInput;
};

export type GrantPoolReviewersAction = AddReviewerAction | RemoveReviewerAction;
