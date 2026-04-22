export type ErrorCode =
  | "DuplicateCategoryError"
  | "CategoryNotFoundError"
  | "DuplicateEcosystemError"
  | "EcosystemNotFoundError"
  | "DuplicateTagError"
  | "TagNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class DuplicateCategoryError extends Error implements ReducerError {
  errorCode = "DuplicateCategoryError" as ErrorCode;
  constructor(message = "DuplicateCategoryError") {
    super(message);
  }
}

export class CategoryNotFoundError extends Error implements ReducerError {
  errorCode = "CategoryNotFoundError" as ErrorCode;
  constructor(message = "CategoryNotFoundError") {
    super(message);
  }
}

export class DuplicateEcosystemError extends Error implements ReducerError {
  errorCode = "DuplicateEcosystemError" as ErrorCode;
  constructor(message = "DuplicateEcosystemError") {
    super(message);
  }
}

export class EcosystemNotFoundError extends Error implements ReducerError {
  errorCode = "EcosystemNotFoundError" as ErrorCode;
  constructor(message = "EcosystemNotFoundError") {
    super(message);
  }
}

export class DuplicateTagError extends Error implements ReducerError {
  errorCode = "DuplicateTagError" as ErrorCode;
  constructor(message = "DuplicateTagError") {
    super(message);
  }
}

export class TagNotFoundError extends Error implements ReducerError {
  errorCode = "TagNotFoundError" as ErrorCode;
  constructor(message = "TagNotFoundError") {
    super(message);
  }
}

export const errors = {
  AddCategory: { DuplicateCategoryError },
  RemoveCategory: { CategoryNotFoundError },
  AddEcosystem: { DuplicateEcosystemError },
  RemoveEcosystem: { EcosystemNotFoundError },
  AddTag: { DuplicateTagError },
  RemoveTag: { TagNotFoundError },
};
