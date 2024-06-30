import { styled, Typography, CloseIcon as UiCloseIcon } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";
import {
  MemoIcon as UiMemoIcon,
  DirectHitIcon as UiDirectHitIcon,
} from "ui/icons";

const { Title } = Typography;

export const HeaderContainer = styled.div`
  display: flex;
  padding-inline: ${customVariables.pageInlinePadding};
  margin-bottom: 16px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Header = styled(Title)`
  margin-bottom: 0px !important;
  margin-top: 0px !important;
`;

export const CardContainer = styled.div`
  padding-inline: 16px;
`;

export const CloseIcon = styled(UiCloseIcon)`
  width: 14px;
  height: 14px;
  color: ${colors.iconColor};
  position: relative;
  top: 12px;
`;

export const MemoIcon = styled(UiMemoIcon)`
  width: 32px;
  height: 32px;
`;

export const DirectHitIcon = styled(UiDirectHitIcon)`
  width: 32px;
  height: 32px;
`;
