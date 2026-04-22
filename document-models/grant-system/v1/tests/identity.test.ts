import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantSystemDocument,
  setType,
  setCode,
  setDescription,
  setGrantPoolsUri,
  setExtensions,
  setImage,
  setCoverImage,
  setEmail,
  setContactName,
  SetTypeInputSchema,
  SetCodeInputSchema,
  SetDescriptionInputSchema,
  SetGrantPoolsUriInputSchema,
  SetExtensionsInputSchema,
  SetImageInputSchema,
  SetCoverImageInputSchema,
  SetEmailInputSchema,
  SetContactNameInputSchema,
  setOrgName,
  SetOrgNameInputSchema,
} from "document-models/grant-system/v1";

describe("IdentityOperations", () => {
  it("should handle setType operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetTypeInputSchema());

    const updatedDocument = reducer(document, setType(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("SET_TYPE");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCode operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCodeInputSchema());

    const updatedDocument = reducer(document, setCode(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("SET_CODE");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setDescription operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetDescriptionInputSchema());

    const updatedDocument = reducer(document, setDescription(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_DESCRIPTION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setGrantPoolsUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetGrantPoolsUriInputSchema());

    const updatedDocument = reducer(document, setGrantPoolsUri(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_GRANT_POOLS_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setExtensions operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetExtensionsInputSchema());

    const updatedDocument = reducer(document, setExtensions(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_EXTENSIONS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetImageInputSchema());

    const updatedDocument = reducer(document, setImage(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("SET_IMAGE");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCoverImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCoverImageInputSchema());

    const updatedDocument = reducer(document, setCoverImage(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_COVER_IMAGE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setEmail operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetEmailInputSchema());

    const updatedDocument = reducer(document, setEmail(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("SET_EMAIL");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setContactName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetContactNameInputSchema());

    const updatedDocument = reducer(document, setContactName(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_CONTACT_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setOrgName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetOrgNameInputSchema());

    const updatedDocument = reducer(document, setOrgName(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_ORG_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
