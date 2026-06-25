/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { ProjectGlobalState } from "../types.js";
import type {
  AddRelevantPoolAction,
  RemoveRelevantPoolAction,
} from "./actions.js";

export interface ProjectRelevanceOperations {
  addRelevantPoolOperation: (
    state: ProjectGlobalState,
    action: AddRelevantPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeRelevantPoolOperation: (
    state: ProjectGlobalState,
    action: RemoveRelevantPoolAction,
    dispatch?: SignalDispatch,
  ) => void;
}
