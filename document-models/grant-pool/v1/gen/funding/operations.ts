/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  AddPoolSizeEntryAction,
  RemovePoolSizeEntryAction,
  SetFundingMechanismAction,
  SetGrantBoundsAction,
  SetTotalPoolSizeUsdAction,
} from "./actions.js";

export interface GrantPoolFundingOperations {
  setFundingMechanismOperation: (
    state: GrantPoolGlobalState,
    action: SetFundingMechanismAction,
    dispatch?: SignalDispatch,
  ) => void;
  addPoolSizeEntryOperation: (
    state: GrantPoolGlobalState,
    action: AddPoolSizeEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  removePoolSizeEntryOperation: (
    state: GrantPoolGlobalState,
    action: RemovePoolSizeEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  setTotalPoolSizeUsdOperation: (
    state: GrantPoolGlobalState,
    action: SetTotalPoolSizeUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantBoundsOperation: (
    state: GrantPoolGlobalState,
    action: SetGrantBoundsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
