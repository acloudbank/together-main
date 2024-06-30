import { OverrideToken } from "antd/es/theme/interface";
import { colors } from "ui/colors";

export const defaultComponents: OverrideToken = {
  Button: {
    controlHeight: 56,
    borderRadius: 30,
    fontSize: 16,
    colorBorder: colors.textColor,
  },
  Input: {
    colorPrimaryBorderHover: "#3F8FFD80",
    fontSize: 14,
  },
  Form: {
    fontSize: 14,
  },
  Radio: {
    colorPrimary: colors.textColor,
    controlItemBgActive: colors.textColor,
    controlItemBgHover: colors.textColor,
    controlItemBgActiveHover: colors.textColor,
    controlOutline: colors.borderColor,
    controlOutlineWidth: 0,
    colorBorder: colors.iconColor,
  },
  Checkbox: {
    colorPrimary: colors.textColor,
    controlItemBgActive: colors.textColor,
    controlItemBgHover: colors.textColor,
    controlItemBgActiveHover: colors.textColor,
    controlOutline: colors.borderColor,
    controlOutlineWidth: 0,
    colorBorder: colors.iconColor,
  },
  Notification: {
    fontSize: 14,
    fontSizeLG: 16,
    borderRadius: 12,
  },
  Card: {
    borderRadius: 12,
  },
};
