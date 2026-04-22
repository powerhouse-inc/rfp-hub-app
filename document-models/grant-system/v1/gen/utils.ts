import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model";
import { reducer } from "./reducer.js";
import { grantSystemDocumentType } from "./document-type.js";
import {
  assertIsGrantSystemDocument,
  assertIsGrantSystemState,
  isGrantSystemDocument,
  isGrantSystemState,
} from "./document-schema.js";
import type {
  GrantSystemGlobalState,
  GrantSystemLocalState,
  GrantSystemPHState,
} from "./types.js";

export const initialGlobalState: GrantSystemGlobalState = {
  name: null,
  type: null,
  grantPoolsURI: null,
  extensions: null,
  sameAs: [],
  code: null,
  description: null,
  image: null,
  coverImage: null,
  email: null,
  contactName: null,
  socials: [],
  verificationState: "UNVERIFIED",
  verificationMethod: null,
  verifiedAt: null,
  verifiedBy: null,
  revokedAt: null,
  revocationReason: null,
  publisherWallet: null,
};
export const initialLocalState: GrantSystemLocalState = {};

export const utils: DocumentModelUtils<GrantSystemPHState> = {
  fileExtension: "rfps",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = grantSystemDocumentType;

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
    return isGrantSystemState(state);
  },
  assertIsStateOfType(state) {
    return assertIsGrantSystemState(state);
  },
  isDocumentOfType(document) {
    return isGrantSystemDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsGrantSystemDocument(document);
  },
};
