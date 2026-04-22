import type { PHDocument, PHBaseState } from "document-model";
import type { GrantPoolAction } from "./actions.js";
import type { GrantPoolState as GrantPoolGlobalState } from "./schema/types.js";

type GrantPoolLocalState = Record<PropertyKey, never>;

type GrantPoolPHState = PHBaseState & {
  global: GrantPoolGlobalState;
  local: GrantPoolLocalState;
};
type GrantPoolDocument = PHDocument<GrantPoolPHState>;

export * from "./schema/types.js";

export type {
  GrantPoolGlobalState,
  GrantPoolLocalState,
  GrantPoolPHState,
  GrantPoolAction,
  GrantPoolDocument,
};
