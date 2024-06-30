import { default as styled } from "styled-components";
import { Radio as AntRadio, RadioProps } from "antd";
import { colors } from "./colors";

type RadioReturnType = {
  (props: RadioProps): JSX.Element;
  Group: typeof AntRadio.Group;
  Button: typeof AntRadio.Button;
};

export const UiKitRadio = styled(AntRadio)`
  &.ant-radio-wrapper .ant-radio-checked::after {
    border: 1px solid ${colors.textColor};
  }

  &.ant-radio-wrapper .ant-radio-inner {
    width: 24px;
    height: 24px;
  }

  &.ant-radio-wrapper .ant-radio-inner::after {
    background-color: ${colors.textColor};
    width: 32px;
    height: 32px;
    margin-block-start: -16px;
    margin-inline-start: -16px;
  }

  &.ant-radio-wrapper:hover .ant-radio-inner {
    border-color: ${colors.textColor};
  }

  &.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: ${colors.textColor};
    background-color: ${colors.white};
  }
  &.ant-radio-wrapper span.ant-radio + * {
    color: ${colors.iconColor};
  }
  &.ant-radio-wrapper span.ant-radio.ant-radio-checked + * {
    color: ${colors.textColor};
  }
` as React.ComponentType as RadioReturnType;
