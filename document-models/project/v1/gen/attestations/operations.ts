import { type SignalDispatch } from "document-model";
import type { SetProjectAttestationIssuersUriAction } from "./actions.js";
import type { ProjectState } from "../types.js";

export interface ProjectAttestationsOperations {
  setProjectAttestationIssuersUriOperation: (
    state: ProjectState,
    action: SetProjectAttestationIssuersUriAction,
    dispatch?: SignalDispatch,
  ) => void;
}
