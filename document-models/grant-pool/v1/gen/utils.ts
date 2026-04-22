import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model";
import { reducer } from "./reducer.js";
import { grantPoolDocumentType } from "./document-type.js";
import {
  assertIsGrantPoolDocument,
  assertIsGrantPoolState,
  isGrantPoolDocument,
  isGrantPoolState,
} from "./document-schema.js";
import type {
  GrantPoolGlobalState,
  GrantPoolLocalState,
  GrantPoolPHState,
} from "./types.js";

export const initialGlobalState: GrantPoolGlobalState = {
  grantSystemRef: null,
  name: null,
  description: null,
  grantFundingMechanism: null,
  isOpen: false,
  openDate: null,
  closeDate: null,
  applicationsURI: null,
  governanceURI: null,
  attestationIssuersURI: null,
  requiredCredentials: [],
  totalGrantPoolSize: [],
  totalGrantPoolSizeInUSD: null,
  minGrant: [],
  maxGrant: [],
  email: null,
  image: null,
  coverImage: null,
  extensions: null,
  sameAs: [],
  code: null,
  briefingURI: null,
  eligibilityCriteria: null,
  evaluationCriteria: null,
  contextDocuments: [],
  reviewers: [],
  categories: [],
  ecosystems: [],
  tags: [],
  lifecycle: "DRAFT",
  submitter: null,
  publisher: null,
  lastVerifiedAt: null,
  verificationMethod: null,
  verifiedBy: null,
  governanceState: "PENDING",
  supersedes: null,
  claimedFromEntry: null,
  duplicateOf: null,
};
export const initialLocalState: GrantPoolLocalState = {};

export const utils: DocumentModelUtils<GrantPoolPHState> = {
  fileExtension: "rfpp",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = grantPoolDocumentType;

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
    return isGrantPoolState(state);
  },
  assertIsStateOfType(state) {
    return assertIsGrantPoolState(state);
  },
  isDocumentOfType(document) {
    return isGrantPoolDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsGrantPoolDocument(document);
  },
};
