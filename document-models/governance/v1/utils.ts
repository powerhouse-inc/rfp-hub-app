import type { DocumentModelUtils } from "document-model";
import type { GovernancePHState } from "./gen/types.js";
import { utils as genUtils } from "./gen/utils.js";
import * as customUtils from "./src/utils.js";

/** Utils for the Governance document model */
export const utils: DocumentModelUtils<GovernancePHState> = {
  ...genUtils,
  ...customUtils,
};
