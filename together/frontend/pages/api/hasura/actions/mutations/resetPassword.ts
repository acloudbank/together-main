import { testPassword } from "../../../../../common";
import { UserAuthenticationError, UserInputError } from "../../../../../errors";
import { getHasuraAdminClient } from "../../../../../lib";
import { NextApiRequest, NextApiResponse } from "next";
import { queryGetUser } from "../../../../../generated";
import { applyNewPassword, handleApiError } from "../../../../../api";

export default async function resetPassword(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });
    const { passwordResetToken, newPassword } = request.body.input ?? {};

    if (!passwordResetToken) {
      throw new UserAuthenticationError("RESET_PASSWORD_TOKEN_MISSING", {
        ref: "passwordResetToken",
      });
    }

    if (!newPassword) {
      throw new UserInputError("PASSWORD_MISSING", { ref: "newPassword" });
    }

    if (testPassword(newPassword).score < 3) {
      throw new UserInputError("PASSWORD_IS_NOT_STRONG_ENOUGH", {
        ref: "password",
      });
    }
    const [result] = await queryGetUser({
      variables: {
        where: {
          passwordResetToken: { _eq: passwordResetToken },
        },
      },
      client: adminClient,
    });

    const user = result.user?.length > 0 ? result.user[0] : null;

    if (!user) {
      throw new UserInputError("USER_NOT_FOUND");
    }

    if (
      user?.passwordResetTokenExpiresAt &&
      new Date(user.passwordResetTokenExpiresAt) > new Date()
    ) {
      const [sessionResult] = await applyNewPassword(
        { userId: user.id, newPassword },
        adminClient
      );

      const session = sessionResult.insert_sessions_one;

      response.json({ sessionId: session?.id });
    } else {
      throw new UserAuthenticationError("RESET_PASSWORD_TOKEN_INVALID", {
        ref: "passwordResetToken",
      });
    }
  } catch (error) {
    handleApiError(error, response);
  }
}
