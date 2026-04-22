import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProjectDocument,
  setProjectName,
  setProjectDescription,
  setContentUri,
  setProjectEmail,
  setMembersUri,
  setProjectImage,
  setProjectCoverImage,
  setLicenseUri,
  setProjectCode,
  setOwnerDid,
  setProjectExtensions,
  SetProjectNameInputSchema,
  SetProjectDescriptionInputSchema,
  SetContentUriInputSchema,
  SetProjectEmailInputSchema,
  SetMembersUriInputSchema,
  SetProjectImageInputSchema,
  SetProjectCoverImageInputSchema,
  SetLicenseUriInputSchema,
  SetProjectCodeInputSchema,
  SetOwnerDidInputSchema,
  SetProjectExtensionsInputSchema,
} from "document-models/project/v1";

describe("ProfileOperations", () => {
  it("should handle setProjectName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectNameInputSchema());

    const updatedDocument = reducer(document, setProjectName(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectDescription operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectDescriptionInputSchema());

    const updatedDocument = reducer(document, setProjectDescription(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_DESCRIPTION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setContentUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetContentUriInputSchema());

    const updatedDocument = reducer(document, setContentUri(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_CONTENT_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectEmail operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectEmailInputSchema());

    const updatedDocument = reducer(document, setProjectEmail(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_EMAIL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setMembersUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetMembersUriInputSchema());

    const updatedDocument = reducer(document, setMembersUri(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_MEMBERS_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectImageInputSchema());

    const updatedDocument = reducer(document, setProjectImage(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_IMAGE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectCoverImage operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectCoverImageInputSchema());

    const updatedDocument = reducer(document, setProjectCoverImage(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_COVER_IMAGE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setLicenseUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetLicenseUriInputSchema());

    const updatedDocument = reducer(document, setLicenseUri(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_LICENSE_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectCode operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectCodeInputSchema());

    const updatedDocument = reducer(document, setProjectCode(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_CODE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setOwnerDid operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetOwnerDidInputSchema());

    const updatedDocument = reducer(document, setOwnerDid(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_OWNER_DID",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectExtensions operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectExtensionsInputSchema());

    const updatedDocument = reducer(document, setProjectExtensions(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_EXTENSIONS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
