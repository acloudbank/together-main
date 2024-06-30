import { Maybe, useGetCurrentUserByIdQuery } from "generated-graphql";
import { useSession } from "./useSession";
import { useInvalidateQueries } from "../../../modules/apollo";
import { useCallback } from "react";
import { useApolloQuery } from "common";
import { AppErrorObject } from "errors";

export function useCurrentUser(): [
  currentUser: Maybe<ReturnType<typeof useGetCurrentUserByIdQuery>["data"]["user"][0]>,
  isLoading: ReturnType<typeof useGetCurrentUserByIdQuery>["loading"],
  errors: AppErrorObject,
  reload: () => Promise<void>
] {
  const [session, isLoadingSession] = useSession();
  const { invalidateQueries } = useInvalidateQueries();

  const [data, { isLoading: isLoadingCurrentUser, errors: currentUserErrors }] =
    useApolloQuery(useGetCurrentUserByIdQuery, {
      variables: {
        userId: session?.userId,
      },
      skip: isLoadingSession || !session?.sessionId || !session?.userId,
    });

  const currentUser = data?.user?.length > 0 ? data.user[0] : null;

  const isLoading = isLoadingCurrentUser || isLoadingSession;
  const errors = currentUserErrors;

  const reload = useCallback(async () => {
    invalidateQueries({
      queryNames: ["users"],
    });
  }, [invalidateQueries]);

  return [currentUser, isLoading, errors, reload];
}
