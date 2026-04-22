export type ErrorCode =
  | "SameAsAlreadyExistsError"
  | "SameAsNotFoundError"
  | "SocialNotFoundError"
  | "SocialNotFoundUpdateError";

export interface ReducerError {
  errorCode: ErrorCode;
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

export class SocialNotFoundError extends Error implements ReducerError {
  errorCode = "SocialNotFoundError" as ErrorCode;
  constructor(message = "SocialNotFoundError") {
    super(message);
  }
}

export class SocialNotFoundUpdateError extends Error implements ReducerError {
  errorCode = "SocialNotFoundUpdateError" as ErrorCode;
  constructor(message = "SocialNotFoundUpdateError") {
    super(message);
  }
}

export const errors = {
  AddSameAs: { SameAsAlreadyExistsError },
  RemoveSameAs: { SameAsNotFoundError },
  RemoveSocial: { SocialNotFoundError },
  UpdateSocialUrl: { SocialNotFoundUpdateError },
};
