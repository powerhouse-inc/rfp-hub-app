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
import { grantApplicationUpgradeManifest } from "../../upgrades/upgrade-manifest.js";
import {
  assertIsGrantApplicationDocument,
  assertIsGrantApplicationState,
  isGrantApplicationDocument,
  isGrantApplicationState,
} from "./document-schema.js";
import { grantApplicationDocumentType } from "./document-type.js";
import { reducer } from "./reducer.js";
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
      ...createBaseState(state?.auth, { version: 1, ...state?.document }),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    return baseCreateDocument(
      utils.createState,
      state,
      grantApplicationDocumentType,
    );
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInputVersioned(input, {
      reducers: { 1: reducer as unknown as Reducer<PHBaseState> },
      upgradeManifest: grantApplicationUpgradeManifest,
    });
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
