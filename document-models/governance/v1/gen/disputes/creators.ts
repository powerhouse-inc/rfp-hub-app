import { createAction } from "document-model";
import {
  FileDisputeInputSchema,
  AssignInvestigatorInputSchema,
  ResolveDisputeInputSchema,
  DismissDisputeInputSchema,
  AppealDisputeInputSchema,
} from "../schema/zod.js";
import type {
  FileDisputeInput,
  AssignInvestigatorInput,
  ResolveDisputeInput,
  DismissDisputeInput,
  AppealDisputeInput,
} from "../types.js";
import type {
  FileDisputeAction,
  AssignInvestigatorAction,
  ResolveDisputeAction,
  DismissDisputeAction,
  AppealDisputeAction,
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
