/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantSystemGlobalState } from "../types.js";
import type {
  SetCodeAction,
  SetContactNameAction,
  SetCoverImageAction,
  SetDescriptionAction,
  SetEmailAction,
  SetExtensionsAction,
  SetGrantPoolsUriAction,
  SetImageAction,
  SetOrgNameAction,
  SetTypeAction,
} from "./actions.js";

export interface GrantSystemIdentityOperations {
  setTypeOperation: (
    state: GrantSystemGlobalState,
    action: SetTypeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCodeOperation: (
    state: GrantSystemGlobalState,
    action: SetCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDescriptionOperation: (
    state: GrantSystemGlobalState,
    action: SetDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantPoolsUriOperation: (
    state: GrantSystemGlobalState,
    action: SetGrantPoolsUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setExtensionsOperation: (
    state: GrantSystemGlobalState,
    action: SetExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
  setImageOperation: (
    state: GrantSystemGlobalState,
    action: SetImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCoverImageOperation: (
    state: GrantSystemGlobalState,
    action: SetCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEmailOperation: (
    state: GrantSystemGlobalState,
    action: SetEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setContactNameOperation: (
    state: GrantSystemGlobalState,
    action: SetContactNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setOrgNameOperation: (
    state: GrantSystemGlobalState,
    action: SetOrgNameAction,
    dispatch?: SignalDispatch,
  ) => void;
}
