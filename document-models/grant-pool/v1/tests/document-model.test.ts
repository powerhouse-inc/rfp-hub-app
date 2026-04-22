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
  grantPoolDocumentType,
  isGrantPoolDocument,
  assertIsGrantPoolDocument,
  isGrantPoolState,
  assertIsGrantPoolState,
} from "document-models/grant-pool/v1";
import { ZodError } from "zod";

describe("GrantPool Document Model", () => {
  it("should create a new GrantPool document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe(grantPoolDocumentType);
  });

  it("should create a new GrantPool document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
    expect(isGrantPoolDocument(document)).toBe(true);
    expect(isGrantPoolState(document.state)).toBe(true);
  });
  it("should reject a document that is not a GrantPool document", () => {
    const wrongDocumentType = utils.createDocument();
    wrongDocumentType.header.documentType = "the-wrong-thing-1234";
    try {
      expect(assertIsGrantPoolDocument(wrongDocumentType)).toThrow();
      expect(isGrantPoolDocument(wrongDocumentType)).toBe(false);
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
    expect(isGrantPoolState(wrongState.state)).toBe(false);
    expect(assertIsGrantPoolState(wrongState.state)).toThrow();
    expect(isGrantPoolDocument(wrongState)).toBe(false);
    expect(assertIsGrantPoolDocument(wrongState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const wrongInitialState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongInitialState.initialState.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isGrantPoolState(wrongInitialState.state)).toBe(false);
    expect(assertIsGrantPoolState(wrongInitialState.state)).toThrow();
    expect(isGrantPoolDocument(wrongInitialState)).toBe(false);
    expect(assertIsGrantPoolDocument(wrongInitialState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingIdInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingIdInHeader.header.id;
  try {
    expect(isGrantPoolDocument(missingIdInHeader)).toBe(false);
    expect(assertIsGrantPoolDocument(missingIdInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingNameInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingNameInHeader.header.name;
  try {
    expect(isGrantPoolDocument(missingNameInHeader)).toBe(false);
    expect(assertIsGrantPoolDocument(missingNameInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingCreatedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingCreatedAtUtcIsoInHeader.header.createdAtUtcIso;
  try {
    expect(isGrantPoolDocument(missingCreatedAtUtcIsoInHeader)).toBe(false);
    expect(assertIsGrantPoolDocument(missingCreatedAtUtcIsoInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingLastModifiedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingLastModifiedAtUtcIsoInHeader.header.lastModifiedAtUtcIso;
  try {
    expect(isGrantPoolDocument(missingLastModifiedAtUtcIsoInHeader)).toBe(
      false,
    );
    expect(
      assertIsGrantPoolDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
