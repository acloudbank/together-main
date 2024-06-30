import Link from "next/link";
import {
  BodyRegular,
  styled,
  Typography,
  WavingHandIcon as UiWavingHandIcon,
  Input as UiInput,
  CtaSmall,
  FilterOutlinedWhiteIcon as UiFilterOutlinedWhiteIcon,
  SearchOutlinedIcon as UiSearchOutlinedIcon,
  Avatar,
  Body2Regular,
  List as UiList,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title } = Typography;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const UnAuthenticatedHeaderContainer = styled.div`
  flex: 0 1 auto;
  background-color: ${colors.textColor};
  display: flex;
  flex-direction: column;
  padding-block: 35px;
  align-items: center;
`;
export const HiContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;
export const Hi = styled(Title)`
  color: ${colors.white} !important;
  margin: 0 !important;
`;
export const WavingHandIcon = styled(UiWavingHandIcon)`
  margin-right: 12px;
`;
export const SignUpDescription = styled(BodyRegular)`
  text-align: center;
  color: ${colors.white};
`;
export const SignUpLink = styled(Link)`
  color: ${colors.linkColor};
`;

export const AuthenticatedHeaderContainer = styled.div`
  flex: 0 1 auto;
  background-color: ${colors.textColor};
  display: flex;
  align-items: center;
  padding-inline: ${customVariables.pageInlinePadding};
  padding-top: 35px;
  padding-bottom: 24px;
`;
export const AvatarContainer = styled.div`
  margin-right: 16px;
`;
export const UserAvatar = styled(Avatar)``;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled(Title)`
  color: ${colors.white} !important;
  margin-top: 0 !important;
  margin-bottom: 4px !important;
`;
export const UserDescription = styled(Body2Regular)`
  color: ${colors.white};
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;
  background-color: ${colors.white};
  padding: ${customVariables.pageInlinePadding};
`;
export const SearchContainer = styled.div`
  margin-right: 8px;
  flex: 1 1 70%;
  position: relative;
`;
export const Search = styled(UiInput)`
  &.ant-input {
    padding-left: 36px;
  }
`;
export const FilterContainer = styled.div`
  background-color: ${colors.textColor};
  border-radius: 24px;
  flex: 1 1 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
`;
export const Filter = styled(CtaSmall)`
  margin-right: 4px;
  color: ${colors.white};
`;
export const FilterOutlinedWhiteIcon = styled(UiFilterOutlinedWhiteIcon)``;
export const SearchOutlinedIcon = styled(UiSearchOutlinedIcon)`
  position: absolute;
  top: 18px;
  left: 12px;
  color: ${colors.iconColor};
`;

export const IssuesContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  background-color: ${colors.white};
  overflow: auto;
`;
export const List = styled(UiList)`
  &.ant-list .ant-list-item {
    display: block;
    padding: 0;
    padding-bottom: 8px;
    border-block-end: unset !important;
  }
`;

export const ListItem = styled(List.Item)``;
