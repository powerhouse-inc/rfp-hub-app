import type { GrantPoolGovernanceOperations } from "document-models/grant-pool/v1";

export const grantPoolGovernanceOperations: GrantPoolGovernanceOperations = {
  setSubmitterOperation(state, action) {
    state.submitter = {
      type: action.input.type,
      identifier: action.input.identifier,
      submittedAt: action.input.submittedAt,
    };
  },
  setPublisherOperation(state, action) {
    state.publisher = {
      identifier: action.input.identifier,
      publishedAt: action.input.publishedAt,
    };
  },
  recordVerificationOperation(state, action) {
    state.verifiedBy = action.input.verifiedBy;
    state.verificationMethod = action.input.verificationMethod;
    state.lastVerifiedAt = action.input.verifiedAt;
  },
  publishPoolOperation(state, _action) {
    if (state.governanceState === "APPROVED") {
      throw new Error("Pool already published");
    }
    state.governanceState = "APPROVED";
    if (state.lifecycle === "DRAFT") state.lifecycle = "UPCOMING";
  },
  closePoolOperation(state, _action) {
    if (state.lifecycle !== "OPEN") {
      throw new Error("Cannot close pool unless OPEN");
    }
    state.lifecycle = "CLOSED";
    state.isOpen = false;
  },
  cancelPoolOperation(state, _action) {
    state.lifecycle = "CANCELLED";
    state.isOpen = false;
  },
  setGovernanceStateOperation(state, action) {
    state.governanceState = action.input.governanceState;
  },
};
