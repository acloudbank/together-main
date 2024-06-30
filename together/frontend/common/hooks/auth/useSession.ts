import { useGetSessionByIdQuery } from "generated-graphql";
import { LocalStorageSession } from "../../../api";
import { useSession as useNextAuthSession } from "next-auth/react";
import { useMemo } from "react";
import { useApolloQuery } from "../apollo";

type UseSessionResult = [
  session: LocalStorageSession | null,
  isLoading: boolean
];

export function useSession(): UseSessionResult {
  const nextAuthUseSessionResult = useNextAuthSession();
  const isLoadingNextAuthSession =
    nextAuthUseSessionResult.status === "loading";
  const nextAuthSession =
    nextAuthUseSessionResult.data as unknown as LocalStorageSession | null;

  const sessionId = nextAuthSession?.sessionId;

  const [result, { isLoading: isLoadingSession }] = useApolloQuery(
    useGetSessionByIdQuery,
    {
      variables: {
        sessionId: sessionId,
      },
      skip: !sessionId,
    }
  );

  const isLoading = isLoadingNextAuthSession || isLoadingSession;

  const session = useMemo(() => {
    if (isLoading || !result?.sessions_by_pk) {
      return null;
    }

    return {
      sessionId: result?.sessions_by_pk?.id as string,
      sessionType: result?.sessions_by_pk?.type,
      userId: result?.sessions_by_pk?.userId as string,
      userRole: result?.sessions_by_pk?.userRole,
    } as LocalStorageSession;
  }, [isLoading, result?.sessions_by_pk]);

  return [session, isLoading];
}
