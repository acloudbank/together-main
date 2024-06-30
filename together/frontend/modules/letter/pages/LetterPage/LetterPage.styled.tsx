import {
  styled,
  Steps as UiSteps,
  Typography,
  LeftOutlinedIcon as UiLeftOutlinedIcon,
  CtaSmall,
  CloseOutlinedIcon as UiCloseOutlinedIcon,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title } = Typography;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NavigatorContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  padding-top: ${customVariables.navigatorsTopPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex: 0 1 auto;
`;
export const BackContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LeftOutlinedIcon = styled(UiLeftOutlinedIcon)`
  margin-right: 8px;
  color: ${colors.iconColor};
`;
export const BackText = styled(CtaSmall)`
  color: ${colors.iconColor};
`;
export const CloseOutlinedIcon = styled(UiCloseOutlinedIcon)`
  color: ${colors.iconColor};
`;

export const ProgressContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  flex: 0 1 auto;
  margin-bottom: 32px;
`;
export const StepTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 0 !important;
`;
export const Steps = styled(UiSteps)`
  &.ant-steps.ant-steps-navigation {
    padding-top: 0;
    margin-bottom: 16px;
  }
  &.ant-steps .ant-steps-item-icon {
    display: none;
  }
  &.ant-steps .ant-steps-item-content {
    display: none;
  }
  &.ant-steps.ant-steps-navigation .ant-steps-item::after {
    display: none;
  }
  &.ant-steps.ant-steps-navigation .ant-steps-item::before {
    background-color: ${colors.textColor};
    opacity: 0.2;
    inset-inline-start: 0;
    width: 95%;
  }
  &.ant-steps.ant-steps-navigation
    .ant-steps-item.ant-steps-item-active::before {
    background-color: ${colors.textColor};
    opacity: 1;
  }
`;

export const LetterGenerationStepContainer = styled.div`
  padding: ${customVariables.pageInlinePadding};
  overflow-y: auto;
`;
export const StepContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 12px 12px 0 0;
  padding: ${customVariables.pageInlinePadding};
  padding-bottom: ${customVariables.stepsBottomPadding};
  overflow-y: auto;
  flex: 1 1 auto;
`;
