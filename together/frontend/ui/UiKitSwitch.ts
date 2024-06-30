import { default as styled } from "styled-components";
import { Switch as AntSwitch, SwitchProps } from "antd";
import { colors } from "./colors";

type SwitchReturnType = {
  (props: SwitchProps): JSX.Element;
};

export const UiKitSwitch = styled(AntSwitch)`
  &.ant-switch.ant-switch-checked {
    background: ${colors.textColor};
  }
  &.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background: ${colors.textColor};
  }
  &.ant-switch:focus-visible {
    outline: 1px solid ${colors.textColorTertiary};
    outline-offset: 0px;
    transition: unset;
  }
` as React.ComponentType as SwitchReturnType;
