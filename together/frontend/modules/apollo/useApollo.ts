import { createApolloClient } from "../../lib";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";
import { LocalStorageSession } from "../../api";
import { UserRole } from "common";

export function useApollo(
  initialState: NormalizedCacheObject,
  session: LocalStorageSession & { expires: string; token: string }
): ApolloClient<NormalizedCacheObject> {
  const apolloClient = useMemo(() => {
    const headers = {
      Authorization: `Bearer ${session?.token}`,
      "X-Hasura-Role": session?.userRole
        ? session?.userRole
        : UserRole.Unauthenticated,
    };
    const client = createApolloClient({
      endpoint: process.env.NEXT_PUBLIC_API_URL,
      headers,
    });
    if (initialState) {
      client.cache.restore(initialState);
    }
    return client;
  }, [initialState, session]);

  return apolloClient;
}
