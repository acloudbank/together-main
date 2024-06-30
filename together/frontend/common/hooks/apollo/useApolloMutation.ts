import * as Apollo from "@apollo/client";
import { ApolloError } from "@apollo/client";
import { AppErrorCodes, AppErrorObject } from "errors";
import { Exact } from "generated-graphql";
import {
  passthroughExpectedGraphQlErrors,
  transformGraphQlErrorsToExpectedError,
} from "lib";
import { useCallback } from "react";

type ApolloMutationResult<TMutation> = Promise<
  [
    TMutation | null | undefined,
    {
      errors?: AppErrorObject;
    }
  ]
>;

type UseApolloMutationResult<
  TMutation,
  TMutationResult,
  TInput extends { [key: string]: unknown }
> = [
  mutate: (
    options?: Apollo.MutationFunctionOptions<
      TMutation,
      Exact<TInput>,
      Apollo.DefaultContext,
      Apollo.ApolloCache<any>
    >
  ) => Promise<ApolloMutationResult<TMutation>>,
  result: TMutation | undefined | null,
  meta: Omit<TMutationResult, "data" | "error" | "loading" | "called"> & {
    errors?: AppErrorObject;
    isLoading: boolean;
    wasCalled: boolean;
  }
];

export function useApolloMutation<
  TMutation,
  TMutationVariables,
  TInput extends { [key: string]: unknown }
>(
  hook: (
    baseOptions?: Apollo.MutationHookOptions<TMutation, TMutationVariables>
  ) => Apollo.MutationTuple<
    TMutation,
    Exact<TInput>,
    Apollo.DefaultContext,
    Apollo.ApolloCache<any>
  >,
  baseOptions?: Apollo.MutationHookOptions<TMutation, TMutationVariables>,
  expectedErrors?: AppErrorCodes
): UseApolloMutationResult<
  TMutation,
  Apollo.MutationResult<TMutation>,
  TInput
> {
  const passthroughOrRethrowError =
    passthroughExpectedGraphQlErrors(expectedErrors);

  let hookResult = {} as Apollo.MutationTuple<
    TMutation,
    Exact<TInput>,
    Apollo.DefaultContext,
    Apollo.ApolloCache<any>
  >;

  try {
    hookResult = hook(baseOptions);
  } catch (error) {
    passthroughOrRethrowError(error as ApolloError);
  }

  const [apolloMutate, { data, error, loading, called, ...rest }] = hookResult;
  const errors = transformGraphQlErrorsToExpectedError(error?.graphQLErrors);

  const mutate = useCallback(
    async (
      options?: Apollo.MutationFunctionOptions<
        TMutation,
        Exact<TInput>,
        Apollo.DefaultContext,
        Apollo.ApolloCache<any>
      >
    ): Promise<ApolloMutationResult<TMutation>> => {
      let result = {} as Apollo.FetchResult<
        TMutation,
        Record<string, unknown>,
        Record<string, unknown>
      >;
      let thrownError: ApolloError | undefined;
      try {
        result = await apolloMutate(options);
      } catch (error) {
        passthroughOrRethrowError(error as ApolloError);
        thrownError = error as ApolloError;
      }

      const { data } = result;
      const errors = transformGraphQlErrorsToExpectedError(
        thrownError?.graphQLErrors
      );
      return [data, { errors }];
    },
    [apolloMutate, passthroughOrRethrowError]
  );

  return [
    mutate,
    data,
    {
      errors,
      isLoading: loading,
      wasCalled: called,
      ...rest,
    },
  ];
}
