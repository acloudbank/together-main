import { default as styled } from "styled-components";
import { Checkbox as AntCheckbox, CheckboxProps } from "antd";
import { colors } from "./colors";

type CheckboxReturnType = {
  (props: CheckboxProps): JSX.Element;
  Group: typeof AntCheckbox.Group;
};

export const UiKitCheckbox = styled(AntCheckbox)`
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${colors.textColor};
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled):after {
    border: unset;
  }
  .ant-checkbox .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }
  .ant-checkbox .ant-checkbox-inner:after {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    inset-inline-start: 31.5%;
    display: table;
    width: 5.285714px;
    height: 8.857143px;
    border: 2px solid #fff;
    border-top: 0;
    border-inline-start: 0;
  }
  .ant-checkbox + span {
    color: ${colors.iconColor};
  }
  .ant-checkbox.ant-checkbox-checked + span {
    color: ${colors.textColor};
  }
` as React.ComponentType as CheckboxReturnType;
