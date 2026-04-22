import type { GrantApplicationPayoutsOperations } from "document-models/grant-application/v1";

export const grantApplicationPayoutsOperations: GrantApplicationPayoutsOperations =
  {
    recordPayoutOperation(state, action) {
      state.payouts.push({
        id: action.input.id,
        payoutType: action.input.payoutType,
        value: action.input.value,
        proof: action.input.proof || null,
        timestamp: action.input.timestamp,
      });
      state.reviewStage = "FUNDED";
      state.status = "funded";
    },
    markCompletedOperation(state, _action) {
      if (state.reviewStage !== "FUNDED") {
        throw new Error(`Can only mark completed after FUNDED`);
      }
      state.reviewStage = "COMPLETED";
      state.status = "completed";
    },
  };
