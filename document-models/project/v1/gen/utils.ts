/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { DocumentModelUtils, PHBaseState, Reducer } from "document-model";
import {
  baseCreateDocument,
  baseLoadFromInputVersioned,
  baseSaveToFileHandle,
  createBaseState,
} from "document-model";
import { projectUpgradeManifest } from "../../upgrades/upgrade-manifest.js";
import {
  assertIsProjectDocument,
  assertIsProjectState,
  isProjectDocument,
  isProjectState,
} from "./document-schema.js";
import { projectDocumentType } from "./document-type.js";
import { reducer } from "./reducer.js";
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
      ...createBaseState(state?.auth, { version: 1, ...state?.document }),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    return baseCreateDocument(utils.createState, state, projectDocumentType);
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInputVersioned(input, {
      reducers: { 1: reducer as unknown as Reducer<PHBaseState> },
      upgradeManifest: projectUpgradeManifest,
    });
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
