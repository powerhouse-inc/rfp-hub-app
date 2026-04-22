import type { DocumentModelUtils } from "document-model";
import type { GrantPoolPHState } from "./gen/types.js";
import { utils as genUtils } from "./gen/utils.js";
import * as customUtils from "./src/utils.js";

/** Utils for the GrantPool document model */
export const utils: DocumentModelUtils<GrantPoolPHState> = {
  ...genUtils,
  ...customUtils,
};
