import {
  Button as UiButton,
  Input as UiInput,
  Form as UiForm,
  styled,
  BodySemiBold,
  Radio as UiRadio,
  Space as UiSpace,
  BodyRegular as UiBodyRegular,
  UkLanguageIcon,
  FrenchLanguageIcon,
  UiKitRadio,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Header = styled(BodySemiBold)`
  margin-bottom: 16px;
`;

export const Form = styled(UiForm)``;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 8px;
`;

export const Input = styled(UiInput)``;

export const FormInstruction = styled(Header)`
  margin-top: 16px;
`;

export const InlineFormItemContainer = styled.div`
  display: flex;
  .ant-form-item {
    flex: 1 1 auto;
  }
`;

export const Button = styled(UiButton)`
  width: 100%;
  margin-bottom: 0;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;

export const RadioGroup = styled(UiRadio.Group)`
  width: 100%;
`;
export const Space = styled(UiSpace)`
  width: 100%;
  .ant-space-item {
    margin-bottom: 12px;
  }
`;
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  background-color: ${colors.radioCardBackgroundColor};
  border-radius: 12px;
`;
export const Radio = styled(UiKitRadio)`
  &.ant-radio-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    font-size: 16px !important;
  }
  &.ant-radio-wrapper::after {
    display: none;
  }
`;
export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UkFlag = styled(UkLanguageIcon)`
  margin-right: 10px;
`;
export const FranceFlag = styled(FrenchLanguageIcon)`
  margin-right: 10px;
`;
export const BodyRegular = styled(UiBodyRegular)``;
