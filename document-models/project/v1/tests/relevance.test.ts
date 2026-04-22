import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProjectDocument,
  addRelevantPool,
  removeRelevantPool,
  AddRelevantPoolInputSchema,
  RemoveRelevantPoolInputSchema,
} from "document-models/project/v1";

describe("RelevanceOperations", () => {
  it("should handle addRelevantPool operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddRelevantPoolInputSchema());

    const updatedDocument = reducer(document, addRelevantPool(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_RELEVANT_POOL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeRelevantPool operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveRelevantPoolInputSchema());

    const updatedDocument = reducer(document, removeRelevantPool(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_RELEVANT_POOL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
