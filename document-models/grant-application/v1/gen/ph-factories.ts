/**
 * Factory methods for creating GrantApplicationDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model";
import type {
  GrantApplicationDocument,
  GrantApplicationGlobalState,
  GrantApplicationLocalState,
  GrantApplicationPHState,
} from "./types.js";
import { utils } from "./utils.js";

export function defaultGlobalState(): GrantApplicationGlobalState {
  return {
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
}

export function defaultLocalState(): GrantApplicationLocalState {
  return {};
}

export function defaultPHState(): GrantApplicationPHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<GrantApplicationGlobalState>,
): GrantApplicationGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as GrantApplicationGlobalState;
}

export function createLocalState(
  state?: Partial<GrantApplicationLocalState>,
): GrantApplicationLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as GrantApplicationLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<GrantApplicationGlobalState>,
  localState?: Partial<GrantApplicationLocalState>,
): GrantApplicationPHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a GrantApplicationDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createGrantApplicationDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<GrantApplicationGlobalState>;
    local?: Partial<GrantApplicationLocalState>;
  }>,
): GrantApplicationDocument {
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
