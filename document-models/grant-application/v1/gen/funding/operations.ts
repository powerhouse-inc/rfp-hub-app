/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantApplicationGlobalState } from "../types.js";
import type {
  AddFundsApprovedAction,
  AddFundsAskedAction,
  RemoveFundsAskedAction,
  SetFundsApprovedUsdAction,
  SetFundsAskedUsdAction,
  SetPaymentTermAction,
  SetPayoutAddressAction,
} from "./actions.js";

export interface GrantApplicationFundingOperations {
  addFundsAskedOperation: (
    state: GrantApplicationGlobalState,
    action: AddFundsAskedAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeFundsAskedOperation: (
    state: GrantApplicationGlobalState,
    action: RemoveFundsAskedAction,
    dispatch?: SignalDispatch,
  ) => void;
  setFundsAskedUsdOperation: (
    state: GrantApplicationGlobalState,
    action: SetFundsAskedUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  addFundsApprovedOperation: (
    state: GrantApplicationGlobalState,
    action: AddFundsApprovedAction,
    dispatch?: SignalDispatch,
  ) => void;
  setFundsApprovedUsdOperation: (
    state: GrantApplicationGlobalState,
    action: SetFundsApprovedUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPayoutAddressOperation: (
    state: GrantApplicationGlobalState,
    action: SetPayoutAddressAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPaymentTermOperation: (
    state: GrantApplicationGlobalState,
    action: SetPaymentTermAction,
    dispatch?: SignalDispatch,
  ) => void;
}
