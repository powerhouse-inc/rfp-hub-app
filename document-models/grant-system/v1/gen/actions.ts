import type { GrantSystemIdentityAction } from "./identity/actions.js";
import type { GrantSystemLinksAction } from "./links/actions.js";
import type { GrantSystemVerificationAction } from "./verification/actions.js";

export * from "./identity/actions.js";
export * from "./links/actions.js";
export * from "./verification/actions.js";

export type GrantSystemAction =
  | GrantSystemIdentityAction
  | GrantSystemLinksAction
  | GrantSystemVerificationAction;
