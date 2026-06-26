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
import { governanceUpgradeManifest } from "../../upgrades/upgrade-manifest.js";
import {
  assertIsGovernanceDocument,
  assertIsGovernanceState,
  isGovernanceDocument,
  isGovernanceState,
} from "./document-schema.js";
import { governanceDocumentType } from "./document-type.js";
import { reducer } from "./reducer.js";
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
      ...createBaseState(state?.auth, { version: 1, ...state?.document }),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    return baseCreateDocument(utils.createState, state, governanceDocumentType);
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInputVersioned(input, {
      reducers: { 1: reducer as unknown as Reducer<PHBaseState> },
      upgradeManifest: governanceUpgradeManifest,
    });
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
