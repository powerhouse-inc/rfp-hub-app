import type { GrantPoolResourcesOperations } from "document-models/grant-pool/v1";
import {
  DuplicateCredentialError,
  CredentialNotFoundError,
  ContextDocumentNotFoundError,
  SameAsAlreadyExistsError,
  SameAsNotFoundError,
} from "../../gen/resources/error.js";

export const grantPoolResourcesOperations: GrantPoolResourcesOperations = {
  setGovernanceUriOperation(state, action) {
    state.governanceURI = action.input.governanceURI || null;
  },
  setApplicationsUriOperation(state, action) {
    state.applicationsURI = action.input.applicationsURI || null;
  },
  setAttestationIssuersUriOperation(state, action) {
    state.attestationIssuersURI = action.input.attestationIssuersURI || null;
  },
  addRequiredCredentialOperation(state, action) {
    if (state.requiredCredentials.includes(action.input.credential)) {
      throw new DuplicateCredentialError(
        `Credential ${action.input.credential} already required`,
      );
    }
    state.requiredCredentials.push(action.input.credential);
  },
  removeRequiredCredentialOperation(state, action) {
    const idx = state.requiredCredentials.indexOf(action.input.credential);
    if (idx === -1) {
      throw new CredentialNotFoundError(
        `Credential ${action.input.credential} not found`,
      );
    }
    state.requiredCredentials.splice(idx, 1);
  },
  addContextDocumentOperation(state, action) {
    state.contextDocuments.push({
      id: action.input.id,
      name: action.input.name,
      url: action.input.url,
    });
  },
  removeContextDocumentOperation(state, action) {
    const idx = state.contextDocuments.findIndex(
      (d) => d.id === action.input.id,
    );
    if (idx === -1) {
      throw new ContextDocumentNotFoundError(
        `Context document ${action.input.id} not found`,
      );
    }
    state.contextDocuments.splice(idx, 1);
  },
  addPoolSameAsOperation(state, action) {
    if (state.sameAs.includes(action.input.url)) {
      throw new SameAsAlreadyExistsError(`URL already in sameAs list`);
    }
    state.sameAs.push(action.input.url);
  },
  removePoolSameAsOperation(state, action) {
    const idx = state.sameAs.indexOf(action.input.url);
    if (idx === -1) {
      throw new SameAsNotFoundError(`URL not in sameAs list`);
    }
    state.sameAs.splice(idx, 1);
  },
};
