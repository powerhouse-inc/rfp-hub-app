/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { type SignalDispatch } from "document-model";
import type { GovernanceGlobalState } from "../types.js";
import type {
  AppealDisputeAction,
  AssignInvestigatorAction,
  DismissDisputeAction,
  FileDisputeAction,
  ResolveDisputeAction,
} from "./actions.js";

export interface GovernanceDisputesOperations {
  fileDisputeOperation: (
    state: GovernanceGlobalState,
    action: FileDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  assignInvestigatorOperation: (
    state: GovernanceGlobalState,
    action: AssignInvestigatorAction,
    dispatch?: SignalDispatch,
  ) => void;
  resolveDisputeOperation: (
    state: GovernanceGlobalState,
    action: ResolveDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  dismissDisputeOperation: (
    state: GovernanceGlobalState,
    action: DismissDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  appealDisputeOperation: (
    state: GovernanceGlobalState,
    action: AppealDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
}
