import type { Action } from "document-model";
import type {
  SetOpenDateInput,
  SetCloseDateInput,
  SetIsOpenInput,
  AdvanceLifecycleInput,
} from "../types.js";

export type SetOpenDateAction = Action & {
  type: "SET_OPEN_DATE";
  input: SetOpenDateInput;
};
export type SetCloseDateAction = Action & {
  type: "SET_CLOSE_DATE";
  input: SetCloseDateInput;
};
export type SetIsOpenAction = Action & {
  type: "SET_IS_OPEN";
  input: SetIsOpenInput;
};
export type AdvanceLifecycleAction = Action & {
  type: "ADVANCE_LIFECYCLE";
  input: AdvanceLifecycleInput;
};

export type GrantPoolScheduleAction =
  | SetOpenDateAction
  | SetCloseDateAction
  | SetIsOpenAction
  | AdvanceLifecycleAction;
