import { type SignalDispatch } from "document-model";
import type {
  SetFundingMechanismAction,
  AddPoolSizeEntryAction,
  RemovePoolSizeEntryAction,
  SetTotalPoolSizeUsdAction,
  SetGrantBoundsAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolFundingOperations {
  setFundingMechanismOperation: (
    state: GrantPoolState,
    action: SetFundingMechanismAction,
    dispatch?: SignalDispatch,
  ) => void;
  addPoolSizeEntryOperation: (
    state: GrantPoolState,
    action: AddPoolSizeEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  removePoolSizeEntryOperation: (
    state: GrantPoolState,
    action: RemovePoolSizeEntryAction,
    dispatch?: SignalDispatch,
  ) => void;
  setTotalPoolSizeUsdOperation: (
    state: GrantPoolState,
    action: SetTotalPoolSizeUsdAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantBoundsOperation: (
    state: GrantPoolState,
    action: SetGrantBoundsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
