import { createAction } from "document-model";
import {
  MarkSupersedesInputSchema,
  MarkClaimedFromEntryInputSchema,
  MarkDuplicateOfInputSchema,
} from "../schema/zod.js";
import type {
  MarkSupersedesInput,
  MarkClaimedFromEntryInput,
  MarkDuplicateOfInput,
} from "../types.js";
import type {
  MarkSupersedesAction,
  MarkClaimedFromEntryAction,
  MarkDuplicateOfAction,
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
