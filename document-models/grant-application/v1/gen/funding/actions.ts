import type { Action } from "document-model";
import type {
  AddFundsAskedInput,
  RemoveFundsAskedInput,
  SetFundsAskedUsdInput,
  AddFundsApprovedInput,
  SetFundsApprovedUsdInput,
  SetPayoutAddressInput,
  SetPaymentTermInput,
} from "../types.js";

export type AddFundsAskedAction = Action & {
  type: "ADD_FUNDS_ASKED";
  input: AddFundsAskedInput;
};
export type RemoveFundsAskedAction = Action & {
  type: "REMOVE_FUNDS_ASKED";
  input: RemoveFundsAskedInput;
};
export type SetFundsAskedUsdAction = Action & {
  type: "SET_FUNDS_ASKED_USD";
  input: SetFundsAskedUsdInput;
};
export type AddFundsApprovedAction = Action & {
  type: "ADD_FUNDS_APPROVED";
  input: AddFundsApprovedInput;
};
export type SetFundsApprovedUsdAction = Action & {
  type: "SET_FUNDS_APPROVED_USD";
  input: SetFundsApprovedUsdInput;
};
export type SetPayoutAddressAction = Action & {
  type: "SET_PAYOUT_ADDRESS";
  input: SetPayoutAddressInput;
};
export type SetPaymentTermAction = Action & {
  type: "SET_PAYMENT_TERM";
  input: SetPaymentTermInput;
};

export type GrantApplicationFundingAction =
  | AddFundsAskedAction
  | RemoveFundsAskedAction
  | SetFundsAskedUsdAction
  | AddFundsApprovedAction
  | SetFundsApprovedUsdAction
  | SetPayoutAddressAction
  | SetPaymentTermAction;
