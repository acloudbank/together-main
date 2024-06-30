import {
  styled,
  Avatar,
  Button as UiButton,
  List as UiList,
  CtaSmall,
  HeartOutlinedIcon,
  Body2Regular,
} from "ui";
import { colors } from "ui/colors";

export const ListItem = styled(UiList.Item)``;

export const Meta = styled(UiList.Item.Meta)``;

export const UserAvatar = styled(Avatar)``;

export const ActionsContainer = styled.div`
  margin-left: 12px;
`;

export const ReplyAndLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -20px;
  .ant-btn {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 6px;
  }
  .ant-btn > span {
    font-size: 14px;
    font-weight: 500;
  }
  .anticon svg {
    width: 20px;
    height: 20px;
}
`;

export const ReplyButton = styled(UiButton)``;

export const RepliesButton = styled(UiButton)``;

export const RepliesContainer = styled.div`
.ant-btn-link {
  color: #1472f2;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
`;

export const Like = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
export const LikeCount = styled(CtaSmall)`
  margin-right: 6px;
`;

export const LikeIcon = styled(HeartOutlinedIcon)``;

export const ProfileNameAndTime = styled(Body2Regular)`
  display: flex;
  gap: 4px;
  flex-direction: row;
`;

export const CommentCreatedAtLabel = styled(Body2Regular)`
  color: ${colors.iconColor};
`;

export const CommentContent = styled(Body2Regular)`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textColor};
`;

export const NestedCommentsContainer = styled.div`
  margin-top: 16px;
  margin-left: 36px;
`;