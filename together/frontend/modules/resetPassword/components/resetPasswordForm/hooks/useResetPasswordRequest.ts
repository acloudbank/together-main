import { signIn, SignInResponse } from "next-auth/react";
import { useCallback } from "react";

type ResetPasswordRequestArgs = {
  passwordResetToken: string;
  newPassword: string;
};

type ResetPasswordRequestResponse = (
  args: ResetPasswordRequestArgs
) => Promise<SignInResponse | undefined>;

export function useResetPasswordRequest(): ResetPasswordRequestResponse {
  const resetPasswordRequest = useCallback(
    async (args: ResetPasswordRequestArgs) => {
      const { passwordResetToken, newPassword } = args;
      return await signIn("credentials", {
        passwordResetToken,
        newPassword,
        callbackUrl: "/",
      });
    },
    []
  );
  return resetPasswordRequest;
}
