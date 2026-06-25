/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  AddContextDocumentAction,
  AddPoolSameAsAction,
  AddRequiredCredentialAction,
  RemoveContextDocumentAction,
  RemovePoolSameAsAction,
  RemoveRequiredCredentialAction,
  SetApplicationsUriAction,
  SetAttestationIssuersUriAction,
  SetGovernanceUriAction,
} from "./actions.js";

export interface GrantPoolResourcesOperations {
  setGovernanceUriOperation: (
    state: GrantPoolGlobalState,
    action: SetGovernanceUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setApplicationsUriOperation: (
    state: GrantPoolGlobalState,
    action: SetApplicationsUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAttestationIssuersUriOperation: (
    state: GrantPoolGlobalState,
    action: SetAttestationIssuersUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  addRequiredCredentialOperation: (
    state: GrantPoolGlobalState,
    action: AddRequiredCredentialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeRequiredCredentialOperation: (
    state: GrantPoolGlobalState,
    action: RemoveRequiredCredentialAction,
    dispatch?: SignalDispatch,
  ) => void;
  addContextDocumentOperation: (
    state: GrantPoolGlobalState,
    action: AddContextDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeContextDocumentOperation: (
    state: GrantPoolGlobalState,
    action: RemoveContextDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
  addPoolSameAsOperation: (
    state: GrantPoolGlobalState,
    action: AddPoolSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removePoolSameAsOperation: (
    state: GrantPoolGlobalState,
    action: RemovePoolSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
