import { getHasuraAdminClient } from "../../lib";
import { AuthenticationResultData } from "../";
import { AuthenticateWithCredentialsMutationVariables } from "generated-graphql";
import { authenticateWithCredentials as authenticateWithCredentialsMutation } from "../../generated";
import { ApolloError } from "@apollo/client";

export async function authenticateWithCredentials(
  credentials: AuthenticateWithCredentialsMutationVariables
): Promise<AuthenticationResultData | null | undefined> {
  const adminClient = getHasuraAdminClient();
  try {
    const [{ authenticationResult }, _meta] =
      await authenticateWithCredentialsMutation({
        variables: {
          email: credentials.email,
          password: credentials.password,
        },
        client: adminClient,
      });

    if (authenticationResult?.sessionId) {
      const result: AuthenticationResultData = {
        sessionId: authenticationResult?.sessionId,
      };
      return result;
    }

    // If you return null or false then the credentials will be rejected
    return null;
    // You can also Reject this callback with an Error or with a URL:
    // throw new Error('error message') // Redirect to error page
    // throw '/path/to/redirect'        // Redirect to a URL
  } catch (error) {
    console.log("Error while authenticating with credentials.", error as Error);
    if (error instanceof ApolloError) {
      throw new Error(error.graphQLErrors[0].message);
    } else {
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  }
}
