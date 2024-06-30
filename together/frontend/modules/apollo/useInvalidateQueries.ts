import { ApolloCache, useApolloClient } from "@apollo/client";
import { useMemo } from "react";

type Values<T = unknown> = {
  queryNames: string[];
  cache?: ApolloCache<T>;
};

type UseInvalidateQueriesResult = {
  invalidateQueries: ({ queryNames, cache }: Values) => void;
};

export function useInvalidateQueries(): UseInvalidateQueriesResult {
  const client = useApolloClient();

  const invalidateQueries = useMemo(() => {
    return ({ queryNames, cache }: Values) => {
      const apolloCache = cache || client.cache;
      queryNames?.map((queryName) => {
        apolloCache.evict({ id: "ROOT_QUERY", fieldName: queryName });
      });
      apolloCache.gc();
    };
  }, [client.cache]);

  return { invalidateQueries };
}
