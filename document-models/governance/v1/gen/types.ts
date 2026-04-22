import type { PHDocument, PHBaseState } from "document-model";
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
  GovernanceGlobalState,
  GovernanceLocalState,
  GovernancePHState,
  GovernanceAction,
  GovernanceDocument,
};
