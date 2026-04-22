import { PHDocumentController } from "document-model";
import { GrantApplication } from "../module.js";
import type {
  GrantApplicationAction,
  GrantApplicationPHState,
} from "./types.js";

export const GrantApplicationController = PHDocumentController.forDocumentModel<
  GrantApplicationPHState,
  GrantApplicationAction
>(GrantApplication);
