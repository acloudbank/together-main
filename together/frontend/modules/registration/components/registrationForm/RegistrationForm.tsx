import { PasswordStrengthIndicator } from "common";
import * as Styled from "./RegistrationForm.styled";
import { FormInstance, FullWidthSpace } from "ui";
import { RegistrationFormValues } from "../../types";

type Props = {
  form: FormInstance<RegistrationFormValues>;
  handleSubmit: (values: RegistrationFormValues) => Promise<void>;
  handleValuesChange: (
    _changedValues: RegistrationFormValues,
    allValues: RegistrationFormValues
  ) => Promise<void>;
  passwordStrengthScore: number;
  isLoading: boolean;
};

export const RegistrationForm = ({
  form,
  handleSubmit,
  handleValuesChange,
  passwordStrengthScore,
  isLoading,
}: Props): JSX.Element => {
  return (
    <>
      <Styled.FormContainer>
        <Styled.Form
          form={form}
          onValuesChange={handleValuesChange}
          onFinish={handleSubmit}
          validateTrigger="onChange"
        >
          <Styled.InputsContainer>
            <Styled.FormItem
              name="email"
              rules={[
                { required: true, message: "Please input your email address!" },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Styled.Input placeholder="Email" />
            </Styled.FormItem>
            <Styled.FormItem
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Styled.Input placeholder="Create username" />
            </Styled.FormItem>
            <Styled.FormItem
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <FullWidthSpace direction="vertical" size={6}>
                <Styled.Input type="password" placeholder="Create password" />
                <PasswordStrengthIndicator score={passwordStrengthScore} />
              </FullWidthSpace>
            </Styled.FormItem>
          </Styled.InputsContainer>
          <Styled.ActionContainer>
            <Styled.ButtonFormItem>
              <Styled.Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                disabled={!form.isFieldsTouched()}
              >
                Continue
              </Styled.Button>
            </Styled.ButtonFormItem>
            <Styled.LoginContainer>
              <Styled.HaveAccount>Have an account?</Styled.HaveAccount>
              <Styled.LoginLink href="/login">Log in</Styled.LoginLink>
            </Styled.LoginContainer>
          </Styled.ActionContainer>
        </Styled.Form>
      </Styled.FormContainer>
    </>
  );
};
