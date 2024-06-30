import {
  styled,
  Typography,
  CloseIcon as UiCloseIcon,
  BodyRegular,
  Button as UiButton,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title } = Typography;

export const HeaderContainer = styled.div`
  display: flex;
  padding: ${customVariables.pageInlinePadding};
  justify-content: space-between;
  border-bottom: 1px solid ${colors.borderColor};
  margin-bottom: 24px;
`;
export const Header = styled(Title)`
  margin-bottom: 0px !important;
  margin-top: 0px !important;
`;
export const CloseIcon = styled(UiCloseIcon)`
  width: 14px;
  height: 14px;
  color: ${colors.iconColor};
  position: relative;
  top: 12px;
`;

export const FilterContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  margin-bottom: 24px;
`;

export const FilterName = styled(BodyRegular)`
  color: ${colors.iconColor};
  margin-bottom: 12px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CategoryTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: ${customVariables.pageInlinePadding};
  margin-bottom: 20px;
`;

export const SaveButton = styled(UiButton)`
  margin-bottom: 12px;
`;

export const ResetButton = styled(UiButton)`
  margin-bottom: 6px;
`;
