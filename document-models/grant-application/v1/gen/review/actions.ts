/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type {
  ApproveApplicationInput,
  ConditionallyApproveInput,
  MarkRevisedInput,
  OpenApplicationInput,
  RejectApplicationInput,
  RequestRevisionInput,
  StartReviewInput,
  SubmitApplicationInput,
  WithdrawApplicationInput,
} from "../types.js";

export type SubmitApplicationAction = Action & {
  type: "SUBMIT_APPLICATION";
  input: SubmitApplicationInput;
};
export type OpenApplicationAction = Action & {
  type: "OPEN_APPLICATION";
  input: OpenApplicationInput;
};
export type StartReviewAction = Action & {
  type: "START_REVIEW";
  input: StartReviewInput;
};
export type RequestRevisionAction = Action & {
  type: "REQUEST_REVISION";
  input: RequestRevisionInput;
};
export type MarkRevisedAction = Action & {
  type: "MARK_REVISED";
  input: MarkRevisedInput;
};
export type ApproveApplicationAction = Action & {
  type: "APPROVE_APPLICATION";
  input: ApproveApplicationInput;
};
export type ConditionallyApproveAction = Action & {
  type: "CONDITIONALLY_APPROVE";
  input: ConditionallyApproveInput;
};
export type RejectApplicationAction = Action & {
  type: "REJECT_APPLICATION";
  input: RejectApplicationInput;
};
export type WithdrawApplicationAction = Action & {
  type: "WITHDRAW_APPLICATION";
  input: WithdrawApplicationInput;
};

export type GrantApplicationReviewAction =
  | SubmitApplicationAction
  | OpenApplicationAction
  | StartReviewAction
  | RequestRevisionAction
  | MarkRevisedAction
  | ApproveApplicationAction
  | ConditionallyApproveAction
  | RejectApplicationAction
  | WithdrawApplicationAction;
