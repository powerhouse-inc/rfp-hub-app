import {
  BaseDocumentHeaderSchema,
  BaseDocumentStateSchema,
} from "document-model";
import { z } from "zod";
import { grantApplicationDocumentType } from "./document-type.js";
import { GrantApplicationStateSchema } from "./schema/zod.js";
import type {
  GrantApplicationDocument,
  GrantApplicationPHState,
} from "./types.js";

/** Schema for validating the header object of a GrantApplication document */
export const GrantApplicationDocumentHeaderSchema =
  BaseDocumentHeaderSchema.extend({
    documentType: z.literal(grantApplicationDocumentType),
  });

/** Schema for validating the state object of a GrantApplication document */
export const GrantApplicationPHStateSchema = BaseDocumentStateSchema.extend({
  global: GrantApplicationStateSchema(),
});

export const GrantApplicationDocumentSchema = z.object({
  header: GrantApplicationDocumentHeaderSchema,
  state: GrantApplicationPHStateSchema,
  initialState: GrantApplicationPHStateSchema,
});

/** Simple helper function to check if a state object is a GrantApplication document state object */
export function isGrantApplicationState(
  state: unknown,
): state is GrantApplicationPHState {
  return GrantApplicationPHStateSchema.safeParse(state).success;
}

/** Simple helper function to assert that a document state object is a GrantApplication document state object */
export function assertIsGrantApplicationState(
  state: unknown,
): asserts state is GrantApplicationPHState {
  GrantApplicationPHStateSchema.parse(state);
}

/** Simple helper function to check if a document is a GrantApplication document */
export function isGrantApplicationDocument(
  document: unknown,
): document is GrantApplicationDocument {
  return GrantApplicationDocumentSchema.safeParse(document).success;
}

/** Simple helper function to assert that a document is a GrantApplication document */
export function assertIsGrantApplicationDocument(
  document: unknown,
): asserts document is GrantApplicationDocument {
  GrantApplicationDocumentSchema.parse(document);
}
