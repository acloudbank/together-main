import { queryGetSessionById } from "../../generated";
import { getHasuraAdminClient } from "../../lib";

export async function getSessionById(sessionId: string) {
  const client = getHasuraAdminClient();

  const [sessionResult] = await queryGetSessionById({
    variables: {
      sessionId,
    },
    client,
  });

  const session = sessionResult?.session;
  return session;
}
