export type ErrorCode =
  | "ProjectSocialNotFoundError"
  | "ProjectSocialNotFoundUpdateError"
  | "SameAsAlreadyExistsError"
  | "SameAsNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class ProjectSocialNotFoundError extends Error implements ReducerError {
  errorCode = "ProjectSocialNotFoundError" as ErrorCode;
  constructor(message = "ProjectSocialNotFoundError") {
    super(message);
  }
}

export class ProjectSocialNotFoundUpdateError
  extends Error
  implements ReducerError
{
  errorCode = "ProjectSocialNotFoundUpdateError" as ErrorCode;
  constructor(message = "ProjectSocialNotFoundUpdateError") {
    super(message);
  }
}

export class SameAsAlreadyExistsError extends Error implements ReducerError {
  errorCode = "SameAsAlreadyExistsError" as ErrorCode;
  constructor(message = "SameAsAlreadyExistsError") {
    super(message);
  }
}

export class SameAsNotFoundError extends Error implements ReducerError {
  errorCode = "SameAsNotFoundError" as ErrorCode;
  constructor(message = "SameAsNotFoundError") {
    super(message);
  }
}

export const errors = {
  RemoveProjectSocial: { ProjectSocialNotFoundError },
  UpdateProjectSocialUrl: { ProjectSocialNotFoundUpdateError },
  AddProjectSameAs: { SameAsAlreadyExistsError },
  RemoveProjectSameAs: { SameAsNotFoundError },
};
