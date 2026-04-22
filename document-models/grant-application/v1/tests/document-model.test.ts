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
  grantApplicationDocumentType,
  isGrantApplicationDocument,
  assertIsGrantApplicationDocument,
  isGrantApplicationState,
  assertIsGrantApplicationState,
} from "document-models/grant-application/v1";
import { ZodError } from "zod";

describe("GrantApplication Document Model", () => {
  it("should create a new GrantApplication document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe(grantApplicationDocumentType);
  });

  it("should create a new GrantApplication document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
    expect(isGrantApplicationDocument(document)).toBe(true);
    expect(isGrantApplicationState(document.state)).toBe(true);
  });
  it("should reject a document that is not a GrantApplication document", () => {
    const wrongDocumentType = utils.createDocument();
    wrongDocumentType.header.documentType = "the-wrong-thing-1234";
    try {
      expect(assertIsGrantApplicationDocument(wrongDocumentType)).toThrow();
      expect(isGrantApplicationDocument(wrongDocumentType)).toBe(false);
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
    expect(isGrantApplicationState(wrongState.state)).toBe(false);
    expect(assertIsGrantApplicationState(wrongState.state)).toThrow();
    expect(isGrantApplicationDocument(wrongState)).toBe(false);
    expect(assertIsGrantApplicationDocument(wrongState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const wrongInitialState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongInitialState.initialState.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isGrantApplicationState(wrongInitialState.state)).toBe(false);
    expect(assertIsGrantApplicationState(wrongInitialState.state)).toThrow();
    expect(isGrantApplicationDocument(wrongInitialState)).toBe(false);
    expect(assertIsGrantApplicationDocument(wrongInitialState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingIdInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingIdInHeader.header.id;
  try {
    expect(isGrantApplicationDocument(missingIdInHeader)).toBe(false);
    expect(assertIsGrantApplicationDocument(missingIdInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingNameInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingNameInHeader.header.name;
  try {
    expect(isGrantApplicationDocument(missingNameInHeader)).toBe(false);
    expect(assertIsGrantApplicationDocument(missingNameInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingCreatedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingCreatedAtUtcIsoInHeader.header.createdAtUtcIso;
  try {
    expect(isGrantApplicationDocument(missingCreatedAtUtcIsoInHeader)).toBe(
      false,
    );
    expect(
      assertIsGrantApplicationDocument(missingCreatedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingLastModifiedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingLastModifiedAtUtcIsoInHeader.header.lastModifiedAtUtcIso;
  try {
    expect(
      isGrantApplicationDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toBe(false);
    expect(
      assertIsGrantApplicationDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
