import * as Apollo from "@apollo/client";
import { ApolloError } from "@apollo/client";
import { AppErrorCodes, AppErrorObject } from "errors";
import { Exact } from "generated-graphql";
import {
  passthroughExpectedGraphQlErrors,
  transformGraphQlErrorsToExpectedError,
} from "lib";

type UseApolloQueryResult<TQuery, TQueryResult> = [
  result: TQuery | undefined,
  meta: Omit<TQueryResult, "data" | "error" | "loading" | "called"> & {
    errors: AppErrorObject | undefined;
    isLoading: boolean;
    wasCalled: boolean;
  }
];

export function useApolloQuery<
  TQuery,
  TQueryVariables,
  TInput extends { [key: string]: unknown }
>(
  hook: (
    baseOptions?: Apollo.QueryHookOptions<TQuery, TQueryVariables>
  ) => Apollo.QueryResult<TQuery, Exact<TInput>>,
  baseOptions?: Apollo.QueryHookOptions<TQuery, TQueryVariables>,
  expectedErrors?: AppErrorCodes
): UseApolloQueryResult<TQuery, Apollo.QueryResult<TQuery, Exact<TInput>>> {
  const passthroughOrRethrowError =
    passthroughExpectedGraphQlErrors(expectedErrors);
  let queryResult = {} as Apollo.QueryResult<TQuery, Exact<TInput>>;
  try {
    queryResult = hook(baseOptions);
    //Apollo.useQuery<TResult, TVariables>(query, apolloOptions)
  } catch (error) {
    passthroughOrRethrowError(error as ApolloError);
  }
  const { data, error, loading, called, ...rest } = queryResult;
  const errors = transformGraphQlErrorsToExpectedError(error?.graphQLErrors);

  return [
    data,
    {
      errors,
      isLoading: loading,
      wasCalled: called,
      ...rest,
    },
  ];
}
