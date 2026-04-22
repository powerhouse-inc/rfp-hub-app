import { type SignalDispatch } from "document-model";
import type {
  AddCategoryAction,
  RemoveCategoryAction,
  AddEcosystemAction,
  RemoveEcosystemAction,
  AddTagAction,
  RemoveTagAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolClassificationOperations {
  addCategoryOperation: (
    state: GrantPoolState,
    action: AddCategoryAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeCategoryOperation: (
    state: GrantPoolState,
    action: RemoveCategoryAction,
    dispatch?: SignalDispatch,
  ) => void;
  addEcosystemOperation: (
    state: GrantPoolState,
    action: AddEcosystemAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeEcosystemOperation: (
    state: GrantPoolState,
    action: RemoveEcosystemAction,
    dispatch?: SignalDispatch,
  ) => void;
  addTagOperation: (
    state: GrantPoolState,
    action: AddTagAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeTagOperation: (
    state: GrantPoolState,
    action: RemoveTagAction,
    dispatch?: SignalDispatch,
  ) => void;
}
