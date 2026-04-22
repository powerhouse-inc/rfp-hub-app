import type { Action } from "document-model";
import type {
  SetPoolRefInput,
  SetProjectRefInput,
  SetCreatedAtInput,
  SetAppContentUriInput,
  SetDiscussionsToInput,
  SetAppLicenseUriInput,
  SetIsInactiveInput,
  SetCompletionRateInput,
  SetAppExtensionsInput,
  AddAppSocialInput,
  RemoveAppSocialInput,
} from "../types.js";

export type SetPoolRefAction = Action & {
  type: "SET_POOL_REF";
  input: SetPoolRefInput;
};
export type SetProjectRefAction = Action & {
  type: "SET_PROJECT_REF";
  input: SetProjectRefInput;
};
export type SetCreatedAtAction = Action & {
  type: "SET_CREATED_AT";
  input: SetCreatedAtInput;
};
export type SetAppContentUriAction = Action & {
  type: "SET_APP_CONTENT_URI";
  input: SetAppContentUriInput;
};
export type SetDiscussionsToAction = Action & {
  type: "SET_DISCUSSIONS_TO";
  input: SetDiscussionsToInput;
};
export type SetAppLicenseUriAction = Action & {
  type: "SET_APP_LICENSE_URI";
  input: SetAppLicenseUriInput;
};
export type SetIsInactiveAction = Action & {
  type: "SET_IS_INACTIVE";
  input: SetIsInactiveInput;
};
export type SetCompletionRateAction = Action & {
  type: "SET_COMPLETION_RATE";
  input: SetCompletionRateInput;
};
export type SetAppExtensionsAction = Action & {
  type: "SET_APP_EXTENSIONS";
  input: SetAppExtensionsInput;
};
export type AddAppSocialAction = Action & {
  type: "ADD_APP_SOCIAL";
  input: AddAppSocialInput;
};
export type RemoveAppSocialAction = Action & {
  type: "REMOVE_APP_SOCIAL";
  input: RemoveAppSocialInput;
};

export type GrantApplicationMetadataAction =
  | SetPoolRefAction
  | SetProjectRefAction
  | SetCreatedAtAction
  | SetAppContentUriAction
  | SetDiscussionsToAction
  | SetAppLicenseUriAction
  | SetIsInactiveAction
  | SetCompletionRateAction
  | SetAppExtensionsAction
  | AddAppSocialAction
  | RemoveAppSocialAction;
