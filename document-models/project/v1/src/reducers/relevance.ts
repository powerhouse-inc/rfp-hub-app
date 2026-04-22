import { RelevantPoolNotFoundError } from "../../gen/relevance/error.js";
import type { ProjectRelevanceOperations } from "document-models/project/v1";

export const projectRelevanceOperations: ProjectRelevanceOperations = {
  addRelevantPoolOperation(state, action) {
    state.relevantTo.push({
      id: action.input.id,
      poolId: action.input.poolId,
      poolName: action.input.poolName,
    });
  },
  removeRelevantPoolOperation(state, action) {
    const idx = state.relevantTo.findIndex((r) => r.id === action.input.id);
    if (idx === -1) {
      throw new RelevantPoolNotFoundError(
        `Relevant pool ${action.input.id} not found`,
      );
    }
    state.relevantTo.splice(idx, 1);
  },
};
