import { createAction } from "document-model";
import {
  RecordPayoutInputSchema,
  MarkCompletedInputSchema,
} from "../schema/zod.js";
import type { RecordPayoutInput, MarkCompletedInput } from "../types.js";
import type { RecordPayoutAction, MarkCompletedAction } from "./actions.js";

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
