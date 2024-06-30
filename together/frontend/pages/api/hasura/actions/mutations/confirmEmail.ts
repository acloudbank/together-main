import { SessionType_Enum, Users_Set_Input } from "generated-graphql";
import { getUserRole } from "../../../../../common";
import { UserAuthenticationError } from "../../../../../errors";
import { getHasuraAdminClient } from "../../../../../lib";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import {
  createSessionForUser,
  queryGetUser,
  updateUserById,
} from "../../../../../generated";
import { handleApiError } from "api";

export default async function confirmEmail(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });
    const { emailConfirmationToken } = request.body.input ?? {};
    if (!emailConfirmationToken) {
      throw new UserAuthenticationError("EMAIL_CONFIRMATION_TOKEN_MISSING", {
        ref: "emailConfirmationToken",
      });
    }

    // TODO: Throw error if another user has confirmed this email already

    const [result] = await queryGetUser({
      variables: {
        where: {
          emailConfirmationToken: { _eq: emailConfirmationToken },
        },
      },
      client: adminClient,
    });

    const user = result.user?.length > 0 ? result.user[0] : null;

    if (!user) {
      throw new UserAuthenticationError("EMAIL_CONFIRMATION_TOKEN_INVALID", {
        ref: "emailConfirmationToken",
      });
    }

    const userId = user.id;

    const updatedUser: Users_Set_Input = {
      emailVerified: true,
      emailConfirmationToken: null,
    };

    await updateUserById({
      variables: {
        id: userId,
        user: updatedUser,
      },
      client: adminClient,
    });
    const userRole = getUserRole(user);
    const expires = moment().add(7, "days").toISOString();

    const [sessionResult] = await createSessionForUser({
      variables: {
        userId,
        userRole,
        expires,
        type: SessionType_Enum.Credentials,
      },
      client: adminClient,
    });

    response.json({ sessionId: sessionResult.insert_sessions_one?.id });
  } catch (error) {
    handleApiError(error, response);
  }
}
