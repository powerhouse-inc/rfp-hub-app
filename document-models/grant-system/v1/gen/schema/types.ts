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

export type AddSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type AddSocialInput = {
  id: Scalars["OID"]["input"];
  platform: SocialPlatform;
  url: Scalars["URL"]["input"];
};

export type ApproveVerificationInput = {
  method: VerificationMethod;
  verifiedAt: Scalars["DateTime"]["input"];
  verifiedBy: Scalars["String"]["input"];
};

export type GrantSystemState = {
  code: Maybe<Scalars["String"]["output"]>;
  contactName: Maybe<Scalars["String"]["output"]>;
  coverImage: Maybe<Scalars["URL"]["output"]>;
  description: Maybe<Scalars["String"]["output"]>;
  email: Maybe<Scalars["EmailAddress"]["output"]>;
  extensions: Maybe<Scalars["String"]["output"]>;
  grantPoolsURI: Maybe<Scalars["URL"]["output"]>;
  image: Maybe<Scalars["URL"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
  publisherWallet: Maybe<Scalars["EthereumAddress"]["output"]>;
  revocationReason: Maybe<Scalars["String"]["output"]>;
  revokedAt: Maybe<Scalars["DateTime"]["output"]>;
  sameAs: Array<Scalars["URL"]["output"]>;
  socials: Array<Social>;
  type: Maybe<GrantSystemType>;
  verificationMethod: Maybe<VerificationMethod>;
  verificationState: VerificationState;
  verifiedAt: Maybe<Scalars["DateTime"]["output"]>;
  verifiedBy: Maybe<Scalars["String"]["output"]>;
};

export type GrantSystemType =
  | "COMPANY"
  | "DAO"
  | "FOUNDATION"
  | "OTHER"
  | "PERSON"
  | "PROGRAM"
  | "PROTOCOL";

export type ReinstateVerificationInput = {
  reinstatedBy: Scalars["String"]["input"];
  verifiedAt: Scalars["DateTime"]["input"];
};

export type RejectVerificationInput = {
  reason: Scalars["String"]["input"];
  rejectedAt: Scalars["DateTime"]["input"];
};

export type RemoveSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type RemoveSocialInput = {
  id: Scalars["OID"]["input"];
};

export type RequestVerificationInput = {
  requestedAt: Scalars["DateTime"]["input"];
};

export type RevokeVerificationInput = {
  reason: Scalars["String"]["input"];
  revokedAt: Scalars["DateTime"]["input"];
};

export type SetCodeInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetContactNameInput = {
  contactName?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetCoverImageInput = {
  coverImage?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetDescriptionInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetEmailInput = {
  email?: InputMaybe<Scalars["EmailAddress"]["input"]>;
};

export type SetExtensionsInput = {
  extensions?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetGrantPoolsUriInput = {
  grantPoolsURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetImageInput = {
  image?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetOrgNameInput = {
  name: Scalars["String"]["input"];
};

export type SetPublisherWalletInput = {
  publisherWallet: Scalars["EthereumAddress"]["input"];
};

export type SetTypeInput = {
  type: GrantSystemType;
};

export type Social = {
  id: Scalars["OID"]["output"];
  platform: SocialPlatform;
  url: Scalars["URL"]["output"];
};

export type SocialPlatform =
  | "DISCORD"
  | "FARCASTER"
  | "GITHUB"
  | "LENS"
  | "LINKEDIN"
  | "MIRROR"
  | "TELEGRAM"
  | "TWITTER"
  | "WEBSITE";

export type SuspendVerificationInput = {
  reason: Scalars["String"]["input"];
  suspendedAt: Scalars["DateTime"]["input"];
};

export type UpdateSocialUrlInput = {
  id: Scalars["OID"]["input"];
  url: Scalars["URL"]["input"];
};

export type VerificationMethod =
  | "DOMAIN_VERIFICATION"
  | "MANUAL_REVIEW"
  | "THIRD_PARTY_ATTESTATION"
  | "WALLET_SIGNATURE";

export type VerificationState =
  | "PENDING_REVIEW"
  | "REVOKED"
  | "SUSPENDED"
  | "UNVERIFIED"
  | "VERIFIED";
