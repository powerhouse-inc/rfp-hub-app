import type { GrantPoolFundingOperations } from "document-models/grant-pool/v1";

export const grantPoolFundingOperations: GrantPoolFundingOperations = {
  setFundingMechanismOperation(state, action) {
    state.grantFundingMechanism = action.input.grantFundingMechanism;
  },
  addPoolSizeEntryOperation(state, action) {
    state.totalGrantPoolSize.push({
      id: action.input.id,
      amount: action.input.amount,
    });
  },
  removePoolSizeEntryOperation(state, action) {
    const idx = state.totalGrantPoolSize.findIndex(
      (e) => e.id === action.input.id,
    );
    if (idx === -1) {
      throw new Error(`Pool size entry ${action.input.id} not found`);
    }
    state.totalGrantPoolSize.splice(idx, 1);
  },
  setTotalPoolSizeUsdOperation(state, action) {
    state.totalGrantPoolSizeInUSD =
      action.input.totalGrantPoolSizeInUSD || null;
  },
  setGrantBoundsOperation(state, action) {
    state.minGrant = [
      {
        id: action.input.minGrantId1,
        amount: action.input.minGrantAmount1 ?? { value: undefined, unit: undefined },
      },
    ];
    state.maxGrant = [
      {
        id: action.input.maxGrantId1,
        amount: action.input.maxGrantAmount1 ?? { value: undefined, unit: undefined },
      },
    ];
  },
};
