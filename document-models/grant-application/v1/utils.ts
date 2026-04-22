import type { DocumentModelUtils } from "document-model";
import type { GrantApplicationPHState } from "./gen/types.js";
import { utils as genUtils } from "./gen/utils.js";
import * as customUtils from "./src/utils.js";

/** Utils for the GrantApplication document model */
export const utils: DocumentModelUtils<GrantApplicationPHState> = {
  ...genUtils,
  ...customUtils,
};
