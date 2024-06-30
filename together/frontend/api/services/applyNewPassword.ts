import { SessionType_Enum } from "generated-graphql";
import { HasuraClient } from "../../lib";
import {
  createSessionForUser,
  invalidateSessionsForUser,
  queryGetUserById,
  updateUserById,
} from "../../generated";
import { getUserRole, hashPassword } from "../../common";
import moment from "moment";

export async function applyNewPassword(
  { userId, newPassword }: { userId: string; newPassword: string },
  client: HasuraClient
) {
  await invalidateSessionsForUser({
    variables: {
      userId,
    },
    client,
  });

  const passwordHash = hashPassword(newPassword);

  await updateUserById({
    variables: {
      id: userId,
      user: {
        passwordResetToken: null,
        passwordResetTokenExpiresAt: null,
        passwordResetLastSentAt: null,
        emailVerified: true,
        passwordHash,
      },
    },
    client,
  });

  const [result] = await queryGetUserById({
    variables: {
      userId,
    },
    client,
  });

  const user = result.user;

  const userRole = getUserRole(user);
  const expires = moment().add(7, "days").toISOString();

  return await createSessionForUser({
    variables: {
      userId,
      userRole,
      expires,
      type: SessionType_Enum.Credentials,
    },
    client,
  });
}
