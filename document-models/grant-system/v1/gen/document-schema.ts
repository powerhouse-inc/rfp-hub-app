import {
  BaseDocumentHeaderSchema,
  BaseDocumentStateSchema,
} from "document-model";
import { z } from "zod";
import { grantSystemDocumentType } from "./document-type.js";
import { GrantSystemStateSchema } from "./schema/zod.js";
import type { GrantSystemDocument, GrantSystemPHState } from "./types.js";

/** Schema for validating the header object of a GrantSystem document */
export const GrantSystemDocumentHeaderSchema = BaseDocumentHeaderSchema.extend({
  documentType: z.literal(grantSystemDocumentType),
});

/** Schema for validating the state object of a GrantSystem document */
export const GrantSystemPHStateSchema = BaseDocumentStateSchema.extend({
  global: GrantSystemStateSchema(),
});

export const GrantSystemDocumentSchema = z.object({
  header: GrantSystemDocumentHeaderSchema,
  state: GrantSystemPHStateSchema,
  initialState: GrantSystemPHStateSchema,
});

/** Simple helper function to check if a state object is a GrantSystem document state object */
export function isGrantSystemState(
  state: unknown,
): state is GrantSystemPHState {
  return GrantSystemPHStateSchema.safeParse(state).success;
}

/** Simple helper function to assert that a document state object is a GrantSystem document state object */
export function assertIsGrantSystemState(
  state: unknown,
): asserts state is GrantSystemPHState {
  GrantSystemPHStateSchema.parse(state);
}

/** Simple helper function to check if a document is a GrantSystem document */
export function isGrantSystemDocument(
  document: unknown,
): document is GrantSystemDocument {
  return GrantSystemDocumentSchema.safeParse(document).success;
}

/** Simple helper function to assert that a document is a GrantSystem document */
export function assertIsGrantSystemDocument(
  document: unknown,
): asserts document is GrantSystemDocument {
  GrantSystemDocumentSchema.parse(document);
}
