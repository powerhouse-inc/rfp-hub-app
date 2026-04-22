import { type SignalDispatch } from "document-model";
import type {
  SetSubmitterAction,
  SetPublisherAction,
  RecordVerificationAction,
  PublishPoolAction,
  ClosePoolAction,
  CancelPoolAction,
  SetGovernanceStateAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolGovernanceOperations {
  setSubmitterOperation: (
    state: GrantPoolState,
    action: SetSubmitterAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPublisherOperation: (
    state: GrantPoolState,
    action: SetPublisherAction,
    dispatch?: SignalDispatch,
  ) => void;
  recordVerificationOperation: (
    state: GrantPoolState,
    action: RecordVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  publishPoolOperation: (
    state: GrantPoolState,
    action: PublishPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  closePoolOperation: (
    state: GrantPoolState,
    action: ClosePoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  cancelPoolOperation: (
    state: GrantPoolState,
    action: CancelPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGovernanceStateOperation: (
    state: GrantPoolState,
    action: SetGovernanceStateAction,
    dispatch?: SignalDispatch,
  ) => void;
}
