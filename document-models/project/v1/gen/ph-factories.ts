/**
 * Factory methods for creating ProjectDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model";
import type {
  ProjectDocument,
  ProjectGlobalState,
  ProjectLocalState,
  ProjectPHState,
} from "./types.js";
import { utils } from "./utils.js";

export function defaultGlobalState(): ProjectGlobalState {
  return {
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
}

export function defaultLocalState(): ProjectLocalState {
  return {};
}

export function defaultPHState(): ProjectPHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<ProjectGlobalState>,
): ProjectGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as ProjectGlobalState;
}

export function createLocalState(
  state?: Partial<ProjectLocalState>,
): ProjectLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as ProjectLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<ProjectGlobalState>,
  localState?: Partial<ProjectLocalState>,
): ProjectPHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a ProjectDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createProjectDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<ProjectGlobalState>;
    local?: Partial<ProjectLocalState>;
  }>,
): ProjectDocument {
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
