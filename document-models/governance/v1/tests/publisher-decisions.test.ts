import { generateMock } from "document-model";
import {
  isGovernanceDocument,
  recordPublisherDecision,
  RecordPublisherDecisionInputSchema,
  reducer,
  utils,
} from "document-models/governance/v1";
import { describe, expect, it } from "vitest";

describe("PublisherDecisionsOperations", () => {
  it("should handle recordPublisherDecision operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RecordPublisherDecisionInputSchema(), {
      decidedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, recordPublisherDecision(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "RECORD_PUBLISHER_DECISION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
