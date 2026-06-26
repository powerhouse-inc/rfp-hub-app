/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { ProjectAttestationsAction } from "./attestations/actions.js";
import type { ProjectLinksAction } from "./links/actions.js";
import type { ProjectProfileAction } from "./profile/actions.js";
import type { ProjectRelevanceAction } from "./relevance/actions.js";

export * from "./attestations/actions.js";
export * from "./links/actions.js";
export * from "./profile/actions.js";
export * from "./relevance/actions.js";

export type ProjectAction =
  | ProjectProfileAction
  | ProjectAttestationsAction
  | ProjectRelevanceAction
  | ProjectLinksAction;
