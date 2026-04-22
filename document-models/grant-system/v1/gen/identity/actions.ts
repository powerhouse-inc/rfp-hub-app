import type { Action } from "document-model";
import type {
  SetTypeInput,
  SetCodeInput,
  SetDescriptionInput,
  SetGrantPoolsUriInput,
  SetExtensionsInput,
  SetImageInput,
  SetCoverImageInput,
  SetEmailInput,
  SetContactNameInput,
  SetOrgNameInput,
} from "../types.js";

export type SetTypeAction = Action & { type: "SET_TYPE"; input: SetTypeInput };
export type SetCodeAction = Action & { type: "SET_CODE"; input: SetCodeInput };
export type SetDescriptionAction = Action & {
  type: "SET_DESCRIPTION";
  input: SetDescriptionInput;
};
export type SetGrantPoolsUriAction = Action & {
  type: "SET_GRANT_POOLS_URI";
  input: SetGrantPoolsUriInput;
};
export type SetExtensionsAction = Action & {
  type: "SET_EXTENSIONS";
  input: SetExtensionsInput;
};
export type SetImageAction = Action & {
  type: "SET_IMAGE";
  input: SetImageInput;
};
export type SetCoverImageAction = Action & {
  type: "SET_COVER_IMAGE";
  input: SetCoverImageInput;
};
export type SetEmailAction = Action & {
  type: "SET_EMAIL";
  input: SetEmailInput;
};
export type SetContactNameAction = Action & {
  type: "SET_CONTACT_NAME";
  input: SetContactNameInput;
};
export type SetOrgNameAction = Action & {
  type: "SET_ORG_NAME";
  input: SetOrgNameInput;
};

export type GrantSystemIdentityAction =
  | SetTypeAction
  | SetCodeAction
  | SetDescriptionAction
  | SetGrantPoolsUriAction
  | SetExtensionsAction
  | SetImageAction
  | SetCoverImageAction
  | SetEmailAction
  | SetContactNameAction
  | SetOrgNameAction;
