import { type SignalDispatch } from "document-model";
import type {
  ProposeRfcAction,
  StartRfcReviewAction,
  RatifyRfcAction,
  ImplementRfcAction,
  RejectRfcAction,
  WithdrawRfcAction,
} from "./actions.js";
import type { GovernanceState } from "../types.js";

export interface GovernanceRfcsOperations {
  proposeRfcOperation: (
    state: GovernanceState,
    action: ProposeRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  startRfcReviewOperation: (
    state: GovernanceState,
    action: StartRfcReviewAction,
    dispatch?: SignalDispatch,
  ) => void;
  ratifyRfcOperation: (
    state: GovernanceState,
    action: RatifyRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  implementRfcOperation: (
    state: GovernanceState,
    action: ImplementRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectRfcOperation: (
    state: GovernanceState,
    action: RejectRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
  withdrawRfcOperation: (
    state: GovernanceState,
    action: WithdrawRfcAction,
    dispatch?: SignalDispatch,
  ) => void;
}
