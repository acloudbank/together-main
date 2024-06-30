import * as Apollo from "@apollo/client";
import { ApolloError } from "@apollo/client";
import nodeFetch from "node-fetch";

import { AppErrorObject } from "../errors";

import { ApolloBaseOptions, Headers } from "./types";

import {
  createApolloClient,
  passthroughExpectedGraphQlErrors,
  transformGraphQlErrorsToExpectedError,
} from ".";

type ConstructorOptions = {
  endpoint: string;
  headers: Headers;
  useCache?: boolean;
};

type ApolloMutationResult<TResult> = [
  result: TResult | null | undefined,
  meta: {
    errors?: AppErrorObject;
  }
];

type ApolloQueryResult<TResult> = [
  result: TResult | undefined,
  meta: {
    errors?: AppErrorObject;
    isLoading: boolean;
    isPartial?: boolean;
    networkStatus: Apollo.NetworkStatus;
  }
];

export class HasuraClient {
  public apolloClient: Apollo.ApolloClient<Apollo.NormalizedCacheObject>;

  constructor(options: ConstructorOptions) {
    const { endpoint, headers, useCache } = options;

    this.apolloClient = createApolloClient({
      headers,
      endpoint,
      httpOptions: { fetch: nodeFetch },
      useCache,
    });
  }

  public async mutate<
    TResult,
    TVariables,
    TOptions extends ApolloBaseOptions = Record<string, never>
  >(
    mutation: Apollo.DocumentNode,
    options?: TOptions
  ): Promise<ApolloMutationResult<TResult>> {
    const { expectedErrors, ...apolloOptions } = options ?? {};
    const passthroughOrRethrowError =
      passthroughExpectedGraphQlErrors(expectedErrors);

    let mutationResult = {} as Apollo.FetchResult<
      TResult,
      Record<string, unknown>,
      Record<string, unknown>
    >;
    try {
      mutationResult = await this.apolloClient.mutate<TResult, TVariables>({
        mutation,
        ...apolloOptions,
      });
    } catch (error) {
      passthroughOrRethrowError(error as ApolloError);
    }

    const errors = transformGraphQlErrorsToExpectedError(mutationResult.errors);

    return [
      mutationResult.data,
      {
        errors,
      },
    ];
  }

  public async query<
    TResult,
    TVariables,
    TOptions extends ApolloBaseOptions = Record<string, never>
  >(
    query: Apollo.DocumentNode,
    options?: TOptions
  ): Promise<ApolloQueryResult<TResult>> {
    const { expectedErrors, ...apolloOptions } = options ?? {};
    const passthroughOrRethrowError =
      passthroughExpectedGraphQlErrors(expectedErrors);

    let queryResult = {} as Apollo.ApolloQueryResult<TResult>;

    try {
      queryResult = await this.apolloClient.query<TResult, TVariables>({
        query,
        ...apolloOptions,
      });
    } catch (error) {
      passthroughOrRethrowError(error as ApolloError);
    }

    const errors = transformGraphQlErrorsToExpectedError(
      queryResult.error?.graphQLErrors
    );

    return [
      queryResult.data,
      {
        errors,
        isLoading: queryResult.loading,
        isPartial: queryResult.partial,
        networkStatus: queryResult.networkStatus,
      },
    ];
  }
}
