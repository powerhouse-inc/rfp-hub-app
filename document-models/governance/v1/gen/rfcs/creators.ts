/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  ImplementRfcInputSchema,
  ProposeRfcInputSchema,
  RatifyRfcInputSchema,
  RejectRfcInputSchema,
  StartRfcReviewInputSchema,
  WithdrawRfcInputSchema,
} from "../schema/zod.js";
import type {
  ImplementRfcInput,
  ProposeRfcInput,
  RatifyRfcInput,
  RejectRfcInput,
  StartRfcReviewInput,
  WithdrawRfcInput,
} from "../types.js";
import type {
  ImplementRfcAction,
  ProposeRfcAction,
  RatifyRfcAction,
  RejectRfcAction,
  StartRfcReviewAction,
  WithdrawRfcAction,
} from "./actions.js";

export const proposeRfc = (input: ProposeRfcInput) =>
  createAction<ProposeRfcAction>(
    "PROPOSE_RFC",
    { ...input },
    undefined,
    ProposeRfcInputSchema,
    "global",
  );

export const startRfcReview = (input: StartRfcReviewInput) =>
  createAction<StartRfcReviewAction>(
    "START_RFC_REVIEW",
    { ...input },
    undefined,
    StartRfcReviewInputSchema,
    "global",
  );

export const ratifyRfc = (input: RatifyRfcInput) =>
  createAction<RatifyRfcAction>(
    "RATIFY_RFC",
    { ...input },
    undefined,
    RatifyRfcInputSchema,
    "global",
  );

export const implementRfc = (input: ImplementRfcInput) =>
  createAction<ImplementRfcAction>(
    "IMPLEMENT_RFC",
    { ...input },
    undefined,
    ImplementRfcInputSchema,
    "global",
  );

export const rejectRfc = (input: RejectRfcInput) =>
  createAction<RejectRfcAction>(
    "REJECT_RFC",
    { ...input },
    undefined,
    RejectRfcInputSchema,
    "global",
  );

export const withdrawRfc = (input: WithdrawRfcInput) =>
  createAction<WithdrawRfcAction>(
    "WITHDRAW_RFC",
    { ...input },
    undefined,
    WithdrawRfcInputSchema,
    "global",
  );
