import moment from "moment";
import { getHasuraAdminClient } from "../../../../../lib";
import type { NextApiRequest, NextApiResponse } from "next";
import { toLower } from "lodash";
import { UserInputError } from "../../../../../errors";
import { SessionType_Enum, UserSource_Enum } from "generated-graphql";
import {
  createSessionForUser,
  insertUser,
  queryGetUser,
  updateUserById,
} from "../../../../../generated";
import { UserRole, getUserRole } from "../../../../../common";
import { handleApiError } from "api";

export default async function authenticateWithGoogle(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });

    const { username } = request.body.input;
    const accountType = UserRole.SignupInProgress;
    const email = toLower(request.body?.input?.email);
    if (!email) {
      throw new UserInputError("EMAIL_MISSING", { ref: "email" });
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

    let userId = user?.id;

    // No user
    if (!user) {
      const newUser = {
        email,
        accountType,
        username,
        source: UserSource_Enum.SignupGoogle,
      };
      const [result] = await insertUser({
        variables: { user: newUser },
        client: adminClient,
      });
      userId = result.insert_users_one?.id;
      //
    } else if (user.accountType !== UserRole.SignupInProgress) {
      await updateUserById({
        variables: {
          id: user.id,
          user: {
            emailVerified: true,
          },
        },
        client: adminClient,
      });
    }
    const userRole = user ? getUserRole(user) : accountType;
    const expires = moment().add(7, "days").toISOString();

    const [session] = await createSessionForUser({
      variables: {
        userId,
        userRole,
        expires,
        type: SessionType_Enum.Google,
      },
      client: adminClient,
    });

    response.json({ sessionId: session.insert_sessions_one?.id });
  } catch (error) {
    handleApiError(error, response);
  }
}
