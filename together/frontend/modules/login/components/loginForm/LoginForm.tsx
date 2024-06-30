import * as Styled from "./LoginForm.styled";
import { Form } from "ui";
import Link from "next/link";
import { useSubmitButtonHandler } from "./hooks";
import { PasswordFieldIcon } from "common";

export const LoginForm = (): JSX.Element => {
  const { handleSubmit, isLoading, handleValuesChange, form } =
    useSubmitButtonHandler();

  return (
    <>
      <Form
        form={form}
        onFinish={handleSubmit}
        onValuesChange={handleValuesChange}
        validateTrigger="onSubmit"
      >
        <Styled.FormItem
          name="email"
          rules={[
            { required: true, message: "Please input your email address!" },
            { type: "email", message: "Please fill a valid email address" },
          ]}
          validateTrigger="onSubmit"
        >
          <Styled.InputField placeholder="Email" />
        </Styled.FormItem>
        <Styled.FormItem
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          validateTrigger="onSubmit"
        >
          <Styled.PasswordField
            type="password"
            placeholder="Password"
            iconRender={PasswordFieldIcon}
          />
        </Styled.FormItem>
        <Styled.ForgetPasswordBox>
          <Link style={{ marginRight: "4px" }} href="/reset-password">
            Click here
          </Link>
          <span>if you forget your password</span>
        </Styled.ForgetPasswordBox>
        <Styled.ActionContainer>
          <Styled.ButtonFormItem>
            <Styled.Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              disabled={!form.isFieldsTouched()}
            >
              Get started
            </Styled.Button>
          </Styled.ButtonFormItem>
          <Styled.LoginContainer>
            <Styled.HaveAccount>Don&apos;t have an account?</Styled.HaveAccount>
            <Styled.LoginLink href="/register">Sign up</Styled.LoginLink>
          </Styled.LoginContainer>
        </Styled.ActionContainer>
      </Form>
    </>
  );
};
