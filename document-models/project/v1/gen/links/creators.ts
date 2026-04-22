import { createAction } from "document-model";
import {
  AddProjectSocialInputSchema,
  RemoveProjectSocialInputSchema,
  UpdateProjectSocialUrlInputSchema,
  AddProjectSameAsInputSchema,
  RemoveProjectSameAsInputSchema,
} from "../schema/zod.js";
import type {
  AddProjectSocialInput,
  RemoveProjectSocialInput,
  UpdateProjectSocialUrlInput,
  AddProjectSameAsInput,
  RemoveProjectSameAsInput,
} from "../types.js";
import type {
  AddProjectSocialAction,
  RemoveProjectSocialAction,
  UpdateProjectSocialUrlAction,
  AddProjectSameAsAction,
  RemoveProjectSameAsAction,
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
