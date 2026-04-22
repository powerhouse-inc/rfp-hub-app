import type { Action } from "document-model";
import type {
  AddRelevantPoolInput,
  RemoveRelevantPoolInput,
} from "../types.js";

export type AddRelevantPoolAction = Action & {
  type: "ADD_RELEVANT_POOL";
  input: AddRelevantPoolInput;
};
export type RemoveRelevantPoolAction = Action & {
  type: "REMOVE_RELEVANT_POOL";
  input: RemoveRelevantPoolInput;
};

export type ProjectRelevanceAction =
  | AddRelevantPoolAction
  | RemoveRelevantPoolAction;
