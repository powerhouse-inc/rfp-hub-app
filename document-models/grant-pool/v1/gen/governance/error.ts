export type ErrorCode = "AlreadyPublishedError" | "InvalidCloseStateError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class AlreadyPublishedError extends Error implements ReducerError {
  errorCode = "AlreadyPublishedError" as ErrorCode;
  constructor(message = "AlreadyPublishedError") {
    super(message);
  }
}

export class InvalidCloseStateError extends Error implements ReducerError {
  errorCode = "InvalidCloseStateError" as ErrorCode;
  constructor(message = "InvalidCloseStateError") {
    super(message);
  }
}

export const errors = {
  PublishPool: { AlreadyPublishedError },
  ClosePool: { InvalidCloseStateError },
};
