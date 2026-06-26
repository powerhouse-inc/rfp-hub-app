/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GovernanceGlobalState } from "../types.js";
import type {
  ImplementRfcAction,
  ProposeRfcAction,
  RatifyRfcAction,
  RejectRfcAction,
  StartRfcReviewAction,
  WithdrawRfcAction,
} from "./actions.js";

export interface GovernanceRfcsOperations {
  proposeRfcOperation: (
    state: GovernanceGlobalState,
    action: ProposeRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  startRfcReviewOperation: (
    state: GovernanceGlobalState,
    action: StartRfcReviewAction,
    dispatch?: SignalDispatch,
  ) => void;
  ratifyRfcOperation: (
    state: GovernanceGlobalState,
    action: RatifyRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  implementRfcOperation: (
    state: GovernanceGlobalState,
    action: ImplementRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectRfcOperation: (
    state: GovernanceGlobalState,
    action: RejectRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  withdrawRfcOperation: (
    state: GovernanceGlobalState,
    action: WithdrawRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
}
