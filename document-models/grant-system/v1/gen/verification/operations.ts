/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantSystemGlobalState } from "../types.js";
import type {
  ApproveVerificationAction,
  ReinstateVerificationAction,
  RejectVerificationAction,
  RequestVerificationAction,
  RevokeVerificationAction,
  SetPublisherWalletAction,
  SuspendVerificationAction,
} from "./actions.js";

export interface GrantSystemVerificationOperations {
  setPublisherWalletOperation: (
    state: GrantSystemGlobalState,
    action: SetPublisherWalletAction,
    dispatch?: SignalDispatch,
  ) => void;
  requestVerificationOperation: (
    state: GrantSystemGlobalState,
    action: RequestVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  approveVerificationOperation: (
    state: GrantSystemGlobalState,
    action: ApproveVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  rejectVerificationOperation: (
    state: GrantSystemGlobalState,
    action: RejectVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  suspendVerificationOperation: (
    state: GrantSystemGlobalState,
    action: SuspendVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  revokeVerificationOperation: (
    state: GrantSystemGlobalState,
    action: RevokeVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  reinstateVerificationOperation: (
    state: GrantSystemGlobalState,
    action: ReinstateVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
}
