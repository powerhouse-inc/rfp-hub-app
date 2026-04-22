import { createAction } from "document-model";
import {
  PublishPolicyInputSchema,
  SupersedePolicyInputSchema,
} from "../schema/zod.js";
import type { PublishPolicyInput, SupersedePolicyInput } from "../types.js";
import type { PublishPolicyAction, SupersedePolicyAction } from "./actions.js";

export const publishPolicy = (input: PublishPolicyInput) =>
  createAction<PublishPolicyAction>(
    "PUBLISH_POLICY",
    { ...input },
    undefined,
    PublishPolicyInputSchema,
    "global",
  );

export const supersedePolicy = (input: SupersedePolicyInput) =>
  createAction<SupersedePolicyAction>(
    "SUPERSEDE_POLICY",
    { ...input },
    undefined,
    SupersedePolicyInputSchema,
    "global",
  );
