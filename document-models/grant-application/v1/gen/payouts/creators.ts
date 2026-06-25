/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  MarkCompletedInputSchema,
  RecordPayoutInputSchema,
} from "../schema/zod.js";
import type { MarkCompletedInput, RecordPayoutInput } from "../types.js";
import type { MarkCompletedAction, RecordPayoutAction } from "./actions.js";

export const recordPayout = (input: RecordPayoutInput) =>
  createAction<RecordPayoutAction>(
    "RECORD_PAYOUT",
    { ...input },
    undefined,
    RecordPayoutInputSchema,
    "global",
  );

export const markCompleted = (input: MarkCompletedInput) =>
  createAction<MarkCompletedAction>(
    "MARK_COMPLETED",
    { ...input },
    undefined,
    MarkCompletedInputSchema,
    "global",
  );
