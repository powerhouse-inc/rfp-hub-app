import type { GovernanceDisputesOperations } from "document-models/governance/v1";

export const governanceDisputesOperations: GovernanceDisputesOperations = {
  fileDisputeOperation(state, action) {
    state.disputes.push({
      id: action.input.id,
      disputeKind: action.input.disputeKind,
      subjectRef: action.input.subjectRef,
      filedBy: action.input.filedBy,
      filedAt: action.input.filedAt,
      summary: action.input.summary,
      status: "OPEN",
      assignedTo: null,
      resolvedAt: null,
      resolution: null,
      appealAt: null,
      appealReason: null,
    });
  },
  assignInvestigatorOperation(state, action) {
    const d = state.disputes.find((x) => x.id === action.input.id);
    if (!d) throw new Error(`Dispute ${action.input.id} not found`);
    d.assignedTo = action.input.assignedTo;
    d.status = "INVESTIGATING";
  },
  resolveDisputeOperation(state, action) {
    const d = state.disputes.find((x) => x.id === action.input.id);
    if (!d) throw new Error(`Dispute ${action.input.id} not found`);
    d.resolvedAt = action.input.resolvedAt;
    d.resolution = action.input.resolution;
    d.status = "RESOLVED";
  },
  dismissDisputeOperation(state, action) {
    const d = state.disputes.find((x) => x.id === action.input.id);
    if (!d) throw new Error(`Dispute ${action.input.id} not found`);
    d.resolvedAt = action.input.dismissedAt;
    d.resolution = action.input.reason;
    d.status = "DISMISSED";
  },
  appealDisputeOperation(state, action) {
    const d = state.disputes.find((x) => x.id === action.input.id);
    if (!d) throw new Error(`Dispute ${action.input.id} not found`);
    d.appealAt = action.input.appealAt;
    d.appealReason = action.input.appealReason;
    d.status = "APPEALED";
  },
};
