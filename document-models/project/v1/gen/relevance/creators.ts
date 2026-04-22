import { createAction } from "document-model";
import {
  AddRelevantPoolInputSchema,
  RemoveRelevantPoolInputSchema,
} from "../schema/zod.js";
import type {
  AddRelevantPoolInput,
  RemoveRelevantPoolInput,
} from "../types.js";
import type {
  AddRelevantPoolAction,
  RemoveRelevantPoolAction,
} from "./actions.js";

export const addRelevantPool = (input: AddRelevantPoolInput) =>
  createAction<AddRelevantPoolAction>(
    "ADD_RELEVANT_POOL",
    { ...input },
    undefined,
    AddRelevantPoolInputSchema,
    "global",
  );

export const removeRelevantPool = (input: RemoveRelevantPoolInput) =>
  createAction<RemoveRelevantPoolAction>(
    "REMOVE_RELEVANT_POOL",
    { ...input },
    undefined,
    RemoveRelevantPoolInputSchema,
    "global",
  );
