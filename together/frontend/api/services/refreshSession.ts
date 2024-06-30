import { getHasuraAdminClient } from "../../lib";
import { LocalStorageSession } from "../../api/types";
import { UserRole } from "../../common";
import { includes } from "lodash";
import moment from "moment";
import { refreshSession as refreshSessionMutation } from "../../generated";

export async function refreshSession(
  session: LocalStorageSession
): Promise<LocalStorageSession> {
  const client = getHasuraAdminClient();

  const userRole = session?.userRole as UserRole;

  const shouldUpdateUserActivity = !includes(
    [UserRole.Unauthenticated, UserRole.SignupInProgress],
    userRole
  );

  const expires = moment().add(1, "month").toISOString();
  const lastActiveAt = moment().toISOString();

  if (shouldUpdateUserActivity) {
    await refreshSessionMutation({
      variables: {
        sessionId: session.sessionId,
        lastActiveAt,
        expires,
        userId: session.userId,
      },
      client,
    });
  }

  return session;
}
