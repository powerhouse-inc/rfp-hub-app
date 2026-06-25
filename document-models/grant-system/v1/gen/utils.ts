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
import { grantSystemUpgradeManifest } from "../../upgrades/upgrade-manifest.js";
import {
  assertIsGrantSystemDocument,
  assertIsGrantSystemState,
  isGrantSystemDocument,
  isGrantSystemState,
} from "./document-schema.js";
import { grantSystemDocumentType } from "./document-type.js";
import { reducer } from "./reducer.js";
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
      ...createBaseState(state?.auth, { version: 1, ...state?.document }),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    return baseCreateDocument(
      utils.createState,
      state,
      grantSystemDocumentType,
    );
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInputVersioned(input, {
      reducers: { 1: reducer as unknown as Reducer<PHBaseState> },
      upgradeManifest: grantSystemUpgradeManifest,
    });
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
