import Link from "next/link";
import {
  styled,
  Typography,
  BodyRegular,
  BodySemiBold,
  Avatar,
} from "ui";
import { colors } from "ui/colors";

export const LinkableCard = styled(Link)`
  text-decoration: none;
  :focus-visible {
    outline: none;
  }
  border-radius: 12px;
  background: var(--background-light-blue, #F0F6FF);
  width: 100%;
  padding: 12px;
  max-height: 84px;
`;

export const CardLabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LinkableCardLabel = styled(BodyRegular)`
  color: ${colors.textColor};
  font-size: 16px;
`;

export const CountCard = styled(BodySemiBold)`
  font-size: 32px;
  line-height: 120%;
  color: ${colors.textColor}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AchievementsIcons = styled(Avatar)`
  width: 24px;
  height: 24px;
  border: 1px solid ${colors.textColor};
  &:not(:first-child) {
    margin-left: -8px;
  }
`;

export const IconAndCountContainer = styled.div`
  display: flex;
  gap: 10px;
`;