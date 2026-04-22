export type ErrorCode = "InvalidLifecycleTransitionError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class InvalidLifecycleTransitionError
  extends Error
  implements ReducerError
{
  errorCode = "InvalidLifecycleTransitionError" as ErrorCode;
  constructor(message = "InvalidLifecycleTransitionError") {
    super(message);
  }
}

export const errors = {
  AdvanceLifecycle: { InvalidLifecycleTransitionError },
};
