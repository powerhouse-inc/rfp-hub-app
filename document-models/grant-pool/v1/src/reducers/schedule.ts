import type { GrantPoolScheduleOperations } from "document-models/grant-pool/v1";

export const grantPoolScheduleOperations: GrantPoolScheduleOperations = {
  setOpenDateOperation(state, action) {
    state.openDate = action.input.openDate || null;
  },
  setCloseDateOperation(state, action) {
    state.closeDate = action.input.closeDate || null;
  },
  setIsOpenOperation(state, action) {
    state.isOpen = action.input.isOpen;
  },
  advanceLifecycleOperation(state, action) {
    const current = state.lifecycle as string;
    const target = action.input.lifecycle;
    const legal: Record<string, string[]> = {
      DRAFT: ["REQUEST_FOR_COMMENTS", "UPCOMING", "OPEN", "CANCELLED"],
      REQUEST_FOR_COMMENTS: ["UPCOMING", "OPEN", "CANCELLED"],
      UPCOMING: ["OPEN", "CANCELLED"],
      OPEN: ["CLOSED", "CANCELLED"],
      CLOSED: ["AWARDED", "NOT_AWARDED"],
      AWARDED: [],
      NOT_AWARDED: [],
      CANCELLED: [],
    };
    if (!legal[current] || !legal[current].includes(target)) {
      throw new Error(`Cannot transition from ${current} to ${target}`);
    }
    state.lifecycle = target;
    if (target === "OPEN") state.isOpen = true;
    if (
      target === "CLOSED" ||
      target === "AWARDED" ||
      target === "NOT_AWARDED" ||
      target === "CANCELLED"
    ) {
      state.isOpen = false;
    }
  },
};
