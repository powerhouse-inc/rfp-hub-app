import type { Action } from "document-model";
import type {
  SetProjectNameInput,
  SetProjectDescriptionInput,
  SetContentUriInput,
  SetProjectEmailInput,
  SetMembersUriInput,
  SetProjectImageInput,
  SetProjectCoverImageInput,
  SetLicenseUriInput,
  SetProjectCodeInput,
  SetOwnerDidInput,
  SetProjectExtensionsInput,
} from "../types.js";

export type SetProjectNameAction = Action & {
  type: "SET_PROJECT_NAME";
  input: SetProjectNameInput;
};
export type SetProjectDescriptionAction = Action & {
  type: "SET_PROJECT_DESCRIPTION";
  input: SetProjectDescriptionInput;
};
export type SetContentUriAction = Action & {
  type: "SET_CONTENT_URI";
  input: SetContentUriInput;
};
export type SetProjectEmailAction = Action & {
  type: "SET_PROJECT_EMAIL";
  input: SetProjectEmailInput;
};
export type SetMembersUriAction = Action & {
  type: "SET_MEMBERS_URI";
  input: SetMembersUriInput;
};
export type SetProjectImageAction = Action & {
  type: "SET_PROJECT_IMAGE";
  input: SetProjectImageInput;
};
export type SetProjectCoverImageAction = Action & {
  type: "SET_PROJECT_COVER_IMAGE";
  input: SetProjectCoverImageInput;
};
export type SetLicenseUriAction = Action & {
  type: "SET_LICENSE_URI";
  input: SetLicenseUriInput;
};
export type SetProjectCodeAction = Action & {
  type: "SET_PROJECT_CODE";
  input: SetProjectCodeInput;
};
export type SetOwnerDidAction = Action & {
  type: "SET_OWNER_DID";
  input: SetOwnerDidInput;
};
export type SetProjectExtensionsAction = Action & {
  type: "SET_PROJECT_EXTENSIONS";
  input: SetProjectExtensionsInput;
};

export type ProjectProfileAction =
  | SetProjectNameAction
  | SetProjectDescriptionAction
  | SetContentUriAction
  | SetProjectEmailAction
  | SetMembersUriAction
  | SetProjectImageAction
  | SetProjectCoverImageAction
  | SetLicenseUriAction
  | SetProjectCodeAction
  | SetOwnerDidAction
  | SetProjectExtensionsAction;
