import { generateMock } from "document-model";
import {
  isGrantApplicationDocument,
  markCompleted,
  MarkCompletedInputSchema,
  recordPayout,
  RecordPayoutInputSchema,
  reducer,
  utils,
} from "document-models/grant-application/v1";
import { describe, expect, it } from "vitest";

describe("PayoutsOperations", () => {
  it("should handle recordPayout operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RecordPayoutInputSchema(), {
      timestamp: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, recordPayout(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "RECORD_PAYOUT",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle markCompleted operation", () => {
    const document = utils.createDocument();
    const input = generateMock(MarkCompletedInputSchema());

    const updatedDocument = reducer(document, markCompleted(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "MARK_COMPLETED",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
