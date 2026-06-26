/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type {
  AppealDisputeInput,
  AssignInvestigatorInput,
  DismissDisputeInput,
  FileDisputeInput,
  ResolveDisputeInput,
} from "../types.js";

export type FileDisputeAction = Action & {
  type: "FILE_DISPUTE";
  input: FileDisputeInput;
};
export type AssignInvestigatorAction = Action & {
  type: "ASSIGN_INVESTIGATOR";
  input: AssignInvestigatorInput;
};
export type ResolveDisputeAction = Action & {
  type: "RESOLVE_DISPUTE";
  input: ResolveDisputeInput;
};
export type DismissDisputeAction = Action & {
  type: "DISMISS_DISPUTE";
  input: DismissDisputeInput;
};
export type AppealDisputeAction = Action & {
  type: "APPEAL_DISPUTE";
  input: AppealDisputeInput;
};

export type GovernanceDisputesAction =
  | FileDisputeAction
  | AssignInvestigatorAction
  | ResolveDisputeAction
  | DismissDisputeAction
  | AppealDisputeAction;
