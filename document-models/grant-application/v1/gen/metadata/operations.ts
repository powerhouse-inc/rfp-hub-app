/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantApplicationGlobalState } from "../types.js";
import type {
  AddAppSocialAction,
  RemoveAppSocialAction,
  SetAppContentUriAction,
  SetAppExtensionsAction,
  SetAppLicenseUriAction,
  SetCompletionRateAction,
  SetCreatedAtAction,
  SetDiscussionsToAction,
  SetIsInactiveAction,
  SetPoolRefAction,
  SetProjectRefAction,
} from "./actions.js";

export interface GrantApplicationMetadataOperations {
  setPoolRefOperation: (
    state: GrantApplicationGlobalState,
    action: SetPoolRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectRefOperation: (
    state: GrantApplicationGlobalState,
    action: SetProjectRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCreatedAtOperation: (
    state: GrantApplicationGlobalState,
    action: SetCreatedAtAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppContentUriOperation: (
    state: GrantApplicationGlobalState,
    action: SetAppContentUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDiscussionsToOperation: (
    state: GrantApplicationGlobalState,
    action: SetDiscussionsToAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppLicenseUriOperation: (
    state: GrantApplicationGlobalState,
    action: SetAppLicenseUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setIsInactiveOperation: (
    state: GrantApplicationGlobalState,
    action: SetIsInactiveAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCompletionRateOperation: (
    state: GrantApplicationGlobalState,
    action: SetCompletionRateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppExtensionsOperation: (
    state: GrantApplicationGlobalState,
    action: SetAppExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
  addAppSocialOperation: (
    state: GrantApplicationGlobalState,
    action: AddAppSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeAppSocialOperation: (
    state: GrantApplicationGlobalState,
    action: RemoveAppSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
}
