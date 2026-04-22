import { type SignalDispatch } from "document-model";
import type {
  SetProjectNameAction,
  SetProjectDescriptionAction,
  SetContentUriAction,
  SetProjectEmailAction,
  SetMembersUriAction,
  SetProjectImageAction,
  SetProjectCoverImageAction,
  SetLicenseUriAction,
  SetProjectCodeAction,
  SetOwnerDidAction,
  SetProjectExtensionsAction,
} from "./actions.js";
import type { ProjectState } from "../types.js";

export interface ProjectProfileOperations {
  setProjectNameOperation: (
    state: ProjectState,
    action: SetProjectNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectDescriptionOperation: (
    state: ProjectState,
    action: SetProjectDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setContentUriOperation: (
    state: ProjectState,
    action: SetContentUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectEmailOperation: (
    state: ProjectState,
    action: SetProjectEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setMembersUriOperation: (
    state: ProjectState,
    action: SetMembersUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectImageOperation: (
    state: ProjectState,
    action: SetProjectImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectCoverImageOperation: (
    state: ProjectState,
    action: SetProjectCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setLicenseUriOperation: (
    state: ProjectState,
    action: SetLicenseUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectCodeOperation: (
    state: ProjectState,
    action: SetProjectCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setOwnerDidOperation: (
    state: ProjectState,
    action: SetOwnerDidAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectExtensionsOperation: (
    state: ProjectState,
    action: SetProjectExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
