import { generateMock } from "document-model";
import {
  cancelPool,
  CancelPoolInputSchema,
  closePool,
  ClosePoolInputSchema,
  isGrantPoolDocument,
  publishPool,
  PublishPoolInputSchema,
  recordVerification,
  RecordVerificationInputSchema,
  reducer,
  setGovernanceState,
  SetGovernanceStateInputSchema,
  setPublisher,
  SetPublisherInputSchema,
  setSubmitter,
  SetSubmitterInputSchema,
  utils,
} from "document-models/grant-pool/v1";
import { describe, expect, it } from "vitest";

describe("GovernanceOperations", () => {
  it("should handle setSubmitter operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetSubmitterInputSchema(), {
      submittedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, setSubmitter(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_SUBMITTER",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setPublisher operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetPublisherInputSchema(), {
      publishedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, setPublisher(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PUBLISHER",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle recordVerification operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RecordVerificationInputSchema());

    const updatedDocument = reducer(document, recordVerification(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "RECORD_VERIFICATION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle publishPool operation", () => {
    const document = utils.createDocument();
    const input = generateMock(PublishPoolInputSchema(), {
      publishedAt: "2024-01-01T00:00:00.000Z",
    });

    const updatedDocument = reducer(document, publishPool(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "PUBLISH_POOL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle closePool operation", () => {
    const document = utils.createDocument();
    const input = generateMock(ClosePoolInputSchema());

    const updatedDocument = reducer(document, closePool(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("CLOSE_POOL");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle cancelPool operation", () => {
    const document = utils.createDocument();
    const input = generateMock(CancelPoolInputSchema());

    const updatedDocument = reducer(document, cancelPool(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "CANCEL_POOL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle setGovernanceState operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetGovernanceStateInputSchema());

    const updatedDocument = reducer(document, setGovernanceState(input));

    expect(isGrantPoolDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_GOVERNANCE_STATE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
