/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type {
  MarkClaimedFromEntryInput,
  MarkDuplicateOfInput,
  MarkSupersedesInput,
} from "../types.js";

export type MarkSupersedesAction = Action & {
  type: "MARK_SUPERSEDES";
  input: MarkSupersedesInput;
};
export type MarkClaimedFromEntryAction = Action & {
  type: "MARK_CLAIMED_FROM_ENTRY";
  input: MarkClaimedFromEntryInput;
};
export type MarkDuplicateOfAction = Action & {
  type: "MARK_DUPLICATE_OF";
  input: MarkDuplicateOfInput;
};

export type GrantPoolLineageAction =
  | MarkSupersedesAction
  | MarkClaimedFromEntryAction
  | MarkDuplicateOfAction;
