import type { Action } from "document-model";
import type {
  ProposeRfcInput,
  StartRfcReviewInput,
  RatifyRfcInput,
  ImplementRfcInput,
  RejectRfcInput,
  WithdrawRfcInput,
} from "../types.js";

export type ProposeRfcAction = Action & {
  type: "PROPOSE_RFC";
  input: ProposeRfcInput;
};
export type StartRfcReviewAction = Action & {
  type: "START_RFC_REVIEW";
  input: StartRfcReviewInput;
};
export type RatifyRfcAction = Action & {
  type: "RATIFY_RFC";
  input: RatifyRfcInput;
};
export type ImplementRfcAction = Action & {
  type: "IMPLEMENT_RFC";
  input: ImplementRfcInput;
};
export type RejectRfcAction = Action & {
  type: "REJECT_RFC";
  input: RejectRfcInput;
};
export type WithdrawRfcAction = Action & {
  type: "WITHDRAW_RFC";
  input: WithdrawRfcInput;
};

export type GovernanceRfcsAction =
  | ProposeRfcAction
  | StartRfcReviewAction
  | RatifyRfcAction
  | ImplementRfcAction
  | RejectRfcAction
  | WithdrawRfcAction;
