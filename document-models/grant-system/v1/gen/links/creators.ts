import { createAction } from "document-model";
import {
  AddSameAsInputSchema,
  RemoveSameAsInputSchema,
  AddSocialInputSchema,
  RemoveSocialInputSchema,
  UpdateSocialUrlInputSchema,
} from "../schema/zod.js";
import type {
  AddSameAsInput,
  RemoveSameAsInput,
  AddSocialInput,
  RemoveSocialInput,
  UpdateSocialUrlInput,
} from "../types.js";
import type {
  AddSameAsAction,
  RemoveSameAsAction,
  AddSocialAction,
  RemoveSocialAction,
  UpdateSocialUrlAction,
} from "./actions.js";

export const addSameAs = (input: AddSameAsInput) =>
  createAction<AddSameAsAction>(
    "ADD_SAME_AS",
    { ...input },
    undefined,
    AddSameAsInputSchema,
    "global",
  );

export const removeSameAs = (input: RemoveSameAsInput) =>
  createAction<RemoveSameAsAction>(
    "REMOVE_SAME_AS",
    { ...input },
    undefined,
    RemoveSameAsInputSchema,
    "global",
  );

export const addSocial = (input: AddSocialInput) =>
  createAction<AddSocialAction>(
    "ADD_SOCIAL",
    { ...input },
    undefined,
    AddSocialInputSchema,
    "global",
  );

export const removeSocial = (input: RemoveSocialInput) =>
  createAction<RemoveSocialAction>(
    "REMOVE_SOCIAL",
    { ...input },
    undefined,
    RemoveSocialInputSchema,
    "global",
  );

export const updateSocialUrl = (input: UpdateSocialUrlInput) =>
  createAction<UpdateSocialUrlAction>(
    "UPDATE_SOCIAL_URL",
    { ...input },
    undefined,
    UpdateSocialUrlInputSchema,
    "global",
  );
