import { generateMock } from "document-model";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProjectDocument,
  addProjectSocial,
  removeProjectSocial,
  updateProjectSocialUrl,
  addProjectSameAs,
  removeProjectSameAs,
  AddProjectSocialInputSchema,
  RemoveProjectSocialInputSchema,
  UpdateProjectSocialUrlInputSchema,
  AddProjectSameAsInputSchema,
  RemoveProjectSameAsInputSchema,
} from "document-models/project/v1";

describe("LinksOperations", () => {
  it("should handle addProjectSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddProjectSocialInputSchema());

    const updatedDocument = reducer(document, addProjectSocial(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_PROJECT_SOCIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeProjectSocial operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveProjectSocialInputSchema());

    const updatedDocument = reducer(document, removeProjectSocial(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_PROJECT_SOCIAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateProjectSocialUrl operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateProjectSocialUrlInputSchema());

    const updatedDocument = reducer(document, updateProjectSocialUrl(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_PROJECT_SOCIAL_URL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addProjectSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddProjectSameAsInputSchema());

    const updatedDocument = reducer(document, addProjectSameAs(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_PROJECT_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeProjectSameAs operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveProjectSameAsInputSchema());

    const updatedDocument = reducer(document, removeProjectSameAs(input));

    expect(isProjectDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_PROJECT_SAME_AS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
