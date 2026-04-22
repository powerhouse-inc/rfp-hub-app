import { type SignalDispatch } from "document-model";
import type {
  AddRelevantPoolAction,
  RemoveRelevantPoolAction,
} from "./actions.js";
import type { ProjectState } from "../types.js";

export interface ProjectRelevanceOperations {
  addRelevantPoolOperation: (
    state: ProjectState,
    action: AddRelevantPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeRelevantPoolOperation: (
    state: ProjectState,
    action: RemoveRelevantPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
}
