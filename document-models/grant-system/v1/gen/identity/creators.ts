import { createAction } from "document-model";
import {
  SetTypeInputSchema,
  SetCodeInputSchema,
  SetDescriptionInputSchema,
  SetGrantPoolsUriInputSchema,
  SetExtensionsInputSchema,
  SetImageInputSchema,
  SetCoverImageInputSchema,
  SetEmailInputSchema,
  SetContactNameInputSchema,
  SetOrgNameInputSchema,
} from "../schema/zod.js";
import type {
  SetTypeInput,
  SetCodeInput,
  SetDescriptionInput,
  SetGrantPoolsUriInput,
  SetExtensionsInput,
  SetImageInput,
  SetCoverImageInput,
  SetEmailInput,
  SetContactNameInput,
  SetOrgNameInput,
} from "../types.js";
import type {
  SetTypeAction,
  SetCodeAction,
  SetDescriptionAction,
  SetGrantPoolsUriAction,
  SetExtensionsAction,
  SetImageAction,
  SetCoverImageAction,
  SetEmailAction,
  SetContactNameAction,
  SetOrgNameAction,
} from "./actions.js";

export const setType = (input: SetTypeInput) =>
  createAction<SetTypeAction>(
    "SET_TYPE",
    { ...input },
    undefined,
    SetTypeInputSchema,
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

export const setDescription = (input: SetDescriptionInput) =>
  createAction<SetDescriptionAction>(
    "SET_DESCRIPTION",
    { ...input },
    undefined,
    SetDescriptionInputSchema,
    "global",
  );

export const setGrantPoolsUri = (input: SetGrantPoolsUriInput) =>
  createAction<SetGrantPoolsUriAction>(
    "SET_GRANT_POOLS_URI",
    { ...input },
    undefined,
    SetGrantPoolsUriInputSchema,
    "global",
  );

export const setExtensions = (input: SetExtensionsInput) =>
  createAction<SetExtensionsAction>(
    "SET_EXTENSIONS",
    { ...input },
    undefined,
    SetExtensionsInputSchema,
    "global",
  );

export const setImage = (input: SetImageInput) =>
  createAction<SetImageAction>(
    "SET_IMAGE",
    { ...input },
    undefined,
    SetImageInputSchema,
    "global",
  );

export const setCoverImage = (input: SetCoverImageInput) =>
  createAction<SetCoverImageAction>(
    "SET_COVER_IMAGE",
    { ...input },
    undefined,
    SetCoverImageInputSchema,
    "global",
  );

export const setEmail = (input: SetEmailInput) =>
  createAction<SetEmailAction>(
    "SET_EMAIL",
    { ...input },
    undefined,
    SetEmailInputSchema,
    "global",
  );

export const setContactName = (input: SetContactNameInput) =>
  createAction<SetContactNameAction>(
    "SET_CONTACT_NAME",
    { ...input },
    undefined,
    SetContactNameInputSchema,
    "global",
  );

export const setOrgName = (input: SetOrgNameInput) =>
  createAction<SetOrgNameAction>(
    "SET_ORG_NAME",
    { ...input },
    undefined,
    SetOrgNameInputSchema,
    "global",
  );
