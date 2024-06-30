import {
  Avatar,
  styled,
  Card as UiCard,
  WhiteArrowRightIcon,
  Typography,
  Body2Regular,
  CtaSmall,
  StarOutlinedIcon,
  StarFilledIcon,
  ShareOutlinedIcon as UiShareOutlinedIcon,
  EllipsisIcon as UiEllipsisIcon,
} from "ui";
import { colors } from "ui/colors";

const { Title } = Typography;

export const Card = styled(UiCard)`
  :not(:last-child) {
    margin-bottom: 16px;
  }
  height: 500px;
  border-radius: 12px;

  &.ant-card .ant-card-body {
    padding: 0;
    border-radius: 0;
    height: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const cardCategoryWidth = "40px";

export const CardInformation = styled.div`
  width: calc(100% - ${cardCategoryWidth});
  padding: 24px 12px 12px 12px;
  position: relative;
`;
export const IssueTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 16px !important;
`;

const lineCount = 9;
const body2RegularLineHeight = "20px";
export const IssueDescription = styled(Body2Regular)`
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(${lineCount} * ${body2RegularLineHeight});
`;

export const ActionAndUsersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px;
  width: 100%;
`;
export const Users = styled.div`
  display: flex;
  align-items: center;
`;
export const UserAvatar = styled(Avatar)`
  width: 24px;
  height: 24px;
  border: 1px solid ${colors.textColor};
  &:not(:first-child) {
    margin-left: -8px;
  }
`;
export const UserCount = styled(Body2Regular)`
  margin-left: 4px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Like = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
export const LikeCount = styled(CtaSmall)`
  margin-right: 6px;
`;
export const LikeOutlinedIcon = styled(StarOutlinedIcon)`
  width: 20px;
  height: 20px;
`;
export const LikeFilledIcon = styled(StarFilledIcon)`
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

export const CardCategory = styled.div<{ $backgroundColor: string }>`
  width: ${cardCategoryWidth};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 24px 8px;
  border-radius: 0 12px 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const RightArrowIcon = styled(WhiteArrowRightIcon)``;
export const CategoryName = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 0.2px;
  color: ${colors.white};
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`;
