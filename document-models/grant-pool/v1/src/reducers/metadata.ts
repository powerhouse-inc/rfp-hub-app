import type { GrantPoolMetadataOperations } from "document-models/grant-pool/v1";

export const grantPoolMetadataOperations: GrantPoolMetadataOperations = {
  setPoolNameOperation(state, action) {
    state.name = action.input.name;
  },
  setDescriptionOperation(state, action) {
    state.description = action.input.description || null;
  },
  setCodeOperation(state, action) {
    state.code = action.input.code || null;
  },
  setGrantSystemRefOperation(state, action) {
    state.grantSystemRef = action.input.grantSystemRef;
  },
  setBriefingUriOperation(state, action) {
    state.briefingURI = action.input.briefingURI || null;
  },
  setEligibilityCriteriaOperation(state, action) {
    state.eligibilityCriteria = action.input.eligibilityCriteria || null;
  },
  setEvaluationCriteriaOperation(state, action) {
    state.evaluationCriteria = action.input.evaluationCriteria || null;
  },
  setPoolEmailOperation(state, action) {
    state.email = action.input.email || null;
  },
  setPoolImageOperation(state, action) {
    state.image = action.input.image || null;
  },
  setPoolCoverImageOperation(state, action) {
    state.coverImage = action.input.coverImage || null;
  },
  setPoolExtensionsOperation(state, action) {
    state.extensions = action.input.extensions || null;
  },
};
