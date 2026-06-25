/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AddContextDocumentInputSchema,
  AddPoolSameAsInputSchema,
  AddRequiredCredentialInputSchema,
  RemoveContextDocumentInputSchema,
  RemovePoolSameAsInputSchema,
  RemoveRequiredCredentialInputSchema,
  SetApplicationsUriInputSchema,
  SetAttestationIssuersUriInputSchema,
  SetGovernanceUriInputSchema,
} from "../schema/zod.js";
import type {
  AddContextDocumentInput,
  AddPoolSameAsInput,
  AddRequiredCredentialInput,
  RemoveContextDocumentInput,
  RemovePoolSameAsInput,
  RemoveRequiredCredentialInput,
  SetApplicationsUriInput,
  SetAttestationIssuersUriInput,
  SetGovernanceUriInput,
} from "../types.js";
import type {
  AddContextDocumentAction,
  AddPoolSameAsAction,
  AddRequiredCredentialAction,
  RemoveContextDocumentAction,
  RemovePoolSameAsAction,
  RemoveRequiredCredentialAction,
  SetApplicationsUriAction,
  SetAttestationIssuersUriAction,
  SetGovernanceUriAction,
} from "./actions.js";

export const setGovernanceUri = (input: SetGovernanceUriInput) =>
  createAction<SetGovernanceUriAction>(
    "SET_GOVERNANCE_URI",
    { ...input },
    undefined,
    SetGovernanceUriInputSchema,
    "global",
  );

export const setApplicationsUri = (input: SetApplicationsUriInput) =>
  createAction<SetApplicationsUriAction>(
    "SET_APPLICATIONS_URI",
    { ...input },
    undefined,
    SetApplicationsUriInputSchema,
    "global",
  );

export const setAttestationIssuersUri = (
  input: SetAttestationIssuersUriInput,
) =>
  createAction<SetAttestationIssuersUriAction>(
    "SET_ATTESTATION_ISSUERS_URI",
    { ...input },
    undefined,
    SetAttestationIssuersUriInputSchema,
    "global",
  );

export const addRequiredCredential = (input: AddRequiredCredentialInput) =>
  createAction<AddRequiredCredentialAction>(
    "ADD_REQUIRED_CREDENTIAL",
    { ...input },
    undefined,
    AddRequiredCredentialInputSchema,
    "global",
  );

export const removeRequiredCredential = (
  input: RemoveRequiredCredentialInput,
) =>
  createAction<RemoveRequiredCredentialAction>(
    "REMOVE_REQUIRED_CREDENTIAL",
    { ...input },
    undefined,
    RemoveRequiredCredentialInputSchema,
    "global",
  );

export const addContextDocument = (input: AddContextDocumentInput) =>
  createAction<AddContextDocumentAction>(
    "ADD_CONTEXT_DOCUMENT",
    { ...input },
    undefined,
    AddContextDocumentInputSchema,
    "global",
  );

export const removeContextDocument = (input: RemoveContextDocumentInput) =>
  createAction<RemoveContextDocumentAction>(
    "REMOVE_CONTEXT_DOCUMENT",
    { ...input },
    undefined,
    RemoveContextDocumentInputSchema,
    "global",
  );

export const addPoolSameAs = (input: AddPoolSameAsInput) =>
  createAction<AddPoolSameAsAction>(
    "ADD_POOL_SAME_AS",
    { ...input },
    undefined,
    AddPoolSameAsInputSchema,
    "global",
  );

export const removePoolSameAs = (input: RemovePoolSameAsInput) =>
  createAction<RemovePoolSameAsAction>(
    "REMOVE_POOL_SAME_AS",
    { ...input },
    undefined,
    RemovePoolSameAsInputSchema,
    "global",
  );
