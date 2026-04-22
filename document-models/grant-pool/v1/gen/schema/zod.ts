/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from "zod";
import type {
  AddCategoryInput,
  AddContextDocumentInput,
  AddEcosystemInput,
  AddPoolSameAsInput,
  AddPoolSizeEntryInput,
  AddRequiredCredentialInput,
  AddReviewerInput,
  AddTagInput,
  AdvanceLifecycleInput,
  CancelPoolInput,
  ClosePoolInput,
  ContextDocument,
  FundingAmount,
  FundingMechanism,
  GrantPoolLifecycle,
  GrantPoolState,
  MarkClaimedFromEntryInput,
  MarkDuplicateOfInput,
  MarkSupersedesInput,
  PoolGovernanceState,
  PublishPoolInput,
  Publisher,
  RecordVerificationInput,
  RemoveCategoryInput,
  RemoveContextDocumentInput,
  RemoveEcosystemInput,
  RemovePoolSameAsInput,
  RemovePoolSizeEntryInput,
  RemoveRequiredCredentialInput,
  RemoveReviewerInput,
  RemoveTagInput,
  Reviewer,
  ReviewerScope,
  ReviewerType,
  SetApplicationsUriInput,
  SetAttestationIssuersUriInput,
  SetBriefingUriInput,
  SetCloseDateInput,
  SetCodeInput,
  SetDescriptionInput,
  SetEligibilityCriteriaInput,
  SetEvaluationCriteriaInput,
  SetFundingMechanismInput,
  SetGovernanceStateInput,
  SetGovernanceUriInput,
  SetGrantBoundsInput,
  SetGrantSystemRefInput,
  SetIsOpenInput,
  SetOpenDateInput,
  SetPoolCoverImageInput,
  SetPoolEmailInput,
  SetPoolExtensionsInput,
  SetPoolImageInput,
  SetPoolNameInput,
  SetPublisherInput,
  SetSubmitterInput,
  SetTotalPoolSizeUsdInput,
  Submitter,
  SubmitterType,
  VerificationMethod,
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

export const FundingMechanismSchema = z.enum([
  "ANGEL_INVESTMENT",
  "ASSURANCE_CONTRACTS",
  "BONDING_CURVES",
  "BOUNTIES",
  "COMMUNITY_CURRENCIES",
  "CONVICTION_VOTING",
  "COOKIE_JAR",
  "DECENTRALIZED_VALIDATORS",
  "DELEGATED_DOMAIN_ALLOCATION",
  "DIRECT_GRANTS",
  "DIRECT_TO_CONTRACT_INCENTIVES",
  "DOMINANT_ASSURANCE_CONTRACTS",
  "EVOLUTIONARY_GRANTS_GAMES",
  "FUTARCHY",
  "GIFT_CIRCLES",
  "GNOSIS_SAFE",
  "HONOUR",
  "IMPACT_ATTESTATIONS",
  "MUTUAL_AID_NETWORKS",
  "OTHER",
  "QUADRATIC_FUNDING",
  "RANKED_CHOICE_VOTING",
  "REQUEST_FOR_PROPOSAL",
  "RETRO_FUNDING",
  "REVNETS",
  "SELF_CURATED_REGISTRIES",
  "SOCIAL_MEDIA_CAPITAL_ALLOCATION",
  "STOKVEL",
  "STREAMING_QUADRATIC_FUNDING",
  "UNIVERSAL_BASIC_INCOME",
  "WAQF",
  "ZAKAT",
]);

export const GrantPoolLifecycleSchema = z.enum([
  "AWARDED",
  "CANCELLED",
  "CLOSED",
  "DRAFT",
  "NOT_AWARDED",
  "OPEN",
  "REQUEST_FOR_COMMENTS",
  "UPCOMING",
]);

export const PoolGovernanceStateSchema = z.enum([
  "APPROVED",
  "DISPUTED",
  "PENDING",
  "REJECTED",
  "SUPERSEDED",
  "UNDER_REVIEW",
]);

export const ReviewerScopeSchema = z.enum(["EXTERNAL", "INTERNAL"]);

export const ReviewerTypeSchema = z.enum(["AI", "GROUP", "HUMAN"]);

export const SubmitterTypeSchema = z.enum([
  "AUTOMATION",
  "COMMUNITY",
  "VERIFIED_PUBLISHER",
]);

export const VerificationMethodSchema = z.enum([
  "DOMAIN_VERIFICATION",
  "HTTP_PROBE",
  "MANUAL_REVIEW",
  "REVIEWER_CONFIRMATION",
]);

export function AddCategoryInputSchema(): z.ZodObject<
  Properties<AddCategoryInput>
> {
  return z.object({
    category: z.string(),
  });
}

export function AddContextDocumentInputSchema(): z.ZodObject<
  Properties<AddContextDocumentInput>
> {
  return z.object({
    id: z.string(),
    name: z.string(),
    url: z.url(),
  });
}

export function AddEcosystemInputSchema(): z.ZodObject<
  Properties<AddEcosystemInput>
> {
  return z.object({
    ecosystem: z.string(),
  });
}

export function AddPoolSameAsInputSchema(): z.ZodObject<
  Properties<AddPoolSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function AddPoolSizeEntryInputSchema(): z.ZodObject<
  Properties<AddPoolSizeEntryInput>
> {
  return z.object({
    amount: z.object({
      unit: z.string().optional(),
      value: z.number().finite(),
    }),
    id: z.string(),
  });
}

export function AddRequiredCredentialInputSchema(): z.ZodObject<
  Properties<AddRequiredCredentialInput>
> {
  return z.object({
    credential: z.string(),
  });
}

export function AddReviewerInputSchema(): z.ZodObject<
  Properties<AddReviewerInput>
> {
  return z.object({
    did: z.string(),
    id: z.string(),
    name: z.string(),
    reviewerType: ReviewerTypeSchema,
    scope: ReviewerScopeSchema,
  });
}

export function AddTagInputSchema(): z.ZodObject<Properties<AddTagInput>> {
  return z.object({
    tag: z.string(),
  });
}

export function AdvanceLifecycleInputSchema(): z.ZodObject<
  Properties<AdvanceLifecycleInput>
> {
  return z.object({
    lifecycle: GrantPoolLifecycleSchema,
  });
}

export function CancelPoolInputSchema(): z.ZodObject<
  Properties<CancelPoolInput>
> {
  return z.object({
    cancelledAt: z.iso.datetime(),
    reason: z.string().nullish(),
  });
}

export function ClosePoolInputSchema(): z.ZodObject<
  Properties<ClosePoolInput>
> {
  return z.object({
    closedAt: z.iso.datetime(),
  });
}

export function ContextDocumentSchema(): z.ZodObject<
  Properties<ContextDocument>
> {
  return z.object({
    __typename: z.literal("ContextDocument").optional(),
    id: z.string(),
    name: z.string(),
    url: z.url(),
  });
}

export function FundingAmountSchema(): z.ZodObject<Properties<FundingAmount>> {
  return z.object({
    __typename: z.literal("FundingAmount").optional(),
    amount: z.object({
      unit: z.string().optional(),
      value: z.number().finite(),
    }),
    id: z.string(),
  });
}

export function GrantPoolStateSchema(): z.ZodObject<
  Properties<GrantPoolState>
> {
  return z.object({
    __typename: z.literal("GrantPoolState").optional(),
    applicationsURI: z.url().nullish(),
    attestationIssuersURI: z.url().nullish(),
    briefingURI: z.url().nullish(),
    categories: z.array(z.string()),
    claimedFromEntry: z.string().nullish(),
    closeDate: z.iso.datetime().nullish(),
    code: z.string().nullish(),
    contextDocuments: z.array(z.lazy(() => ContextDocumentSchema())),
    coverImage: z.url().nullish(),
    description: z.string().nullish(),
    duplicateOf: z.string().nullish(),
    ecosystems: z.array(z.string()),
    eligibilityCriteria: z.string().nullish(),
    email: z.email().nullish(),
    evaluationCriteria: z.string().nullish(),
    extensions: z.string().nullish(),
    governanceState: PoolGovernanceStateSchema,
    governanceURI: z.url().nullish(),
    grantFundingMechanism: FundingMechanismSchema.nullish(),
    grantSystemRef: z.string().nullish(),
    image: z.url().nullish(),
    isOpen: z.boolean(),
    lastVerifiedAt: z.iso.datetime().nullish(),
    lifecycle: GrantPoolLifecycleSchema,
    maxGrant: z.array(z.lazy(() => FundingAmountSchema())),
    minGrant: z.array(z.lazy(() => FundingAmountSchema())),
    name: z.string().nullish(),
    openDate: z.iso.datetime().nullish(),
    publisher: z.lazy(() => PublisherSchema().nullish()),
    requiredCredentials: z.array(z.string()),
    reviewers: z.array(z.lazy(() => ReviewerSchema())),
    sameAs: z.array(z.url()),
    submitter: z.lazy(() => SubmitterSchema().nullish()),
    supersedes: z.string().nullish(),
    tags: z.array(z.string()),
    totalGrantPoolSize: z.array(z.lazy(() => FundingAmountSchema())),
    totalGrantPoolSizeInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
    verificationMethod: VerificationMethodSchema.nullish(),
    verifiedBy: z.string().nullish(),
  });
}

export function MarkClaimedFromEntryInputSchema(): z.ZodObject<
  Properties<MarkClaimedFromEntryInput>
> {
  return z.object({
    claimedFromEntry: z.string(),
  });
}

export function MarkDuplicateOfInputSchema(): z.ZodObject<
  Properties<MarkDuplicateOfInput>
> {
  return z.object({
    duplicateOf: z.string(),
  });
}

export function MarkSupersedesInputSchema(): z.ZodObject<
  Properties<MarkSupersedesInput>
> {
  return z.object({
    supersedes: z.string(),
  });
}

export function PublishPoolInputSchema(): z.ZodObject<
  Properties<PublishPoolInput>
> {
  return z.object({
    publishedAt: z.iso.datetime(),
  });
}

export function PublisherSchema(): z.ZodObject<Properties<Publisher>> {
  return z.object({
    __typename: z.literal("Publisher").optional(),
    identifier: z.string(),
    publishedAt: z.iso.datetime(),
  });
}

export function RecordVerificationInputSchema(): z.ZodObject<
  Properties<RecordVerificationInput>
> {
  return z.object({
    verificationMethod: VerificationMethodSchema,
    verifiedAt: z.iso.datetime(),
    verifiedBy: z.string(),
  });
}

export function RemoveCategoryInputSchema(): z.ZodObject<
  Properties<RemoveCategoryInput>
> {
  return z.object({
    category: z.string(),
  });
}

export function RemoveContextDocumentInputSchema(): z.ZodObject<
  Properties<RemoveContextDocumentInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RemoveEcosystemInputSchema(): z.ZodObject<
  Properties<RemoveEcosystemInput>
> {
  return z.object({
    ecosystem: z.string(),
  });
}

export function RemovePoolSameAsInputSchema(): z.ZodObject<
  Properties<RemovePoolSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function RemovePoolSizeEntryInputSchema(): z.ZodObject<
  Properties<RemovePoolSizeEntryInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RemoveRequiredCredentialInputSchema(): z.ZodObject<
  Properties<RemoveRequiredCredentialInput>
> {
  return z.object({
    credential: z.string(),
  });
}

export function RemoveReviewerInputSchema(): z.ZodObject<
  Properties<RemoveReviewerInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RemoveTagInputSchema(): z.ZodObject<
  Properties<RemoveTagInput>
> {
  return z.object({
    tag: z.string(),
  });
}

export function ReviewerSchema(): z.ZodObject<Properties<Reviewer>> {
  return z.object({
    __typename: z.literal("Reviewer").optional(),
    did: z.string(),
    id: z.string(),
    name: z.string(),
    reviewerType: ReviewerTypeSchema,
    scope: ReviewerScopeSchema,
  });
}

export function SetApplicationsUriInputSchema(): z.ZodObject<
  Properties<SetApplicationsUriInput>
> {
  return z.object({
    applicationsURI: z.url().nullish(),
  });
}

export function SetAttestationIssuersUriInputSchema(): z.ZodObject<
  Properties<SetAttestationIssuersUriInput>
> {
  return z.object({
    attestationIssuersURI: z.url().nullish(),
  });
}

export function SetBriefingUriInputSchema(): z.ZodObject<
  Properties<SetBriefingUriInput>
> {
  return z.object({
    briefingURI: z.url().nullish(),
  });
}

export function SetCloseDateInputSchema(): z.ZodObject<
  Properties<SetCloseDateInput>
> {
  return z.object({
    closeDate: z.iso.datetime().nullish(),
  });
}

export function SetCodeInputSchema(): z.ZodObject<Properties<SetCodeInput>> {
  return z.object({
    code: z.string().nullish(),
  });
}

export function SetDescriptionInputSchema(): z.ZodObject<
  Properties<SetDescriptionInput>
> {
  return z.object({
    description: z.string().nullish(),
  });
}

export function SetEligibilityCriteriaInputSchema(): z.ZodObject<
  Properties<SetEligibilityCriteriaInput>
> {
  return z.object({
    eligibilityCriteria: z.string().nullish(),
  });
}

export function SetEvaluationCriteriaInputSchema(): z.ZodObject<
  Properties<SetEvaluationCriteriaInput>
> {
  return z.object({
    evaluationCriteria: z.string().nullish(),
  });
}

export function SetFundingMechanismInputSchema(): z.ZodObject<
  Properties<SetFundingMechanismInput>
> {
  return z.object({
    grantFundingMechanism: FundingMechanismSchema,
  });
}

export function SetGovernanceStateInputSchema(): z.ZodObject<
  Properties<SetGovernanceStateInput>
> {
  return z.object({
    governanceState: PoolGovernanceStateSchema,
  });
}

export function SetGovernanceUriInputSchema(): z.ZodObject<
  Properties<SetGovernanceUriInput>
> {
  return z.object({
    governanceURI: z.url().nullish(),
  });
}

export function SetGrantBoundsInputSchema(): z.ZodObject<
  Properties<SetGrantBoundsInput>
> {
  return z.object({
    maxGrantAmount1: z
      .object({ unit: z.string().optional(), value: z.number().finite() })
      .nullish(),
    maxGrantId1: z.string(),
    minGrantAmount1: z
      .object({ unit: z.string().optional(), value: z.number().finite() })
      .nullish(),
    minGrantId1: z.string(),
  });
}

export function SetGrantSystemRefInputSchema(): z.ZodObject<
  Properties<SetGrantSystemRefInput>
> {
  return z.object({
    grantSystemRef: z.string(),
  });
}

export function SetIsOpenInputSchema(): z.ZodObject<
  Properties<SetIsOpenInput>
> {
  return z.object({
    isOpen: z.boolean(),
  });
}

export function SetOpenDateInputSchema(): z.ZodObject<
  Properties<SetOpenDateInput>
> {
  return z.object({
    openDate: z.iso.datetime().nullish(),
  });
}

export function SetPoolCoverImageInputSchema(): z.ZodObject<
  Properties<SetPoolCoverImageInput>
> {
  return z.object({
    coverImage: z.url().nullish(),
  });
}

export function SetPoolEmailInputSchema(): z.ZodObject<
  Properties<SetPoolEmailInput>
> {
  return z.object({
    email: z.email().nullish(),
  });
}

export function SetPoolExtensionsInputSchema(): z.ZodObject<
  Properties<SetPoolExtensionsInput>
> {
  return z.object({
    extensions: z.string().nullish(),
  });
}

export function SetPoolImageInputSchema(): z.ZodObject<
  Properties<SetPoolImageInput>
> {
  return z.object({
    image: z.url().nullish(),
  });
}

export function SetPoolNameInputSchema(): z.ZodObject<
  Properties<SetPoolNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function SetPublisherInputSchema(): z.ZodObject<
  Properties<SetPublisherInput>
> {
  return z.object({
    identifier: z.string(),
    publishedAt: z.iso.datetime(),
  });
}

export function SetSubmitterInputSchema(): z.ZodObject<
  Properties<SetSubmitterInput>
> {
  return z.object({
    identifier: z.string(),
    submittedAt: z.iso.datetime(),
    type: SubmitterTypeSchema,
  });
}

export function SetTotalPoolSizeUsdInputSchema(): z.ZodObject<
  Properties<SetTotalPoolSizeUsdInput>
> {
  return z.object({
    totalGrantPoolSizeInUSD: z
      .object({ unit: z.string(), value: z.number().finite() })
      .nullish(),
  });
}

export function SubmitterSchema(): z.ZodObject<Properties<Submitter>> {
  return z.object({
    __typename: z.literal("Submitter").optional(),
    identifier: z.string(),
    submittedAt: z.iso.datetime(),
    type: SubmitterTypeSchema,
  });
}
