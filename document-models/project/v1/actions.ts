/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { baseActions } from "document-model";
import {
  projectAttestationsActions,
  projectLinksActions,
  projectProfileActions,
  projectRelevanceActions,
} from "./gen/creators.js";

/** Actions for the Project document model */

export const actions = {
  ...baseActions,
  ...projectProfileActions,
  ...projectAttestationsActions,
  ...projectRelevanceActions,
  ...projectLinksActions,
};
