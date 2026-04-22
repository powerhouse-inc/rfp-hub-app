import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGovernanceDocument,
  recordPublisherDecision,
  RecordPublisherDecisionInputSchema,
} from "document-models/governance/v1";

describe("PublisherDecisionsOperations", () => {
  it("should handle recordPublisherDecision operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RecordPublisherDecisionInputSchema());

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
