import { createAction } from "document-model";
import { SetProjectAttestationIssuersUriInputSchema } from "../schema/zod.js";
import type { SetProjectAttestationIssuersUriInput } from "../types.js";
import type { SetProjectAttestationIssuersUriAction } from "./actions.js";

export const setProjectAttestationIssuersUri = (
  input: SetProjectAttestationIssuersUriInput,
) =>
  createAction<SetProjectAttestationIssuersUriAction>(
    "SET_PROJECT_ATTESTATION_ISSUERS_URI",
    { ...input },
    undefined,
    SetProjectAttestationIssuersUriInputSchema,
    "global",
  );
