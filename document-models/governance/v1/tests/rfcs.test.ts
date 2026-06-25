import { generateMock } from "document-model";
import {
  implementRfc,
  ImplementRfcInputSchema,
  isGovernanceDocument,
  proposeRfc,
  ProposeRfcInputSchema,
  ratifyRfc,
  RatifyRfcInputSchema,
  reducer,
  rejectRfc,
  RejectRfcInputSchema,
  startRfcReview,
  StartRfcReviewInputSchema,
  utils,
  withdrawRfc,
  WithdrawRfcInputSchema,
} from "document-models/governance/v1";
import { describe, expect, it } from "vitest";

describe("RfcsOperations", () => {
  it("should handle proposeRfc operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ProposeRfcInputSchema(), {
      proposedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, proposeRfc(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "PROPOSE_RFC",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle startRfcReview operation", () => {
    const document = utils.createDocument();
    const input = generateMock(StartRfcReviewInputSchema());

    const updatedDocument = reducer(document, startRfcReview(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "START_RFC_REVIEW",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle ratifyRfc operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RatifyRfcInputSchema(), {
      ratifiedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, ratifyRfc(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("RATIFY_RFC");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle implementRfc operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ImplementRfcInputSchema(), {
      implementedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, implementRfc(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "IMPLEMENT_RFC",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle rejectRfc operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RejectRfcInputSchema());

    const updatedDocument = reducer(document, rejectRfc(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("REJECT_RFC");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle withdrawRfc operation", () => {
    const document = utils.createDocument();
    const input = generateMock(WithdrawRfcInputSchema());

    const updatedDocument = reducer(document, withdrawRfc(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "WITHDRAW_RFC",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
