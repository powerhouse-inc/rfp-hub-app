/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from "zod";
import type {
  AppealDisputeInput,
  AssignInvestigatorInput,
  DismissDisputeInput,
  Dispute,
  DisputeKind,
  DisputeStatus,
  FileDisputeInput,
  GovernanceState,
  ImplementRfcInput,
  Policy,
  ProposeRfcInput,
  PublishPolicyInput,
  PublisherDecision,
  PublisherDecisionKind,
  RatifyRfcInput,
  RecordPublisherDecisionInput,
  RejectRfcInput,
  ResolveDisputeInput,
  Rfc,
  RfcStatus,
  StartRfcReviewInput,
  SupersedePolicyInput,
  WithdrawRfcInput,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export const DisputeKindSchema = z.enum([
  "DUPLICATE_CLAIM",
  "INACCURATE_ENTRY",
  "OTHER",
  "POLICY_VIOLATION",
  "PUBLISHER_CONDUCT",
  "REVIEW_DECISION",
]);

export const DisputeStatusSchema = z.enum([
  "APPEALED",
  "DISMISSED",
  "INVESTIGATING",
  "OPEN",
  "RESOLVED",
]);

export const PublisherDecisionKindSchema = z.enum([
  "APPROVED",
  "REINSTATED",
  "REVOKED",
  "SUSPENDED",
]);

export const RfcStatusSchema = z.enum([
  "IMPLEMENTED",
  "PROPOSED",
  "RATIFIED",
  "REJECTED",
  "UNDER_REVIEW",
  "WITHDRAWN",
]);

export function AppealDisputeInputSchema(): z.ZodObject<
  Properties<AppealDisputeInput>
> {
  return z.object({
    appealAt: z.iso.datetime(),
    appealReason: z.string(),
    id: z.string(),
  });
}

export function AssignInvestigatorInputSchema(): z.ZodObject<
  Properties<AssignInvestigatorInput>
> {
  return z.object({
    assignedTo: z.string(),
    id: z.string(),
  });
}

export function DismissDisputeInputSchema(): z.ZodObject<
  Properties<DismissDisputeInput>
> {
  return z.object({
    dismissedAt: z.iso.datetime(),
    id: z.string(),
    reason: z.string(),
  });
}

export function DisputeSchema(): z.ZodObject<Properties<Dispute>> {
  return z.object({
    __typename: z.literal("Dispute").optional(),
    appealAt: z.iso.datetime().nullish(),
    appealReason: z.string().nullish(),
    assignedTo: z.string().nullish(),
    disputeKind: DisputeKindSchema,
    filedAt: z.iso.datetime(),
    filedBy: z.string(),
    id: z.string(),
    resolution: z.string().nullish(),
    resolvedAt: z.iso.datetime().nullish(),
    status: DisputeStatusSchema,
    subjectRef: z.string(),
    summary: z.string(),
  });
}

export function FileDisputeInputSchema(): z.ZodObject<
  Properties<FileDisputeInput>
> {
  return z.object({
    disputeKind: DisputeKindSchema,
    filedAt: z.iso.datetime(),
    filedBy: z.string(),
    id: z.string(),
    subjectRef: z.string(),
    summary: z.string(),
  });
}

export function GovernanceStateSchema(): z.ZodObject<
  Properties<GovernanceState>
> {
  return z.object({
    __typename: z.literal("GovernanceState").optional(),
    disputes: z.array(z.lazy(() => DisputeSchema())),
    policies: z.array(z.lazy(() => PolicySchema())),
    publisherDecisions: z.array(z.lazy(() => PublisherDecisionSchema())),
    rfcs: z.array(z.lazy(() => RfcSchema())),
  });
}

export function ImplementRfcInputSchema(): z.ZodObject<
  Properties<ImplementRfcInput>
> {
  return z.object({
    id: z.string(),
    implementedAt: z.iso.datetime(),
  });
}

export function PolicySchema(): z.ZodObject<Properties<Policy>> {
  return z.object({
    __typename: z.literal("Policy").optional(),
    content: z.string(),
    effectiveFrom: z.iso.datetime(),
    id: z.string(),
    name: z.string(),
    summary: z.string(),
    supersededAt: z.iso.datetime().nullish(),
    supersededBy: z.string().nullish(),
  });
}

export function ProposeRfcInputSchema(): z.ZodObject<
  Properties<ProposeRfcInput>
> {
  return z.object({
    author: z.string(),
    id: z.string(),
    proposedAt: z.iso.datetime(),
    summary: z.string(),
    title: z.string(),
  });
}

export function PublishPolicyInputSchema(): z.ZodObject<
  Properties<PublishPolicyInput>
> {
  return z.object({
    content: z.string(),
    effectiveFrom: z.iso.datetime(),
    id: z.string(),
    name: z.string(),
    summary: z.string(),
  });
}

export function PublisherDecisionSchema(): z.ZodObject<
  Properties<PublisherDecision>
> {
  return z.object({
    __typename: z.literal("PublisherDecision").optional(),
    decidedAt: z.iso.datetime(),
    decidedBy: z.string(),
    decision: PublisherDecisionKindSchema,
    grantSystemRef: z.string(),
    id: z.string(),
    reason: z.string().nullish(),
  });
}

export function RatifyRfcInputSchema(): z.ZodObject<
  Properties<RatifyRfcInput>
> {
  return z.object({
    id: z.string(),
    ratifiedAt: z.iso.datetime(),
  });
}

export function RecordPublisherDecisionInputSchema(): z.ZodObject<
  Properties<RecordPublisherDecisionInput>
> {
  return z.object({
    decidedAt: z.iso.datetime(),
    decidedBy: z.string(),
    decision: PublisherDecisionKindSchema,
    grantSystemRef: z.string(),
    id: z.string(),
    reason: z.string().nullish(),
  });
}

export function RejectRfcInputSchema(): z.ZodObject<
  Properties<RejectRfcInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function ResolveDisputeInputSchema(): z.ZodObject<
  Properties<ResolveDisputeInput>
> {
  return z.object({
    id: z.string(),
    resolution: z.string(),
    resolvedAt: z.iso.datetime(),
  });
}

export function RfcSchema(): z.ZodObject<Properties<Rfc>> {
  return z.object({
    __typename: z.literal("Rfc").optional(),
    author: z.string(),
    id: z.string(),
    implementedAt: z.iso.datetime().nullish(),
    proposedAt: z.iso.datetime(),
    ratifiedAt: z.iso.datetime().nullish(),
    status: RfcStatusSchema,
    summary: z.string(),
    title: z.string(),
  });
}

export function StartRfcReviewInputSchema(): z.ZodObject<
  Properties<StartRfcReviewInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function SupersedePolicyInputSchema(): z.ZodObject<
  Properties<SupersedePolicyInput>
> {
  return z.object({
    id: z.string(),
    supersededAt: z.iso.datetime(),
    supersededBy: z.string(),
  });
}

export function WithdrawRfcInputSchema(): z.ZodObject<
  Properties<WithdrawRfcInput>
> {
  return z.object({
    id: z.string(),
  });
}
