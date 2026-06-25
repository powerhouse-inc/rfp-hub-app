/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  AddCategoryAction,
  AddEcosystemAction,
  AddTagAction,
  RemoveCategoryAction,
  RemoveEcosystemAction,
  RemoveTagAction,
} from "./actions.js";

export interface GrantPoolClassificationOperations {
  addCategoryOperation: (
    state: GrantPoolGlobalState,
    action: AddCategoryAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeCategoryOperation: (
    state: GrantPoolGlobalState,
    action: RemoveCategoryAction,
    dispatch?: SignalDispatch,
  ) => void;
  addEcosystemOperation: (
    state: GrantPoolGlobalState,
    action: AddEcosystemAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeEcosystemOperation: (
    state: GrantPoolGlobalState,
    action: RemoveEcosystemAction,
    dispatch?: SignalDispatch,
  ) => void;
  addTagOperation: (
    state: GrantPoolGlobalState,
    action: AddTagAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeTagOperation: (
    state: GrantPoolGlobalState,
    action: RemoveTagAction,
    dispatch?: SignalDispatch,
  ) => void;
}
