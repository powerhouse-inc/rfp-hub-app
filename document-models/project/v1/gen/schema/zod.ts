/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from "zod";
import type {
  AddProjectSameAsInput,
  AddProjectSocialInput,
  AddRelevantPoolInput,
  ProjectSocial,
  ProjectState,
  RelevantPool,
  RemoveProjectSameAsInput,
  RemoveProjectSocialInput,
  RemoveRelevantPoolInput,
  SetContentUriInput,
  SetLicenseUriInput,
  SetMembersUriInput,
  SetOwnerDidInput,
  SetProjectAttestationIssuersUriInput,
  SetProjectCodeInput,
  SetProjectCoverImageInput,
  SetProjectDescriptionInput,
  SetProjectEmailInput,
  SetProjectExtensionsInput,
  SetProjectImageInput,
  SetProjectNameInput,
  UpdateProjectSocialUrlInput,
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

export function AddProjectSameAsInputSchema(): z.ZodObject<
  Properties<AddProjectSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function AddProjectSocialInputSchema(): z.ZodObject<
  Properties<AddProjectSocialInput>
> {
  return z.object({
    id: z.string(),
    name: z.string(),
    value: z.url(),
  });
}

export function AddRelevantPoolInputSchema(): z.ZodObject<
  Properties<AddRelevantPoolInput>
> {
  return z.object({
    id: z.string(),
    poolId: z.string(),
    poolName: z.string(),
  });
}

export function ProjectSocialSchema(): z.ZodObject<Properties<ProjectSocial>> {
  return z.object({
    __typename: z.literal("ProjectSocial").optional(),
    id: z.string(),
    name: z.string(),
    value: z.url(),
  });
}

export function ProjectStateSchema(): z.ZodObject<Properties<ProjectState>> {
  return z.object({
    __typename: z.literal("ProjectState").optional(),
    attestationIssuersURI: z.url().nullish(),
    code: z.string().nullish(),
    contentURI: z.url().nullish(),
    coverImage: z.url().nullish(),
    description: z.string().nullish(),
    email: z.email().nullish(),
    extensions: z.string().nullish(),
    image: z.url().nullish(),
    licenseURI: z.url().nullish(),
    membersURI: z.url().nullish(),
    name: z.string().nullish(),
    ownerDid: z.string().nullish(),
    relevantTo: z.array(z.lazy(() => RelevantPoolSchema())),
    sameAs: z.array(z.url()),
    socials: z.array(z.lazy(() => ProjectSocialSchema())),
  });
}

export function RelevantPoolSchema(): z.ZodObject<Properties<RelevantPool>> {
  return z.object({
    __typename: z.literal("RelevantPool").optional(),
    id: z.string(),
    poolId: z.string(),
    poolName: z.string(),
  });
}

export function RemoveProjectSameAsInputSchema(): z.ZodObject<
  Properties<RemoveProjectSameAsInput>
> {
  return z.object({
    url: z.url(),
  });
}

export function RemoveProjectSocialInputSchema(): z.ZodObject<
  Properties<RemoveProjectSocialInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function RemoveRelevantPoolInputSchema(): z.ZodObject<
  Properties<RemoveRelevantPoolInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function SetContentUriInputSchema(): z.ZodObject<
  Properties<SetContentUriInput>
> {
  return z.object({
    contentURI: z.url().nullish(),
  });
}

export function SetLicenseUriInputSchema(): z.ZodObject<
  Properties<SetLicenseUriInput>
> {
  return z.object({
    licenseURI: z.url().nullish(),
  });
}

export function SetMembersUriInputSchema(): z.ZodObject<
  Properties<SetMembersUriInput>
> {
  return z.object({
    membersURI: z.url().nullish(),
  });
}

export function SetOwnerDidInputSchema(): z.ZodObject<
  Properties<SetOwnerDidInput>
> {
  return z.object({
    ownerDid: z.string(),
  });
}

export function SetProjectAttestationIssuersUriInputSchema(): z.ZodObject<
  Properties<SetProjectAttestationIssuersUriInput>
> {
  return z.object({
    attestationIssuersURI: z.url().nullish(),
  });
}

export function SetProjectCodeInputSchema(): z.ZodObject<
  Properties<SetProjectCodeInput>
> {
  return z.object({
    code: z.string().nullish(),
  });
}

export function SetProjectCoverImageInputSchema(): z.ZodObject<
  Properties<SetProjectCoverImageInput>
> {
  return z.object({
    coverImage: z.url().nullish(),
  });
}

export function SetProjectDescriptionInputSchema(): z.ZodObject<
  Properties<SetProjectDescriptionInput>
> {
  return z.object({
    description: z.string().nullish(),
  });
}

export function SetProjectEmailInputSchema(): z.ZodObject<
  Properties<SetProjectEmailInput>
> {
  return z.object({
    email: z.email().nullish(),
  });
}

export function SetProjectExtensionsInputSchema(): z.ZodObject<
  Properties<SetProjectExtensionsInput>
> {
  return z.object({
    extensions: z.string().nullish(),
  });
}

export function SetProjectImageInputSchema(): z.ZodObject<
  Properties<SetProjectImageInput>
> {
  return z.object({
    image: z.url().nullish(),
  });
}

export function SetProjectNameInputSchema(): z.ZodObject<
  Properties<SetProjectNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function UpdateProjectSocialUrlInputSchema(): z.ZodObject<
  Properties<UpdateProjectSocialUrlInput>
> {
  return z.object({
    id: z.string(),
    value: z.url(),
  });
}
