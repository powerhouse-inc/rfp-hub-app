/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GrantPoolGlobalState } from "../types.js";
import type {
  SetBriefingUriAction,
  SetCodeAction,
  SetDescriptionAction,
  SetEligibilityCriteriaAction,
  SetEvaluationCriteriaAction,
  SetGrantSystemRefAction,
  SetPoolCoverImageAction,
  SetPoolEmailAction,
  SetPoolExtensionsAction,
  SetPoolImageAction,
  SetPoolNameAction,
} from "./actions.js";

export interface GrantPoolMetadataOperations {
  setPoolNameOperation: (
    state: GrantPoolGlobalState,
    action: SetPoolNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDescriptionOperation: (
    state: GrantPoolGlobalState,
    action: SetDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCodeOperation: (
    state: GrantPoolGlobalState,
    action: SetCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantSystemRefOperation: (
    state: GrantPoolGlobalState,
    action: SetGrantSystemRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setBriefingUriOperation: (
    state: GrantPoolGlobalState,
    action: SetBriefingUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEligibilityCriteriaOperation: (
    state: GrantPoolGlobalState,
    action: SetEligibilityCriteriaAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEvaluationCriteriaOperation: (
    state: GrantPoolGlobalState,
    action: SetEvaluationCriteriaAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolEmailOperation: (
    state: GrantPoolGlobalState,
    action: SetPoolEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolImageOperation: (
    state: GrantPoolGlobalState,
    action: SetPoolImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolCoverImageOperation: (
    state: GrantPoolGlobalState,
    action: SetPoolCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolExtensionsOperation: (
    state: GrantPoolGlobalState,
    action: SetPoolExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
