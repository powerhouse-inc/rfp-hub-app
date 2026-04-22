import type { PHDocument, PHBaseState } from "document-model";
import type { GrantSystemAction } from "./actions.js";
import type { GrantSystemState as GrantSystemGlobalState } from "./schema/types.js";

type GrantSystemLocalState = Record<PropertyKey, never>;

type GrantSystemPHState = PHBaseState & {
  global: GrantSystemGlobalState;
  local: GrantSystemLocalState;
};
type GrantSystemDocument = PHDocument<GrantSystemPHState>;

export * from "./schema/types.js";

export type {
  GrantSystemGlobalState,
  GrantSystemLocalState,
  GrantSystemPHState,
  GrantSystemAction,
  GrantSystemDocument,
};
