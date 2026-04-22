import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantApplicationDocument,
  addFundsAsked,
  removeFundsAsked,
  setFundsAskedUsd,
  addFundsApproved,
  setFundsApprovedUsd,
  setPayoutAddress,
  setPaymentTerm,
  AddFundsAskedInputSchema,
  RemoveFundsAskedInputSchema,
  SetFundsAskedUsdInputSchema,
  AddFundsApprovedInputSchema,
  SetFundsApprovedUsdInputSchema,
  SetPayoutAddressInputSchema,
  SetPaymentTermInputSchema,
} from "document-models/grant-application/v1";

describe("FundingOperations", () => {
  it("should handle addFundsAsked operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddFundsAskedInputSchema());

    const updatedDocument = reducer(document, addFundsAsked(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_FUNDS_ASKED",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeFundsAsked operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveFundsAskedInputSchema());

    const updatedDocument = reducer(document, removeFundsAsked(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_FUNDS_ASKED",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setFundsAskedUsd operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetFundsAskedUsdInputSchema());

    const updatedDocument = reducer(document, setFundsAskedUsd(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_FUNDS_ASKED_USD",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addFundsApproved operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddFundsApprovedInputSchema());

    const updatedDocument = reducer(document, addFundsApproved(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_FUNDS_APPROVED",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setFundsApprovedUsd operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetFundsApprovedUsdInputSchema());

    const updatedDocument = reducer(document, setFundsApprovedUsd(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_FUNDS_APPROVED_USD",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPayoutAddress operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPayoutAddressInputSchema());

    const updatedDocument = reducer(document, setPayoutAddress(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PAYOUT_ADDRESS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPaymentTerm operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPaymentTermInputSchema());

    const updatedDocument = reducer(document, setPaymentTerm(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PAYMENT_TERM",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
