/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  CancelPoolInputSchema,
  ClosePoolInputSchema,
  PublishPoolInputSchema,
  RecordVerificationInputSchema,
  SetGovernanceStateInputSchema,
  SetPublisherInputSchema,
  SetSubmitterInputSchema,
} from "../schema/zod.js";
import type {
  CancelPoolInput,
  ClosePoolInput,
  PublishPoolInput,
  RecordVerificationInput,
  SetGovernanceStateInput,
  SetPublisherInput,
  SetSubmitterInput,
} from "../types.js";
import type {
  CancelPoolAction,
  ClosePoolAction,
  PublishPoolAction,
  RecordVerificationAction,
  SetGovernanceStateAction,
  SetPublisherAction,
  SetSubmitterAction,
} from "./actions.js";

export const setSubmitter = (input: SetSubmitterInput) =>
  createAction<SetSubmitterAction>(
    "SET_SUBMITTER",
    { ...input },
    undefined,
    SetSubmitterInputSchema,
    "global",
  );

export const setPublisher = (input: SetPublisherInput) =>
  createAction<SetPublisherAction>(
    "SET_PUBLISHER",
    { ...input },
    undefined,
    SetPublisherInputSchema,
    "global",
  );

export const recordVerification = (input: RecordVerificationInput) =>
  createAction<RecordVerificationAction>(
    "RECORD_VERIFICATION",
    { ...input },
    undefined,
    RecordVerificationInputSchema,
    "global",
  );

export const publishPool = (input: PublishPoolInput) =>
  createAction<PublishPoolAction>(
    "PUBLISH_POOL",
    { ...input },
    undefined,
    PublishPoolInputSchema,
    "global",
  );

export const closePool = (input: ClosePoolInput) =>
  createAction<ClosePoolAction>(
    "CLOSE_POOL",
    { ...input },
    undefined,
    ClosePoolInputSchema,
    "global",
  );

export const cancelPool = (input: CancelPoolInput) =>
  createAction<CancelPoolAction>(
    "CANCEL_POOL",
    { ...input },
    undefined,
    CancelPoolInputSchema,
    "global",
  );

export const setGovernanceState = (input: SetGovernanceStateInput) =>
  createAction<SetGovernanceStateAction>(
    "SET_GOVERNANCE_STATE",
    { ...input },
    undefined,
    SetGovernanceStateInputSchema,
    "global",
  );
