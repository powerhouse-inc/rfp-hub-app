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

export type AppealDisputeInput = {
  appealAt: Scalars["DateTime"]["input"];
  appealReason: Scalars["String"]["input"];
  id: Scalars["OID"]["input"];
};

export type AssignInvestigatorInput = {
  assignedTo: Scalars["String"]["input"];
  id: Scalars["OID"]["input"];
};

export type DismissDisputeInput = {
  dismissedAt: Scalars["DateTime"]["input"];
  id: Scalars["OID"]["input"];
  reason: Scalars["String"]["input"];
};

export type Dispute = {
  appealAt: Maybe<Scalars["DateTime"]["output"]>;
  appealReason: Maybe<Scalars["String"]["output"]>;
  assignedTo: Maybe<Scalars["String"]["output"]>;
  disputeKind: DisputeKind;
  filedAt: Scalars["DateTime"]["output"];
  filedBy: Scalars["String"]["output"];
  id: Scalars["OID"]["output"];
  resolution: Maybe<Scalars["String"]["output"]>;
  resolvedAt: Maybe<Scalars["DateTime"]["output"]>;
  status: DisputeStatus;
  subjectRef: Scalars["PHID"]["output"];
  summary: Scalars["String"]["output"];
};

export type DisputeKind =
  | "DUPLICATE_CLAIM"
  | "INACCURATE_ENTRY"
  | "OTHER"
  | "POLICY_VIOLATION"
  | "PUBLISHER_CONDUCT"
  | "REVIEW_DECISION";

export type DisputeStatus =
  | "APPEALED"
  | "DISMISSED"
  | "INVESTIGATING"
  | "OPEN"
  | "RESOLVED";

export type FileDisputeInput = {
  disputeKind: DisputeKind;
  filedAt: Scalars["DateTime"]["input"];
  filedBy: Scalars["String"]["input"];
  id: Scalars["OID"]["input"];
  subjectRef: Scalars["PHID"]["input"];
  summary: Scalars["String"]["input"];
};

export type GovernanceState = {
  disputes: Array<Dispute>;
  policies: Array<Policy>;
  publisherDecisions: Array<PublisherDecision>;
  rfcs: Array<Rfc>;
};

export type ImplementRfcInput = {
  id: Scalars["OID"]["input"];
  implementedAt: Scalars["DateTime"]["input"];
};

export type Policy = {
  content: Scalars["String"]["output"];
  effectiveFrom: Scalars["DateTime"]["output"];
  id: Scalars["OID"]["output"];
  name: Scalars["String"]["output"];
  summary: Scalars["String"]["output"];
  supersededAt: Maybe<Scalars["DateTime"]["output"]>;
  supersededBy: Maybe<Scalars["OID"]["output"]>;
};

export type ProposeRfcInput = {
  author: Scalars["String"]["input"];
  id: Scalars["OID"]["input"];
  proposedAt: Scalars["DateTime"]["input"];
  summary: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type PublishPolicyInput = {
  content: Scalars["String"]["input"];
  effectiveFrom: Scalars["DateTime"]["input"];
  id: Scalars["OID"]["input"];
  name: Scalars["String"]["input"];
  summary: Scalars["String"]["input"];
};

export type PublisherDecision = {
  decidedAt: Scalars["DateTime"]["output"];
  decidedBy: Scalars["String"]["output"];
  decision: PublisherDecisionKind;
  grantSystemRef: Scalars["PHID"]["output"];
  id: Scalars["OID"]["output"];
  reason: Maybe<Scalars["String"]["output"]>;
};

export type PublisherDecisionKind =
  | "APPROVED"
  | "REINSTATED"
  | "REVOKED"
  | "SUSPENDED";

export type RatifyRfcInput = {
  id: Scalars["OID"]["input"];
  ratifiedAt: Scalars["DateTime"]["input"];
};

export type RecordPublisherDecisionInput = {
  decidedAt: Scalars["DateTime"]["input"];
  decidedBy: Scalars["String"]["input"];
  decision: PublisherDecisionKind;
  grantSystemRef: Scalars["PHID"]["input"];
  id: Scalars["OID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
};

export type RejectRfcInput = {
  id: Scalars["OID"]["input"];
};

export type ResolveDisputeInput = {
  id: Scalars["OID"]["input"];
  resolution: Scalars["String"]["input"];
  resolvedAt: Scalars["DateTime"]["input"];
};

export type Rfc = {
  author: Scalars["String"]["output"];
  id: Scalars["OID"]["output"];
  implementedAt: Maybe<Scalars["DateTime"]["output"]>;
  proposedAt: Scalars["DateTime"]["output"];
  ratifiedAt: Maybe<Scalars["DateTime"]["output"]>;
  status: RfcStatus;
  summary: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type RfcStatus =
  | "IMPLEMENTED"
  | "PROPOSED"
  | "RATIFIED"
  | "REJECTED"
  | "UNDER_REVIEW"
  | "WITHDRAWN";

export type StartRfcReviewInput = {
  id: Scalars["OID"]["input"];
};

export type SupersedePolicyInput = {
  id: Scalars["OID"]["input"];
  supersededAt: Scalars["DateTime"]["input"];
  supersededBy: Scalars["OID"]["input"];
};

export type WithdrawRfcInput = {
  id: Scalars["OID"]["input"];
};
