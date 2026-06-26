/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AddProjectSameAsInputSchema,
  AddProjectSocialInputSchema,
  RemoveProjectSameAsInputSchema,
  RemoveProjectSocialInputSchema,
  UpdateProjectSocialUrlInputSchema,
} from "../schema/zod.js";
import type {
  AddProjectSameAsInput,
  AddProjectSocialInput,
  RemoveProjectSameAsInput,
  RemoveProjectSocialInput,
  UpdateProjectSocialUrlInput,
} from "../types.js";
import type {
  AddProjectSameAsAction,
  AddProjectSocialAction,
  RemoveProjectSameAsAction,
  RemoveProjectSocialAction,
  UpdateProjectSocialUrlAction,
} from "./actions.js";

export const addProjectSocial = (input: AddProjectSocialInput) =>
  createAction<AddProjectSocialAction>(
    "ADD_PROJECT_SOCIAL",
    { ...input },
    undefined,
    AddProjectSocialInputSchema,
    "global",
  );

export const removeProjectSocial = (input: RemoveProjectSocialInput) =>
  createAction<RemoveProjectSocialAction>(
    "REMOVE_PROJECT_SOCIAL",
    { ...input },
    undefined,
    RemoveProjectSocialInputSchema,
    "global",
  );

export const updateProjectSocialUrl = (input: UpdateProjectSocialUrlInput) =>
  createAction<UpdateProjectSocialUrlAction>(
    "UPDATE_PROJECT_SOCIAL_URL",
    { ...input },
    undefined,
    UpdateProjectSocialUrlInputSchema,
    "global",
  );

export const addProjectSameAs = (input: AddProjectSameAsInput) =>
  createAction<AddProjectSameAsAction>(
    "ADD_PROJECT_SAME_AS",
    { ...input },
    undefined,
    AddProjectSameAsInputSchema,
    "global",
  );

export const removeProjectSameAs = (input: RemoveProjectSameAsInput) =>
  createAction<RemoveProjectSameAsAction>(
    "REMOVE_PROJECT_SAME_AS",
    { ...input },
    undefined,
    RemoveProjectSameAsInputSchema,
    "global",
  );
