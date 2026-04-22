import { createAction } from "document-model";
import {
  ProposeRfcInputSchema,
  StartRfcReviewInputSchema,
  RatifyRfcInputSchema,
  ImplementRfcInputSchema,
  RejectRfcInputSchema,
  WithdrawRfcInputSchema,
} from "../schema/zod.js";
import type {
  ProposeRfcInput,
  StartRfcReviewInput,
  RatifyRfcInput,
  ImplementRfcInput,
  RejectRfcInput,
  WithdrawRfcInput,
} from "../types.js";
import type {
  ProposeRfcAction,
  StartRfcReviewAction,
  RatifyRfcAction,
  ImplementRfcAction,
  RejectRfcAction,
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
