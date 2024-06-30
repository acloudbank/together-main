import { Typography, styled } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title: UiTitle } = Typography;

export const Title = styled(UiTitle)`
  margin-bottom: 0 !important;
  margin-top: 0 !important;
`;

// Page container in the IssuePage.tsx file is a vertical flex
export const ProgressContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  margin-bottom: 32px;
  flex: 0 1 auto;
`;
export const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12px;
  align-items: flex-end;
  margin-bottom: 16px;
`;
export const StepSpan = styled.span`
  display: inline-block;
  width: 150px;
  height: 2px;
  background-color: #c9c9c9;
  margin-right: 4px;
  border-radius: 30px;

  &.completed {
    background-color: #000000b2;
  }
`;

// Page container in the IssuePage.tsx file is a vertical flex
export const StepContainer = styled.div`
  flex: 1 1 auto;
  background-color: ${colors.white};
  border-radius: 12px 12px 0 0;
  padding: ${customVariables.pageInlinePadding};
  padding-bottom: ${customVariables.stepsBottomPadding};
  overflow: auto;
`;
