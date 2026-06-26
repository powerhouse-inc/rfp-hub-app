/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AdvanceLifecycleInputSchema,
  SetCloseDateInputSchema,
  SetIsOpenInputSchema,
  SetOpenDateInputSchema,
} from "../schema/zod.js";
import type {
  AdvanceLifecycleInput,
  SetCloseDateInput,
  SetIsOpenInput,
  SetOpenDateInput,
} from "../types.js";
import type {
  AdvanceLifecycleAction,
  SetCloseDateAction,
  SetIsOpenAction,
  SetOpenDateAction,
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
