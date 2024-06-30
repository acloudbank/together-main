import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePasswordResetToken } from "./usePasswordResetToken";
import { useApolloMutation } from "common";
import { useValidatePasswordResetTokenMutation } from "generated-graphql";
import { AppErrorObject } from "errors";

type UseResetPasswordPageResult = {
  passwordResetToken: string;
  emailSentTo: string;
  setEmailSentTo: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  errors: AppErrorObject;
};

export function useResetPasswordPage(): UseResetPasswordPageResult {
  const [emailSentTo, setEmailSentTo] = useState<string>();
  const passwordResetToken = usePasswordResetToken();

  const [validatePasswordResetToken, _data, { errors, wasCalled, isLoading }] =
    useApolloMutation(useValidatePasswordResetTokenMutation, {}, [
      "USER_AUTHENTICATION_ERROR",
    ]);

  useEffect(() => {
    if (passwordResetToken && !wasCalled) {
      validatePasswordResetToken({
        variables: {
          passwordResetToken,
        },
      });
    }
  }, [wasCalled, passwordResetToken, validatePasswordResetToken]);

  return {
    passwordResetToken,
    emailSentTo,
    setEmailSentTo,
    isLoading,
    errors,
  };
}
