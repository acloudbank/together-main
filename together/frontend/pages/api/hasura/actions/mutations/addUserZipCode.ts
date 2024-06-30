import { handleApiError } from "api";
import { UserAuthenticationError } from "errors";
import { queryGetSessionById, updateUserById } from "generated";
import { getHasuraAdminClient } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function addUserZipCode(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const adminClient = getHasuraAdminClient({ request });
    const { sessionId, zipCode } = request.body.input ?? {};

    if (!sessionId) {
      throw new UserAuthenticationError("SESSION_ID_MISSING", {
        ref: "zipCode",
      });
    }

    const [sessionResult] = await queryGetSessionById({
      variables: {
        sessionId,
      },
      client: adminClient,
    });

    const session = sessionResult?.session;
    const user = session?.user;
    if (!user) {
      throw new UserAuthenticationError("USER_MISSING", {
        ref: "zipCode",
      });
    }
    const [data, _meta] = await updateUserById({
      variables: {
        id: user.id,
        user: {
          zipCode,
        },
      },
      client: adminClient,
    });

    response.json({
      userId: data?.update_users_by_pk?.id,
    });
  } catch (error) {
    handleApiError(error, response);
  }
}
