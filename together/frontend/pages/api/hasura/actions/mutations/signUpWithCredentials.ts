import { getHasuraAdminClient } from "../../../../../lib";
import { NextApiRequest, NextApiResponse } from "next";
import { toLower } from "lodash";
import { RetryLimitError, UserInputError } from "../../../../../errors";
import { getUserRole, hashPassword, testPassword } from "../../../../../common";
import { SessionType_Enum, UserSource_Enum } from "generated-graphql";
import {
  createSessionForUser,
  insertUser,
  queryGetUser,
  updateUserById,
} from "../../../../../generated";
import moment from "moment";
import {
  generateEmailConfirmationToken,
  handleApiError,
} from "../../../../../api";

const RETRY_LIMIT_SECONDS = 30;

export default async function signUpWithCredentials(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });
    const { password, accountType, username } = request.body.input ?? {};
    let userId = "";
    const email = toLower(request.body?.input?.email);

    if (!username) {
      throw new UserInputError("USERNAME_MISSING", { ref: "username" });
    }

    if (!email) {
      throw new UserInputError("EMAIL_MISSING", { ref: "email" });
    }

    if (!password) {
      throw new UserInputError("PASSWORD_MISSING", { ref: "password" });
    }

    if (testPassword(password).score < 3) {
      throw new UserInputError("PASSWORD_IS_NOT_STRONG_ENOUGH", {
        ref: "password",
      });
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

    if (user?.emailVerified || user?.lastActiveAt) {
      throw new UserInputError("EMAIL_ALREADY_IN_USE", { ref: "email" });
    }

    if (
      user?.emailConfirmationLastSentAt &&
      moment().diff(new Date(user.emailConfirmationLastSentAt)) <
        RETRY_LIMIT_SECONDS * 1000
    ) {
      throw new RetryLimitError(
        "CONFIRMATION_EMAIL_WAS_SENT_LESS_THAN_N_SECONDS_AGO",
        {
          ref: "email",
          messageParams: {
            n: RETRY_LIMIT_SECONDS,
          },
        }
      );
    }

    const passwordHash = hashPassword(password);
    const emailConfirmationToken = generateEmailConfirmationToken();
    const newUser = {
      email,
      accountType,
      passwordHash,
      emailConfirmationToken,
      emailConfirmationLastSentAt: new Date().toISOString(),
      source: UserSource_Enum.SignupCredentials,
      username: username,
    };

    const userRole = getUserRole({
      accountType,
    });
    const expires = moment().add(7, "days").toISOString();

    if (!user) {
      const [result, _meta] = await insertUser({
        variables: { user: newUser },
        client: adminClient,
      });
      userId = result.insert_users_one?.id;
    } else {
      userId = user.id;
      await updateUserById({
        variables: {
          id: user.id,
          user: {
            accountType,
            passwordHash,
            emailConfirmationToken,
            emailConfirmationLastSentAt: new Date().toISOString(),
          },
        },
        client: adminClient,
      });
    }

    const completeRegistrationLink = `${process.env.FRONTEND_URL}?emailConfirmationToken=${emailConfirmationToken}`;

    // const confirmationEmail = new RegistrationEmail({
    //   emailConfirmationLink: completeRegistrationLink,
    // });
    // await confirmationEmail.send({
    //   toEmail: email,
    //   fromName: process.env.EMAIL__SENDER_NAME,
    //   fromEmail: process.env.EMAIL__SENDER_EMAIL,
    // });

    const [sessionResult] = await createSessionForUser({
      variables: {
        userId,
        userRole,
        expires,
        type: SessionType_Enum.Credentials,
      },
      client: adminClient,
    });

    response.json({
      sessionId: sessionResult.insert_sessions_one?.id,
    });
  } catch (error) {
    handleApiError(error, response);
  }
}
