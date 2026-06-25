/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  ApproveApplicationInputSchema,
  ConditionallyApproveInputSchema,
  MarkRevisedInputSchema,
  OpenApplicationInputSchema,
  RejectApplicationInputSchema,
  RequestRevisionInputSchema,
  StartReviewInputSchema,
  SubmitApplicationInputSchema,
  WithdrawApplicationInputSchema,
} from "../schema/zod.js";
import type {
  ApproveApplicationInput,
  ConditionallyApproveInput,
  MarkRevisedInput,
  OpenApplicationInput,
  RejectApplicationInput,
  RequestRevisionInput,
  StartReviewInput,
  SubmitApplicationInput,
  WithdrawApplicationInput,
} from "../types.js";
import type {
  ApproveApplicationAction,
  ConditionallyApproveAction,
  MarkRevisedAction,
  OpenApplicationAction,
  RejectApplicationAction,
  RequestRevisionAction,
  StartReviewAction,
  SubmitApplicationAction,
  WithdrawApplicationAction,
} from "./actions.js";

export const submitApplication = (input: SubmitApplicationInput) =>
  createAction<SubmitApplicationAction>(
    "SUBMIT_APPLICATION",
    { ...input },
    undefined,
    SubmitApplicationInputSchema,
    "global",
  );

export const openApplication = (input: OpenApplicationInput) =>
  createAction<OpenApplicationAction>(
    "OPEN_APPLICATION",
    { ...input },
    undefined,
    OpenApplicationInputSchema,
    "global",
  );

export const startReview = (input: StartReviewInput) =>
  createAction<StartReviewAction>(
    "START_REVIEW",
    { ...input },
    undefined,
    StartReviewInputSchema,
    "global",
  );

export const requestRevision = (input: RequestRevisionInput) =>
  createAction<RequestRevisionAction>(
    "REQUEST_REVISION",
    { ...input },
    undefined,
    RequestRevisionInputSchema,
    "global",
  );

export const markRevised = (input: MarkRevisedInput) =>
  createAction<MarkRevisedAction>(
    "MARK_REVISED",
    { ...input },
    undefined,
    MarkRevisedInputSchema,
    "global",
  );

export const approveApplication = (input: ApproveApplicationInput) =>
  createAction<ApproveApplicationAction>(
    "APPROVE_APPLICATION",
    { ...input },
    undefined,
    ApproveApplicationInputSchema,
    "global",
  );

export const conditionallyApprove = (input: ConditionallyApproveInput) =>
  createAction<ConditionallyApproveAction>(
    "CONDITIONALLY_APPROVE",
    { ...input },
    undefined,
    ConditionallyApproveInputSchema,
    "global",
  );

export const rejectApplication = (input: RejectApplicationInput) =>
  createAction<RejectApplicationAction>(
    "REJECT_APPLICATION",
    { ...input },
    undefined,
    RejectApplicationInputSchema,
    "global",
  );

export const withdrawApplication = (input: WithdrawApplicationInput) =>
  createAction<WithdrawApplicationAction>(
    "WITHDRAW_APPLICATION",
    { ...input },
    undefined,
    WithdrawApplicationInputSchema,
    "global",
  );
