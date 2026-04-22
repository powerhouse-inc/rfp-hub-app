import type { Action } from "document-model";
import type {
  SetGovernanceUriInput,
  SetApplicationsUriInput,
  SetAttestationIssuersUriInput,
  AddRequiredCredentialInput,
  RemoveRequiredCredentialInput,
  AddContextDocumentInput,
  RemoveContextDocumentInput,
  AddPoolSameAsInput,
  RemovePoolSameAsInput,
} from "../types.js";

export type SetGovernanceUriAction = Action & {
  type: "SET_GOVERNANCE_URI";
  input: SetGovernanceUriInput;
};
export type SetApplicationsUriAction = Action & {
  type: "SET_APPLICATIONS_URI";
  input: SetApplicationsUriInput;
};
export type SetAttestationIssuersUriAction = Action & {
  type: "SET_ATTESTATION_ISSUERS_URI";
  input: SetAttestationIssuersUriInput;
};
export type AddRequiredCredentialAction = Action & {
  type: "ADD_REQUIRED_CREDENTIAL";
  input: AddRequiredCredentialInput;
};
export type RemoveRequiredCredentialAction = Action & {
  type: "REMOVE_REQUIRED_CREDENTIAL";
  input: RemoveRequiredCredentialInput;
};
export type AddContextDocumentAction = Action & {
  type: "ADD_CONTEXT_DOCUMENT";
  input: AddContextDocumentInput;
};
export type RemoveContextDocumentAction = Action & {
  type: "REMOVE_CONTEXT_DOCUMENT";
  input: RemoveContextDocumentInput;
};
export type AddPoolSameAsAction = Action & {
  type: "ADD_POOL_SAME_AS";
  input: AddPoolSameAsInput;
};
export type RemovePoolSameAsAction = Action & {
  type: "REMOVE_POOL_SAME_AS";
  input: RemovePoolSameAsInput;
};

export type GrantPoolResourcesAction =
  | SetGovernanceUriAction
  | SetApplicationsUriAction
  | SetAttestationIssuersUriAction
  | AddRequiredCredentialAction
  | RemoveRequiredCredentialAction
  | AddContextDocumentAction
  | RemoveContextDocumentAction
  | AddPoolSameAsAction
  | RemovePoolSameAsAction;
