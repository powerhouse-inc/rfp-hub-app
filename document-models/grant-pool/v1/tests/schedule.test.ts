import { generateMock } from "document-model";
import {
  advanceLifecycle,
  AdvanceLifecycleInputSchema,
  isGrantPoolDocument,
  reducer,
  setCloseDate,
  SetCloseDateInputSchema,
  setIsOpen,
  SetIsOpenInputSchema,
  setOpenDate,
  SetOpenDateInputSchema,
  utils,
} from "document-models/grant-pool/v1";
import { describe, expect, it } from "vitest";

describe("ScheduleOperations", () => {
  it("should handle setOpenDate operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetOpenDateInputSchema(), {
      openDate: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, setOpenDate(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_OPEN_DATE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCloseDate operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCloseDateInputSchema(), {
      closeDate: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, setCloseDate(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_CLOSE_DATE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setIsOpen operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetIsOpenInputSchema());

    const updatedDocument = reducer(document, setIsOpen(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_IS_OPEN",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle advanceLifecycle operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AdvanceLifecycleInputSchema());

    const updatedDocument = reducer(document, advanceLifecycle(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADVANCE_LIFECYCLE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
