/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { Action } from "document-model";
import type {
  AddProjectSameAsInput,
  AddProjectSocialInput,
  RemoveProjectSameAsInput,
  RemoveProjectSocialInput,
  UpdateProjectSocialUrlInput,
} from "../types.js";

export type AddProjectSocialAction = Action & {
  type: "ADD_PROJECT_SOCIAL";
  input: AddProjectSocialInput;
};
export type RemoveProjectSocialAction = Action & {
  type: "REMOVE_PROJECT_SOCIAL";
  input: RemoveProjectSocialInput;
};
export type UpdateProjectSocialUrlAction = Action & {
  type: "UPDATE_PROJECT_SOCIAL_URL";
  input: UpdateProjectSocialUrlInput;
};
export type AddProjectSameAsAction = Action & {
  type: "ADD_PROJECT_SAME_AS";
  input: AddProjectSameAsInput;
};
export type RemoveProjectSameAsAction = Action & {
  type: "REMOVE_PROJECT_SAME_AS";
  input: RemoveProjectSameAsInput;
};

export type ProjectLinksAction =
  | AddProjectSocialAction
  | RemoveProjectSocialAction
  | UpdateProjectSocialUrlAction
  | AddProjectSameAsAction
  | RemoveProjectSameAsAction;
