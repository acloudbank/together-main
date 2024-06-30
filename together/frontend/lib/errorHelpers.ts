import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { includes, reduce } from "lodash";

import { AppErrorCodes, AppErrorObject, AppGraphQlError } from "../errors";

// If It is not Apollo error rethrow it, else check for expected error
export function passthroughExpectedGraphQlErrors(expectedErrors?: AppErrorCodes) {
  return (error: ApolloError): void => {
    if (!error.graphQLErrors) {
      throw error;
    }
    const errors = error?.graphQLErrors as AppGraphQlError[];
    for (const graphQlError of errors) {
      if (!includes(expectedErrors ?? [], graphQlError.extensions?.code)) {
        throw error;
      }
    }
  };
}

export function transformGraphQlErrorsToExpectedError(
  errors?: readonly GraphQLError[]
): AppErrorObject | undefined {
  if (!errors) return undefined;
  return reduce(
    errors,
    (acc, error) => ({
      ...acc,
      [error?.extensions?.code as string]: error as AppGraphQlError,
    }),
    {} as AppErrorObject
  );
}
