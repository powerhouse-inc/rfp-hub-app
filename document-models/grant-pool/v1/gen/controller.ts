import { PHDocumentController } from "document-model";
import { GrantPool } from "../module.js";
import type { GrantPoolAction, GrantPoolPHState } from "./types.js";

export const GrantPoolController = PHDocumentController.forDocumentModel<
  GrantPoolPHState,
  GrantPoolAction
>(GrantPool);
