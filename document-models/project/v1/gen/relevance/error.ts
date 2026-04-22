export type ErrorCode = "RelevantPoolNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class RelevantPoolNotFoundError extends Error implements ReducerError {
  errorCode = "RelevantPoolNotFoundError" as ErrorCode;
  constructor(message = "RelevantPoolNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemoveRelevantPool: { RelevantPoolNotFoundError },
};
