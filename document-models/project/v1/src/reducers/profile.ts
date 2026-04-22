import type { ProjectProfileOperations } from "document-models/project/v1";

export const projectProfileOperations: ProjectProfileOperations = {
  setProjectNameOperation(state, action) {
    state.name = action.input.name;
  },
  setProjectDescriptionOperation(state, action) {
    state.description = action.input.description || null;
  },
  setContentUriOperation(state, action) {
    state.contentURI = action.input.contentURI || null;
  },
  setProjectEmailOperation(state, action) {
    state.email = action.input.email || null;
  },
  setMembersUriOperation(state, action) {
    state.membersURI = action.input.membersURI || null;
  },
  setProjectImageOperation(state, action) {
    state.image = action.input.image || null;
  },
  setProjectCoverImageOperation(state, action) {
    state.coverImage = action.input.coverImage || null;
  },
  setLicenseUriOperation(state, action) {
    state.licenseURI = action.input.licenseURI || null;
  },
  setProjectCodeOperation(state, action) {
    state.code = action.input.code || null;
  },
  setOwnerDidOperation(state, action) {
    state.ownerDid = action.input.ownerDid;
  },
  setProjectExtensionsOperation(state, action) {
    state.extensions = action.input.extensions || null;
  },
};
