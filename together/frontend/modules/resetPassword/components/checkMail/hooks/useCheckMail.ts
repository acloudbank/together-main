import { useApolloMutation } from "common";
import { useRequestPasswordResetMutation } from "generated-graphql";
import { useCallback } from "react";
import { message } from "ui";

type Args = {
  emailSentTo: string;
};

type UseCheckMailResult = {
  handleClick: () => Promise<void>;
};

export function useCheckMail({ emailSentTo }: Args): UseCheckMailResult {
  const [requestPasswordReset, _data] = useApolloMutation(
    useRequestPasswordResetMutation,
    {},
    ["RETRY_LIMIT_ERROR"]
  );

  const handleClick = useCallback(async () => {
    const [result, { errors }] = await requestPasswordReset({
      variables: {
        email: emailSentTo,
      },
    });
    if (errors && errors.RETRY_LIMIT_ERROR) {
      message.error("Password reset email was already sent. Please wait!");
    }
    if (result) {
      message.success("Reset password email is on its way");
    }
  }, [emailSentTo, requestPasswordReset]);
  return {
    handleClick,
  };
}
