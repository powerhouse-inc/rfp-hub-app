/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  SetContentUriInputSchema,
  SetLicenseUriInputSchema,
  SetMembersUriInputSchema,
  SetOwnerDidInputSchema,
  SetProjectCodeInputSchema,
  SetProjectCoverImageInputSchema,
  SetProjectDescriptionInputSchema,
  SetProjectEmailInputSchema,
  SetProjectExtensionsInputSchema,
  SetProjectImageInputSchema,
  SetProjectNameInputSchema,
} from "../schema/zod.js";
import type {
  SetContentUriInput,
  SetLicenseUriInput,
  SetMembersUriInput,
  SetOwnerDidInput,
  SetProjectCodeInput,
  SetProjectCoverImageInput,
  SetProjectDescriptionInput,
  SetProjectEmailInput,
  SetProjectExtensionsInput,
  SetProjectImageInput,
  SetProjectNameInput,
} from "../types.js";
import type {
  SetContentUriAction,
  SetLicenseUriAction,
  SetMembersUriAction,
  SetOwnerDidAction,
  SetProjectCodeAction,
  SetProjectCoverImageAction,
  SetProjectDescriptionAction,
  SetProjectEmailAction,
  SetProjectExtensionsAction,
  SetProjectImageAction,
  SetProjectNameAction,
} from "./actions.js";

export const setProjectName = (input: SetProjectNameInput) =>
  createAction<SetProjectNameAction>(
    "SET_PROJECT_NAME",
    { ...input },
    undefined,
    SetProjectNameInputSchema,
    "global",
  );

export const setProjectDescription = (input: SetProjectDescriptionInput) =>
  createAction<SetProjectDescriptionAction>(
    "SET_PROJECT_DESCRIPTION",
    { ...input },
    undefined,
    SetProjectDescriptionInputSchema,
    "global",
  );

export const setContentUri = (input: SetContentUriInput) =>
  createAction<SetContentUriAction>(
    "SET_CONTENT_URI",
    { ...input },
    undefined,
    SetContentUriInputSchema,
    "global",
  );

export const setProjectEmail = (input: SetProjectEmailInput) =>
  createAction<SetProjectEmailAction>(
    "SET_PROJECT_EMAIL",
    { ...input },
    undefined,
    SetProjectEmailInputSchema,
    "global",
  );

export const setMembersUri = (input: SetMembersUriInput) =>
  createAction<SetMembersUriAction>(
    "SET_MEMBERS_URI",
    { ...input },
    undefined,
    SetMembersUriInputSchema,
    "global",
  );

export const setProjectImage = (input: SetProjectImageInput) =>
  createAction<SetProjectImageAction>(
    "SET_PROJECT_IMAGE",
    { ...input },
    undefined,
    SetProjectImageInputSchema,
    "global",
  );

export const setProjectCoverImage = (input: SetProjectCoverImageInput) =>
  createAction<SetProjectCoverImageAction>(
    "SET_PROJECT_COVER_IMAGE",
    { ...input },
    undefined,
    SetProjectCoverImageInputSchema,
    "global",
  );

export const setLicenseUri = (input: SetLicenseUriInput) =>
  createAction<SetLicenseUriAction>(
    "SET_LICENSE_URI",
    { ...input },
    undefined,
    SetLicenseUriInputSchema,
    "global",
  );

export const setProjectCode = (input: SetProjectCodeInput) =>
  createAction<SetProjectCodeAction>(
    "SET_PROJECT_CODE",
    { ...input },
    undefined,
    SetProjectCodeInputSchema,
    "global",
  );

export const setOwnerDid = (input: SetOwnerDidInput) =>
  createAction<SetOwnerDidAction>(
    "SET_OWNER_DID",
    { ...input },
    undefined,
    SetOwnerDidInputSchema,
    "global",
  );

export const setProjectExtensions = (input: SetProjectExtensionsInput) =>
  createAction<SetProjectExtensionsAction>(
    "SET_PROJECT_EXTENSIONS",
    { ...input },
    undefined,
    SetProjectExtensionsInputSchema,
    "global",
  );
