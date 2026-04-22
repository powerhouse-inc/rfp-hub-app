import { type SignalDispatch } from "document-model";
import type {
  SetPoolNameAction,
  SetDescriptionAction,
  SetCodeAction,
  SetGrantSystemRefAction,
  SetBriefingUriAction,
  SetEligibilityCriteriaAction,
  SetEvaluationCriteriaAction,
  SetPoolEmailAction,
  SetPoolImageAction,
  SetPoolCoverImageAction,
  SetPoolExtensionsAction,
} from "./actions.js";
import type { GrantPoolState } from "../types.js";

export interface GrantPoolMetadataOperations {
  setPoolNameOperation: (
    state: GrantPoolState,
    action: SetPoolNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDescriptionOperation: (
    state: GrantPoolState,
    action: SetDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setCodeOperation: (
    state: GrantPoolState,
    action: SetCodeAction,
    dispatch?: SignalDispatch,
  ) => void;
  setGrantSystemRefOperation: (
    state: GrantPoolState,
    action: SetGrantSystemRefAction,
    dispatch?: SignalDispatch,
  ) => void;
  setBriefingUriOperation: (
    state: GrantPoolState,
    action: SetBriefingUriAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEligibilityCriteriaOperation: (
    state: GrantPoolState,
    action: SetEligibilityCriteriaAction,
    dispatch?: SignalDispatch,
  ) => void;
  setEvaluationCriteriaOperation: (
    state: GrantPoolState,
    action: SetEvaluationCriteriaAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolEmailOperation: (
    state: GrantPoolState,
    action: SetPoolEmailAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolImageOperation: (
    state: GrantPoolState,
    action: SetPoolImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolCoverImageOperation: (
    state: GrantPoolState,
    action: SetPoolCoverImageAction,
    dispatch?: SignalDispatch,
  ) => void;
  setPoolExtensionsOperation: (
    state: GrantPoolState,
    action: SetPoolExtensionsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
