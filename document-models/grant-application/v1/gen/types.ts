import type { PHDocument, PHBaseState } from "document-model";
import type { GrantApplicationAction } from "./actions.js";
import type { GrantApplicationState as GrantApplicationGlobalState } from "./schema/types.js";

type GrantApplicationLocalState = Record<PropertyKey, never>;

type GrantApplicationPHState = PHBaseState & {
  global: GrantApplicationGlobalState;
  local: GrantApplicationLocalState;
};
type GrantApplicationDocument = PHDocument<GrantApplicationPHState>;

export * from "./schema/types.js";

export type {
  GrantApplicationGlobalState,
  GrantApplicationLocalState,
  GrantApplicationPHState,
  GrantApplicationAction,
  GrantApplicationDocument,
};
