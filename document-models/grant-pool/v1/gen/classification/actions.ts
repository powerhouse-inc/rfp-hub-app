import type { Action } from "document-model";
import type {
  AddCategoryInput,
  RemoveCategoryInput,
  AddEcosystemInput,
  RemoveEcosystemInput,
  AddTagInput,
  RemoveTagInput,
} from "../types.js";

export type AddCategoryAction = Action & {
  type: "ADD_CATEGORY";
  input: AddCategoryInput;
};
export type RemoveCategoryAction = Action & {
  type: "REMOVE_CATEGORY";
  input: RemoveCategoryInput;
};
export type AddEcosystemAction = Action & {
  type: "ADD_ECOSYSTEM";
  input: AddEcosystemInput;
};
export type RemoveEcosystemAction = Action & {
  type: "REMOVE_ECOSYSTEM";
  input: RemoveEcosystemInput;
};
export type AddTagAction = Action & { type: "ADD_TAG"; input: AddTagInput };
export type RemoveTagAction = Action & {
  type: "REMOVE_TAG";
  input: RemoveTagInput;
};

export type GrantPoolClassificationAction =
  | AddCategoryAction
  | RemoveCategoryAction
  | AddEcosystemAction
  | RemoveEcosystemAction
  | AddTagAction
  | RemoveTagAction;
