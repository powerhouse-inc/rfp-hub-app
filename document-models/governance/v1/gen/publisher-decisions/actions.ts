import type { Action } from "document-model";
import type { RecordPublisherDecisionInput } from "../types.js";

export type RecordPublisherDecisionAction = Action & {
  type: "RECORD_PUBLISHER_DECISION";
  input: RecordPublisherDecisionInput;
};

export type GovernancePublisherDecisionsAction = RecordPublisherDecisionAction;
