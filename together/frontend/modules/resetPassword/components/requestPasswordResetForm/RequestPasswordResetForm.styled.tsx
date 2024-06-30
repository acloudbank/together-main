import {
  Button as UiButton,
  Input,
  styled,
  Form as UiForm,
  BodyRegular,
  CtaLarge,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Description = styled(BodyRegular)`
  margin-bottom: 16px;
`;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 16px;
`;
export const InputField = styled(Input)``;

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
