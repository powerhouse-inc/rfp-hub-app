/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AddAppSocialInputSchema,
  RemoveAppSocialInputSchema,
  SetAppContentUriInputSchema,
  SetAppExtensionsInputSchema,
  SetAppLicenseUriInputSchema,
  SetCompletionRateInputSchema,
  SetCreatedAtInputSchema,
  SetDiscussionsToInputSchema,
  SetIsInactiveInputSchema,
  SetPoolRefInputSchema,
  SetProjectRefInputSchema,
} from "../schema/zod.js";
import type {
  AddAppSocialInput,
  RemoveAppSocialInput,
  SetAppContentUriInput,
  SetAppExtensionsInput,
  SetAppLicenseUriInput,
  SetCompletionRateInput,
  SetCreatedAtInput,
  SetDiscussionsToInput,
  SetIsInactiveInput,
  SetPoolRefInput,
  SetProjectRefInput,
} from "../types.js";
import type {
  AddAppSocialAction,
  RemoveAppSocialAction,
  SetAppContentUriAction,
  SetAppExtensionsAction,
  SetAppLicenseUriAction,
  SetCompletionRateAction,
  SetCreatedAtAction,
  SetDiscussionsToAction,
  SetIsInactiveAction,
  SetPoolRefAction,
  SetProjectRefAction,
} from "./actions.js";

export const setPoolRef = (input: SetPoolRefInput) =>
  createAction<SetPoolRefAction>(
    "SET_POOL_REF",
    { ...input },
    undefined,
    SetPoolRefInputSchema,
    "global",
  );

export const setProjectRef = (input: SetProjectRefInput) =>
  createAction<SetProjectRefAction>(
    "SET_PROJECT_REF",
    { ...input },
    undefined,
    SetProjectRefInputSchema,
    "global",
  );

export const setCreatedAt = (input: SetCreatedAtInput) =>
  createAction<SetCreatedAtAction>(
    "SET_CREATED_AT",
    { ...input },
    undefined,
    SetCreatedAtInputSchema,
    "global",
  );

export const setAppContentUri = (input: SetAppContentUriInput) =>
  createAction<SetAppContentUriAction>(
    "SET_APP_CONTENT_URI",
    { ...input },
    undefined,
    SetAppContentUriInputSchema,
    "global",
  );

export const setDiscussionsTo = (input: SetDiscussionsToInput) =>
  createAction<SetDiscussionsToAction>(
    "SET_DISCUSSIONS_TO",
    { ...input },
    undefined,
    SetDiscussionsToInputSchema,
    "global",
  );

export const setAppLicenseUri = (input: SetAppLicenseUriInput) =>
  createAction<SetAppLicenseUriAction>(
    "SET_APP_LICENSE_URI",
    { ...input },
    undefined,
    SetAppLicenseUriInputSchema,
    "global",
  );

export const setIsInactive = (input: SetIsInactiveInput) =>
  createAction<SetIsInactiveAction>(
    "SET_IS_INACTIVE",
    { ...input },
    undefined,
    SetIsInactiveInputSchema,
    "global",
  );

export const setCompletionRate = (input: SetCompletionRateInput) =>
  createAction<SetCompletionRateAction>(
    "SET_COMPLETION_RATE",
    { ...input },
    undefined,
    SetCompletionRateInputSchema,
    "global",
  );

export const setAppExtensions = (input: SetAppExtensionsInput) =>
  createAction<SetAppExtensionsAction>(
    "SET_APP_EXTENSIONS",
    { ...input },
    undefined,
    SetAppExtensionsInputSchema,
    "global",
  );

export const addAppSocial = (input: AddAppSocialInput) =>
  createAction<AddAppSocialAction>(
    "ADD_APP_SOCIAL",
    { ...input },
    undefined,
    AddAppSocialInputSchema,
    "global",
  );

export const removeAppSocial = (input: RemoveAppSocialInput) =>
  createAction<RemoveAppSocialAction>(
    "REMOVE_APP_SOCIAL",
    { ...input },
    undefined,
    RemoveAppSocialInputSchema,
    "global",
  );
