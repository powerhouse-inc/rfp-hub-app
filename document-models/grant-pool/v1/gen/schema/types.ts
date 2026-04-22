export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Address: { input: `${string}:0x${string}`; output: `${string}:0x${string}` };
  Amount: {
    input: { unit?: string; value?: number };
    output: { unit?: string; value?: number };
  };
  Amount_Crypto: {
    input: { unit: string; value: string };
    output: { unit: string; value: string };
  };
  Amount_Currency: {
    input: { unit: string; value: string };
    output: { unit: string; value: string };
  };
  Amount_Fiat: {
    input: { unit: string; value: number };
    output: { unit: string; value: number };
  };
  Amount_Money: { input: number; output: number };
  Amount_Percentage: { input: number; output: number };
  Amount_Tokens: { input: number; output: number };
  Attachment: { input: string; output: string };
  Currency: { input: string; output: string };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  EmailAddress: { input: string; output: string };
  EthereumAddress: { input: string; output: string };
  OID: { input: string; output: string };
  OLabel: { input: string; output: string };
  PHID: { input: string; output: string };
  URL: { input: string; output: string };
  Unknown: { input: unknown; output: unknown };
  Upload: { input: File; output: File };
};

export type AddCategoryInput = {
  category: Scalars["String"]["input"];
};

export type AddContextDocumentInput = {
  id: Scalars["OID"]["input"];
  name: Scalars["String"]["input"];
  url: Scalars["URL"]["input"];
};

export type AddEcosystemInput = {
  ecosystem: Scalars["String"]["input"];
};

export type AddPoolSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type AddPoolSizeEntryInput = {
  amount: Scalars["Amount"]["input"];
  id: Scalars["OID"]["input"];
};

export type AddRequiredCredentialInput = {
  credential: Scalars["String"]["input"];
};

export type AddReviewerInput = {
  did: Scalars["String"]["input"];
  id: Scalars["OID"]["input"];
  name: Scalars["String"]["input"];
  reviewerType: ReviewerType;
  scope: ReviewerScope;
};

export type AddTagInput = {
  tag: Scalars["String"]["input"];
};

export type AdvanceLifecycleInput = {
  lifecycle: GrantPoolLifecycle;
};

export type CancelPoolInput = {
  cancelledAt: Scalars["DateTime"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClosePoolInput = {
  closedAt: Scalars["DateTime"]["input"];
};

export type ContextDocument = {
  id: Scalars["OID"]["output"];
  name: Scalars["String"]["output"];
  url: Scalars["URL"]["output"];
};

export type FundingAmount = {
  amount: Scalars["Amount"]["output"];
  id: Scalars["OID"]["output"];
};

export type FundingMechanism =
  | "ANGEL_INVESTMENT"
  | "ASSURANCE_CONTRACTS"
  | "BONDING_CURVES"
  | "BOUNTIES"
  | "COMMUNITY_CURRENCIES"
  | "CONVICTION_VOTING"
  | "COOKIE_JAR"
  | "DECENTRALIZED_VALIDATORS"
  | "DELEGATED_DOMAIN_ALLOCATION"
  | "DIRECT_GRANTS"
  | "DIRECT_TO_CONTRACT_INCENTIVES"
  | "DOMINANT_ASSURANCE_CONTRACTS"
  | "EVOLUTIONARY_GRANTS_GAMES"
  | "FUTARCHY"
  | "GIFT_CIRCLES"
  | "GNOSIS_SAFE"
  | "HONOUR"
  | "IMPACT_ATTESTATIONS"
  | "MUTUAL_AID_NETWORKS"
  | "OTHER"
  | "QUADRATIC_FUNDING"
  | "RANKED_CHOICE_VOTING"
  | "REQUEST_FOR_PROPOSAL"
  | "RETRO_FUNDING"
  | "REVNETS"
  | "SELF_CURATED_REGISTRIES"
  | "SOCIAL_MEDIA_CAPITAL_ALLOCATION"
  | "STOKVEL"
  | "STREAMING_QUADRATIC_FUNDING"
  | "UNIVERSAL_BASIC_INCOME"
  | "WAQF"
  | "ZAKAT";

export type GrantPoolLifecycle =
  | "AWARDED"
  | "CANCELLED"
  | "CLOSED"
  | "DRAFT"
  | "NOT_AWARDED"
  | "OPEN"
  | "REQUEST_FOR_COMMENTS"
  | "UPCOMING";

export type GrantPoolState = {
  applicationsURI: Maybe<Scalars["URL"]["output"]>;
  attestationIssuersURI: Maybe<Scalars["URL"]["output"]>;
  briefingURI: Maybe<Scalars["URL"]["output"]>;
  categories: Array<Scalars["String"]["output"]>;
  claimedFromEntry: Maybe<Scalars["PHID"]["output"]>;
  closeDate: Maybe<Scalars["DateTime"]["output"]>;
  code: Maybe<Scalars["String"]["output"]>;
  contextDocuments: Array<ContextDocument>;
  coverImage: Maybe<Scalars["URL"]["output"]>;
  description: Maybe<Scalars["String"]["output"]>;
  duplicateOf: Maybe<Scalars["PHID"]["output"]>;
  ecosystems: Array<Scalars["String"]["output"]>;
  eligibilityCriteria: Maybe<Scalars["String"]["output"]>;
  email: Maybe<Scalars["EmailAddress"]["output"]>;
  evaluationCriteria: Maybe<Scalars["String"]["output"]>;
  extensions: Maybe<Scalars["String"]["output"]>;
  governanceState: PoolGovernanceState;
  governanceURI: Maybe<Scalars["URL"]["output"]>;
  grantFundingMechanism: Maybe<FundingMechanism>;
  grantSystemRef: Maybe<Scalars["PHID"]["output"]>;
  image: Maybe<Scalars["URL"]["output"]>;
  isOpen: Scalars["Boolean"]["output"];
  lastVerifiedAt: Maybe<Scalars["DateTime"]["output"]>;
  lifecycle: GrantPoolLifecycle;
  maxGrant: Array<FundingAmount>;
  minGrant: Array<FundingAmount>;
  name: Maybe<Scalars["String"]["output"]>;
  openDate: Maybe<Scalars["DateTime"]["output"]>;
  publisher: Maybe<Publisher>;
  requiredCredentials: Array<Scalars["String"]["output"]>;
  reviewers: Array<Reviewer>;
  sameAs: Array<Scalars["URL"]["output"]>;
  submitter: Maybe<Submitter>;
  supersedes: Maybe<Scalars["PHID"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  totalGrantPoolSize: Array<FundingAmount>;
  totalGrantPoolSizeInUSD: Maybe<Scalars["Amount_Fiat"]["output"]>;
  verificationMethod: Maybe<VerificationMethod>;
  verifiedBy: Maybe<Scalars["String"]["output"]>;
};

export type MarkClaimedFromEntryInput = {
  claimedFromEntry: Scalars["PHID"]["input"];
};

export type MarkDuplicateOfInput = {
  duplicateOf: Scalars["PHID"]["input"];
};

export type MarkSupersedesInput = {
  supersedes: Scalars["PHID"]["input"];
};

export type PoolGovernanceState =
  | "APPROVED"
  | "DISPUTED"
  | "PENDING"
  | "REJECTED"
  | "SUPERSEDED"
  | "UNDER_REVIEW";

export type PublishPoolInput = {
  publishedAt: Scalars["DateTime"]["input"];
};

export type Publisher = {
  identifier: Scalars["String"]["output"];
  publishedAt: Scalars["DateTime"]["output"];
};

export type RecordVerificationInput = {
  verificationMethod: VerificationMethod;
  verifiedAt: Scalars["DateTime"]["input"];
  verifiedBy: Scalars["String"]["input"];
};

export type RemoveCategoryInput = {
  category: Scalars["String"]["input"];
};

export type RemoveContextDocumentInput = {
  id: Scalars["OID"]["input"];
};

export type RemoveEcosystemInput = {
  ecosystem: Scalars["String"]["input"];
};

export type RemovePoolSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type RemovePoolSizeEntryInput = {
  id: Scalars["OID"]["input"];
};

export type RemoveRequiredCredentialInput = {
  credential: Scalars["String"]["input"];
};

export type RemoveReviewerInput = {
  id: Scalars["OID"]["input"];
};

export type RemoveTagInput = {
  tag: Scalars["String"]["input"];
};

export type Reviewer = {
  did: Scalars["String"]["output"];
  id: Scalars["OID"]["output"];
  name: Scalars["String"]["output"];
  reviewerType: ReviewerType;
  scope: ReviewerScope;
};

export type ReviewerScope = "EXTERNAL" | "INTERNAL";

export type ReviewerType = "AI" | "GROUP" | "HUMAN";

export type SetApplicationsUriInput = {
  applicationsURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetAttestationIssuersUriInput = {
  attestationIssuersURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetBriefingUriInput = {
  briefingURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetCloseDateInput = {
  closeDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetCodeInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetDescriptionInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetEligibilityCriteriaInput = {
  eligibilityCriteria?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetEvaluationCriteriaInput = {
  evaluationCriteria?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetFundingMechanismInput = {
  grantFundingMechanism: FundingMechanism;
};

export type SetGovernanceStateInput = {
  governanceState: PoolGovernanceState;
};

export type SetGovernanceUriInput = {
  governanceURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetGrantBoundsInput = {
  maxGrantAmount1?: InputMaybe<Scalars["Amount"]["input"]>;
  maxGrantId1: Scalars["OID"]["input"];
  minGrantAmount1?: InputMaybe<Scalars["Amount"]["input"]>;
  minGrantId1: Scalars["OID"]["input"];
};

export type SetGrantSystemRefInput = {
  grantSystemRef: Scalars["PHID"]["input"];
};

export type SetIsOpenInput = {
  isOpen: Scalars["Boolean"]["input"];
};

export type SetOpenDateInput = {
  openDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetPoolCoverImageInput = {
  coverImage?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetPoolEmailInput = {
  email?: InputMaybe<Scalars["EmailAddress"]["input"]>;
};

export type SetPoolExtensionsInput = {
  extensions?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetPoolImageInput = {
  image?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetPoolNameInput = {
  name: Scalars["String"]["input"];
};

export type SetPublisherInput = {
  identifier: Scalars["String"]["input"];
  publishedAt: Scalars["DateTime"]["input"];
};

export type SetSubmitterInput = {
  identifier: Scalars["String"]["input"];
  submittedAt: Scalars["DateTime"]["input"];
  type: SubmitterType;
};

export type SetTotalPoolSizeUsdInput = {
  totalGrantPoolSizeInUSD?: InputMaybe<Scalars["Amount_Fiat"]["input"]>;
};

export type Submitter = {
  identifier: Scalars["String"]["output"];
  submittedAt: Scalars["DateTime"]["output"];
  type: SubmitterType;
};

export type SubmitterType = "AUTOMATION" | "COMMUNITY" | "VERIFIED_PUBLISHER";

export type VerificationMethod =
  | "DOMAIN_VERIFICATION"
  | "HTTP_PROBE"
  | "MANUAL_REVIEW"
  | "REVIEWER_CONFIRMATION";
