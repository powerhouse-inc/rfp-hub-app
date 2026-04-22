import { type SignalDispatch } from "document-model";
import type {
  SetGovernanceUriAction,
  SetApplicationsUriAction,
  SetAttestationIssuersUriAction,
  AddRequiredCredentialAction,
  RemoveRequiredCredentialAction,
  AddContextDocumentAction,
  RemoveContextDocumentAction,
  AddPoolSameAsAction,
  RemovePoolSameAsAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolResourcesOperations {
  setGovernanceUriOperation: (
    state: GrantPoolState,
    action: SetGovernanceUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setApplicationsUriOperation: (
    state: GrantPoolState,
    action: SetApplicationsUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAttestationIssuersUriOperation: (
    state: GrantPoolState,
    action: SetAttestationIssuersUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  addRequiredCredentialOperation: (
    state: GrantPoolState,
    action: AddRequiredCredentialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeRequiredCredentialOperation: (
    state: GrantPoolState,
    action: RemoveRequiredCredentialAction,
    dispatch?: SignalDispatch,
  ) => void;
  addContextDocumentOperation: (
    state: GrantPoolState,
    action: AddContextDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeContextDocumentOperation: (
    state: GrantPoolState,
    action: RemoveContextDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
  addPoolSameAsOperation: (
    state: GrantPoolState,
    action: AddPoolSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removePoolSameAsOperation: (
    state: GrantPoolState,
    action: RemovePoolSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
