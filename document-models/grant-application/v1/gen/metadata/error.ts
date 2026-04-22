export type ErrorCode = "AppSocialNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class AppSocialNotFoundError extends Error implements ReducerError {
  errorCode = "AppSocialNotFoundError" as ErrorCode;
  constructor(message = "AppSocialNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemoveAppSocial: { AppSocialNotFoundError },
};
