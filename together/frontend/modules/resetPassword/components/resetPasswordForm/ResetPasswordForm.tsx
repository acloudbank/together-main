import { Form, FullWidthSpace } from "ui";
import * as Styled from "./ResetPasswordForm.styled";
import { PasswordFieldIcon, PasswordStrengthIndicator } from "common";
import { useResetPasswordForm } from "./hooks";

type Props = {
  passwordResetToken: string;
};

export const ResetPasswordForm = ({
  passwordResetToken,
}: Props): JSX.Element => {
  const {
    passwordStrengthScore,
    form,
    isGlobalError,
    resetPasswordError,
    handleSubmit,
    setNewPassword,
    isLoading,
  } = useResetPasswordForm({
    passwordResetToken,
  });
  return (
    <>
      <Styled.Description>Enter & confirm your new password</Styled.Description>
      <Form form={form} onFinish={handleSubmit} validateTrigger="onSubmit">
        <Styled.FormItem
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <FullWidthSpace direction="vertical" size={8}>
            <Styled.PasswordField
              type="password"
              placeholder="Enter password"
              iconRender={PasswordFieldIcon}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <PasswordStrengthIndicator score={passwordStrengthScore} />
          </FullWidthSpace>
        </Styled.FormItem>
        {isGlobalError ? (
          <Styled.Alert
            message="Error"
            description={resetPasswordError?.message}
            type="error"
          />
        ) : null}
        <Styled.ActionContainer>
          <Styled.ButtonFormItem>
            <Styled.Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              disabled={!form.isFieldsTouched()}
            >
              Reset password
            </Styled.Button>
          </Styled.ButtonFormItem>
        </Styled.ActionContainer>
      </Form>
    </>
  );
};
