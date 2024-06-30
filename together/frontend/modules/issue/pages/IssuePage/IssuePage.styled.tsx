import { CtaSmall, styled, LeftOutlinedIcon as UiLeftOutlinedIcon } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NavigatorContainer = styled.div<{ $isCompletedStep: boolean }>`
  padding-top: ${customVariables.navigatorsTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  justify-content: ${(props) => (props.$isCompletedStep ? "flex-end" : "")};
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
