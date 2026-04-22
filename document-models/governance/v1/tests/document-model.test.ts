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
  governanceDocumentType,
  isGovernanceDocument,
  assertIsGovernanceDocument,
  isGovernanceState,
  assertIsGovernanceState,
} from "document-models/governance/v1";
import { ZodError } from "zod";

describe("Governance Document Model", () => {
  it("should create a new Governance document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe(governanceDocumentType);
  });

  it("should create a new Governance document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
    expect(isGovernanceDocument(document)).toBe(true);
    expect(isGovernanceState(document.state)).toBe(true);
  });
  it("should reject a document that is not a Governance document", () => {
    const wrongDocumentType = utils.createDocument();
    wrongDocumentType.header.documentType = "the-wrong-thing-1234";
    try {
      expect(assertIsGovernanceDocument(wrongDocumentType)).toThrow();
      expect(isGovernanceDocument(wrongDocumentType)).toBe(false);
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
    expect(isGovernanceState(wrongState.state)).toBe(false);
    expect(assertIsGovernanceState(wrongState.state)).toThrow();
    expect(isGovernanceDocument(wrongState)).toBe(false);
    expect(assertIsGovernanceDocument(wrongState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const wrongInitialState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongInitialState.initialState.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isGovernanceState(wrongInitialState.state)).toBe(false);
    expect(assertIsGovernanceState(wrongInitialState.state)).toThrow();
    expect(isGovernanceDocument(wrongInitialState)).toBe(false);
    expect(assertIsGovernanceDocument(wrongInitialState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingIdInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingIdInHeader.header.id;
  try {
    expect(isGovernanceDocument(missingIdInHeader)).toBe(false);
    expect(assertIsGovernanceDocument(missingIdInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingNameInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingNameInHeader.header.name;
  try {
    expect(isGovernanceDocument(missingNameInHeader)).toBe(false);
    expect(assertIsGovernanceDocument(missingNameInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingCreatedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingCreatedAtUtcIsoInHeader.header.createdAtUtcIso;
  try {
    expect(isGovernanceDocument(missingCreatedAtUtcIsoInHeader)).toBe(false);
    expect(
      assertIsGovernanceDocument(missingCreatedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingLastModifiedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingLastModifiedAtUtcIsoInHeader.header.lastModifiedAtUtcIso;
  try {
    expect(isGovernanceDocument(missingLastModifiedAtUtcIsoInHeader)).toBe(
      false,
    );
    expect(
      assertIsGovernanceDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
