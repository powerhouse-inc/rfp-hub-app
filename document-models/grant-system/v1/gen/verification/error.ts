export type ErrorCode =
  | "InvalidStateTransitionError"
  | "InvalidApproveStateError"
  | "InvalidRejectStateError"
  | "InvalidSuspendStateError"
  | "InvalidRevokeStateError"
  | "InvalidReinstateStateError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class InvalidStateTransitionError extends Error implements ReducerError {
  errorCode = "InvalidStateTransitionError" as ErrorCode;
  constructor(message = "InvalidStateTransitionError") {
    super(message);
  }
}

export class InvalidApproveStateError extends Error implements ReducerError {
  errorCode = "InvalidApproveStateError" as ErrorCode;
  constructor(message = "InvalidApproveStateError") {
    super(message);
  }
}

export class InvalidRejectStateError extends Error implements ReducerError {
  errorCode = "InvalidRejectStateError" as ErrorCode;
  constructor(message = "InvalidRejectStateError") {
    super(message);
  }
}

export class InvalidSuspendStateError extends Error implements ReducerError {
  errorCode = "InvalidSuspendStateError" as ErrorCode;
  constructor(message = "InvalidSuspendStateError") {
    super(message);
  }
}

export class InvalidRevokeStateError extends Error implements ReducerError {
  errorCode = "InvalidRevokeStateError" as ErrorCode;
  constructor(message = "InvalidRevokeStateError") {
    super(message);
  }
}

export class InvalidReinstateStateError extends Error implements ReducerError {
  errorCode = "InvalidReinstateStateError" as ErrorCode;
  constructor(message = "InvalidReinstateStateError") {
    super(message);
  }
}

export const errors = {
  RequestVerification: { InvalidStateTransitionError },
  ApproveVerification: { InvalidApproveStateError },
  RejectVerification: { InvalidRejectStateError },
  SuspendVerification: { InvalidSuspendStateError },
  RevokeVerification: { InvalidRevokeStateError },
  ReinstateVerification: { InvalidReinstateStateError },
};
