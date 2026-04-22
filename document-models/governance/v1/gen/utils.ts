import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model";
import { reducer } from "./reducer.js";
import { governanceDocumentType } from "./document-type.js";
import {
  assertIsGovernanceDocument,
  assertIsGovernanceState,
  isGovernanceDocument,
  isGovernanceState,
} from "./document-schema.js";
import type {
  GovernanceGlobalState,
  GovernanceLocalState,
  GovernancePHState,
} from "./types.js";

export const initialGlobalState: GovernanceGlobalState = {
  disputes: [],
  publisherDecisions: [],
  rfcs: [],
  policies: [],
};
export const initialLocalState: GovernanceLocalState = {};

export const utils: DocumentModelUtils<GovernancePHState> = {
  fileExtension: "rfpg",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = governanceDocumentType;

    // for backwards compatibility, but this is NOT a valid signed document id
    document.header.id = generateId();

    return document;
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInput(input, reducer);
  },
  isStateOfType(state) {
    return isGovernanceState(state);
  },
  assertIsStateOfType(state) {
    return assertIsGovernanceState(state);
  },
  isDocumentOfType(document) {
    return isGovernanceDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsGovernanceDocument(document);
  },
};
