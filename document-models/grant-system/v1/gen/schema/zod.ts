/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from "zod";
import type {
  AddSameAsInput,
  AddSocialInput,
  ApproveVerificationInput,
  GrantSystemState,
  GrantSystemType,
  ReinstateVerificationInput,
  RejectVerificationInput,
  RemoveSameAsInput,
  RemoveSocialInput,
  RequestVerificationInput,
  RevokeVerificationInput,
  SetCodeInput,
  SetContactNameInput,
  SetCoverImageInput,
  SetDescriptionInput,
  SetEmailInput,
  SetExtensionsInput,
  SetGrantPoolsUriInput,
  SetImageInput,
  SetOrgNameInput,
  SetPublisherWalletInput,
  SetTypeInput,
  Social,
  SocialPlatform,
  SuspendVerificationInput,
  UpdateSocialUrlInput,
  VerificationMethod,
  VerificationState,
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

export const GrantSystemTypeSchema = z.enum([
  "COMPANY",
  "DAO",
  "FOUNDATION",
  "OTHER",
  "PERSON",
  "PROGRAM",
  "PROTOCOL",
]);

export const SocialPlatformSchema = z.enum([
  "DISCORD",
  "FARCASTER",
  "GITHUB",
  "LENS",
  "LINKEDIN",
  "MIRROR",
  "TELEGRAM",
  "TWITTER",
  "WEBSITE",
]);

export const VerificationMethodSchema = z.enum([
  "DOMAIN_VERIFICATION",
  "MANUAL_REVIEW",
  "THIRD_PARTY_ATTESTATION",
  "WALLET_SIGNATURE",
]);

export const VerificationStateSchema = z.enum([
  "PENDING_REVIEW",
  "REVOKED",
  "SUSPENDED",
  "UNVERIFIED",
  "VERIFIED",
]);

export function AddSameAsInputSchema(): z.ZodObject<
  Properties<AddSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function AddSocialInputSchema(): z.ZodObject<
  Properties<AddSocialInput>
> {
  return z.object({
    id: z.string(),
    platform: SocialPlatformSchema,
    url: z.url(),
  });
}

export function ApproveVerificationInputSchema(): z.ZodObject<
  Properties<ApproveVerificationInput>
> {
  return z.object({
    method: VerificationMethodSchema,
    verifiedAt: z.iso.datetime(),
    verifiedBy: z.string(),
  });
}

export function GrantSystemStateSchema(): z.ZodObject<
  Properties<GrantSystemState>
> {
  return z.object({
    __typename: z.literal("GrantSystemState").optional(),
    code: z.string().nullish(),
    contactName: z.string().nullish(),
    coverImage: z.url().nullish(),
    description: z.string().nullish(),
    email: z.email().nullish(),
    extensions: z.string().nullish(),
    grantPoolsURI: z.url().nullish(),
    image: z.url().nullish(),
    name: z.string().nullish(),
    publisherWallet: z
      .string()
      .regex(/^0x[a-fA-F0-9]{40}$/, {
        message: "Invalid Ethereum address format",
      })
      .nullish(),
    revocationReason: z.string().nullish(),
    revokedAt: z.iso.datetime().nullish(),
    sameAs: z.array(z.url()),
    socials: z.array(z.lazy(() => SocialSchema())),
    type: GrantSystemTypeSchema.nullish(),
    verificationMethod: VerificationMethodSchema.nullish(),
    verificationState: VerificationStateSchema,
    verifiedAt: z.iso.datetime().nullish(),
    verifiedBy: z.string().nullish(),
  });
}

export function ReinstateVerificationInputSchema(): z.ZodObject<
  Properties<ReinstateVerificationInput>
> {
  return z.object({
    reinstatedBy: z.string(),
    verifiedAt: z.iso.datetime(),
  });
}

export function RejectVerificationInputSchema(): z.ZodObject<
  Properties<RejectVerificationInput>
> {
  return z.object({
    reason: z.string(),
    rejectedAt: z.iso.datetime(),
  });
}

export function RemoveSameAsInputSchema(): z.ZodObject<
  Properties<RemoveSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function RemoveSocialInputSchema(): z.ZodObject<
  Properties<RemoveSocialInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RequestVerificationInputSchema(): z.ZodObject<
  Properties<RequestVerificationInput>
> {
  return z.object({
    requestedAt: z.iso.datetime(),
  });
}

export function RevokeVerificationInputSchema(): z.ZodObject<
  Properties<RevokeVerificationInput>
> {
  return z.object({
    reason: z.string(),
    revokedAt: z.iso.datetime(),
  });
}

export function SetCodeInputSchema(): z.ZodObject<Properties<SetCodeInput>> {
  return z.object({
    code: z.string().nullish(),
  });
}

export function SetContactNameInputSchema(): z.ZodObject<
  Properties<SetContactNameInput>
> {
  return z.object({
    contactName: z.string().nullish(),
  });
}

export function SetCoverImageInputSchema(): z.ZodObject<
  Properties<SetCoverImageInput>
> {
  return z.object({
    coverImage: z.url().nullish(),
  });
}

export function SetDescriptionInputSchema(): z.ZodObject<
  Properties<SetDescriptionInput>
> {
  return z.object({
    description: z.string().nullish(),
  });
}

export function SetEmailInputSchema(): z.ZodObject<Properties<SetEmailInput>> {
  return z.object({
    email: z.email().nullish(),
  });
}

export function SetExtensionsInputSchema(): z.ZodObject<
  Properties<SetExtensionsInput>
> {
  return z.object({
    extensions: z.string().nullish(),
  });
}

export function SetGrantPoolsUriInputSchema(): z.ZodObject<
  Properties<SetGrantPoolsUriInput>
> {
  return z.object({
    grantPoolsURI: z.url().nullish(),
  });
}

export function SetImageInputSchema(): z.ZodObject<Properties<SetImageInput>> {
  return z.object({
    image: z.url().nullish(),
  });
}

export function SetOrgNameInputSchema(): z.ZodObject<
  Properties<SetOrgNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function SetPublisherWalletInputSchema(): z.ZodObject<
  Properties<SetPublisherWalletInput>
> {
  return z.object({
    publisherWallet: z
      .string()
      .regex(/^0x[a-fA-F0-9]{40}$/, {
        message: "Invalid Ethereum address format",
      }),
  });
}

export function SetTypeInputSchema(): z.ZodObject<Properties<SetTypeInput>> {
  return z.object({
    type: GrantSystemTypeSchema,
  });
}

export function SocialSchema(): z.ZodObject<Properties<Social>> {
  return z.object({
    __typename: z.literal("Social").optional(),
    id: z.string(),
    platform: SocialPlatformSchema,
    url: z.url(),
  });
}

export function SuspendVerificationInputSchema(): z.ZodObject<
  Properties<SuspendVerificationInput>
> {
  return z.object({
    reason: z.string(),
    suspendedAt: z.iso.datetime(),
  });
}

export function UpdateSocialUrlInputSchema(): z.ZodObject<
  Properties<UpdateSocialUrlInput>
> {
  return z.object({
    id: z.string(),
    url: z.url(),
  });
}
