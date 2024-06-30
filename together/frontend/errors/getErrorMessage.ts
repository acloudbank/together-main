import { AppGraphQlError } from "./types";

export function getErrorMessage(error: AppGraphQlError): string {
  // TBD: use translation if exists, otherwise:
  return (error?.extensions?.messageCode || error.message || "") as string;
}
