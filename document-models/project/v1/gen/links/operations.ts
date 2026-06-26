/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { ProjectGlobalState } from "../types.js";
import type {
  AddProjectSameAsAction,
  AddProjectSocialAction,
  RemoveProjectSameAsAction,
  RemoveProjectSocialAction,
  UpdateProjectSocialUrlAction,
} from "./actions.js";

export interface ProjectLinksOperations {
  addProjectSocialOperation: (
    state: ProjectGlobalState,
    action: AddProjectSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeProjectSocialOperation: (
    state: ProjectGlobalState,
    action: RemoveProjectSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateProjectSocialUrlOperation: (
    state: ProjectGlobalState,
    action: UpdateProjectSocialUrlAction,
    dispatch?: SignalDispatch,
  ) => void;
  addProjectSameAsOperation: (
    state: ProjectGlobalState,
    action: AddProjectSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeProjectSameAsOperation: (
    state: ProjectGlobalState,
    action: RemoveProjectSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
