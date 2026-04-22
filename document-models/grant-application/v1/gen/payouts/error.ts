export type ErrorCode = "InvalidCompleteError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class InvalidCompleteError extends Error implements ReducerError {
  errorCode = "InvalidCompleteError" as ErrorCode;
  constructor(message = "InvalidCompleteError") {
    super(message);
  }
}

export const errors = {
  MarkCompleted: { InvalidCompleteError },
};
