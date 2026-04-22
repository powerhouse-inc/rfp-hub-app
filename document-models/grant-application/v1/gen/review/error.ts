export type ErrorCode =
  | "InvalidSubmitTransitionError"
  | "InvalidOpenTransitionError"
  | "InvalidStartReviewError"
  | "InvalidRequestRevisionError"
  | "InvalidMarkRevisedError"
  | "InvalidApproveError"
  | "InvalidConditionalApproveError"
  | "InvalidRejectError"
  | "InvalidWithdrawError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class InvalidSubmitTransitionError
  extends Error
  implements ReducerError
{
  errorCode = "InvalidSubmitTransitionError" as ErrorCode;
  constructor(message = "InvalidSubmitTransitionError") {
    super(message);
  }
}

export class InvalidOpenTransitionError extends Error implements ReducerError {
  errorCode = "InvalidOpenTransitionError" as ErrorCode;
  constructor(message = "InvalidOpenTransitionError") {
    super(message);
  }
}

export class InvalidStartReviewError extends Error implements ReducerError {
  errorCode = "InvalidStartReviewError" as ErrorCode;
  constructor(message = "InvalidStartReviewError") {
    super(message);
  }
}

export class InvalidRequestRevisionError extends Error implements ReducerError {
  errorCode = "InvalidRequestRevisionError" as ErrorCode;
  constructor(message = "InvalidRequestRevisionError") {
    super(message);
  }
}

export class InvalidMarkRevisedError extends Error implements ReducerError {
  errorCode = "InvalidMarkRevisedError" as ErrorCode;
  constructor(message = "InvalidMarkRevisedError") {
    super(message);
  }
}

export class InvalidApproveError extends Error implements ReducerError {
  errorCode = "InvalidApproveError" as ErrorCode;
  constructor(message = "InvalidApproveError") {
    super(message);
  }
}

export class InvalidConditionalApproveError
  extends Error
  implements ReducerError
{
  errorCode = "InvalidConditionalApproveError" as ErrorCode;
  constructor(message = "InvalidConditionalApproveError") {
    super(message);
  }
}

export class InvalidRejectError extends Error implements ReducerError {
  errorCode = "InvalidRejectError" as ErrorCode;
  constructor(message = "InvalidRejectError") {
    super(message);
  }
}

export class InvalidWithdrawError extends Error implements ReducerError {
  errorCode = "InvalidWithdrawError" as ErrorCode;
  constructor(message = "InvalidWithdrawError") {
    super(message);
  }
}

export const errors = {
  SubmitApplication: { InvalidSubmitTransitionError },
  OpenApplication: { InvalidOpenTransitionError },
  StartReview: { InvalidStartReviewError },
  RequestRevision: { InvalidRequestRevisionError },
  MarkRevised: { InvalidMarkRevisedError },
  ApproveApplication: { InvalidApproveError },
  ConditionallyApprove: { InvalidConditionalApproveError },
  RejectApplication: { InvalidRejectError },
  WithdrawApplication: { InvalidWithdrawError },
};
