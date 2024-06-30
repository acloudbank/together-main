import * as Styled from "./ZipCodeForm.styled";

import {
  ZipCodeFormInstance,
  ZipCodeFormValues,
} from "modules/registration/types";

type Props = {
  form: ZipCodeFormInstance;
  handleSubmit: (values: ZipCodeFormValues) => Promise<void>;
  handleValuesChange: (
    _changedValues: ZipCodeFormValues,
    allValues: ZipCodeFormValues
  ) => Promise<void>;
  isLoading: boolean;
};

export const ZipCodeForm = ({
  form,
  handleSubmit,
  handleValuesChange,
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
              name="zipCode"
              rules={[
                { required: true, message: "Please input your zip code!" },
              ]}
            >
              <Styled.Input placeholder="ZIP code" />
            </Styled.FormItem>
          </Styled.InputsContainer>
          <Styled.ActionContainer>
            <Styled.ButtonFormItem>
              <Styled.Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
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
