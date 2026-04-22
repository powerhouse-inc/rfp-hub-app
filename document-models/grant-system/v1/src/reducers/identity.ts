import type { GrantSystemIdentityOperations } from "document-models/grant-system/v1";

export const grantSystemIdentityOperations: GrantSystemIdentityOperations = {
  setTypeOperation(state, action) {
    state.type = action.input.type;
  },
  setCodeOperation(state, action) {
    state.code = action.input.code || null;
  },
  setDescriptionOperation(state, action) {
    state.description = action.input.description || null;
  },
  setGrantPoolsUriOperation(state, action) {
    state.grantPoolsURI = action.input.grantPoolsURI || null;
  },
  setExtensionsOperation(state, action) {
    state.extensions = action.input.extensions || null;
  },
  setImageOperation(state, action) {
    state.image = action.input.image || null;
  },
  setCoverImageOperation(state, action) {
    state.coverImage = action.input.coverImage || null;
  },
  setEmailOperation(state, action) {
    state.email = action.input.email || null;
  },
  setContactNameOperation(state, action) {
    state.contactName = action.input.contactName || null;
  },
  setOrgNameOperation(state, action) {
    state.name = action.input.name;
  },
};
