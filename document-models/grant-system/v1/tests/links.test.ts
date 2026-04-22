import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isGrantSystemDocument,
  addSameAs,
  removeSameAs,
  addSocial,
  removeSocial,
  updateSocialUrl,
  AddSameAsInputSchema,
  RemoveSameAsInputSchema,
  AddSocialInputSchema,
  RemoveSocialInputSchema,
  UpdateSocialUrlInputSchema,
} from "document-models/grant-system/v1";

describe("LinksOperations", () => {
  it("should handle addSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddSameAsInputSchema());

    const updatedDocument = reducer(document, addSameAs(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveSameAsInputSchema());

    const updatedDocument = reducer(document, removeSameAs(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddSocialInputSchema());

    const updatedDocument = reducer(document, addSocial(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("ADD_SOCIAL");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveSocialInputSchema());

    const updatedDocument = reducer(document, removeSocial(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_SOCIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateSocialUrl operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateSocialUrlInputSchema());

    const updatedDocument = reducer(document, updateSocialUrl(input));

    expect(isGrantSystemDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_SOCIAL_URL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
