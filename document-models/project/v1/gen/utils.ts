import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model";
import { reducer } from "./reducer.js";
import { projectDocumentType } from "./document-type.js";
import {
  assertIsProjectDocument,
  assertIsProjectState,
  isProjectDocument,
  isProjectState,
} from "./document-schema.js";
import type {
  ProjectGlobalState,
  ProjectLocalState,
  ProjectPHState,
} from "./types.js";

export const initialGlobalState: ProjectGlobalState = {
  name: null,
  description: null,
  contentURI: null,
  email: null,
  membersURI: null,
  attestationIssuersURI: null,
  relevantTo: [],
  image: null,
  coverImage: null,
  licenseURI: null,
  socials: [],
  extensions: null,
  sameAs: [],
  ownerDid: null,
  code: null,
};
export const initialLocalState: ProjectLocalState = {};

export const utils: DocumentModelUtils<ProjectPHState> = {
  fileExtension: "rfpr",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = projectDocumentType;

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
    return isProjectState(state);
  },
  assertIsStateOfType(state) {
    return assertIsProjectState(state);
  },
  isDocumentOfType(document) {
    return isProjectDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsProjectDocument(document);
  },
};
