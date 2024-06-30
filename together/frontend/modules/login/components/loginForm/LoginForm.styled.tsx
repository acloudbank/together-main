import {
  Button as UiButton,
  Input,
  styled,
  Form as UiForm,
  Body2Regular,
} from "ui";
import Link from "next/link";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const LoginDialog = styled.div`
  width: 440px;
  .ant-form-item {
    margin-bottom: 16px;
  }
  /*@media only screen and (max-width: 440px) {
    max-width: 440px;
    width: auto;
  }*/
`;
export const FormItem = styled(UiForm.Item)`
  margin-bottom: 16px;
`;
export const InputField = styled(Input)``;

export const PasswordField = styled(Input.Password)``;

export const ForgetPasswordBox = styled(Body2Regular)`
  display: flex;
`;

export const ActionContainer = styled.div`
  position: fixed;
  bottom: ${customVariables.submitButtonBottomSpace};
  display: flex;
  flex-direction: column;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
`;

export const ButtonFormItem = styled(UiForm.Item)`
  margin-bottom: 12px;
`;
export const Button = styled(UiButton)`
  color: ${colors.white};
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HaveAccount = styled.span`
  color: ${colors.iconColor};
  margin-right: 4px;
`;

export const LoginLink = styled(Link)`
  color: ${colors.textColor};
  text-decoration: none;
`;
