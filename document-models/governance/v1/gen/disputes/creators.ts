/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { createAction } from "document-model";
import {
  AppealDisputeInputSchema,
  AssignInvestigatorInputSchema,
  DismissDisputeInputSchema,
  FileDisputeInputSchema,
  ResolveDisputeInputSchema,
} from "../schema/zod.js";
import type {
  AppealDisputeInput,
  AssignInvestigatorInput,
  DismissDisputeInput,
  FileDisputeInput,
  ResolveDisputeInput,
} from "../types.js";
import type {
  AppealDisputeAction,
  AssignInvestigatorAction,
  DismissDisputeAction,
  FileDisputeAction,
  ResolveDisputeAction,
} from "./actions.js";

export const fileDispute = (input: FileDisputeInput) =>
  createAction<FileDisputeAction>(
    "FILE_DISPUTE",
    { ...input },
    undefined,
    FileDisputeInputSchema,
    "global",
  );

export const assignInvestigator = (input: AssignInvestigatorInput) =>
  createAction<AssignInvestigatorAction>(
    "ASSIGN_INVESTIGATOR",
    { ...input },
    undefined,
    AssignInvestigatorInputSchema,
    "global",
  );

export const resolveDispute = (input: ResolveDisputeInput) =>
  createAction<ResolveDisputeAction>(
    "RESOLVE_DISPUTE",
    { ...input },
    undefined,
    ResolveDisputeInputSchema,
    "global",
  );

export const dismissDispute = (input: DismissDisputeInput) =>
  createAction<DismissDisputeAction>(
    "DISMISS_DISPUTE",
    { ...input },
    undefined,
    DismissDisputeInputSchema,
    "global",
  );

export const appealDispute = (input: AppealDisputeInput) =>
  createAction<AppealDisputeAction>(
    "APPEAL_DISPUTE",
    { ...input },
    undefined,
    AppealDisputeInputSchema,
    "global",
  );
