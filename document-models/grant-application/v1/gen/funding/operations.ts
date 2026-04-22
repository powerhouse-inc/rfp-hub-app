import { type SignalDispatch } from "document-model";
import type {
  AddFundsAskedAction,
  RemoveFundsAskedAction,
  SetFundsAskedUsdAction,
  AddFundsApprovedAction,
  SetFundsApprovedUsdAction,
  SetPayoutAddressAction,
  SetPaymentTermAction,
} from "./actions.js";
import type { GrantApplicationState } from "../types.js";

export interface GrantApplicationFundingOperations {
  addFundsAskedOperation: (
    state: GrantApplicationState,
    action: AddFundsAskedAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeFundsAskedOperation: (
    state: GrantApplicationState,
    action: RemoveFundsAskedAction,
    dispatch?: SignalDispatch,
  ) => void;
  setFundsAskedUsdOperation: (
    state: GrantApplicationState,
    action: SetFundsAskedUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  addFundsApprovedOperation: (
    state: GrantApplicationState,
    action: AddFundsApprovedAction,
    dispatch?: SignalDispatch,
  ) => void;
  setFundsApprovedUsdOperation: (
    state: GrantApplicationState,
    action: SetFundsApprovedUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPayoutAddressOperation: (
    state: GrantApplicationState,
    action: SetPayoutAddressAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPaymentTermOperation: (
    state: GrantApplicationState,
    action: SetPaymentTermAction,
    dispatch?: SignalDispatch,
  ) => void;
}
