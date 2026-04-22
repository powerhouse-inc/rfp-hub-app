import { createAction } from "document-model";
import {
  AddFundsAskedInputSchema,
  RemoveFundsAskedInputSchema,
  SetFundsAskedUsdInputSchema,
  AddFundsApprovedInputSchema,
  SetFundsApprovedUsdInputSchema,
  SetPayoutAddressInputSchema,
  SetPaymentTermInputSchema,
} from "../schema/zod.js";
import type {
  AddFundsAskedInput,
  RemoveFundsAskedInput,
  SetFundsAskedUsdInput,
  AddFundsApprovedInput,
  SetFundsApprovedUsdInput,
  SetPayoutAddressInput,
  SetPaymentTermInput,
} from "../types.js";
import type {
  AddFundsAskedAction,
  RemoveFundsAskedAction,
  SetFundsAskedUsdAction,
  AddFundsApprovedAction,
  SetFundsApprovedUsdAction,
  SetPayoutAddressAction,
  SetPaymentTermAction,
} from "./actions.js";

export const addFundsAsked = (input: AddFundsAskedInput) =>
  createAction<AddFundsAskedAction>(
    "ADD_FUNDS_ASKED",
    { ...input },
    undefined,
    AddFundsAskedInputSchema,
    "global",
  );

export const removeFundsAsked = (input: RemoveFundsAskedInput) =>
  createAction<RemoveFundsAskedAction>(
    "REMOVE_FUNDS_ASKED",
    { ...input },
    undefined,
    RemoveFundsAskedInputSchema,
    "global",
  );

export const setFundsAskedUsd = (input: SetFundsAskedUsdInput) =>
  createAction<SetFundsAskedUsdAction>(
    "SET_FUNDS_ASKED_USD",
    { ...input },
    undefined,
    SetFundsAskedUsdInputSchema,
    "global",
  );

export const addFundsApproved = (input: AddFundsApprovedInput) =>
  createAction<AddFundsApprovedAction>(
    "ADD_FUNDS_APPROVED",
    { ...input },
    undefined,
    AddFundsApprovedInputSchema,
    "global",
  );

export const setFundsApprovedUsd = (input: SetFundsApprovedUsdInput) =>
  createAction<SetFundsApprovedUsdAction>(
    "SET_FUNDS_APPROVED_USD",
    { ...input },
    undefined,
    SetFundsApprovedUsdInputSchema,
    "global",
  );

export const setPayoutAddress = (input: SetPayoutAddressInput) =>
  createAction<SetPayoutAddressAction>(
    "SET_PAYOUT_ADDRESS",
    { ...input },
    undefined,
    SetPayoutAddressInputSchema,
    "global",
  );

export const setPaymentTerm = (input: SetPaymentTermInput) =>
  createAction<SetPaymentTermAction>(
    "SET_PAYMENT_TERM",
    { ...input },
    undefined,
    SetPaymentTermInputSchema,
    "global",
  );
