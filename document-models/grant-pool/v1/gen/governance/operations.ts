/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  CancelPoolAction,
  ClosePoolAction,
  PublishPoolAction,
  RecordVerificationAction,
  SetGovernanceStateAction,
  SetPublisherAction,
  SetSubmitterAction,
} from "./actions.js";

export interface GrantPoolGovernanceOperations {
  setSubmitterOperation: (
    state: GrantPoolGlobalState,
    action: SetSubmitterAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPublisherOperation: (
    state: GrantPoolGlobalState,
    action: SetPublisherAction,
    dispatch?: SignalDispatch,
  ) => void;
  recordVerificationOperation: (
    state: GrantPoolGlobalState,
    action: RecordVerificationAction,
    dispatch?: SignalDispatch,
  ) => void;
  publishPoolOperation: (
    state: GrantPoolGlobalState,
    action: PublishPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  closePoolOperation: (
    state: GrantPoolGlobalState,
    action: ClosePoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  cancelPoolOperation: (
    state: GrantPoolGlobalState,
    action: CancelPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGovernanceStateOperation: (
    state: GrantPoolGlobalState,
    action: SetGovernanceStateAction,
    dispatch?: SignalDispatch,
  ) => void;
}
