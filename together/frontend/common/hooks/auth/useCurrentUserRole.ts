import { includes, values } from "lodash";

import { useCurrentUser } from "./useCurrentUser";
// eslint-disable-next-line no-restricted-imports
import { useSession } from "./useSession";
import { Maybe } from "generated-graphql";
import { UserRole } from "../../types";

export function useCurrentUserRole(): [
  currentUserRole: Maybe<UserRole>,
  isLoading: boolean
] {
  const [session, isLoadingSession] = useSession();
  const [_currentUser, isCurrentUserLoading] = useCurrentUser();

  let currentUserRole: Maybe<UserRole> = null;

  if (!isLoadingSession && !isCurrentUserLoading) {
    if (!includes(values(UserRole), session?.userRole)) {
      currentUserRole = UserRole.Unauthenticated;
    } else {
      currentUserRole = session?.userRole;
    }
  }

  return [currentUserRole, isLoadingSession || isCurrentUserLoading];
}
