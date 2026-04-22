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

export type AddProjectSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type AddProjectSocialInput = {
  id: Scalars["OID"]["input"];
  name: Scalars["String"]["input"];
  value: Scalars["URL"]["input"];
};

export type AddRelevantPoolInput = {
  id: Scalars["OID"]["input"];
  poolId: Scalars["PHID"]["input"];
  poolName: Scalars["String"]["input"];
};

export type ProjectSocial = {
  id: Scalars["OID"]["output"];
  name: Scalars["String"]["output"];
  value: Scalars["URL"]["output"];
};

export type ProjectState = {
  attestationIssuersURI: Maybe<Scalars["URL"]["output"]>;
  code: Maybe<Scalars["String"]["output"]>;
  contentURI: Maybe<Scalars["URL"]["output"]>;
  coverImage: Maybe<Scalars["URL"]["output"]>;
  description: Maybe<Scalars["String"]["output"]>;
  email: Maybe<Scalars["EmailAddress"]["output"]>;
  extensions: Maybe<Scalars["String"]["output"]>;
  image: Maybe<Scalars["URL"]["output"]>;
  licenseURI: Maybe<Scalars["URL"]["output"]>;
  membersURI: Maybe<Scalars["URL"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
  ownerDid: Maybe<Scalars["String"]["output"]>;
  relevantTo: Array<RelevantPool>;
  sameAs: Array<Scalars["URL"]["output"]>;
  socials: Array<ProjectSocial>;
};

export type RelevantPool = {
  id: Scalars["OID"]["output"];
  poolId: Scalars["PHID"]["output"];
  poolName: Scalars["String"]["output"];
};

export type RemoveProjectSameAsInput = {
  url: Scalars["URL"]["input"];
};

export type RemoveProjectSocialInput = {
  id: Scalars["OID"]["input"];
};

export type RemoveRelevantPoolInput = {
  id: Scalars["OID"]["input"];
};

export type SetContentUriInput = {
  contentURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetLicenseUriInput = {
  licenseURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetMembersUriInput = {
  membersURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetOwnerDidInput = {
  ownerDid: Scalars["String"]["input"];
};

export type SetProjectAttestationIssuersUriInput = {
  attestationIssuersURI?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetProjectCodeInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetProjectCoverImageInput = {
  coverImage?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetProjectDescriptionInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetProjectEmailInput = {
  email?: InputMaybe<Scalars["EmailAddress"]["input"]>;
};

export type SetProjectExtensionsInput = {
  extensions?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetProjectImageInput = {
  image?: InputMaybe<Scalars["URL"]["input"]>;
};

export type SetProjectNameInput = {
  name: Scalars["String"]["input"];
};

export type UpdateProjectSocialUrlInput = {
  id: Scalars["OID"]["input"];
  value: Scalars["URL"]["input"];
};
