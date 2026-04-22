import type { Action } from "document-model";
import type {
  SetPoolNameInput,
  SetDescriptionInput,
  SetCodeInput,
  SetGrantSystemRefInput,
  SetBriefingUriInput,
  SetEligibilityCriteriaInput,
  SetEvaluationCriteriaInput,
  SetPoolEmailInput,
  SetPoolImageInput,
  SetPoolCoverImageInput,
  SetPoolExtensionsInput,
} from "../types.js";

export type SetPoolNameAction = Action & {
  type: "SET_POOL_NAME";
  input: SetPoolNameInput;
};
export type SetDescriptionAction = Action & {
  type: "SET_DESCRIPTION";
  input: SetDescriptionInput;
};
export type SetCodeAction = Action & { type: "SET_CODE"; input: SetCodeInput };
export type SetGrantSystemRefAction = Action & {
  type: "SET_GRANT_SYSTEM_REF";
  input: SetGrantSystemRefInput;
};
export type SetBriefingUriAction = Action & {
  type: "SET_BRIEFING_URI";
  input: SetBriefingUriInput;
};
export type SetEligibilityCriteriaAction = Action & {
  type: "SET_ELIGIBILITY_CRITERIA";
  input: SetEligibilityCriteriaInput;
};
export type SetEvaluationCriteriaAction = Action & {
  type: "SET_EVALUATION_CRITERIA";
  input: SetEvaluationCriteriaInput;
};
export type SetPoolEmailAction = Action & {
  type: "SET_POOL_EMAIL";
  input: SetPoolEmailInput;
};
export type SetPoolImageAction = Action & {
  type: "SET_POOL_IMAGE";
  input: SetPoolImageInput;
};
export type SetPoolCoverImageAction = Action & {
  type: "SET_POOL_COVER_IMAGE";
  input: SetPoolCoverImageInput;
};
export type SetPoolExtensionsAction = Action & {
  type: "SET_POOL_EXTENSIONS";
  input: SetPoolExtensionsInput;
};

export type GrantPoolMetadataAction =
  | SetPoolNameAction
  | SetDescriptionAction
  | SetCodeAction
  | SetGrantSystemRefAction
  | SetBriefingUriAction
  | SetEligibilityCriteriaAction
  | SetEvaluationCriteriaAction
  | SetPoolEmailAction
  | SetPoolImageAction
  | SetPoolCoverImageAction
  | SetPoolExtensionsAction;
