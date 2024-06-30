import { getHasuraAdminClient } from "../../lib";
import { AuthenticationResultData } from "..";
import { ConfirmEmailMutationVariables } from "generated-graphql";
import { confirmEmail as confirmEmailMutation } from "../../generated";
import { ApolloError } from "@apollo/client";

export async function confirmEmail(
  credentials: ConfirmEmailMutationVariables
): Promise<AuthenticationResultData | undefined> {
  const adminClient = getHasuraAdminClient();

  try {
    const [{ result }] = await confirmEmailMutation({
      variables: {
        emailConfirmationToken: credentials.emailConfirmationToken,
      },
      expectedErrors: ["USER_AUTHENTICATION_ERROR"],
      client: adminClient,
    });

    if (result?.sessionId) {
      const session: AuthenticationResultData = {
        sessionId: result.sessionId,
      };
      return session;
    }
  } catch (error) {
    if (error instanceof ApolloError) {
      throw new Error(error.graphQLErrors[0].message);
    } else {
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  }
}
