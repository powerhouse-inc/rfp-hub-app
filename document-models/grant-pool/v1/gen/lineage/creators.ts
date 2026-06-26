/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  MarkClaimedFromEntryInputSchema,
  MarkDuplicateOfInputSchema,
  MarkSupersedesInputSchema,
} from "../schema/zod.js";
import type {
  MarkClaimedFromEntryInput,
  MarkDuplicateOfInput,
  MarkSupersedesInput,
} from "../types.js";
import type {
  MarkClaimedFromEntryAction,
  MarkDuplicateOfAction,
  MarkSupersedesAction,
} from "./actions.js";

export const markSupersedes = (input: MarkSupersedesInput) =>
  createAction<MarkSupersedesAction>(
    "MARK_SUPERSEDES",
    { ...input },
    undefined,
    MarkSupersedesInputSchema,
    "global",
  );

export const markClaimedFromEntry = (input: MarkClaimedFromEntryInput) =>
  createAction<MarkClaimedFromEntryAction>(
    "MARK_CLAIMED_FROM_ENTRY",
    { ...input },
    undefined,
    MarkClaimedFromEntryInputSchema,
    "global",
  );

export const markDuplicateOf = (input: MarkDuplicateOfInput) =>
  createAction<MarkDuplicateOfAction>(
    "MARK_DUPLICATE_OF",
    { ...input },
    undefined,
    MarkDuplicateOfInputSchema,
    "global",
  );
