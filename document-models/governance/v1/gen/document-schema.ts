import {
  BaseDocumentHeaderSchema,
  BaseDocumentStateSchema,
} from "document-model";
import { z } from "zod";
import { governanceDocumentType } from "./document-type.js";
import { GovernanceStateSchema } from "./schema/zod.js";
import type { GovernanceDocument, GovernancePHState } from "./types.js";

/** Schema for validating the header object of a Governance document */
export const GovernanceDocumentHeaderSchema = BaseDocumentHeaderSchema.extend({
  documentType: z.literal(governanceDocumentType),
});

/** Schema for validating the state object of a Governance document */
export const GovernancePHStateSchema = BaseDocumentStateSchema.extend({
  global: GovernanceStateSchema(),
});

export const GovernanceDocumentSchema = z.object({
  header: GovernanceDocumentHeaderSchema,
  state: GovernancePHStateSchema,
  initialState: GovernancePHStateSchema,
});

/** Simple helper function to check if a state object is a Governance document state object */
export function isGovernanceState(state: unknown): state is GovernancePHState {
  return GovernancePHStateSchema.safeParse(state).success;
}

/** Simple helper function to assert that a document state object is a Governance document state object */
export function assertIsGovernanceState(
  state: unknown,
): asserts state is GovernancePHState {
  GovernancePHStateSchema.parse(state);
}

/** Simple helper function to check if a document is a Governance document */
export function isGovernanceDocument(
  document: unknown,
): document is GovernanceDocument {
  return GovernanceDocumentSchema.safeParse(document).success;
}

/** Simple helper function to assert that a document is a Governance document */
export function assertIsGovernanceDocument(
  document: unknown,
): asserts document is GovernanceDocument {
  GovernanceDocumentSchema.parse(document);
}
