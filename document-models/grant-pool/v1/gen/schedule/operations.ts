/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  AdvanceLifecycleAction,
  SetCloseDateAction,
  SetIsOpenAction,
  SetOpenDateAction,
} from "./actions.js";

export interface GrantPoolScheduleOperations {
  setOpenDateOperation: (
    state: GrantPoolGlobalState,
    action: SetOpenDateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCloseDateOperation: (
    state: GrantPoolGlobalState,
    action: SetCloseDateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setIsOpenOperation: (
    state: GrantPoolGlobalState,
    action: SetIsOpenAction,
    dispatch?: SignalDispatch,
  ) => void;
  advanceLifecycleOperation: (
    state: GrantPoolGlobalState,
    action: AdvanceLifecycleAction,
    dispatch?: SignalDispatch,
  ) => void;
}
