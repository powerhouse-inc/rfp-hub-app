import { createAction } from "document-model";
import {
  AddCategoryInputSchema,
  RemoveCategoryInputSchema,
  AddEcosystemInputSchema,
  RemoveEcosystemInputSchema,
  AddTagInputSchema,
  RemoveTagInputSchema,
} from "../schema/zod.js";
import type {
  AddCategoryInput,
  RemoveCategoryInput,
  AddEcosystemInput,
  RemoveEcosystemInput,
  AddTagInput,
  RemoveTagInput,
} from "../types.js";
import type {
  AddCategoryAction,
  RemoveCategoryAction,
  AddEcosystemAction,
  RemoveEcosystemAction,
  AddTagAction,
  RemoveTagAction,
} from "./actions.js";

export const addCategory = (input: AddCategoryInput) =>
  createAction<AddCategoryAction>(
    "ADD_CATEGORY",
    { ...input },
    undefined,
    AddCategoryInputSchema,
    "global",
  );

export const removeCategory = (input: RemoveCategoryInput) =>
  createAction<RemoveCategoryAction>(
    "REMOVE_CATEGORY",
    { ...input },
    undefined,
    RemoveCategoryInputSchema,
    "global",
  );

export const addEcosystem = (input: AddEcosystemInput) =>
  createAction<AddEcosystemAction>(
    "ADD_ECOSYSTEM",
    { ...input },
    undefined,
    AddEcosystemInputSchema,
    "global",
  );

export const removeEcosystem = (input: RemoveEcosystemInput) =>
  createAction<RemoveEcosystemAction>(
    "REMOVE_ECOSYSTEM",
    { ...input },
    undefined,
    RemoveEcosystemInputSchema,
    "global",
  );

export const addTag = (input: AddTagInput) =>
  createAction<AddTagAction>(
    "ADD_TAG",
    { ...input },
    undefined,
    AddTagInputSchema,
    "global",
  );

export const removeTag = (input: RemoveTagInput) =>
  createAction<RemoveTagAction>(
    "REMOVE_TAG",
    { ...input },
    undefined,
    RemoveTagInputSchema,
    "global",
  );
