import {
  Button as UiButton,
  Input as UiInput,
  Form as UiForm,
  styled,
  PaperClipOutlinedIcon,
} from "ui";
import { colors } from "ui/colors";

export const Form = styled(UiForm)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  .ant-form-item {
    margin-bottom: 0px;
  }
`;

export const FormItem = styled(UiForm.Item)`
`;

export const Input = styled(UiInput)``;

export const SubmitContainer = styled.div`
`;

export const JoinButton = styled(UiButton)`
  background-color: ${colors.textColor};
  color: ${colors.white};
  border-radius: 30px;
  width: 100px;
  height: 44px;
  padding: 0px 7px;
  &.ant-btn-round {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
  .ant-btn-loading-icon {
    display: none;
  }
`;

export const AttachementIcon = styled(PaperClipOutlinedIcon)``;