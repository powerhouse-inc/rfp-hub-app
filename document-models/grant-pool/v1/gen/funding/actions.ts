import type { Action } from "document-model";
import type {
  SetFundingMechanismInput,
  AddPoolSizeEntryInput,
  RemovePoolSizeEntryInput,
  SetTotalPoolSizeUsdInput,
  SetGrantBoundsInput,
} from "../types.js";

export type SetFundingMechanismAction = Action & {
  type: "SET_FUNDING_MECHANISM";
  input: SetFundingMechanismInput;
};
export type AddPoolSizeEntryAction = Action & {
  type: "ADD_POOL_SIZE_ENTRY";
  input: AddPoolSizeEntryInput;
};
export type RemovePoolSizeEntryAction = Action & {
  type: "REMOVE_POOL_SIZE_ENTRY";
  input: RemovePoolSizeEntryInput;
};
export type SetTotalPoolSizeUsdAction = Action & {
  type: "SET_TOTAL_POOL_SIZE_USD";
  input: SetTotalPoolSizeUsdInput;
};
export type SetGrantBoundsAction = Action & {
  type: "SET_GRANT_BOUNDS";
  input: SetGrantBoundsInput;
};

export type GrantPoolFundingAction =
  | SetFundingMechanismAction
  | AddPoolSizeEntryAction
  | RemovePoolSizeEntryAction
  | SetTotalPoolSizeUsdAction
  | SetGrantBoundsAction;
