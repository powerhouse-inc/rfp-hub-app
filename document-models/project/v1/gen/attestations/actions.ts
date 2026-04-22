import type { Action } from "document-model";
import type { SetProjectAttestationIssuersUriInput } from "../types.js";

export type SetProjectAttestationIssuersUriAction = Action & {
  type: "SET_PROJECT_ATTESTATION_ISSUERS_URI";
  input: SetProjectAttestationIssuersUriInput;
};

export type ProjectAttestationsAction = SetProjectAttestationIssuersUriAction;
