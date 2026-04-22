export type ErrorCode = "FundsAskedNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class FundsAskedNotFoundError extends Error implements ReducerError {
  errorCode = "FundsAskedNotFoundError" as ErrorCode;
  constructor(message = "FundsAskedNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemoveFundsAsked: { FundsAskedNotFoundError },
};
