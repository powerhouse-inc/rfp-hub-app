import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model";
import { reducer } from "./reducer.js";
import { grantApplicationDocumentType } from "./document-type.js";
import {
  assertIsGrantApplicationDocument,
  assertIsGrantApplicationState,
  isGrantApplicationDocument,
  isGrantApplicationState,
} from "./document-schema.js";
import type {
  GrantApplicationGlobalState,
  GrantApplicationLocalState,
  GrantApplicationPHState,
} from "./types.js";

export const initialGlobalState: GrantApplicationGlobalState = {
  grantPoolsURI: null,
  grantPoolId: null,
  grantPoolName: null,
  projectsURI: null,
  projectId: null,
  projectName: null,
  createdAt: null,
  contentURI: null,
  discussionsTo: null,
  licenseURI: null,
  isInactive: false,
  applicationCompletionRate: null,
  socials: [],
  fundsAsked: [],
  fundsAskedInUSD: null,
  fundsApproved: [],
  fundsApprovedInUSD: null,
  payoutAddress: null,
  status: "pending",
  payouts: [],
  extensions: null,
  paymentTerm: null,
  reviewStage: "DRAFT",
  feedbackNotes: null,
  revisionCount: 0,
  submitter: null,
  submittedAt: null,
  reviewedBy: null,
  reviewedAt: null,
};
export const initialLocalState: GrantApplicationLocalState = {};

export const utils: DocumentModelUtils<GrantApplicationPHState> = {
  fileExtension: "rfpa",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = grantApplicationDocumentType;

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
    return isGrantApplicationState(state);
  },
  assertIsStateOfType(state) {
    return assertIsGrantApplicationState(state);
  },
  isDocumentOfType(document) {
    return isGrantApplicationDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsGrantApplicationDocument(document);
  },
};
