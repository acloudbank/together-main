import {
  Button as UiButton,
  Input as UiInput,
  Form as UiForm,
  styled,
  Body2Regular,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const UiTextArea = UiInput.TextArea;

export const Label = styled(Body2Regular)`
  margin-bottom: 8px;
`;

export const Form = styled(UiForm)``;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 8px;
`;

export const Input = styled(UiInput)``;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const Item = styled.div<{ $isActive: boolean }>`
  padding: 6px;
  border: 1px solid
    ${(props) => (props.$isActive ? colors.primaryColor : colors.borderColor)};
  border-radius: 8px;
  font-size: 12px;
  font-weight: ${customVariables.regularFontWeight};
  line-height: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const TextArea = styled(UiTextArea)``;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;
