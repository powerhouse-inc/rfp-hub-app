import type { Action } from "document-model";
import type {
  SetPublisherWalletInput,
  RequestVerificationInput,
  ApproveVerificationInput,
  RejectVerificationInput,
  SuspendVerificationInput,
  RevokeVerificationInput,
  ReinstateVerificationInput,
} from "../types.js";

export type SetPublisherWalletAction = Action & {
  type: "SET_PUBLISHER_WALLET";
  input: SetPublisherWalletInput;
};
export type RequestVerificationAction = Action & {
  type: "REQUEST_VERIFICATION";
  input: RequestVerificationInput;
};
export type ApproveVerificationAction = Action & {
  type: "APPROVE_VERIFICATION";
  input: ApproveVerificationInput;
};
export type RejectVerificationAction = Action & {
  type: "REJECT_VERIFICATION";
  input: RejectVerificationInput;
};
export type SuspendVerificationAction = Action & {
  type: "SUSPEND_VERIFICATION";
  input: SuspendVerificationInput;
};
export type RevokeVerificationAction = Action & {
  type: "REVOKE_VERIFICATION";
  input: RevokeVerificationInput;
};
export type ReinstateVerificationAction = Action & {
  type: "REINSTATE_VERIFICATION";
  input: ReinstateVerificationInput;
};

export type GrantSystemVerificationAction =
  | SetPublisherWalletAction
  | RequestVerificationAction
  | ApproveVerificationAction
  | RejectVerificationAction
  | SuspendVerificationAction
  | RevokeVerificationAction
  | ReinstateVerificationAction;
