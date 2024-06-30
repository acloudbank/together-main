import { getHasuraAdminClient } from "../../../../../lib";
import { NextApiRequest, NextApiResponse } from "next";
import { toLower } from "lodash";
import { RetryLimitError, UserInputError } from "../../../../../errors";
import { queryGetUser, updateUserById } from "../../../../../generated";
import moment from "moment";
import { generatePasswordResetToken, handleApiError } from "../../../../../api";

const PASSWORD_RESET_PAGE_PATH = "/reset-password";

const RETRY_LIMIT_SECONDS = 30;

export default async function requestPasswordReset(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const client = getHasuraAdminClient({ request });

    const email = toLower(request.body?.input?.email);

    if (!email) {
      throw new UserInputError("EMAIL_MISSING", {
        ref: "email",
        messageParams: { length: 2 },
      });
    }

    const [result] = await queryGetUser({
      variables: {
        where: {
          email: { _eq: email },
        },
      },
      client,
    });

    const user = result.user?.length > 0 ? result.user[0] : null;

    if (!user) {
      throw new UserInputError("USER_NOT_FOUND", { ref: "email" });
    }

    if (
      user.passwordResetLastSentAt &&
      moment().diff(new Date(user.passwordResetLastSentAt)) <
        RETRY_LIMIT_SECONDS * 1000
    ) {
      throw new RetryLimitError(
        "PASSWORD_RESET_EMAIL_WAS_SENT_LESS_THAN_N_SECONDS_AGO",
        { ref: "email", messageParams: { n: RETRY_LIMIT_SECONDS } }
      );
    }

    const passwordResetToken = generatePasswordResetToken();
    const passwordResetTokenExpiresAt = moment().add(7, "days").toISOString();

    await updateUserById({
      variables: {
        id: user.id,
        user: {
          passwordResetToken,
          passwordResetTokenExpiresAt,
          passwordResetLastSentAt: new Date().toISOString(),
        },
      },
      client,
    });

    const resetPasswordLink = `${process.env.FRONTEND_URL}${PASSWORD_RESET_PAGE_PATH}?t=${passwordResetToken}`;

    //   const resetPasswordEmail = new ResetPasswordEmail({
    //     resetPasswordLink: resetPasswordLink,
    //   });
    //   await resetPasswordEmail.send({
    //     toEmail: user.email as string,
    //     fromName: process.env.EMAIL__SENDER_NAME,
    //     fromEmail: process.env.EMAIL__SENDER_EMAIL,
    //   });

    response.json({ email });
  } catch (error) {
    handleApiError(error, response);
  }
}
