import { GraphQLError } from "graphql";

export type AppErrorCode =
  | "INTERNAL_SERVER_ERROR"
  | "USER_AUTHENTICATION_ERROR"
  | "VALIDATION_ERROR"
  | "RETRY_LIMIT_ERROR"
  | "CONFIGURATION_ERROR"
  | "EXTERNAL_API_ERROR";

export enum AppErrorCodeEnum {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  USER_AUTHENTICATION_ERROR = "USER_AUTHENTICATION_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  RETRY_LIMIT_ERROR = "RETRY_LIMIT_ERROR",
  CONFIGURATION_ERROR = "CONFIGURATION_ERROR",
  EXTERNAL_API_ERROR = "EXTERNAL_API_ERROR",
}

export type AppErrorCodes = Array<AppErrorCode>;

export interface AppGraphQlError extends GraphQLError {
  extensions: {
    code: AppErrorCode;
    status: number;
    messageCode?: unknown;
    messageParams?: Record<string, unknown>;
    ref?: string;
  };
}

export type AppErrorObject = Record<AppErrorCode, AppGraphQlError>;
