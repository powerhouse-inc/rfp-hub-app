/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AddPoolSizeEntryInputSchema,
  RemovePoolSizeEntryInputSchema,
  SetFundingMechanismInputSchema,
  SetGrantBoundsInputSchema,
  SetTotalPoolSizeUsdInputSchema,
} from "../schema/zod.js";
import type {
  AddPoolSizeEntryInput,
  RemovePoolSizeEntryInput,
  SetFundingMechanismInput,
  SetGrantBoundsInput,
  SetTotalPoolSizeUsdInput,
} from "../types.js";
import type {
  AddPoolSizeEntryAction,
  RemovePoolSizeEntryAction,
  SetFundingMechanismAction,
  SetGrantBoundsAction,
  SetTotalPoolSizeUsdAction,
} from "./actions.js";

export const setFundingMechanism = (input: SetFundingMechanismInput) =>
  createAction<SetFundingMechanismAction>(
    "SET_FUNDING_MECHANISM",
    { ...input },
    undefined,
    SetFundingMechanismInputSchema,
    "global",
  );

export const addPoolSizeEntry = (input: AddPoolSizeEntryInput) =>
  createAction<AddPoolSizeEntryAction>(
    "ADD_POOL_SIZE_ENTRY",
    { ...input },
    undefined,
    AddPoolSizeEntryInputSchema,
    "global",
  );

export const removePoolSizeEntry = (input: RemovePoolSizeEntryInput) =>
  createAction<RemovePoolSizeEntryAction>(
    "REMOVE_POOL_SIZE_ENTRY",
    { ...input },
    undefined,
    RemovePoolSizeEntryInputSchema,
    "global",
  );

export const setTotalPoolSizeUsd = (input: SetTotalPoolSizeUsdInput) =>
  createAction<SetTotalPoolSizeUsdAction>(
    "SET_TOTAL_POOL_SIZE_USD",
    { ...input },
    undefined,
    SetTotalPoolSizeUsdInputSchema,
    "global",
  );

export const setGrantBounds = (input: SetGrantBoundsInput) =>
  createAction<SetGrantBoundsAction>(
    "SET_GRANT_BOUNDS",
    { ...input },
    undefined,
    SetGrantBoundsInputSchema,
    "global",
  );
