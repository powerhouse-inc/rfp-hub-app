import { type SignalDispatch } from "document-model";
import type {
  FileDisputeAction,
  AssignInvestigatorAction,
  ResolveDisputeAction,
  DismissDisputeAction,
  AppealDisputeAction,
} from "./actions.js";
import type { GovernanceState } from "../types.js";

export interface GovernanceDisputesOperations {
  fileDisputeOperation: (
    state: GovernanceState,
    action: FileDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  assignInvestigatorOperation: (
    state: GovernanceState,
    action: AssignInvestigatorAction,
    dispatch?: SignalDispatch,
  ) => void;
  resolveDisputeOperation: (
    state: GovernanceState,
    action: ResolveDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  dismissDisputeOperation: (
    state: GovernanceState,
    action: DismissDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
  appealDisputeOperation: (
    state: GovernanceState,
    action: AppealDisputeAction,
    dispatch?: SignalDispatch,
  ) => void;
}
