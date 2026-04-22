import { createAction } from "document-model";
import { RecordPublisherDecisionInputSchema } from "../schema/zod.js";
import type { RecordPublisherDecisionInput } from "../types.js";
import type { RecordPublisherDecisionAction } from "./actions.js";

export const recordPublisherDecision = (input: RecordPublisherDecisionInput) =>
  createAction<RecordPublisherDecisionAction>(
    "RECORD_PUBLISHER_DECISION",
    { ...input },
    undefined,
    RecordPublisherDecisionInputSchema,
    "global",
  );
