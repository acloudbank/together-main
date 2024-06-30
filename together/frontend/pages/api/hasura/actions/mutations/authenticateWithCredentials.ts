import moment from "moment";
import { getHasuraAdminClient } from "../../../../../lib";
import { NextApiRequest, NextApiResponse } from "next";
import { toLower } from "lodash";
import { UserAuthenticationError, UserInputError } from "../../../../../errors";
import { SessionType_Enum } from "generated-graphql";
import { createSessionForUser, queryGetUser } from "../../../../../generated";
import { getUserRole, isPasswordCorrect } from "../../../../../common";
import { handleApiError } from "api";

export default async function authenticateWithCredentials(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });

    const password = request.body?.input?.password;
    const email = toLower(request.body?.input?.email);
    if (!email) {
      throw new UserInputError("EMAIL_MISSING", { ref: "email" });
    }

    if (!password) {
      throw new UserInputError("PASSWORD_MISSING", { ref: "password" });
    }

    const [result, _meta] = await queryGetUser({
      variables: {
        where: {
          email: { _eq: email },
        },
      },
      client: adminClient,
    });
    const user = result.user?.length > 0 ? result.user[0] : null;

    if (!user) {
      throw new UserAuthenticationError("INVALID_CREDENTIALS");
    }

    const passwordIsCorrect = isPasswordCorrect(password, user.passwordHash);
    if (!passwordIsCorrect) {
      throw new UserAuthenticationError("INVALID_CREDENTIALS");
    }

    //if (!user.isEmailVerified) {
    // throw new UserAuthenticationError('EMAIL_NOT_VERIFIED')
    //}

    const userId = user.id;
    const userRole = getUserRole(user);
    const expires = moment().add(7, "days").toISOString();

    const [session] = await createSessionForUser({
      variables: {
        userId,
        userRole,
        expires,
        type: SessionType_Enum.Credentials,
      },
      client: adminClient,
    });

    response.json({ sessionId: session.insert_sessions_one?.id });
  } catch (error) {
    handleApiError(error, response);
  }
}
