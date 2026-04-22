import { createAction } from "document-model";
import {
  SetPublisherWalletInputSchema,
  RequestVerificationInputSchema,
  ApproveVerificationInputSchema,
  RejectVerificationInputSchema,
  SuspendVerificationInputSchema,
  RevokeVerificationInputSchema,
  ReinstateVerificationInputSchema,
} from "../schema/zod.js";
import type {
  SetPublisherWalletInput,
  RequestVerificationInput,
  ApproveVerificationInput,
  RejectVerificationInput,
  SuspendVerificationInput,
  RevokeVerificationInput,
  ReinstateVerificationInput,
} from "../types.js";
import type {
  SetPublisherWalletAction,
  RequestVerificationAction,
  ApproveVerificationAction,
  RejectVerificationAction,
  SuspendVerificationAction,
  RevokeVerificationAction,
  ReinstateVerificationAction,
} from "./actions.js";

export const setPublisherWallet = (input: SetPublisherWalletInput) =>
  createAction<SetPublisherWalletAction>(
    "SET_PUBLISHER_WALLET",
    { ...input },
    undefined,
    SetPublisherWalletInputSchema,
    "global",
  );

export const requestVerification = (input: RequestVerificationInput) =>
  createAction<RequestVerificationAction>(
    "REQUEST_VERIFICATION",
    { ...input },
    undefined,
    RequestVerificationInputSchema,
    "global",
  );

export const approveVerification = (input: ApproveVerificationInput) =>
  createAction<ApproveVerificationAction>(
    "APPROVE_VERIFICATION",
    { ...input },
    undefined,
    ApproveVerificationInputSchema,
    "global",
  );

export const rejectVerification = (input: RejectVerificationInput) =>
  createAction<RejectVerificationAction>(
    "REJECT_VERIFICATION",
    { ...input },
    undefined,
    RejectVerificationInputSchema,
    "global",
  );

export const suspendVerification = (input: SuspendVerificationInput) =>
  createAction<SuspendVerificationAction>(
    "SUSPEND_VERIFICATION",
    { ...input },
    undefined,
    SuspendVerificationInputSchema,
    "global",
  );

export const revokeVerification = (input: RevokeVerificationInput) =>
  createAction<RevokeVerificationAction>(
    "REVOKE_VERIFICATION",
    { ...input },
    undefined,
    RevokeVerificationInputSchema,
    "global",
  );

export const reinstateVerification = (input: ReinstateVerificationInput) =>
  createAction<ReinstateVerificationAction>(
    "REINSTATE_VERIFICATION",
    { ...input },
    undefined,
    ReinstateVerificationInputSchema,
    "global",
  );
