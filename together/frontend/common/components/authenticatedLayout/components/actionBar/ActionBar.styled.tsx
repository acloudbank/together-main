import { colors } from "ui/colors";
import {
  css,
  styled,
  HomeIcon as UiHomeIcon,
  HomeFillIcon as UiHomeFillIcon,
  IssueIcon as UiIssueIcon,
  IssueFillIcon as UiIssueFillIcon,
  ActionIcon as UiActionIcon,
  HistoryIcon as UiHistoryIcon,
  HistoryFillIcon as UiHistoryFillIcon,
  SmileFaceIcon as UiSmileFaceIcon,
  SmileFaceFillIcon as UiSmileFaceFillIcon,
} from "../../../../../ui";
import { customVariables } from "ui/customVariables";

export const ActionBarContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${customVariables.actionBarHeight};
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  border-top: 1px solid ${colors.borderColor};
  padding-bottom: ${customVariables.actionBarBottomPadding};
  padding-top: ${customVariables.actionBarTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
`;

export const TabContainer = styled.div`
  color: ${colors.textColorSecondary};
  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      font-weight: 700;
      color: ${colors.textColor};
    `};
  width: 20%;
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const IconContainer = styled.div`
  font-size: 12px;
`;

export const TabText = styled.span`
  font-size: 12px;
  margin-top: 10px;
`;

export const ActionIconContainer = styled(IconContainer)`
  .anticon.anticon-plus-circle {
    font-size: 32px;
  }
`;

export const HomeIcon = styled(UiHomeIcon)``;

export const HomeFillIcon = styled(UiHomeFillIcon)``;

export const IssueIcon = styled(UiIssueIcon)``;

export const IssueFillIcon = styled(UiIssueFillIcon)``;

export const ActionIcon = styled(UiActionIcon)``;

export const HistoryIcon = styled(UiHistoryIcon)``;

export const HistoryFillIcon = styled(UiHistoryFillIcon)``;

export const SmileFaceIcon = styled(UiSmileFaceIcon)``;

export const SmileFaceFillIcon = styled(UiSmileFaceFillIcon)``;
