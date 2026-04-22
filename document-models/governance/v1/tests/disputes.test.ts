import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGovernanceDocument,
  fileDispute,
  assignInvestigator,
  resolveDispute,
  dismissDispute,
  appealDispute,
  FileDisputeInputSchema,
  AssignInvestigatorInputSchema,
  ResolveDisputeInputSchema,
  DismissDisputeInputSchema,
  AppealDisputeInputSchema,
} from "document-models/governance/v1";

describe("DisputesOperations", () => {
  it("should handle fileDispute operation", () => {
    const document = utils.createDocument();
    const input = generateMock(FileDisputeInputSchema());

    const updatedDocument = reducer(document, fileDispute(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "FILE_DISPUTE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle assignInvestigator operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AssignInvestigatorInputSchema());

    const updatedDocument = reducer(document, assignInvestigator(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ASSIGN_INVESTIGATOR",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle resolveDispute operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ResolveDisputeInputSchema());

    const updatedDocument = reducer(document, resolveDispute(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "RESOLVE_DISPUTE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle dismissDispute operation", () => {
    const document = utils.createDocument();
    const input = generateMock(DismissDisputeInputSchema());

    const updatedDocument = reducer(document, dismissDispute(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "DISMISS_DISPUTE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle appealDispute operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AppealDisputeInputSchema());

    const updatedDocument = reducer(document, appealDispute(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "APPEAL_DISPUTE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
