import Link from "next/link";

import {
  styled,
  Card as UiCard,
  WhiteArrowRightIcon,
  Typography,
  BodyRegular,
} from "ui";
import { colors } from "ui/colors";

const { Title: UiTitle } = Typography;

export const LinkWithoutStyles = styled(Link)`
  text-decoration: none;
  :focus-visible {
    outline: none;
  }
`;

export const Card = styled(UiCard)`
  &.ant-card {
    background-color: ${colors.primaryColor};
    color: ${colors.white};
    margin-bottom: 16px;
    border-radius: 12px;
  }
  &.ant-card:hover {
    background-color: ${colors.textColor};
  }
  .ant-card-body {
    padding: 16px;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background: ${colors.white};
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightArrow = styled(WhiteArrowRightIcon)`
  width: 14px;
  height: 14px;
`;

export const Title = styled(UiTitle)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
  color: ${colors.white} !important;
`;

export const Content = styled(BodyRegular)``;
