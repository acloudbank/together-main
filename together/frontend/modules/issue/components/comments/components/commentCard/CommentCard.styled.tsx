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

export const MainContainer = styled.div``;

export const List = styled(UiList)`
  &.ant-list-vertical .ant-list-item .ant-list-item-meta {
    margin-block-end: 0;
  }
  &.ant-list-lg .ant-list-item {
    padding: 0 0 44px 0;
  }
  &.ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-avatar {
    margin-inline-end: 0;
  }
  .ant-list-item {
    border-block-end: none;
  }
  .ant-list-footer {
    padding-block: 0;
  }
  .ant-avatar-image {
    width: 28px;
    height: 28px;
  }
 .ant-list-item-meta-content {
    margin-left: 8px !important;
  }
`;

export const JumpToDiscussionButton = styled(UiButton)`
  width: 100%;
`;