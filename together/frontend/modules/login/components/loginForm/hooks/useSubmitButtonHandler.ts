import { Form, FormInstance } from "ui";
import { RedirectableProviderType } from "next-auth/providers";
import { useRouter } from "common";
import { useCallback, useState } from "react";

import { useConfirmationEmail } from "../../../../registration/hooks";
import { LoginFormValues } from "../../../types";

import { useLoginCallback } from "./useLoginCallback";

type SubmitButtonHandler = {
  handleSubmit: (values: LoginFormValues) => Promise<void>;
  isLoading: boolean;
  callbackUrl: string | undefined;
  form: FormInstance<LoginFormValues>;
  handleValuesChange: (_changedValues: any, allValues: any) => void;
};

export function useSubmitButtonHandler(): SubmitButtonHandler {
  const router = useRouter();
  const { setConfirmationEmail } = useConfirmationEmail();
  const [isLoading, setIsLoading] = useState(false);
  const [_formValues, setFormValues] = useState<LoginFormValues>();
  const [form] = Form.useForm<LoginFormValues>();

  let callbackUrl = router?.query?.callbackUrl?.toString();

  const appUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  if (!callbackUrl || (appUrl && callbackUrl.includes(`${appUrl}/login`))) {
    callbackUrl = "/explore";
  }

  const login = useLoginCallback();

  // @ts-ignore
  const handleSubmit = useCallback(
    async (values) => {
      setIsLoading(true);
      const signInResponse = await login<RedirectableProviderType>(
        "credentials",
        {
          email: values.email,
          password: values.password,
          redirect: false,
          callbackUrl,
        }
      );
      if (signInResponse?.error) {
        switch (signInResponse.error) {
          case "INVALID_CREDENTIALS":
            form.setFields([
              {
                name: "email",
                errors: [""],
              },
              {
                name: "password",
                errors: ["Invalid email or password"],
              },
            ]);
            break;
          case "EMAIL_NOT_VERIFIED":
            setConfirmationEmail(values.email);
            router.push("/register/email-confirmation");
            break;
          default:
            form.setFields([
              {
                name: "email",
                errors: [""],
              },
              {
                name: "password",
                errors: ["Internal server error"],
              },
            ]);
        }
        setIsLoading(false);
      } else {
        router.push(callbackUrl || "/explore");
      }
    },
    [callbackUrl, form, login, router, setConfirmationEmail]
  );

  const handleValuesChange = useCallback(
    (_changedValues, allValues) => {
      const updatedFields = Object.keys(allValues)
        .filter((name) => form.getFieldError(name).length)
        .map((name) => ({ name, errors: [] }));
      form.setFields(updatedFields);
      setFormValues(allValues);
    },
    [form]
  );

  return {
    handleSubmit,
    isLoading,
    callbackUrl,
    form,
    handleValuesChange,
  };
}
