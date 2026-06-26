/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GovernanceGlobalState } from "../types.js";
import type { RecordPublisherDecisionAction } from "./actions.js";

export interface GovernancePublisherDecisionsOperations {
  recordPublisherDecisionOperation: (
    state: GovernanceGlobalState,
    action: RecordPublisherDecisionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
