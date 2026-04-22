/**
 * Factory methods for creating GrantSystemDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model";
import type {
  GrantSystemDocument,
  GrantSystemGlobalState,
  GrantSystemLocalState,
  GrantSystemPHState,
} from "./types.js";
import { utils } from "./utils.js";

export function defaultGlobalState(): GrantSystemGlobalState {
  return {
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
}

export function defaultLocalState(): GrantSystemLocalState {
  return {};
}

export function defaultPHState(): GrantSystemPHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<GrantSystemGlobalState>,
): GrantSystemGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as GrantSystemGlobalState;
}

export function createLocalState(
  state?: Partial<GrantSystemLocalState>,
): GrantSystemLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as GrantSystemLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<GrantSystemGlobalState>,
  localState?: Partial<GrantSystemLocalState>,
): GrantSystemPHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a GrantSystemDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createGrantSystemDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<GrantSystemGlobalState>;
    local?: Partial<GrantSystemLocalState>;
  }>,
): GrantSystemDocument {
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
