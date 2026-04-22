import type { Action } from "document-model";
import type {
  AddSameAsInput,
  RemoveSameAsInput,
  AddSocialInput,
  RemoveSocialInput,
  UpdateSocialUrlInput,
} from "../types.js";

export type AddSameAsAction = Action & {
  type: "ADD_SAME_AS";
  input: AddSameAsInput;
};
export type RemoveSameAsAction = Action & {
  type: "REMOVE_SAME_AS";
  input: RemoveSameAsInput;
};
export type AddSocialAction = Action & {
  type: "ADD_SOCIAL";
  input: AddSocialInput;
};
export type RemoveSocialAction = Action & {
  type: "REMOVE_SOCIAL";
  input: RemoveSocialInput;
};
export type UpdateSocialUrlAction = Action & {
  type: "UPDATE_SOCIAL_URL";
  input: UpdateSocialUrlInput;
};

export type GrantSystemLinksAction =
  | AddSameAsAction
  | RemoveSameAsAction
  | AddSocialAction
  | RemoveSocialAction
  | UpdateSocialUrlAction;
