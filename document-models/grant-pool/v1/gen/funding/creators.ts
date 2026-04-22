import { createAction } from "document-model";
import {
  SetFundingMechanismInputSchema,
  AddPoolSizeEntryInputSchema,
  RemovePoolSizeEntryInputSchema,
  SetTotalPoolSizeUsdInputSchema,
  SetGrantBoundsInputSchema,
} from "../schema/zod.js";
import type {
  SetFundingMechanismInput,
  AddPoolSizeEntryInput,
  RemovePoolSizeEntryInput,
  SetTotalPoolSizeUsdInput,
  SetGrantBoundsInput,
} from "../types.js";
import type {
  SetFundingMechanismAction,
  AddPoolSizeEntryAction,
  RemovePoolSizeEntryAction,
  SetTotalPoolSizeUsdAction,
  SetGrantBoundsAction,
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
