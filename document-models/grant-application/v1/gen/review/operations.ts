/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantApplicationGlobalState } from "../types.js";
import type {
  ApproveApplicationAction,
  ConditionallyApproveAction,
  MarkRevisedAction,
  OpenApplicationAction,
  RejectApplicationAction,
  RequestRevisionAction,
  StartReviewAction,
  SubmitApplicationAction,
  WithdrawApplicationAction,
} from "./actions.js";

export interface GrantApplicationReviewOperations {
  submitApplicationOperation: (
    state: GrantApplicationGlobalState,
    action: SubmitApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  openApplicationOperation: (
    state: GrantApplicationGlobalState,
    action: OpenApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  startReviewOperation: (
    state: GrantApplicationGlobalState,
    action: StartReviewAction,
    dispatch?: SignalDispatch,
  ) => void;
  requestRevisionOperation: (
    state: GrantApplicationGlobalState,
    action: RequestRevisionAction,
    dispatch?: SignalDispatch,
  ) => void;
  markRevisedOperation: (
    state: GrantApplicationGlobalState,
    action: MarkRevisedAction,
    dispatch?: SignalDispatch,
  ) => void;
  approveApplicationOperation: (
    state: GrantApplicationGlobalState,
    action: ApproveApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  conditionallyApproveOperation: (
    state: GrantApplicationGlobalState,
    action: ConditionallyApproveAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectApplicationOperation: (
    state: GrantApplicationGlobalState,
    action: RejectApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  withdrawApplicationOperation: (
    state: GrantApplicationGlobalState,
    action: WithdrawApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
}
