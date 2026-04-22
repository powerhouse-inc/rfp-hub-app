import { createAction } from "document-model";
import {
  AddReviewerInputSchema,
  RemoveReviewerInputSchema,
} from "../schema/zod.js";
import type { AddReviewerInput, RemoveReviewerInput } from "../types.js";
import type { AddReviewerAction, RemoveReviewerAction } from "./actions.js";

export const addReviewer = (input: AddReviewerInput) =>
  createAction<AddReviewerAction>(
    "ADD_REVIEWER",
    { ...input },
    undefined,
    AddReviewerInputSchema,
    "global",
  );

export const removeReviewer = (input: RemoveReviewerInput) =>
  createAction<RemoveReviewerAction>(
    "REMOVE_REVIEWER",
    { ...input },
    undefined,
    RemoveReviewerInputSchema,
    "global",
  );
