import { getHasuraAdminClient } from "../../lib";
import { AuthenticationResultData } from "../";
import { ResetPasswordMutationVariables } from "generated-graphql";
import { resetPassword as resetPasswordMutation } from "../../generated";
import { ApolloError } from "@apollo/client";

export async function resetPassword(
  credentials: ResetPasswordMutationVariables
): Promise<AuthenticationResultData | undefined> {
  const adminClient = getHasuraAdminClient();

  try {
    const [{ result }] = await resetPasswordMutation({
      variables: {
        passwordResetToken: credentials.passwordResetToken,
        newPassword: credentials.newPassword,
      },
      client: adminClient,
    });

    if (result?.sessionId) {
      const session: AuthenticationResultData = {
        sessionId: result.sessionId,
      };
      return session;
    }

    throw new Error("INTERNAL_SERVER_ERROR");
  } catch (error) {
    console.log("Error while resetting password.", error as Error);
    if (error instanceof ApolloError) {
      throw new Error(error.graphQLErrors[0].message);
    } else {
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  }
}
