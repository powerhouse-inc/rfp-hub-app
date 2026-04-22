import type { GovernancePublisherDecisionsOperations } from "document-models/governance/v1";

export const governancePublisherDecisionsOperations: GovernancePublisherDecisionsOperations =
  {
    recordPublisherDecisionOperation(state, action) {
      state.publisherDecisions.push({
        id: action.input.id,
        grantSystemRef: action.input.grantSystemRef,
        decision: action.input.decision,
        decidedBy: action.input.decidedBy,
        decidedAt: action.input.decidedAt,
        reason: action.input.reason || null,
      });
    },
  };
