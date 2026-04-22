import {
  BaseDocumentHeaderSchema,
  BaseDocumentStateSchema,
} from "document-model";
import { z } from "zod";
import { grantPoolDocumentType } from "./document-type.js";
import { GrantPoolStateSchema } from "./schema/zod.js";
import type { GrantPoolDocument, GrantPoolPHState } from "./types.js";

/** Schema for validating the header object of a GrantPool document */
export const GrantPoolDocumentHeaderSchema = BaseDocumentHeaderSchema.extend({
  documentType: z.literal(grantPoolDocumentType),
});

/** Schema for validating the state object of a GrantPool document */
export const GrantPoolPHStateSchema = BaseDocumentStateSchema.extend({
  global: GrantPoolStateSchema(),
});

export const GrantPoolDocumentSchema = z.object({
  header: GrantPoolDocumentHeaderSchema,
  state: GrantPoolPHStateSchema,
  initialState: GrantPoolPHStateSchema,
});

/** Simple helper function to check if a state object is a GrantPool document state object */
export function isGrantPoolState(state: unknown): state is GrantPoolPHState {
  return GrantPoolPHStateSchema.safeParse(state).success;
}

/** Simple helper function to assert that a document state object is a GrantPool document state object */
export function assertIsGrantPoolState(
  state: unknown,
): asserts state is GrantPoolPHState {
  GrantPoolPHStateSchema.parse(state);
}

/** Simple helper function to check if a document is a GrantPool document */
export function isGrantPoolDocument(
  document: unknown,
): document is GrantPoolDocument {
  return GrantPoolDocumentSchema.safeParse(document).success;
}

/** Simple helper function to assert that a document is a GrantPool document */
export function assertIsGrantPoolDocument(
  document: unknown,
): asserts document is GrantPoolDocument {
  GrantPoolDocumentSchema.parse(document);
}
