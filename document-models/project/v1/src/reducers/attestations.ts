import type { ProjectAttestationsOperations } from "document-models/project/v1";

export const projectAttestationsOperations: ProjectAttestationsOperations = {
  setProjectAttestationIssuersUriOperation(state, action) {
    state.attestationIssuersURI = action.input.attestationIssuersURI || null;
  },
};
