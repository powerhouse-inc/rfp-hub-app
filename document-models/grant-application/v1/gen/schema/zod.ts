/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from "zod";
import type {
  AddAppSocialInput,
  AddFundsApprovedInput,
  AddFundsAskedInput,
  AppFundingAmount,
  AppSocial,
  AppSubmitter,
  AppSubmitterType,
  ApplicationStatus,
  ApproveApplicationInput,
  ConditionallyApproveInput,
  GrantApplicationState,
  MarkCompletedInput,
  MarkRevisedInput,
  OpenApplicationInput,
  PaymentTerm,
  Payout,
  PayoutAddress,
  RecordPayoutInput,
  RejectApplicationInput,
  RemoveAppSocialInput,
  RemoveFundsAskedInput,
  RequestRevisionInput,
  ReviewStage,
  SetAppContentUriInput,
  SetAppExtensionsInput,
  SetAppLicenseUriInput,
  SetCompletionRateInput,
  SetCreatedAtInput,
  SetDiscussionsToInput,
  SetFundsApprovedUsdInput,
  SetFundsAskedUsdInput,
  SetIsInactiveInput,
  SetPaymentTermInput,
  SetPayoutAddressInput,
  SetPoolRefInput,
  SetProjectRefInput,
  StartReviewInput,
  SubmitApplicationInput,
  WithdrawApplicationInput,
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

export const AppSubmitterTypeSchema = z.enum([
  "AUTOMATION",
  "COMMUNITY",
  "VERIFIED_PUBLISHER",
]);

export const ApplicationStatusSchema = z.enum([
  "approved",
  "completed",
  "funded",
  "in_review",
  "pending",
  "rejected",
]);

export const PaymentTermSchema = z.enum([
  "ESCROW",
  "MILESTONE_BASED_ADVANCE_PAYMENT",
  "MILESTONE_BASED_FIXED_PRICE",
  "RETAINER_BASED",
  "VARIABLE_COST",
]);

export const ReviewStageSchema = z.enum([
  "APPROVED",
  "COMPLETED",
  "CONDITIONALLY_APPROVED",
  "DRAFT",
  "FUNDED",
  "NEEDS_REVISION",
  "OPENED",
  "REJECTED",
  "REVISED",
  "SUBMITTED",
  "UNDER_REVIEW",
  "WITHDRAWN",
]);

export function AddAppSocialInputSchema(): z.ZodObject<
  Properties<AddAppSocialInput>
> {
  return z.object({
    id: z.string(),
    platform: z.string(),
    url: z.url(),
  });
}

export function AddFundsApprovedInputSchema(): z.ZodObject<
  Properties<AddFundsApprovedInput>
> {
  return z.object({
    amount: z.object({
      unit: z.string().optional(),
      value: z.number().finite(),
    }),
    id: z.string(),
  });
}

export function AddFundsAskedInputSchema(): z.ZodObject<
  Properties<AddFundsAskedInput>
> {
  return z.object({
    amount: z.object({
      unit: z.string().optional(),
      value: z.number().finite(),
    }),
    id: z.string(),
  });
}

export function AppFundingAmountSchema(): z.ZodObject<
  Properties<AppFundingAmount>
> {
  return z.object({
    __typename: z.literal("AppFundingAmount").optional(),
    amount: z.object({
      unit: z.string().optional(),
      value: z.number().finite(),
    }),
    id: z.string(),
  });
}

export function AppSocialSchema(): z.ZodObject<Properties<AppSocial>> {
  return z.object({
    __typename: z.literal("AppSocial").optional(),
    id: z.string(),
    platform: z.string(),
    url: z.url(),
  });
}

export function AppSubmitterSchema(): z.ZodObject<Properties<AppSubmitter>> {
  return z.object({
    __typename: z.literal("AppSubmitter").optional(),
    identifier: z.string(),
    submittedAt: z.iso.datetime(),
    submitterType: AppSubmitterTypeSchema,
  });
}

export function ApproveApplicationInputSchema(): z.ZodObject<
  Properties<ApproveApplicationInput>
> {
  return z.object({
    approvedAt: z.iso.datetime(),
    reviewerDid: z.string(),
  });
}

export function ConditionallyApproveInputSchema(): z.ZodObject<
  Properties<ConditionallyApproveInput>
> {
  return z.object({
    approvedAt: z.iso.datetime(),
    conditions: z.string(),
    reviewerDid: z.string(),
  });
}

export function GrantApplicationStateSchema(): z.ZodObject<
  Properties<GrantApplicationState>
> {
  return z.object({
    __typename: z.literal("GrantApplicationState").optional(),
    applicationCompletionRate: z.number().nullish(),
    contentURI: z.url().nullish(),
    createdAt: z.iso.datetime().nullish(),
    discussionsTo: z.url().nullish(),
    extensions: z.string().nullish(),
    feedbackNotes: z.string().nullish(),
    fundsApproved: z.array(z.lazy(() => AppFundingAmountSchema())),
    fundsApprovedInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
    fundsAsked: z.array(z.lazy(() => AppFundingAmountSchema())),
    fundsAskedInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
    grantPoolId: z.string().nullish(),
    grantPoolName: z.string().nullish(),
    grantPoolsURI: z.url().nullish(),
    isInactive: z.boolean(),
    licenseURI: z.url().nullish(),
    paymentTerm: PaymentTermSchema.nullish(),
    payoutAddress: z.lazy(() => PayoutAddressSchema().nullish()),
    payouts: z.array(z.lazy(() => PayoutSchema())),
    projectId: z.string().nullish(),
    projectName: z.string().nullish(),
    projectsURI: z.url().nullish(),
    reviewStage: ReviewStageSchema,
    reviewedAt: z.iso.datetime().nullish(),
    reviewedBy: z.string().nullish(),
    revisionCount: z.number(),
    socials: z.array(z.lazy(() => AppSocialSchema())),
    status: ApplicationStatusSchema,
    submittedAt: z.iso.datetime().nullish(),
    submitter: z.lazy(() => AppSubmitterSchema().nullish()),
  });
}

export function MarkCompletedInputSchema(): z.ZodObject<
  Properties<MarkCompletedInput>
> {
  return z.object({
    completedAt: z.iso.datetime(),
  });
}

export function MarkRevisedInputSchema(): z.ZodObject<
  Properties<MarkRevisedInput>
> {
  return z.object({
    revisedAt: z.iso.datetime(),
  });
}

export function OpenApplicationInputSchema(): z.ZodObject<
  Properties<OpenApplicationInput>
> {
  return z.object({
    openedAt: z.iso.datetime(),
  });
}

export function PayoutSchema(): z.ZodObject<Properties<Payout>> {
  return z.object({
    __typename: z.literal("Payout").optional(),
    id: z.string(),
    payoutType: z.string(),
    proof: z.string().nullish(),
    timestamp: z.iso.datetime(),
    value: z.string(),
  });
}

export function PayoutAddressSchema(): z.ZodObject<Properties<PayoutAddress>> {
  return z.object({
    __typename: z.literal("PayoutAddress").optional(),
    addressType: z.string(),
    value: z.string(),
  });
}

export function RecordPayoutInputSchema(): z.ZodObject<
  Properties<RecordPayoutInput>
> {
  return z.object({
    id: z.string(),
    payoutType: z.string(),
    proof: z.string().nullish(),
    timestamp: z.iso.datetime(),
    value: z.string(),
  });
}

export function RejectApplicationInputSchema(): z.ZodObject<
  Properties<RejectApplicationInput>
> {
  return z.object({
    reason: z.string(),
    rejectedAt: z.iso.datetime(),
    reviewerDid: z.string(),
  });
}

export function RemoveAppSocialInputSchema(): z.ZodObject<
  Properties<RemoveAppSocialInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RemoveFundsAskedInputSchema(): z.ZodObject<
  Properties<RemoveFundsAskedInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RequestRevisionInputSchema(): z.ZodObject<
  Properties<RequestRevisionInput>
> {
  return z.object({
    feedbackNotes: z.string(),
    requestedAt: z.iso.datetime(),
  });
}

export function SetAppContentUriInputSchema(): z.ZodObject<
  Properties<SetAppContentUriInput>
> {
  return z.object({
    contentURI: z.url().nullish(),
  });
}

export function SetAppExtensionsInputSchema(): z.ZodObject<
  Properties<SetAppExtensionsInput>
> {
  return z.object({
    extensions: z.string().nullish(),
  });
}

export function SetAppLicenseUriInputSchema(): z.ZodObject<
  Properties<SetAppLicenseUriInput>
> {
  return z.object({
    licenseURI: z.url().nullish(),
  });
}

export function SetCompletionRateInputSchema(): z.ZodObject<
  Properties<SetCompletionRateInput>
> {
  return z.object({
    applicationCompletionRate: z.number().nullish(),
  });
}

export function SetCreatedAtInputSchema(): z.ZodObject<
  Properties<SetCreatedAtInput>
> {
  return z.object({
    createdAt: z.iso.datetime(),
  });
}

export function SetDiscussionsToInputSchema(): z.ZodObject<
  Properties<SetDiscussionsToInput>
> {
  return z.object({
    discussionsTo: z.url().nullish(),
  });
}

export function SetFundsApprovedUsdInputSchema(): z.ZodObject<
  Properties<SetFundsApprovedUsdInput>
> {
  return z.object({
    fundsApprovedInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
  });
}

export function SetFundsAskedUsdInputSchema(): z.ZodObject<
  Properties<SetFundsAskedUsdInput>
> {
  return z.object({
    fundsAskedInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
  });
}

export function SetIsInactiveInputSchema(): z.ZodObject<
  Properties<SetIsInactiveInput>
> {
  return z.object({
    isInactive: z.boolean(),
  });
}

export function SetPaymentTermInputSchema(): z.ZodObject<
  Properties<SetPaymentTermInput>
> {
  return z.object({
    paymentTerm: PaymentTermSchema,
  });
}

export function SetPayoutAddressInputSchema(): z.ZodObject<
  Properties<SetPayoutAddressInput>
> {
  return z.object({
    addressType: z.string(),
    value: z.string(),
  });
}

export function SetPoolRefInputSchema(): z.ZodObject<
  Properties<SetPoolRefInput>
> {
  return z.object({
    grantPoolId: z.string(),
    grantPoolName: z.string(),
    grantPoolsURI: z.url(),
  });
}

export function SetProjectRefInputSchema(): z.ZodObject<
  Properties<SetProjectRefInput>
> {
  return z.object({
    projectId: z.string(),
    projectName: z.string(),
    projectsURI: z.url(),
  });
}

export function StartReviewInputSchema(): z.ZodObject<
  Properties<StartReviewInput>
> {
  return z.object({
    reviewerDid: z.string(),
    startedAt: z.iso.datetime(),
  });
}

export function SubmitApplicationInputSchema(): z.ZodObject<
  Properties<SubmitApplicationInput>
> {
  return z.object({
    identifier: z.string(),
    submittedAt: z.iso.datetime(),
    submitterType: AppSubmitterTypeSchema,
  });
}

export function WithdrawApplicationInputSchema(): z.ZodObject<
  Properties<WithdrawApplicationInput>
> {
  return z.object({
    reason: z.string().nullish(),
    withdrawnAt: z.iso.datetime(),
  });
}
