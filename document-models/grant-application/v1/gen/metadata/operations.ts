import { type SignalDispatch } from "document-model";
import type {
  SetPoolRefAction,
  SetProjectRefAction,
  SetCreatedAtAction,
  SetAppContentUriAction,
  SetDiscussionsToAction,
  SetAppLicenseUriAction,
  SetIsInactiveAction,
  SetCompletionRateAction,
  SetAppExtensionsAction,
  AddAppSocialAction,
  RemoveAppSocialAction,
} from "./actions.js";
import type { GrantApplicationState } from "../types.js";

export interface GrantApplicationMetadataOperations {
  setPoolRefOperation: (
    state: GrantApplicationState,
    action: SetPoolRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectRefOperation: (
    state: GrantApplicationState,
    action: SetProjectRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCreatedAtOperation: (
    state: GrantApplicationState,
    action: SetCreatedAtAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppContentUriOperation: (
    state: GrantApplicationState,
    action: SetAppContentUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDiscussionsToOperation: (
    state: GrantApplicationState,
    action: SetDiscussionsToAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppLicenseUriOperation: (
    state: GrantApplicationState,
    action: SetAppLicenseUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setIsInactiveOperation: (
    state: GrantApplicationState,
    action: SetIsInactiveAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCompletionRateOperation: (
    state: GrantApplicationState,
    action: SetCompletionRateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setAppExtensionsOperation: (
    state: GrantApplicationState,
    action: SetAppExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
  addAppSocialOperation: (
    state: GrantApplicationState,
    action: AddAppSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeAppSocialOperation: (
    state: GrantApplicationState,
    action: RemoveAppSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
}
