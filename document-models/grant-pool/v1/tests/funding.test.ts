import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantPoolDocument,
  setFundingMechanism,
  addPoolSizeEntry,
  removePoolSizeEntry,
  setTotalPoolSizeUsd,
  setGrantBounds,
  SetFundingMechanismInputSchema,
  AddPoolSizeEntryInputSchema,
  RemovePoolSizeEntryInputSchema,
  SetTotalPoolSizeUsdInputSchema,
  SetGrantBoundsInputSchema,
} from "document-models/grant-pool/v1";

describe("FundingOperations", () => {
  it("should handle setFundingMechanism operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetFundingMechanismInputSchema());

    const updatedDocument = reducer(document, setFundingMechanism(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_FUNDING_MECHANISM",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addPoolSizeEntry operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddPoolSizeEntryInputSchema());

    const updatedDocument = reducer(document, addPoolSizeEntry(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_POOL_SIZE_ENTRY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removePoolSizeEntry operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemovePoolSizeEntryInputSchema());

    const updatedDocument = reducer(document, removePoolSizeEntry(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_POOL_SIZE_ENTRY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setTotalPoolSizeUsd operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetTotalPoolSizeUsdInputSchema());

    const updatedDocument = reducer(document, setTotalPoolSizeUsd(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_TOTAL_POOL_SIZE_USD",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setGrantBounds operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetGrantBoundsInputSchema());

    const updatedDocument = reducer(document, setGrantBounds(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_GRANT_BOUNDS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
