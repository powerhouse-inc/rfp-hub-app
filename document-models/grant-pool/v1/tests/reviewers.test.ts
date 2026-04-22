import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantPoolDocument,
  addReviewer,
  removeReviewer,
  AddReviewerInputSchema,
  RemoveReviewerInputSchema,
} from "document-models/grant-pool/v1";

describe("ReviewersOperations", () => {
  it("should handle addReviewer operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddReviewerInputSchema());

    const updatedDocument = reducer(document, addReviewer(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_REVIEWER",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeReviewer operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveReviewerInputSchema());

    const updatedDocument = reducer(document, removeReviewer(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_REVIEWER",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
