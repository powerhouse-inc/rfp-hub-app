import type { GrantApplicationReviewOperations } from "document-models/grant-application/v1";

export const grantApplicationReviewOperations: GrantApplicationReviewOperations =
  {
    submitApplicationOperation(state, action) {
      const legal = ["DRAFT", "REVISED", "NEEDS_REVISION"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot submit from ${state.reviewStage}`);
      }
      state.reviewStage = "SUBMITTED";
      state.status = "pending";
      state.submittedAt = action.input.submittedAt;
      state.submitter = {
        submitterType: action.input.submitterType,
        identifier: action.input.identifier,
        submittedAt: action.input.submittedAt,
      };
    },
    openApplicationOperation(state, _action) {
      if (state.reviewStage !== "SUBMITTED") {
        throw new Error(`Cannot open from ${state.reviewStage}`);
      }
      state.reviewStage = "OPENED";
      state.status = "pending";
    },
    startReviewOperation(state, action) {
      const legal = ["SUBMITTED", "OPENED"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot start review from ${state.reviewStage}`);
      }
      state.reviewStage = "UNDER_REVIEW";
      state.status = "in_review";
      state.reviewedBy = action.input.reviewerDid;
    },
    requestRevisionOperation(state, action) {
      if (state.reviewStage !== "UNDER_REVIEW") {
        throw new Error(`Cannot request revision from ${state.reviewStage}`);
      }
      state.reviewStage = "NEEDS_REVISION";
      state.status = "in_review";
      state.feedbackNotes = action.input.feedbackNotes;
    },
    markRevisedOperation(state, _action) {
      if (state.reviewStage !== "NEEDS_REVISION") {
        throw new Error(`Can only mark revised from NEEDS_REVISION`);
      }
      state.reviewStage = "REVISED";
      state.status = "in_review";
      state.revisionCount += 1;
    },
    approveApplicationOperation(state, action) {
      const legal = ["UNDER_REVIEW", "REVISED"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot approve from ${state.reviewStage}`);
      }
      state.reviewStage = "APPROVED";
      state.status = "approved";
      state.reviewedBy = action.input.reviewerDid;
      state.reviewedAt = action.input.approvedAt;
    },
    conditionallyApproveOperation(state, action) {
      const legal = ["UNDER_REVIEW", "REVISED"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot conditionally approve from ${state.reviewStage}`);
      }
      state.reviewStage = "CONDITIONALLY_APPROVED";
      state.status = "approved";
      state.reviewedBy = action.input.reviewerDid;
      state.reviewedAt = action.input.approvedAt;
      state.feedbackNotes = action.input.conditions;
    },
    rejectApplicationOperation(state, action) {
      const legal = ["UNDER_REVIEW", "REVISED"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot reject from ${state.reviewStage}`);
      }
      state.reviewStage = "REJECTED";
      state.status = "rejected";
      state.reviewedBy = action.input.reviewerDid;
      state.reviewedAt = action.input.rejectedAt;
      state.feedbackNotes = action.input.reason;
    },
    withdrawApplicationOperation(state, _action) {
      const legal = ["DRAFT", "SUBMITTED", "OPENED", "UNDER_REVIEW", "NEEDS_REVISION", "REVISED"];
      if (!legal.includes(state.reviewStage)) {
        throw new Error(`Cannot withdraw from ${state.reviewStage}`);
      }
      state.reviewStage = "WITHDRAWN";
      state.status = "rejected";
    },
  };
