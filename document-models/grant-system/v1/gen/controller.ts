import { PHDocumentController } from "document-model";
import { GrantSystem } from "../module.js";
import type { GrantSystemAction, GrantSystemPHState } from "./types.js";

export const GrantSystemController = PHDocumentController.forDocumentModel<
  GrantSystemPHState,
  GrantSystemAction
>(GrantSystem);
