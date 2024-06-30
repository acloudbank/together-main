import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Form, FormInstance } from "ui";
import { ResetPasswordError, ResetPasswordFormValues } from "../types";
import { useResetPasswordRequest } from "./useResetPasswordRequest";
import { useResetPasswordError } from "./useResetPasswordError";
import { testPassword } from "common";

type Args = {
  passwordResetToken: string;
};

type UseResetPasswordFormResult = {
  form: FormInstance<ResetPasswordFormValues>;
  passwordStrengthScore: number;
  isGlobalError: boolean;
  resetPasswordError: ResetPasswordError;
  handleSubmit: (values: any) => Promise<void>;
  setNewPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
};

export function useResetPasswordForm({
  passwordResetToken,
}: Args): UseResetPasswordFormResult {
  const [form] = Form.useForm<ResetPasswordFormValues>();
  const resetPasswordRequest = useResetPasswordRequest();

  const resetPasswordError = useResetPasswordError();

  const [isGlobalError, setIsGlobalError] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!resetPasswordError?.code) {
      return;
    }
    // TODO: This string must be typechecked
    if (resetPasswordError?.code === "VALIDATION_ERROR") {
      form.setFields([
        {
          name: "newPassword",
          errors: [resetPasswordError.message || "Invalid Value"],
        },
      ]);
    } else {
      setIsGlobalError(true);
    }
  }, [
    form,
    resetPasswordError,
    resetPasswordError?.code,
    resetPasswordError?.message,
    setIsGlobalError,
  ]);

  const passwordStrengthScore = useMemo(() => {
    if (newPassword) {
      return testPassword(newPassword).score;
    }
  }, [newPassword]);

  const handleSubmit = useCallback(
    async (values) => {
      setIsLoading(true);
      if (passwordStrengthScore && passwordStrengthScore >= 3) {
        await resetPasswordRequest({
          ...values,
          passwordResetToken,
        });
      } else {
        form.setFields([
          {
            name: "newPassword",
            errors: [
              "Password is not strong enough. Try making your password longer or include special characters and numbers.",
            ],
          },
        ]);
      }
      setIsLoading(false);
    },
    [passwordResetToken, resetPasswordRequest, passwordStrengthScore, form]
  );
  return {
    form,
    passwordStrengthScore,
    isGlobalError,
    resetPasswordError,
    handleSubmit,
    setNewPassword,
    isLoading,
  };
}
