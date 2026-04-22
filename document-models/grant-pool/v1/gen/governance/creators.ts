import { createAction } from "document-model";
import {
  SetSubmitterInputSchema,
  SetPublisherInputSchema,
  RecordVerificationInputSchema,
  PublishPoolInputSchema,
  ClosePoolInputSchema,
  CancelPoolInputSchema,
  SetGovernanceStateInputSchema,
} from "../schema/zod.js";
import type {
  SetSubmitterInput,
  SetPublisherInput,
  RecordVerificationInput,
  PublishPoolInput,
  ClosePoolInput,
  CancelPoolInput,
  SetGovernanceStateInput,
} from "../types.js";
import type {
  SetSubmitterAction,
  SetPublisherAction,
  RecordVerificationAction,
  PublishPoolAction,
  ClosePoolAction,
  CancelPoolAction,
  SetGovernanceStateAction,
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
