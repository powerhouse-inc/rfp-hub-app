import { type SignalDispatch } from "document-model";
import type {
  AddProjectSocialAction,
  RemoveProjectSocialAction,
  UpdateProjectSocialUrlAction,
  AddProjectSameAsAction,
  RemoveProjectSameAsAction,
} from "./actions.js";
import type { ProjectState } from "../types.js";

export interface ProjectLinksOperations {
  addProjectSocialOperation: (
    state: ProjectState,
    action: AddProjectSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeProjectSocialOperation: (
    state: ProjectState,
    action: RemoveProjectSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateProjectSocialUrlOperation: (
    state: ProjectState,
    action: UpdateProjectSocialUrlAction,
    dispatch?: SignalDispatch,
  ) => void;
  addProjectSameAsOperation: (
    state: ProjectState,
    action: AddProjectSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeProjectSameAsOperation: (
    state: ProjectState,
    action: RemoveProjectSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
