/**
 * Factory methods for creating GrantPoolDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model";
import type {
  GrantPoolDocument,
  GrantPoolGlobalState,
  GrantPoolLocalState,
  GrantPoolPHState,
} from "./types.js";
import { utils } from "./utils.js";

export function defaultGlobalState(): GrantPoolGlobalState {
  return {
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
}

export function defaultLocalState(): GrantPoolLocalState {
  return {};
}

export function defaultPHState(): GrantPoolPHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<GrantPoolGlobalState>,
): GrantPoolGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as GrantPoolGlobalState;
}

export function createLocalState(
  state?: Partial<GrantPoolLocalState>,
): GrantPoolLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as GrantPoolLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<GrantPoolGlobalState>,
  localState?: Partial<GrantPoolLocalState>,
): GrantPoolPHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a GrantPoolDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createGrantPoolDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<GrantPoolGlobalState>;
    local?: Partial<GrantPoolLocalState>;
  }>,
): GrantPoolDocument {
  const document = utils.createDocument(
    state
      ? createState(
          createBaseState(state.auth, state.document),
          state.global,
          state.local,
        )
      : undefined,
  );

  return document;
}
