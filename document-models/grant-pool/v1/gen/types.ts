/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { PHBaseState, PHDocument } from "document-model";
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
  GrantPoolAction,
  GrantPoolDocument,
  GrantPoolGlobalState,
  GrantPoolLocalState,
  GrantPoolPHState,
};
