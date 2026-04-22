import type { DocumentModelUtils } from "document-model";
import type { ProjectPHState } from "./gen/types.js";
import { utils as genUtils } from "./gen/utils.js";
import * as customUtils from "./src/utils.js";

/** Utils for the Project document model */
export const utils: DocumentModelUtils<ProjectPHState> = {
  ...genUtils,
  ...customUtils,
};
