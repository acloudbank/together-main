import {
  Button as UiButton,
  Form as UiForm,
  styled,
  Radio as UiRadio,
} from "ui";
import { customVariables } from "ui/customVariables";

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 8px;
`;

export const Form = styled(UiForm)``;

export const RadioBox = styled(UiRadio.Group)`
  &.ant-radio-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .ant-radio-wrapper .ant-radio + * {
    width: 100%;
  }
`;

export const Radio = styled(UiRadio)``;

export const RadioBoxContainer = styled.div``;
