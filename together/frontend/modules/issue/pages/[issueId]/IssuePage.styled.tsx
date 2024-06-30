import {
  Avatar,
  Body2Regular,
  BodyRegular,
  CtaSmall,
  styled,
  Typography,
  Button as UiButton,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title } = Typography;

export const PageContainer = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  min-height: 0 !important;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const NavigatorContainer = styled.div`
  padding-top: ${customVariables.navigatorsTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex: 0 1 auto;
`;

export const InviteButton = styled(UiButton)`
  &.ant-btn-default {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 4px;
    background: transparent;
    height: 35px;
  }
`;

export const PrivateButton = styled(UiButton)`
  &.ant-btn-default {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    border-radius: 8px;
    border: 1px solid var(--divider-base-strenth-3, ${colors.borderColor});
    background: transparent;
    height: 29px;
    padding: 6px 10px;
    gap: 6px;
  }
`;

export const ContentToggleButton = styled(UiButton)`
  &.ant-btn {
    padding: 4px 0;
    :hover {
      background: none;
    }
  }
  font-size: 14px;
  font-weight: ${customVariables.mediumFontWeight};
  line-height: 24px;
`;

export const IssueDetailsContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IssueTitle = styled(Title)``;

const lineCount = 9;
const body2RegularLineHeight = "20px";
export const IssueDescription = styled(Body2Regular) <{ $readHide: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $readHide }) => ($readHide ? "unset" : lineCount)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ $readHide }) =>
    $readHide ? "unset" : `calc(${lineCount} * ${body2RegularLineHeight}px)`};
  span {
      display: block;
    }
`;

export const ArticleLink = styled.a`
  margin-top: 16px;
  text-decoration: none;
  font-size: 14px;
  font-weight: ${customVariables.mediumFontWeight};
  line-height: 24px;
  color: #1472f2;
`;

export const SubmitContainer = styled.div`
  width: 100%;
`;

export const WriteLetterButton = styled(UiButton)`
  width: 100%;
  margin-bottom: 0;
  margin: 20px 0 0;
  height: 56px;
`;

export const Label = styled(Title)``;

export const LinkableCardLabelCount = styled(BodyRegular)``;

export const MembersAndLettersCardContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  gap: 16px;
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BackText = styled(CtaSmall)`
  color: ${colors.iconColor};
  margin-left: 8px;
`;

export const CommentsContainer = styled.div`
  width: 100%;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
`;

export const UserProfile = styled(UiButton)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 0;
  font-size: 14px;
  line-height: 20px;
`;

export const UserAvatar = styled(Avatar)`
  width: 24px;
  height: 24px;
  border: 1px solid ${colors.borderColor};
`;

export const AchievementsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
`;
export const IssueCreateDate = styled(Body2Regular)``;
