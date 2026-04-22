import { type SignalDispatch } from "document-model";
import type {
  SetPublisherWalletAction,
  RequestVerificationAction,
  ApproveVerificationAction,
  RejectVerificationAction,
  SuspendVerificationAction,
  RevokeVerificationAction,
  ReinstateVerificationAction,
} from "./actions.js";
import type { GrantSystemState } from "../types.js";

export interface GrantSystemVerificationOperations {
  setPublisherWalletOperation: (
    state: GrantSystemState,
    action: SetPublisherWalletAction,
    dispatch?: SignalDispatch,
  ) => void;
  requestVerificationOperation: (
    state: GrantSystemState,
    action: RequestVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  approveVerificationOperation: (
    state: GrantSystemState,
    action: ApproveVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectVerificationOperation: (
    state: GrantSystemState,
    action: RejectVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  suspendVerificationOperation: (
    state: GrantSystemState,
    action: SuspendVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  revokeVerificationOperation: (
    state: GrantSystemState,
    action: RevokeVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  reinstateVerificationOperation: (
    state: GrantSystemState,
    action: ReinstateVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
}
