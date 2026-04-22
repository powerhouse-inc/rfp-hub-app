/**
 * Factory methods for creating GovernanceDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model";
import type {
  GovernanceDocument,
  GovernanceGlobalState,
  GovernanceLocalState,
  GovernancePHState,
} from "./types.js";
import { utils } from "./utils.js";

export function defaultGlobalState(): GovernanceGlobalState {
  return { disputes: [], publisherDecisions: [], rfcs: [], policies: [] };
}

export function defaultLocalState(): GovernanceLocalState {
  return {};
}

export function defaultPHState(): GovernancePHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<GovernanceGlobalState>,
): GovernanceGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as GovernanceGlobalState;
}

export function createLocalState(
  state?: Partial<GovernanceLocalState>,
): GovernanceLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as GovernanceLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<GovernanceGlobalState>,
  localState?: Partial<GovernanceLocalState>,
): GovernancePHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a GovernanceDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createGovernanceDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<GovernanceGlobalState>;
    local?: Partial<GovernanceLocalState>;
  }>,
): GovernanceDocument {
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
