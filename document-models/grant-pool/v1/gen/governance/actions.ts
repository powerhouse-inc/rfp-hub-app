import type { Action } from "document-model";
import type {
  SetSubmitterInput,
  SetPublisherInput,
  RecordVerificationInput,
  PublishPoolInput,
  ClosePoolInput,
  CancelPoolInput,
  SetGovernanceStateInput,
} from "../types.js";

export type SetSubmitterAction = Action & {
  type: "SET_SUBMITTER";
  input: SetSubmitterInput;
};
export type SetPublisherAction = Action & {
  type: "SET_PUBLISHER";
  input: SetPublisherInput;
};
export type RecordVerificationAction = Action & {
  type: "RECORD_VERIFICATION";
  input: RecordVerificationInput;
};
export type PublishPoolAction = Action & {
  type: "PUBLISH_POOL";
  input: PublishPoolInput;
};
export type ClosePoolAction = Action & {
  type: "CLOSE_POOL";
  input: ClosePoolInput;
};
export type CancelPoolAction = Action & {
  type: "CANCEL_POOL";
  input: CancelPoolInput;
};
export type SetGovernanceStateAction = Action & {
  type: "SET_GOVERNANCE_STATE";
  input: SetGovernanceStateInput;
};

export type GrantPoolGovernanceAction =
  | SetSubmitterAction
  | SetPublisherAction
  | RecordVerificationAction
  | PublishPoolAction
  | ClosePoolAction
  | CancelPoolAction
  | SetGovernanceStateAction;
