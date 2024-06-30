import { Form, FormInstance, message } from "ui";
import { capitalize } from "lodash";
import { signIn } from "next-auth/react";
import { useCallback, useMemo, useState } from "react";

import { RegistrationFormValues, ZipCodeFormValues } from "../types";
import {
  useAddUserZipCodeMutation,
  useSignUpWithCredentialsMutation,
} from "../../../generated/graphql";
import { UserRole, testPassword, useApolloMutation } from "common";

type Args = {
  next: () => void;
};

type UseRegistrationResult = {
  registrationForm: FormInstance<RegistrationFormValues>;
  handleRegistrationFormChange: (
    _changedValues: RegistrationFormValues,
    allValues: RegistrationFormValues
  ) => Promise<void>;
  handleRegistrationFormSubmit: (
    values: RegistrationFormValues
  ) => Promise<void>;
  passwordStrengthScore?: number;
  isRegistrationFormLoading: boolean;
  sessionId: string;
  zipCodeForm: FormInstance<ZipCodeFormValues>;
  handleZipCodeFormChange: (
    _changedValues: any,
    allValues: any
  ) => Promise<void>;
  handleZipCodeFormSubmit: (values: any) => Promise<void>;
  isAddingZipCodeLoading: boolean;
};

export function useRegistration({ next }: Args): UseRegistrationResult {
  const [registrationForm] = Form.useForm<RegistrationFormValues>();
  const [registrationFormValues, setRegistrationFormValues] =
    useState<RegistrationFormValues>();
  const [sessionId, setSessionId] = useState<string>();
  const [zipCodeForm] = Form.useForm<ZipCodeFormValues>();
  const [_zipCodeFormValues, setZipCodeFormValues] =
    useState<ZipCodeFormValues>();
  const accountType = UserRole.User;
  const [
    signUpWithCredentialsResult,
    _signUpWithCredentialsData,
    { isLoading: isRegistrationFormLoading },
  ] = useApolloMutation(useSignUpWithCredentialsMutation, {}, [
    "RETRY_LIMIT_ERROR",
    "VALIDATION_ERROR",
  ]);

  const [
    addUserZipCode,
    _addUserZipCodeData,
    { isLoading: isAddingZipCodeLoading },
  ] = useApolloMutation(useAddUserZipCodeMutation, {}, [
    "USER_AUTHENTICATION_ERROR",
  ]);

  const handleRegistrationFormSubmit = useCallback(
    async (values) => {
      const [result, { errors }] = await signUpWithCredentialsResult({
        variables: {
          email: values.email,
          password: values.password,
          accountType: accountType,
          username: values.username,
        },
      });
      if (!errors) {
        const { signUpWithCredentials } = result;
        setSessionId(signUpWithCredentials?.sessionId);
        next();
      }

      if (errors?.RETRY_LIMIT_ERROR) {
        message.warning(
          "Confirmation email is on its way. Please wait a bit before requesting a new one",
          10
        );
      }

      if (errors?.VALIDATION_ERROR) {
        if (errors.VALIDATION_ERROR?.extensions?.ref) {
          let readableErrorMessage = "";
          if (
            errors?.VALIDATION_ERROR.extensions.messageCode ===
            "PASSWORD_IS_NOT_STRONG_ENOUGH"
          ) {
            readableErrorMessage =
              "Password is not strong enough. Try making your password longer or include special characters and numbers.";
          } else {
            readableErrorMessage = capitalize(
              errors.VALIDATION_ERROR.message.replaceAll("_", " ")
            );
          }

          registrationForm.setFields([
            {
              name: errors.VALIDATION_ERROR.extensions.ref,
              errors: [readableErrorMessage],
            },
          ]);
        }
      }
    },
    [accountType, registrationForm, signUpWithCredentialsResult, next]
  );

  const handleRegistrationFormChange = useCallback(
    async (_changedValues, allValues) => {
      setRegistrationFormValues(allValues);
    },
    []
  );

  const handleZipCodeFormChange = useCallback(
    async (_changedValues, allValues) => {
      setZipCodeFormValues(allValues);
    },
    []
  );

  const handleZipCodeFormSubmit = useCallback(
    async (values) => {
      const [_result, { errors }] = await addUserZipCode({
        variables: {
          sessionId: sessionId,
          zipCode: values.zipCode,
        },
      });
      if (!errors) {
        await signIn("credentials", {
          redirect: true,
          callbackUrl: "/explore",
          sessionId: sessionId,
        });
      }
      if (errors?.USER_AUTHENTICATION_ERROR) {
        if (errors.USER_AUTHENTICATION_ERROR?.extensions?.ref) {
          let readableErrorMessage = "";
          if (
            errors?.USER_AUTHENTICATION_ERROR.extensions.messageCode ===
            "SESSION_ID_MISSING"
          ) {
            readableErrorMessage =
              "Unable to create the user in the previous again, please try again.";
          } else {
            readableErrorMessage = capitalize(
              errors.USER_AUTHENTICATION_ERROR.message.replaceAll("_", " ")
            );
          }

          registrationForm.setFields([
            {
              name: errors.USER_AUTHENTICATION_ERROR.extensions.ref,
              errors: [readableErrorMessage],
            },
          ]);
        }
      }
    },
    [addUserZipCode, sessionId, registrationForm]
  );

  const passwordStrengthScore = useMemo(() => {
    if (registrationFormValues?.password) {
      const { score } = testPassword(registrationFormValues.password);
      return score;
    }
  }, [registrationFormValues]);

  return {
    registrationForm,
    handleRegistrationFormChange,
    handleRegistrationFormSubmit,
    passwordStrengthScore,
    isRegistrationFormLoading,
    sessionId,
    zipCodeForm,
    handleZipCodeFormChange,
    handleZipCodeFormSubmit,
    isAddingZipCodeLoading,
  };
}
