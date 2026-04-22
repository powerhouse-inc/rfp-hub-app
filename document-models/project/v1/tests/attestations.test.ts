import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProjectDocument,
  setProjectAttestationIssuersUri,
  SetProjectAttestationIssuersUriInputSchema,
} from "document-models/project/v1";

describe("AttestationsOperations", () => {
  it("should handle setProjectAttestationIssuersUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectAttestationIssuersUriInputSchema());

    const updatedDocument = reducer(
      document,
      setProjectAttestationIssuersUri(input),
    );

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_ATTESTATION_ISSUERS_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
