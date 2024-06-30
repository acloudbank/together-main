import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { map } from "lodash";

import {
  AppGraphQlError,
  getErrorMessage,
  JSON_ENCODED_ERROR_MESSAGE_PREFIX,
} from "../errors";

import { Headers } from "./types";

const errorDecodeLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    const decodedErrors: AppGraphQlError[] = map(
      data?.errors ?? [],
      (error) => {
        if (error?.message?.startsWith(JSON_ENCODED_ERROR_MESSAGE_PREFIX)) {
          const jsonError = error?.message.substring(
            JSON_ENCODED_ERROR_MESSAGE_PREFIX.length
          );
          const decodedError = JSON.parse(jsonError) as AppGraphQlError;
          return {
            ...decodedError,
            message: getErrorMessage(decodedError),
          } as AppGraphQlError;
        }
        return error;
      }
    );
    data.errors = decodedErrors;
    return data;
  });
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((error) => {
      console.log(`GraphQL Error: ${error.message}'`, error.extensions);
    });
  if (networkError) {
    console.log("Network Error", networkError);
  }
});

type CreateApolloClientArgs = {
  headers: Headers;
  endpoint: string;
  httpOptions?: Record<string, unknown>;
  useCache?: boolean;
};

export function createApolloClient(
  options: CreateApolloClientArgs
): ApolloClient<NormalizedCacheObject> {
  const { endpoint, headers, httpOptions, useCache = true } = options;
  const httpLink = new HttpLink({
    uri: endpoint,
    headers,
    ...(httpOptions ?? {}),
  });
  // This should change based on our cache policy
  const cache = useCache
    ? new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              issues: {
                keyArgs: [],
                merge(existing, incoming, { args: { offset = 0 } }) {
                  // Slicing is necessary because the existing data is
                  // immutable, and frozen in development.
                  const merged = existing ? existing.slice(0) : [];
                  for (let i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                  }
                  return merged;
                },
              },
            },
          },
        },
      })
    : new InMemoryCache();

  const defaultOptions: DefaultOptions | undefined = useCache
    ? undefined
    : {
        watchQuery: {
          fetchPolicy: "no-cache",
        },
        query: {
          fetchPolicy: "no-cache",
        },
      };

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, errorDecodeLink, httpLink]),
    cache,
    defaultOptions,
  });
}
