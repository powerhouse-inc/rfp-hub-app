import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantApplicationDocument,
  submitApplication,
  openApplication,
  startReview,
  requestRevision,
  markRevised,
  approveApplication,
  conditionallyApprove,
  rejectApplication,
  withdrawApplication,
  SubmitApplicationInputSchema,
  OpenApplicationInputSchema,
  StartReviewInputSchema,
  RequestRevisionInputSchema,
  MarkRevisedInputSchema,
  ApproveApplicationInputSchema,
  ConditionallyApproveInputSchema,
  RejectApplicationInputSchema,
  WithdrawApplicationInputSchema,
} from "document-models/grant-application/v1";

describe("ReviewOperations", () => {
  it("should handle submitApplication operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SubmitApplicationInputSchema());

    const updatedDocument = reducer(document, submitApplication(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SUBMIT_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle openApplication operation", () => {
    const document = utils.createDocument();
    const input = generateMock(OpenApplicationInputSchema());

    const updatedDocument = reducer(document, openApplication(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "OPEN_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle startReview operation", () => {
    const document = utils.createDocument();
    const input = generateMock(StartReviewInputSchema());

    const updatedDocument = reducer(document, startReview(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "START_REVIEW",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle requestRevision operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RequestRevisionInputSchema());

    const updatedDocument = reducer(document, requestRevision(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REQUEST_REVISION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle markRevised operation", () => {
    const document = utils.createDocument();
    const input = generateMock(MarkRevisedInputSchema());

    const updatedDocument = reducer(document, markRevised(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "MARK_REVISED",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle approveApplication operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ApproveApplicationInputSchema());

    const updatedDocument = reducer(document, approveApplication(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "APPROVE_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle conditionallyApprove operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ConditionallyApproveInputSchema());

    const updatedDocument = reducer(document, conditionallyApprove(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "CONDITIONALLY_APPROVE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle rejectApplication operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RejectApplicationInputSchema());

    const updatedDocument = reducer(document, rejectApplication(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REJECT_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle withdrawApplication operation", () => {
    const document = utils.createDocument();
    const input = generateMock(WithdrawApplicationInputSchema());

    const updatedDocument = reducer(document, withdrawApplication(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "WITHDRAW_APPLICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
