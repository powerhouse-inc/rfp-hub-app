import { generateMock } from "document-model";
import {
  addAppSocial,
  AddAppSocialInputSchema,
  isGrantApplicationDocument,
  reducer,
  removeAppSocial,
  RemoveAppSocialInputSchema,
  setAppContentUri,
  SetAppContentUriInputSchema,
  setAppExtensions,
  SetAppExtensionsInputSchema,
  setAppLicenseUri,
  SetAppLicenseUriInputSchema,
  setCompletionRate,
  SetCompletionRateInputSchema,
  setCreatedAt,
  SetCreatedAtInputSchema,
  setDiscussionsTo,
  SetDiscussionsToInputSchema,
  setIsInactive,
  SetIsInactiveInputSchema,
  setPoolRef,
  SetPoolRefInputSchema,
  setProjectRef,
  SetProjectRefInputSchema,
  utils,
} from "document-models/grant-application/v1";
import { describe, expect, it } from "vitest";

describe("MetadataOperations", () => {
  it("should handle setPoolRef operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPoolRefInputSchema(), {
      grantPoolsURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setPoolRef(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_POOL_REF",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setProjectRef operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProjectRefInputSchema(), {
      projectsURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setProjectRef(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROJECT_REF",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCreatedAt operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCreatedAtInputSchema(), {
      createdAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, setCreatedAt(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_CREATED_AT",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setAppContentUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetAppContentUriInputSchema(), {
      contentURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setAppContentUri(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_APP_CONTENT_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setDiscussionsTo operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetDiscussionsToInputSchema(), {
      discussionsTo: "https://example.com",
    });

    const updatedDocument = reducer(document, setDiscussionsTo(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_DISCUSSIONS_TO",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setAppLicenseUri operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetAppLicenseUriInputSchema(), {
      licenseURI: "https://example.com",
    });

    const updatedDocument = reducer(document, setAppLicenseUri(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_APP_LICENSE_URI",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setIsInactive operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetIsInactiveInputSchema());

    const updatedDocument = reducer(document, setIsInactive(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_IS_INACTIVE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setCompletionRate operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetCompletionRateInputSchema());

    const updatedDocument = reducer(document, setCompletionRate(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_COMPLETION_RATE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setAppExtensions operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetAppExtensionsInputSchema());

    const updatedDocument = reducer(document, setAppExtensions(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_APP_EXTENSIONS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addAppSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddAppSocialInputSchema(), {
      url: "https://example.com",
    });

    const updatedDocument = reducer(document, addAppSocial(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_APP_SOCIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeAppSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveAppSocialInputSchema());

    const updatedDocument = reducer(document, removeAppSocial(input));

    expect(isGrantApplicationDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_APP_SOCIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
