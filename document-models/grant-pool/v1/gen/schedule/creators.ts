import { createAction } from "document-model";
import {
  SetOpenDateInputSchema,
  SetCloseDateInputSchema,
  SetIsOpenInputSchema,
  AdvanceLifecycleInputSchema,
} from "../schema/zod.js";
import type {
  SetOpenDateInput,
  SetCloseDateInput,
  SetIsOpenInput,
  AdvanceLifecycleInput,
} from "../types.js";
import type {
  SetOpenDateAction,
  SetCloseDateAction,
  SetIsOpenAction,
  AdvanceLifecycleAction,
} from "./actions.js";

export const setOpenDate = (input: SetOpenDateInput) =>
  createAction<SetOpenDateAction>(
    "SET_OPEN_DATE",
    { ...input },
    undefined,
    SetOpenDateInputSchema,
    "global",
  );

export const setCloseDate = (input: SetCloseDateInput) =>
  createAction<SetCloseDateAction>(
    "SET_CLOSE_DATE",
    { ...input },
    undefined,
    SetCloseDateInputSchema,
    "global",
  );

export const setIsOpen = (input: SetIsOpenInput) =>
  createAction<SetIsOpenAction>(
    "SET_IS_OPEN",
    { ...input },
    undefined,
    SetIsOpenInputSchema,
    "global",
  );

export const advanceLifecycle = (input: AdvanceLifecycleInput) =>
  createAction<AdvanceLifecycleAction>(
    "ADVANCE_LIFECYCLE",
    { ...input },
    undefined,
    AdvanceLifecycleInputSchema,
    "global",
  );
