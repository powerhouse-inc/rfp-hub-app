import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantPoolDocument,
  markSupersedes,
  markClaimedFromEntry,
  markDuplicateOf,
  MarkSupersedesInputSchema,
  MarkClaimedFromEntryInputSchema,
  MarkDuplicateOfInputSchema,
} from "document-models/grant-pool/v1";

describe("LineageOperations", () => {
  it("should handle markSupersedes operation", () => {
    const document = utils.createDocument();
    const input = generateMock(MarkSupersedesInputSchema());

    const updatedDocument = reducer(document, markSupersedes(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "MARK_SUPERSEDES",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle markClaimedFromEntry operation", () => {
    const document = utils.createDocument();
    const input = generateMock(MarkClaimedFromEntryInputSchema());

    const updatedDocument = reducer(document, markClaimedFromEntry(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "MARK_CLAIMED_FROM_ENTRY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle markDuplicateOf operation", () => {
    const document = utils.createDocument();
    const input = generateMock(MarkDuplicateOfInputSchema());

    const updatedDocument = reducer(document, markDuplicateOf(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "MARK_DUPLICATE_OF",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
