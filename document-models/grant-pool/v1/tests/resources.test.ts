import { generateMock } from "document-model";
import {
  addContextDocument,
  AddContextDocumentInputSchema,
  addPoolSameAs,
  AddPoolSameAsInputSchema,
  addRequiredCredential,
  AddRequiredCredentialInputSchema,
  isGrantPoolDocument,
  reducer,
  removeContextDocument,
  RemoveContextDocumentInputSchema,
  removePoolSameAs,
  RemovePoolSameAsInputSchema,
  removeRequiredCredential,
  RemoveRequiredCredentialInputSchema,
  setApplicationsUri,
  SetApplicationsUriInputSchema,
  setAttestationIssuersUri,
  SetAttestationIssuersUriInputSchema,
  setGovernanceUri,
  SetGovernanceUriInputSchema,
  utils,
} from "document-models/grant-pool/v1";
import { describe, expect, it } from "vitest";

describe("ResourcesOperations", () => {
  it("should handle setGovernanceUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetGovernanceUriInputSchema(), {
      governanceURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setGovernanceUri(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_GOVERNANCE_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setApplicationsUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetApplicationsUriInputSchema(), {
      applicationsURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setApplicationsUri(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_APPLICATIONS_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setAttestationIssuersUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetAttestationIssuersUriInputSchema(), {
      attestationIssuersURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setAttestationIssuersUri(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_ATTESTATION_ISSUERS_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addRequiredCredential operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddRequiredCredentialInputSchema());

    const updatedDocument = reducer(document, addRequiredCredential(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_REQUIRED_CREDENTIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeRequiredCredential operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveRequiredCredentialInputSchema());

    const updatedDocument = reducer(document, removeRequiredCredential(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_REQUIRED_CREDENTIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addContextDocument operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddContextDocumentInputSchema(), {
      url: "https://example.com",
    });

    const updatedDocument = reducer(document, addContextDocument(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_CONTEXT_DOCUMENT",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeContextDocument operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveContextDocumentInputSchema());

    const updatedDocument = reducer(document, removeContextDocument(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_CONTEXT_DOCUMENT",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addPoolSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddPoolSameAsInputSchema(), {
      url: "https://example.com",
    });

    const updatedDocument = reducer(document, addPoolSameAs(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_POOL_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removePoolSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemovePoolSameAsInputSchema(), {
      url: "https://example.com",
    });

    const updatedDocument = reducer(document, removePoolSameAs(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_POOL_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
