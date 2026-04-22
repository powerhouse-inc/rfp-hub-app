import { InvalidStateTransitionError } from "../../gen/verification/error.js";
import type { GrantSystemVerificationOperations } from "document-models/grant-system/v1";

export const grantSystemVerificationOperations: GrantSystemVerificationOperations =
  {
    setPublisherWalletOperation(state, action) {
      state.publisherWallet = action.input.publisherWallet;
    },
    requestVerificationOperation(state, action) {
      if (state.verificationState !== "UNVERIFIED") {
        throw new InvalidStateTransitionError(
          `Cannot request verification from state ${state.verificationState}; must be UNVERIFIED`,
        );
      }
      state.verificationState = "PENDING_REVIEW";
    },
    approveVerificationOperation(state, action) {
      if (state.verificationState !== "PENDING_REVIEW") {
        throw new InvalidStateTransitionError(
          `Cannot approve verification from state ${state.verificationState}; must be PENDING_REVIEW`,
        );
      }
      state.verificationState = "VERIFIED";
      state.verifiedBy = action.input.verifiedBy;
      state.verificationMethod = action.input.method;
      state.verifiedAt = action.input.verifiedAt;
      state.revokedAt = null;
      state.revocationReason = null;
    },
    rejectVerificationOperation(state, action) {
      if (state.verificationState !== "PENDING_REVIEW") {
        throw new InvalidStateTransitionError(
          `Cannot reject verification from state ${state.verificationState}; must be PENDING_REVIEW`,
        );
      }
      state.verificationState = "UNVERIFIED";
    },
    suspendVerificationOperation(state, action) {
      if (state.verificationState !== "VERIFIED") {
        throw new InvalidStateTransitionError(
          `Cannot suspend from state ${state.verificationState}; must be VERIFIED`,
        );
      }
      state.verificationState = "SUSPENDED";
      state.revocationReason = action.input.reason;
    },
    revokeVerificationOperation(state, action) {
      if (state.verificationState !== "VERIFIED") {
        throw new InvalidStateTransitionError(
          `Cannot revoke from state ${state.verificationState}; must be VERIFIED`,
        );
      }
      state.verificationState = "REVOKED";
      state.revokedAt = action.input.revokedAt;
      state.revocationReason = action.input.reason;
    },
    reinstateVerificationOperation(state, action) {
      if (
        state.verificationState !== "SUSPENDED" &&
        state.verificationState !== "REVOKED"
      ) {
        throw new InvalidStateTransitionError(
          `Cannot reinstate from state ${state.verificationState}; must be SUSPENDED or REVOKED`,
        );
      }
      state.verificationState = "VERIFIED";
      state.verifiedBy = action.input.reinstatedBy;
      state.verifiedAt = action.input.verifiedAt;
      state.revokedAt = null;
      state.revocationReason = null;
    },
  };
