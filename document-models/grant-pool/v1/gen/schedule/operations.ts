import { type SignalDispatch } from "document-model";
import type {
  SetOpenDateAction,
  SetCloseDateAction,
  SetIsOpenAction,
  AdvanceLifecycleAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolScheduleOperations {
  setOpenDateOperation: (
    state: GrantPoolState,
    action: SetOpenDateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCloseDateOperation: (
    state: GrantPoolState,
    action: SetCloseDateAction,
    dispatch?: SignalDispatch,
  ) => void;
  setIsOpenOperation: (
    state: GrantPoolState,
    action: SetIsOpenAction,
    dispatch?: SignalDispatch,
  ) => void;
  advanceLifecycleOperation: (
    state: GrantPoolState,
    action: AdvanceLifecycleAction,
    dispatch?: SignalDispatch,
  ) => void;
}
