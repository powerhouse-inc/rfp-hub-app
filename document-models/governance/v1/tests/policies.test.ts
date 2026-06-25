import { generateMock } from "document-model";
import {
  isGovernanceDocument,
  publishPolicy,
  PublishPolicyInputSchema,
  reducer,
  supersedePolicy,
  SupersedePolicyInputSchema,
  utils,
} from "document-models/governance/v1";
import { describe, expect, it } from "vitest";

describe("PoliciesOperations", () => {
  it("should handle publishPolicy operation", () => {
    const document = utils.createDocument();
    const input = generateMock(PublishPolicyInputSchema(), {
      effectiveFrom: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, publishPolicy(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "PUBLISH_POLICY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle supersedePolicy operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SupersedePolicyInputSchema(), {
      supersededAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, supersedePolicy(input));

    expect(isGovernanceDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SUPERSEDE_POLICY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
