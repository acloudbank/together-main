import { Form } from "ui";

import * as Styled from "./RequestPasswordResetForm.styled";
import { Dispatch, SetStateAction } from "react";
import { useRequestPasswordResetForm } from "./hooks";
import { useRouter } from "common";

type Props = {
  setEmailSentTo: Dispatch<SetStateAction<string>>;
};

export const RequestPasswordResetForm = ({
  setEmailSentTo,
}: Props): JSX.Element => {
  const { form, setEmail, isLoading, handleSubmit } =
    useRequestPasswordResetForm({
      setEmailSentTo,
    });
  const router = useRouter();
  return (
    <>
      <Styled.Description>
        Type your email and we will sent reset link
      </Styled.Description>
      <Form form={form} onFinish={handleSubmit} validateTrigger="onSubmit">
        <Styled.FormItem
          name="email"
          rules={[
            { required: true, message: "Please input your email address!" },
            { type: "email", message: "Please fill a valid email address" },
          ]}
        >
          <Styled.InputField
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Styled.FormItem>

        <Styled.ActionContainer>
          <Styled.ButtonFormItem>
            <Styled.Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              disabled={!form.isFieldsTouched()}
            >
              Confirm & send
            </Styled.Button>
            <Styled.BackButton
              onClick={() => {
                router.push("/login");
              }}
            >
              Back
            </Styled.BackButton>
          </Styled.ButtonFormItem>
        </Styled.ActionContainer>
      </Form>
    </>
  );
};
