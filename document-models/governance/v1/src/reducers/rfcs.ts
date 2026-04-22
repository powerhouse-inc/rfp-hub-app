import type { GovernanceRfcsOperations } from "document-models/governance/v1";

export const governanceRfcsOperations: GovernanceRfcsOperations = {
  proposeRfcOperation(state, action) {
    state.rfcs.push({
      id: action.input.id,
      title: action.input.title,
      summary: action.input.summary,
      author: action.input.author,
      proposedAt: action.input.proposedAt,
      status: "PROPOSED",
      ratifiedAt: null,
      implementedAt: null,
    });
  },
  startRfcReviewOperation(state, action) {
    const r = state.rfcs.find((x) => x.id === action.input.id);
    if (!r) throw new Error(`RFC ${action.input.id} not found`);
    r.status = "UNDER_REVIEW";
  },
  ratifyRfcOperation(state, action) {
    const r = state.rfcs.find((x) => x.id === action.input.id);
    if (!r) throw new Error(`RFC ${action.input.id} not found`);
    r.status = "RATIFIED";
    r.ratifiedAt = action.input.ratifiedAt;
  },
  implementRfcOperation(state, action) {
    const r = state.rfcs.find((x) => x.id === action.input.id);
    if (!r) throw new Error(`RFC ${action.input.id} not found`);
    r.status = "IMPLEMENTED";
    r.implementedAt = action.input.implementedAt;
  },
  rejectRfcOperation(state, action) {
    const r = state.rfcs.find((x) => x.id === action.input.id);
    if (!r) throw new Error(`RFC ${action.input.id} not found`);
    r.status = "REJECTED";
  },
  withdrawRfcOperation(state, action) {
    const r = state.rfcs.find((x) => x.id === action.input.id);
    if (!r) throw new Error(`RFC ${action.input.id} not found`);
    r.status = "WITHDRAWN";
  },
};
