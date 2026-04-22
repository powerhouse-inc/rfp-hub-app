export type ErrorCode = "FundingAmountNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class FundingAmountNotFoundError extends Error implements ReducerError {
  errorCode = "FundingAmountNotFoundError" as ErrorCode;
  constructor(message = "FundingAmountNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemovePoolSizeEntry: { FundingAmountNotFoundError },
};
