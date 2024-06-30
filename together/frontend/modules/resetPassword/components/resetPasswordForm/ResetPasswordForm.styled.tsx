import {
  styled,
  BodyRegular,
  Button as UiButton,
  CtaLarge,
  Input,
  Form as UiForm,
  Alert as UiAlert,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Description = styled(BodyRegular)`
  margin-bottom: 16px;
`;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 16px;
`;

export const PasswordField = styled(Input.Password)``;

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
  margin-bottom: 12px;
`;

export const BackButton = styled(CtaLarge)`
  text-align: center;
`;

export const Alert = styled(UiAlert)`
  &.ant-alert-error {
    padding-block: 12px;
    padding-inline: 18px;
  }
`;
