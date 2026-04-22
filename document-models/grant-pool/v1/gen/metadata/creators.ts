import { createAction } from "document-model";
import {
  SetPoolNameInputSchema,
  SetDescriptionInputSchema,
  SetCodeInputSchema,
  SetGrantSystemRefInputSchema,
  SetBriefingUriInputSchema,
  SetEligibilityCriteriaInputSchema,
  SetEvaluationCriteriaInputSchema,
  SetPoolEmailInputSchema,
  SetPoolImageInputSchema,
  SetPoolCoverImageInputSchema,
  SetPoolExtensionsInputSchema,
} from "../schema/zod.js";
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

export const setPoolName = (input: SetPoolNameInput) =>
  createAction<SetPoolNameAction>(
    "SET_POOL_NAME",
    { ...input },
    undefined,
    SetPoolNameInputSchema,
    "global",
  );

export const setDescription = (input: SetDescriptionInput) =>
  createAction<SetDescriptionAction>(
    "SET_DESCRIPTION",
    { ...input },
    undefined,
    SetDescriptionInputSchema,
    "global",
  );

export const setCode = (input: SetCodeInput) =>
  createAction<SetCodeAction>(
    "SET_CODE",
    { ...input },
    undefined,
    SetCodeInputSchema,
    "global",
  );

export const setGrantSystemRef = (input: SetGrantSystemRefInput) =>
  createAction<SetGrantSystemRefAction>(
    "SET_GRANT_SYSTEM_REF",
    { ...input },
    undefined,
    SetGrantSystemRefInputSchema,
    "global",
  );

export const setBriefingUri = (input: SetBriefingUriInput) =>
  createAction<SetBriefingUriAction>(
    "SET_BRIEFING_URI",
    { ...input },
    undefined,
    SetBriefingUriInputSchema,
    "global",
  );

export const setEligibilityCriteria = (input: SetEligibilityCriteriaInput) =>
  createAction<SetEligibilityCriteriaAction>(
    "SET_ELIGIBILITY_CRITERIA",
    { ...input },
    undefined,
    SetEligibilityCriteriaInputSchema,
    "global",
  );

export const setEvaluationCriteria = (input: SetEvaluationCriteriaInput) =>
  createAction<SetEvaluationCriteriaAction>(
    "SET_EVALUATION_CRITERIA",
    { ...input },
    undefined,
    SetEvaluationCriteriaInputSchema,
    "global",
  );

export const setPoolEmail = (input: SetPoolEmailInput) =>
  createAction<SetPoolEmailAction>(
    "SET_POOL_EMAIL",
    { ...input },
    undefined,
    SetPoolEmailInputSchema,
    "global",
  );

export const setPoolImage = (input: SetPoolImageInput) =>
  createAction<SetPoolImageAction>(
    "SET_POOL_IMAGE",
    { ...input },
    undefined,
    SetPoolImageInputSchema,
    "global",
  );

export const setPoolCoverImage = (input: SetPoolCoverImageInput) =>
  createAction<SetPoolCoverImageAction>(
    "SET_POOL_COVER_IMAGE",
    { ...input },
    undefined,
    SetPoolCoverImageInputSchema,
    "global",
  );

export const setPoolExtensions = (input: SetPoolExtensionsInput) =>
  createAction<SetPoolExtensionsAction>(
    "SET_POOL_EXTENSIONS",
    { ...input },
    undefined,
    SetPoolExtensionsInputSchema,
    "global",
  );
