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

export type AddAppSocialInput = {
  id: Scalars["OID"]["input"];
  platform: Scalars["String"]["input"];
  url: Scalars["URL"]["input"];
};

export type AddFundsApprovedInput = {
  amount: Scalars["Amount"]["input"];
  id: Scalars["OID"]["input"];
};

export type AddFundsAskedInput = {
  amount: Scalars["Amount"]["input"];
  id: Scalars["OID"]["input"];
};

export type AppFundingAmount = {
  amount: Scalars["Amount"]["output"];
  id: Scalars["OID"]["output"];
};

export type AppSocial = {
  id: Scalars["OID"]["output"];
  platform: Scalars["String"]["output"];
  url: Scalars["URL"]["output"];
};

export type AppSubmitter = {
  identifier: Scalars["String"]["output"];
  submittedAt: Scalars["DateTime"]["output"];
  submitterType: AppSubmitterType;
};

export type AppSubmitterType =
  | "AUTOMATION"
  | "COMMUNITY"
  | "VERIFIED_PUBLISHER";

export type ApplicationStatus =
  | "approved"
  | "completed"
  | "funded"
  | "in_review"
  | "pending"
  | "rejected";

export type ApproveApplicationInput = {
  approvedAt: Scalars["DateTime"]["input"];
  reviewerDid: Scalars["String"]["input"];
};

export type ConditionallyApproveInput = {
  approvedAt: Scalars["DateTime"]["input"];
  conditions: Scalars["String"]["input"];
  reviewerDid: Scalars["String"]["input"];
};

export type GrantApplicationState = {
  applicationCompletionRate: Maybe<Scalars["Float"]["output"]>;
  contentURI: Maybe<Scalars["URL"]["output"]>;
  createdAt: Maybe<Scalars["DateTime"]["output"]>;
  discussionsTo: Maybe<Scalars["URL"]["output"]>;
  extensions: Maybe<Scalars["String"]["output"]>;
  feedbackNotes: Maybe<Scalars["String"]["output"]>;
  fundsApproved: Array<AppFundingAmount>;
  fundsApprovedInUSD: Maybe<Scalars["Amount_Fiat"]["output"]>;
  fundsAsked: Array<AppFundingAmount>;
  fundsAskedInUSD: Maybe<Scalars["Amount_Fiat"]["output"]>;
  grantPoolId: Maybe<Scalars["PHID"]["output"]>;
  grantPoolName: Maybe<Scalars["String"]["output"]>;
  grantPoolsURI: Maybe<Scalars["URL"]["output"]>;
  isInactive: Scalars["Boolean"]["output"];
  licenseURI: Maybe<Scalars["URL"]["output"]>;
  paymentTerm: Maybe<PaymentTerm>;
  payoutAddress: Maybe<PayoutAddress>;
  payouts: Array<Payout>;
  projectId: Maybe<Scalars["PHID"]["output"]>;
  projectName: Maybe<Scalars["String"]["output"]>;
  projectsURI: Maybe<Scalars["URL"]["output"]>;
  reviewStage: ReviewStage;
  reviewedAt: Maybe<Scalars["DateTime"]["output"]>;
  reviewedBy: Maybe<Scalars["String"]["output"]>;
  revisionCount: Scalars["Int"]["output"];
  socials: Array<AppSocial>;
  status: ApplicationStatus;
  submittedAt: Maybe<Scalars["DateTime"]["output"]>;
  submitter: Maybe<AppSubmitter>;
};

export type MarkCompletedInput = {
  completedAt: Scalars["DateTime"]["input"];
};

export type MarkRevisedInput = {
  revisedAt: Scalars["DateTime"]["input"];
};

export type OpenApplicationInput = {
  openedAt: Scalars["DateTime"]["input"];
};

export type PaymentTerm =
  | "ESCROW"
  | "MILESTONE_BASED_ADVANCE_PAYMENT"
  | "MILESTONE_BASED_FIXED_PRICE"
  | "RETAINER_BASED"
  | "VARIABLE_COST";

export type Payout = {
  id: Scalars["OID"]["output"];
  payoutType: Scalars["String"]["output"];
  proof: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
  value: Scalars["String"]["output"];
};

export type PayoutAddress = {
  addressType: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type RecordPayoutInput = {
  id: Scalars["OID"]["input"];
  payoutType: Scalars["String"]["input"];
  proof?: InputMaybe<Scalars["String"]["input"]>;
  timestamp: Scalars["DateTime"]["input"];
  value: Scalars["String"]["input"];
};

export type RejectApplicationInput = {
  reason: Scalars["String"]["input"];
  rejectedAt: Scalars["DateTime"]["input"];
  reviewerDid: Scalars["String"]["input"];
};

export type RemoveAppSocialInput = {
  id: Scalars["OID"]["input"];
};

export type RemoveFundsAskedInput = {
  id: Scalars["OID"]["input"];
};

export type RequestRevisionInput = {
  feedbackNotes: Scalars["String"]["input"];
  requestedAt: Scalars["DateTime"]["input"];
};

export type ReviewStage =
  | "APPROVED"
  | "COMPLETED"
  | "CONDITIONALLY_APPROVED"
  | "DRAFT"
  | "FUNDED"
  | "NEEDS_REVISION"
  | "OPENED"
  | "REJECTED"
  | "REVISED"
  | "SUBMITTED"
  | "UNDER_REVIEW"
  | "WITHDRAWN";

export type SetAppContentUriInput = {
  contentURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetAppExtensionsInput = {
  extensions?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetAppLicenseUriInput = {
  licenseURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetCompletionRateInput = {
  applicationCompletionRate?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SetCreatedAtInput = {
  createdAt: Scalars["DateTime"]["input"];
};

export type SetDiscussionsToInput = {
  discussionsTo?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetFundsApprovedUsdInput = {
  fundsApprovedInUSD?: InputMaybe<Scalars["Amount_Fiat"]["input"]>;
};

export type SetFundsAskedUsdInput = {
  fundsAskedInUSD?: InputMaybe<Scalars["Amount_Fiat"]["input"]>;
};

export type SetIsInactiveInput = {
  isInactive: Scalars["Boolean"]["input"];
};

export type SetPaymentTermInput = {
  paymentTerm: PaymentTerm;
};

export type SetPayoutAddressInput = {
  addressType: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type SetPoolRefInput = {
  grantPoolId: Scalars["PHID"]["input"];
  grantPoolName: Scalars["String"]["input"];
  grantPoolsURI: Scalars["URL"]["input"];
};

export type SetProjectRefInput = {
  projectId: Scalars["PHID"]["input"];
  projectName: Scalars["String"]["input"];
  projectsURI: Scalars["URL"]["input"];
};

export type StartReviewInput = {
  reviewerDid: Scalars["String"]["input"];
  startedAt: Scalars["DateTime"]["input"];
};

export type SubmitApplicationInput = {
  identifier: Scalars["String"]["input"];
  submittedAt: Scalars["DateTime"]["input"];
  submitterType: AppSubmitterType;
};

export type WithdrawApplicationInput = {
  reason?: InputMaybe<Scalars["String"]["input"]>;
  withdrawnAt: Scalars["DateTime"]["input"];
};
