import {
  CtaSmall,
  Modal as UiModal,
  styled,
  CustomEyeInvisibleIcon,
  CustomPlusCircleIcon,
  CustomWarningIcon,
  EyeIcon as UiEyeIcon,
  LogoutOutlinedIcon,
  LoginOutlinedIcon,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Container = styled.div``;

export const Modal = styled(UiModal)`
  &.ant-modal {
    padding-bottom: ${customVariables.submitButtonBottomSpace} !important;
    vertical-align: bottom !important;
  }
  &.ant-modal .ant-modal-content {
    padding: 0;
    background-color: transparent;
  }
`;
export const Menu = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${customVariables.pageInlinePadding};
  :not(:last-child) {
    border-bottom: 1px solid ${colors.borderColor};
  }
`;
export const MenuIconContainer = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;
export const MenuText = styled(CtaSmall)`
  color: ${colors.iconColor};
`;
export const InvisibleIcon = styled(CustomEyeInvisibleIcon)`
  width: 24px;
  height: 24px;
`;
export const WarningIcon = styled(CustomWarningIcon)`
  width: 24px;
  height: 24px;
`;
export const PlusIcon = styled(CustomPlusCircleIcon)`
  width: 24px;
  height: 24px;
`;
export const EyeIcon = styled(UiEyeIcon)`
  width: 24px;
  height: 24px;
  color: ${colors.iconColor};
  svg path {
    fill: ${colors.iconColor} !important;
  }
`;

export const Cancel = styled(CtaSmall)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${customVariables.pageInlinePadding};
  background-color: ${colors.white};
  border-radius: 12px;
  color: ${colors.iconColor};
`;

export const LoginIcon = styled(LoginOutlinedIcon)``;

export const LogoutIcon = styled(LogoutOutlinedIcon)``;
