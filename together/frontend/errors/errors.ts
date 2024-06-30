import { AppError } from "./AppError";
import { AppErrorCode } from "./types";

export class InternalServerError extends Error {
  public meta?: Record<string, unknown>;

  constructor(message?: string, meta?: Record<string, unknown>) {
    super(message);
    this.message = message || "Internal Server Error";
    this.meta = meta;
  }
}

export type RetryLimitErrorMessageCode =
  | "CONFIRMATION_EMAIL_WAS_SENT_LESS_THAN_N_SECONDS_AGO"
  | "PASSWORD_RESET_EMAIL_WAS_SENT_LESS_THAN_N_SECONDS_AGO";

export class RetryLimitError extends AppError<RetryLimitErrorMessageCode> {
  public status = 401;
  public code: AppErrorCode = "RETRY_LIMIT_ERROR";
}

export type UserAuthenticationErrorMessageCode =
  | "EMAIL_CONFIRMATION_TOKEN_INVALID"
  | "EMAIL_CONFIRMATION_TOKEN_MISSING"
  | "INVALID_CREDENTIALS"
  | "PASSWORD_MISSING"
  | "RESET_PASSWORD_TOKEN_INVALID"
  | "RESET_PASSWORD_TOKEN_MISSING"
  | "NOT_AUTHORIZED"
  | "EMAIL_NOT_VERIFIED"
  | "SESSION_ID_MISSING"
  | "USER_MISSING"
  | "JWT_ERROR";

export class UserAuthenticationError extends AppError<UserAuthenticationErrorMessageCode> {
  public status = 401;
  public code: AppErrorCode = "USER_AUTHENTICATION_ERROR";
}

export type UserInputErrorMessageCode =
  | "EMAIL_ALREADY_IN_USE"
  | "EMAIL_MISSING"
  | "PASSWORD_MISSING"
  | "PASSWORD_IS_NOT_STRONG_ENOUGH"
  | "USER_NOT_FOUND"
  | "OLD_PASSWORD_MISSING"
  | "NEW_PASSWORD_MISSING"
  | "REQUIRED_PARAMETER_MISSING"
  | "MISSING_DATA"
  | "EMAIL_ALREADY_CONFIRMED"
  | "USER_EMAIL_NOT_SET"
  | "USER_ALREADY_EXISTS_WITH_ANOTHER_ROLE"
  | "NOT_ALLOWED"
  | "USERNAME_MISSING";

export class UserInputError extends AppError<UserInputErrorMessageCode> {
  public status = 422;
  public code: AppErrorCode = "VALIDATION_ERROR";
}

export type ExternalApiErrorCode = "EXTERNAL_API_ERROR";
export class ExternalApiError extends AppError<ExternalApiErrorCode> {
  public status = 500;
  public code: AppErrorCode = "EXTERNAL_API_ERROR";
}
