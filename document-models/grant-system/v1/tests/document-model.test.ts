/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */
/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect } from "vitest";
import {
  utils,
  initialGlobalState,
  initialLocalState,
  grantSystemDocumentType,
  isGrantSystemDocument,
  assertIsGrantSystemDocument,
  isGrantSystemState,
  assertIsGrantSystemState,
} from "document-models/grant-system/v1";
import { ZodError } from "zod";

describe("GrantSystem Document Model", () => {
  it("should create a new GrantSystem document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe(grantSystemDocumentType);
  });

  it("should create a new GrantSystem document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
    expect(isGrantSystemDocument(document)).toBe(true);
    expect(isGrantSystemState(document.state)).toBe(true);
  });
  it("should reject a document that is not a GrantSystem document", () => {
    const wrongDocumentType = utils.createDocument();
    wrongDocumentType.header.documentType = "the-wrong-thing-1234";
    try {
      expect(assertIsGrantSystemDocument(wrongDocumentType)).toThrow();
      expect(isGrantSystemDocument(wrongDocumentType)).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(ZodError);
    }
  });
  const wrongState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongState.state.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isGrantSystemState(wrongState.state)).toBe(false);
    expect(assertIsGrantSystemState(wrongState.state)).toThrow();
    expect(isGrantSystemDocument(wrongState)).toBe(false);
    expect(assertIsGrantSystemDocument(wrongState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const wrongInitialState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongInitialState.initialState.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isGrantSystemState(wrongInitialState.state)).toBe(false);
    expect(assertIsGrantSystemState(wrongInitialState.state)).toThrow();
    expect(isGrantSystemDocument(wrongInitialState)).toBe(false);
    expect(assertIsGrantSystemDocument(wrongInitialState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingIdInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingIdInHeader.header.id;
  try {
    expect(isGrantSystemDocument(missingIdInHeader)).toBe(false);
    expect(assertIsGrantSystemDocument(missingIdInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingNameInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingNameInHeader.header.name;
  try {
    expect(isGrantSystemDocument(missingNameInHeader)).toBe(false);
    expect(assertIsGrantSystemDocument(missingNameInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingCreatedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingCreatedAtUtcIsoInHeader.header.createdAtUtcIso;
  try {
    expect(isGrantSystemDocument(missingCreatedAtUtcIsoInHeader)).toBe(false);
    expect(
      assertIsGrantSystemDocument(missingCreatedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingLastModifiedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingLastModifiedAtUtcIsoInHeader.header.lastModifiedAtUtcIso;
  try {
    expect(isGrantSystemDocument(missingLastModifiedAtUtcIsoInHeader)).toBe(
      false,
    );
    expect(
      assertIsGrantSystemDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
