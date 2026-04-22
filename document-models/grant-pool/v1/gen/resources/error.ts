export type ErrorCode =
  | "DuplicateCredentialError"
  | "CredentialNotFoundError"
  | "ContextDocumentNotFoundError"
  | "SameAsAlreadyExistsError"
  | "SameAsNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class DuplicateCredentialError extends Error implements ReducerError {
  errorCode = "DuplicateCredentialError" as ErrorCode;
  constructor(message = "DuplicateCredentialError") {
    super(message);
  }
}

export class CredentialNotFoundError extends Error implements ReducerError {
  errorCode = "CredentialNotFoundError" as ErrorCode;
  constructor(message = "CredentialNotFoundError") {
    super(message);
  }
}

export class ContextDocumentNotFoundError
  extends Error
  implements ReducerError
{
  errorCode = "ContextDocumentNotFoundError" as ErrorCode;
  constructor(message = "ContextDocumentNotFoundError") {
    super(message);
  }
}

export class SameAsAlreadyExistsError extends Error implements ReducerError {
  errorCode = "SameAsAlreadyExistsError" as ErrorCode;
  constructor(message = "SameAsAlreadyExistsError") {
    super(message);
  }
}

export class SameAsNotFoundError extends Error implements ReducerError {
  errorCode = "SameAsNotFoundError" as ErrorCode;
  constructor(message = "SameAsNotFoundError") {
    super(message);
  }
}

export const errors = {
  AddRequiredCredential: { DuplicateCredentialError },
  RemoveRequiredCredential: { CredentialNotFoundError },
  RemoveContextDocument: { ContextDocumentNotFoundError },
  AddPoolSameAs: { SameAsAlreadyExistsError },
  RemovePoolSameAs: { SameAsNotFoundError },
};
