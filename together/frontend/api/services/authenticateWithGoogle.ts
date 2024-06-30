import { authenticateWithGoogle as authenticateWithGoogleMutation } from "../../generated";
import { getHasuraAdminClient } from "../../lib";
import { AuthenticationResultData, GoogleCredentials } from "../types";
import { ApolloError } from "@apollo/client";

export async function authenticateWithGoogle(
  credentials: GoogleCredentials
): Promise<(AuthenticationResultData & { id: string }) | null | undefined> {
  const adminClient = getHasuraAdminClient();
  try {
    const [{ authenticationResult }, _meta] =
      await authenticateWithGoogleMutation({
        variables: {
          email: credentials.email,
          username: credentials.username,
        },
        client: adminClient,
      });

    if (authenticationResult?.sessionId) {
      const session: AuthenticationResultData & { id: string } = {
        id: authenticationResult?.sessionId, // next-auth will break if not provided, even though we are not using it
        sessionId: authenticationResult?.sessionId,
      };
      return session;
    }

    // If you return null or false then the credentials will be rejected
    return null;
    // You can also Reject this callback with an Error or with a URL:
    // throw new Error('error message') // Redirect to error page
    // throw '/path/to/redirect'        // Redirect to a URL
  } catch (error) {
    console.log("Error while authenticating with google.", error as Error);
    if (error instanceof ApolloError) {
      throw new Error(error.graphQLErrors[0].message);
    } else {
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  }
}
