import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantPoolDocument,
  setPoolName,
  setDescription,
  setCode,
  setGrantSystemRef,
  setBriefingUri,
  setEligibilityCriteria,
  setEvaluationCriteria,
  setPoolEmail,
  setPoolImage,
  setPoolCoverImage,
  setPoolExtensions,
  SetPoolNameInputSchema,
  SetDescriptionInputSchema,
  SetCodeInputSchema,
  SetGrantSystemRefInputSchema,
  SetBriefingUriInputSchema,
  SetEligibilityCriteriaInputSchema,
  SetEvaluationCriteriaInputSchema,
  SetPoolEmailInputSchema,
  SetPoolImageInputSchema,
  SetPoolCoverImageInputSchema,
  SetPoolExtensionsInputSchema,
} from "document-models/grant-pool/v1";

describe("MetadataOperations", () => {
  it("should handle setPoolName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolNameInputSchema());

    const updatedDocument = reducer(document, setPoolName(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setDescription operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetDescriptionInputSchema());

    const updatedDocument = reducer(document, setDescription(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_DESCRIPTION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCode operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCodeInputSchema());

    const updatedDocument = reducer(document, setCode(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("SET_CODE");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setGrantSystemRef operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetGrantSystemRefInputSchema());

    const updatedDocument = reducer(document, setGrantSystemRef(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_GRANT_SYSTEM_REF",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setBriefingUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetBriefingUriInputSchema());

    const updatedDocument = reducer(document, setBriefingUri(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_BRIEFING_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setEligibilityCriteria operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetEligibilityCriteriaInputSchema());

    const updatedDocument = reducer(document, setEligibilityCriteria(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_ELIGIBILITY_CRITERIA",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setEvaluationCriteria operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetEvaluationCriteriaInputSchema());

    const updatedDocument = reducer(document, setEvaluationCriteria(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_EVALUATION_CRITERIA",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPoolEmail operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolEmailInputSchema());

    const updatedDocument = reducer(document, setPoolEmail(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_EMAIL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPoolImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolImageInputSchema());

    const updatedDocument = reducer(document, setPoolImage(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_IMAGE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPoolCoverImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolCoverImageInputSchema());

    const updatedDocument = reducer(document, setPoolCoverImage(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_COVER_IMAGE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPoolExtensions operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolExtensionsInputSchema());

    const updatedDocument = reducer(document, setPoolExtensions(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_EXTENSIONS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
