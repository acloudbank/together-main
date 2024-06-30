import { handleApiError } from "api";
import { UserAuthenticationError, UserInputError } from "errors";
import { queryGetUser } from "generated";
import { getHasuraAdminClient } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function validatePasswordResetToken(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });
    const { passwordResetToken } = request.body.input ?? {};
    if (!passwordResetToken) {
      throw new UserAuthenticationError("RESET_PASSWORD_TOKEN_MISSING", {
        ref: "passwordResetToken",
      });
    }

    const [result, _meta] = await queryGetUser({
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
      const userId = user.id;

      response.json({ userId });
    } else {
      throw new UserAuthenticationError("RESET_PASSWORD_TOKEN_INVALID", {
        ref: "passwordResetToken",
      });
    }
  } catch (error) {
    handleApiError(error, response);
  }
}
