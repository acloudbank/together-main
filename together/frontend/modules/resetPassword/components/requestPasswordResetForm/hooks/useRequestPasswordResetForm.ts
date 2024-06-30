import { Form, FormInstance } from "ui";
import { RequestPasswordResetFormValues } from "../types";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getReadableErrorMessage, useApolloMutation } from "common";
import { useRequestPasswordResetMutation } from "generated-graphql";

type Args = {
  setEmailSentTo: Dispatch<SetStateAction<string>>;
};

type UseRequestPasswordResetFormResult = {
  form: FormInstance<RequestPasswordResetFormValues>;
  isLoading: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (variables: any) => Promise<void>;
};

export function useRequestPasswordResetForm({
  setEmailSentTo,
}: Args): UseRequestPasswordResetFormResult {
  const [form] = Form.useForm<RequestPasswordResetFormValues>();
  const [email, setEmail] = useState<string | undefined>();
  const [requestPasswordReset, _data, { errors, wasCalled, isLoading }] =
    useApolloMutation(useRequestPasswordResetMutation, {}, [
      "RETRY_LIMIT_ERROR",
      "VALIDATION_ERROR",
    ]);

  const handleSubmit = useCallback(
    async (variables) => {
      const [_result, { errors }] = await requestPasswordReset({
        variables,
      });
      if (errors) {
        let readableErrorMessage = "";
        if (errors.RETRY_LIMIT_ERROR) {
          readableErrorMessage =
            "Password reset email was already sent. Please wait!";
        }
        if (errors.VALIDATION_ERROR) {
          readableErrorMessage = getReadableErrorMessage(
            errors.VALIDATION_ERROR.message
          );
        }
        form.setFields([
          {
            name: "email",
            errors: [readableErrorMessage],
          },
        ]);
      }
    },
    [requestPasswordReset, form]
  );

  useEffect(() => {
    if (email && wasCalled && !isLoading && !errors) {
      setEmailSentTo(email);
    }
  }, [wasCalled, isLoading, errors, setEmailSentTo, email]);

  return {
    form,
    isLoading,
    setEmail,
    handleSubmit,
  };
}
