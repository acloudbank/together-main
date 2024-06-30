import {
  Button as UiButton,
  Input as UiInput,
  Form as UiForm,
  styled,
  Radio as UiRadio,
  Space as UiSpace,
} from "ui";
import { customVariables } from "ui/customVariables";

export const Container = styled.div``;

export const Form = styled(UiForm)``;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 8px;
`;

export const Input = styled(UiInput)``;

export const RadioGroup = styled(UiRadio.Group)``;

export const Space = styled(UiSpace)`
  .ant-space-item {
    margin-bottom: 12px;
  }
`;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;
