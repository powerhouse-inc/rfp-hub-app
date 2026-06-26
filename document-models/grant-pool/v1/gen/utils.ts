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
import { grantPoolUpgradeManifest } from "../../upgrades/upgrade-manifest.js";
import {
  assertIsGrantPoolDocument,
  assertIsGrantPoolState,
  isGrantPoolDocument,
  isGrantPoolState,
} from "./document-schema.js";
import { grantPoolDocumentType } from "./document-type.js";
import { reducer } from "./reducer.js";
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
      ...createBaseState(state?.auth, { version: 1, ...state?.document }),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    return baseCreateDocument(utils.createState, state, grantPoolDocumentType);
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInputVersioned(input, {
      reducers: { 1: reducer as unknown as Reducer<PHBaseState> },
      upgradeManifest: grantPoolUpgradeManifest,
    });
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
