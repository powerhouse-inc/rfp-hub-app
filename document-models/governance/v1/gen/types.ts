/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { PHBaseState, PHDocument } from "document-model";
import type { GovernanceAction } from "./actions.js";
import type { GovernanceState as GovernanceGlobalState } from "./schema/types.js";

type GovernanceLocalState = Record<PropertyKey, never>;

type GovernancePHState = PHBaseState & {
  global: GovernanceGlobalState;
  local: GovernanceLocalState;
};
type GovernanceDocument = PHDocument<GovernancePHState>;

export * from "./schema/types.js";

export type {
  GovernanceAction,
  GovernanceDocument,
  GovernanceGlobalState,
  GovernanceLocalState,
  GovernancePHState,
};
