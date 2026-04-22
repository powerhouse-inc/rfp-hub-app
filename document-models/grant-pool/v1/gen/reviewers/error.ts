export type ErrorCode = "ReviewerNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class ReviewerNotFoundError extends Error implements ReducerError {
  errorCode = "ReviewerNotFoundError" as ErrorCode;
  constructor(message = "ReviewerNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemoveReviewer: { ReviewerNotFoundError },
};
