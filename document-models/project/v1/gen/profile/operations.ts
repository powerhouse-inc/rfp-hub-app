/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { ProjectGlobalState } from "../types.js";
import type {
  SetContentUriAction,
  SetLicenseUriAction,
  SetMembersUriAction,
  SetOwnerDidAction,
  SetProjectCodeAction,
  SetProjectCoverImageAction,
  SetProjectDescriptionAction,
  SetProjectEmailAction,
  SetProjectExtensionsAction,
  SetProjectImageAction,
  SetProjectNameAction,
} from "./actions.js";

export interface ProjectProfileOperations {
  setProjectNameOperation: (
    state: ProjectGlobalState,
    action: SetProjectNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectDescriptionOperation: (
    state: ProjectGlobalState,
    action: SetProjectDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setContentUriOperation: (
    state: ProjectGlobalState,
    action: SetContentUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectEmailOperation: (
    state: ProjectGlobalState,
    action: SetProjectEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setMembersUriOperation: (
    state: ProjectGlobalState,
    action: SetMembersUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectImageOperation: (
    state: ProjectGlobalState,
    action: SetProjectImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectCoverImageOperation: (
    state: ProjectGlobalState,
    action: SetProjectCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setLicenseUriOperation: (
    state: ProjectGlobalState,
    action: SetLicenseUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectCodeOperation: (
    state: ProjectGlobalState,
    action: SetProjectCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setOwnerDidOperation: (
    state: ProjectGlobalState,
    action: SetOwnerDidAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProjectExtensionsOperation: (
    state: ProjectGlobalState,
    action: SetProjectExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
