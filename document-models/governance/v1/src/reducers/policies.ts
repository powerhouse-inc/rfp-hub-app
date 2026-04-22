import type { GovernancePoliciesOperations } from "document-models/governance/v1";

export const governancePoliciesOperations: GovernancePoliciesOperations = {
  publishPolicyOperation(state, action) {
    state.policies.push({
      id: action.input.id,
      name: action.input.name,
      summary: action.input.summary,
      content: action.input.content,
      effectiveFrom: action.input.effectiveFrom,
      supersededAt: null,
      supersededBy: null,
    });
  },
  supersedePolicyOperation(state, action) {
    const p = state.policies.find((x) => x.id === action.input.id);
    if (!p) throw new Error(`Policy ${action.input.id} not found`);
    p.supersededAt = action.input.supersededAt;
    p.supersededBy = action.input.supersededBy;
  },
};
