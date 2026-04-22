import { PHDocumentController } from "document-model";
import { Governance } from "../module.js";
import type { GovernanceAction, GovernancePHState } from "./types.js";

export const GovernanceController = PHDocumentController.forDocumentModel<
  GovernancePHState,
  GovernanceAction
>(Governance);
