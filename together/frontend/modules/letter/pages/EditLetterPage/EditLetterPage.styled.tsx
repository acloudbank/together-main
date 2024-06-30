import {
  CloseIcon as UiCloseIcon,
  styled,
  Typography,
  Input,
  Button as UiButton,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title: UiTitle } = Typography;
const { TextArea: UiTextArea } = Input;
export const PageContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  padding-top: 48px;
  padding-bottom: ${customVariables.stepsBottomPadding};
  min-height: 100vh;
`;

export const NavigatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const EditTitle = styled(UiTitle)`
  margin-top: 0;
  margin-bottom: 0 !important;
`;

export const CloseIcon = styled(UiCloseIcon)`
  margin-right: 2px;
  width: 14px;
  height: 14px;
`;

export const TextAreaContainer = styled.div<{ height: number }>`
  position: relative;
  margin-bottom: 32px;
  width: 100%;
  height: ${(props) => `${props.height}px`};
  #red-underline {
    text-decoration: underline;
    text-decoration-color: ${colors.errorColor};
    background-color: rgba(223, 61, 34, 0.1);
  }
`;

export const TextArea = styled(UiTextArea)<{ height: number }>`
  padding: 0;
  background: transparent;
  position: absolute;
  z-index: 999;
  height: ${(props) => `${props.height}px !important`};
`;

export const OverlayTextArea = styled.div`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  line-height: 1.5;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  resize: vertical;
  border-inline-end-width: 1px;
  outline: 0;
  font-size: 14px;
  white-space: pre-wrap;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  position: fixed;
  bottom: ${customVariables.submitButtonBottomSpace};
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
`;

export const CancelButton = styled(UiButton)`
  margin-right: 4px;
  flex: 1 1 auto;
`;

export const SaveButton = styled(UiButton)`
  margin-left: 4px;
  flex: 1 1 auto;
`;
