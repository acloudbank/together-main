import { colors } from "ui/colors";
import {
  styled,
  Form as UiForm,
  Input as UiInput,
  Button as UiButton,
} from "../../../../ui";
import Link from "next/link";
import { customVariables } from "ui/customVariables";

export const FormItem = styled(UiForm.Item)``;

export const Input = styled(UiInput)``;

export const FormContainer = styled.div``;

export const Form = styled(UiForm)``;

export const InputsContainer = styled.div`
  margin-bottom: 32px;
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
