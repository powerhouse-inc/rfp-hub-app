import { baseActions } from "document-model";
import {
  projectProfileActions,
  projectAttestationsActions,
  projectRelevanceActions,
  projectLinksActions,
} from "./gen/creators.js";

/** Actions for the Project document model */

export const actions = {
  ...baseActions,
  ...projectProfileActions,
  ...projectAttestationsActions,
  ...projectRelevanceActions,
  ...projectLinksActions,
};
