import { type SignalDispatch } from "document-model";
import type {
  SetTypeAction,
  SetCodeAction,
  SetDescriptionAction,
  SetGrantPoolsUriAction,
  SetExtensionsAction,
  SetImageAction,
  SetCoverImageAction,
  SetEmailAction,
  SetContactNameAction,
  SetOrgNameAction,
} from "./actions.js";
import type { GrantSystemState } from "../types.js";

export interface GrantSystemIdentityOperations {
  setTypeOperation: (
    state: GrantSystemState,
    action: SetTypeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCodeOperation: (
    state: GrantSystemState,
    action: SetCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDescriptionOperation: (
    state: GrantSystemState,
    action: SetDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantPoolsUriOperation: (
    state: GrantSystemState,
    action: SetGrantPoolsUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setExtensionsOperation: (
    state: GrantSystemState,
    action: SetExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
  setImageOperation: (
    state: GrantSystemState,
    action: SetImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCoverImageOperation: (
    state: GrantSystemState,
    action: SetCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEmailOperation: (
    state: GrantSystemState,
    action: SetEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setContactNameOperation: (
    state: GrantSystemState,
    action: SetContactNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setOrgNameOperation: (
    state: GrantSystemState,
    action: SetOrgNameAction,
    dispatch?: SignalDispatch,
  ) => void;
}
