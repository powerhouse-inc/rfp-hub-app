/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantSystemGlobalState } from "../types.js";
import type {
  AddSameAsAction,
  AddSocialAction,
  RemoveSameAsAction,
  RemoveSocialAction,
  UpdateSocialUrlAction,
} from "./actions.js";

export interface GrantSystemLinksOperations {
  addSameAsOperation: (
    state: GrantSystemGlobalState,
    action: AddSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeSameAsOperation: (
    state: GrantSystemGlobalState,
    action: RemoveSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  addSocialOperation: (
    state: GrantSystemGlobalState,
    action: AddSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeSocialOperation: (
    state: GrantSystemGlobalState,
    action: RemoveSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateSocialUrlOperation: (
    state: GrantSystemGlobalState,
    action: UpdateSocialUrlAction,
    dispatch?: SignalDispatch,
  ) => void;
}
