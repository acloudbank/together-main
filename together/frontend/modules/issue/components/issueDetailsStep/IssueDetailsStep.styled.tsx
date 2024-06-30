import {
  Button as UiButton,
  Input as UiInput,
  Form as UiForm,
  styled,
  LinkOutlinedIcon,
  BodySemiBold,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Header = styled(BodySemiBold)`
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Form = styled(UiForm)``;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 24px;
`;

export const Input = styled(UiInput)``;

export const TextArea = styled(UiInput.TextArea)``;

export const InlineFormItemContainer = styled.div`
  display: flex;
`;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;

export const LinkOutlined = styled(LinkOutlinedIcon)`
  color: ${colors.textColorTertiary};
  width: 18px;
  height: 18px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
