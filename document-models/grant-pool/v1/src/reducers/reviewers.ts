import type { GrantPoolReviewersOperations } from "document-models/grant-pool/v1";
import { ReviewerNotFoundError } from "../../gen/reviewers/error.js";

export const grantPoolReviewersOperations: GrantPoolReviewersOperations = {
  addReviewerOperation(state, action) {
    state.reviewers.push({
      id: action.input.id,
      did: action.input.did,
      scope: action.input.scope,
      reviewerType: action.input.reviewerType,
      name: action.input.name,
    });
  },
  removeReviewerOperation(state, action) {
    const idx = state.reviewers.findIndex((r) => r.id === action.input.id);
    if (idx === -1) {
      throw new ReviewerNotFoundError(`Reviewer ${action.input.id} not found`);
    }
    state.reviewers.splice(idx, 1);
  },
};
