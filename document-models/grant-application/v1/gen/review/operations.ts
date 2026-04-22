import { type SignalDispatch } from "document-model";
import type {
  SubmitApplicationAction,
  OpenApplicationAction,
  StartReviewAction,
  RequestRevisionAction,
  MarkRevisedAction,
  ApproveApplicationAction,
  ConditionallyApproveAction,
  RejectApplicationAction,
  WithdrawApplicationAction,
} from "./actions.js";
import type { GrantApplicationState } from "../types.js";

export interface GrantApplicationReviewOperations {
  submitApplicationOperation: (
    state: GrantApplicationState,
    action: SubmitApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  openApplicationOperation: (
    state: GrantApplicationState,
    action: OpenApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  startReviewOperation: (
    state: GrantApplicationState,
    action: StartReviewAction,
    dispatch?: SignalDispatch,
  ) => void;
  requestRevisionOperation: (
    state: GrantApplicationState,
    action: RequestRevisionAction,
    dispatch?: SignalDispatch,
  ) => void;
  markRevisedOperation: (
    state: GrantApplicationState,
    action: MarkRevisedAction,
    dispatch?: SignalDispatch,
  ) => void;
  approveApplicationOperation: (
    state: GrantApplicationState,
    action: ApproveApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  conditionallyApproveOperation: (
    state: GrantApplicationState,
    action: ConditionallyApproveAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectApplicationOperation: (
    state: GrantApplicationState,
    action: RejectApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
  withdrawApplicationOperation: (
    state: GrantApplicationState,
    action: WithdrawApplicationAction,
    dispatch?: SignalDispatch,
  ) => void;
}
