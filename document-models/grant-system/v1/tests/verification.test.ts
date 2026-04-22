import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantSystemDocument,
  setPublisherWallet,
  requestVerification,
  approveVerification,
  rejectVerification,
  suspendVerification,
  revokeVerification,
  reinstateVerification,
  SetPublisherWalletInputSchema,
  RequestVerificationInputSchema,
  ApproveVerificationInputSchema,
  RejectVerificationInputSchema,
  SuspendVerificationInputSchema,
  RevokeVerificationInputSchema,
  ReinstateVerificationInputSchema,
} from "document-models/grant-system/v1";

describe("VerificationOperations", () => {
  it("should handle setPublisherWallet operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPublisherWalletInputSchema());

    const updatedDocument = reducer(document, setPublisherWallet(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PUBLISHER_WALLET",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle requestVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RequestVerificationInputSchema());

    const updatedDocument = reducer(document, requestVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REQUEST_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle approveVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ApproveVerificationInputSchema());

    const updatedDocument = reducer(document, approveVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "APPROVE_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle rejectVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RejectVerificationInputSchema());

    const updatedDocument = reducer(document, rejectVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REJECT_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle suspendVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SuspendVerificationInputSchema());

    const updatedDocument = reducer(document, suspendVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SUSPEND_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle revokeVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RevokeVerificationInputSchema());

    const updatedDocument = reducer(document, revokeVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REVOKE_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle reinstateVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ReinstateVerificationInputSchema());

    const updatedDocument = reducer(document, reinstateVerification(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REINSTATE_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
