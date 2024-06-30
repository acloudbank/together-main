import {
  styled,
  Button as UiButton,
  ShareOutlinedIcon as UiShareOutlinedIcon,
  EllipsisIcon as UiEllipsisIcon,
  CtaSmall,
  StarOutlinedIcon,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const BottomContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${customVariables.actionBarHeight};
  background-color: ${colors.white};
  align-items: center;
  z-index: 3;
  border-top: 1px solid ${colors.borderColor};
  padding-bottom: ${customVariables.actionBarBottomPadding};
  padding-top: ${customVariables.actionBarTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Save = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
export const SaveCount = styled(CtaSmall)`
  margin-right: 6px;
`;
export const SaveOutlinedIcon = styled(StarOutlinedIcon)`
  width: 20px;
  height: 20px;
`;

export const Share = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
export const ShareOutlinedIcon = styled(UiShareOutlinedIcon)`
  width: 20px;
  height: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const EllipsisIcon = styled(UiEllipsisIcon)`
  width: 20px;
  height: 20px;
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

export const IssuePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DiscussionPageContainer = styled.div``;