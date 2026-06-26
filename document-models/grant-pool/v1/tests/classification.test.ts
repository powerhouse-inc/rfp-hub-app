import { generateMock } from "document-model";
import {
  addCategory,
  AddCategoryInputSchema,
  addEcosystem,
  AddEcosystemInputSchema,
  addTag,
  AddTagInputSchema,
  isGrantPoolDocument,
  reducer,
  removeCategory,
  RemoveCategoryInputSchema,
  removeEcosystem,
  RemoveEcosystemInputSchema,
  removeTag,
  RemoveTagInputSchema,
  utils,
} from "document-models/grant-pool/v1";
import { describe, expect, it } from "vitest";

describe("ClassificationOperations", () => {
  it("should handle addCategory operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddCategoryInputSchema());

    const updatedDocument = reducer(document, addCategory(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_CATEGORY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeCategory operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveCategoryInputSchema());

    const updatedDocument = reducer(document, removeCategory(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_CATEGORY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addEcosystem operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddEcosystemInputSchema());

    const updatedDocument = reducer(document, addEcosystem(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_ECOSYSTEM",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeEcosystem operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveEcosystemInputSchema());

    const updatedDocument = reducer(document, removeEcosystem(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_ECOSYSTEM",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addTag operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddTagInputSchema());

    const updatedDocument = reducer(document, addTag(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("ADD_TAG");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeTag operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveTagInputSchema());

    const updatedDocument = reducer(document, removeTag(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("REMOVE_TAG");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
