import type { GrantPoolLineageOperations } from "document-models/grant-pool/v1";

export const grantPoolLineageOperations: GrantPoolLineageOperations = {
  markSupersedesOperation(state, action) {
    state.supersedes = action.input.supersedes;
  },
  markClaimedFromEntryOperation(state, action) {
    state.claimedFromEntry = action.input.claimedFromEntry;
  },
  markDuplicateOfOperation(state, action) {
    state.duplicateOf = action.input.duplicateOf;
  },
};
