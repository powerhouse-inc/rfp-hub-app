import { type SignalDispatch } from "document-model";
import type { RecordPublisherDecisionAction } from "./actions.js";
import type { GovernanceState } from "../types.js";

export interface GovernancePublisherDecisionsOperations {
  recordPublisherDecisionOperation: (
    state: GovernanceState,
    action: RecordPublisherDecisionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
