import { type SignalDispatch } from "document-model";
import type {
  AddSameAsAction,
  RemoveSameAsAction,
  AddSocialAction,
  RemoveSocialAction,
  UpdateSocialUrlAction,
} from "./actions.js";
import type { GrantSystemState } from "../types.js";

export interface GrantSystemLinksOperations {
  addSameAsOperation: (
    state: GrantSystemState,
    action: AddSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeSameAsOperation: (
    state: GrantSystemState,
    action: RemoveSameAsAction,
    dispatch?: SignalDispatch,
  ) => void;
  addSocialOperation: (
    state: GrantSystemState,
    action: AddSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeSocialOperation: (
    state: GrantSystemState,
    action: RemoveSocialAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateSocialUrlOperation: (
    state: GrantSystemState,
    action: UpdateSocialUrlAction,
    dispatch?: SignalDispatch,
  ) => void;
}
