import type { DocumentModelUtils } from "document-model";
import type { GrantSystemPHState } from "./gen/types.js";
import { utils as genUtils } from "./gen/utils.js";
import * as customUtils from "./src/utils.js";

/** Utils for the GrantSystem document model */
export const utils: DocumentModelUtils<GrantSystemPHState> = {
  ...genUtils,
  ...customUtils,
};
