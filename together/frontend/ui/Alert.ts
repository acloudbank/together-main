import { Alert as AntdAlert } from "antd";
import styled from "styled-components";
import { colors } from "./colors";

export const Alert = styled(AntdAlert)`
  &.ant-alert-error {
    background-color: ${colors.errorNotifBackgroundColor};
  }
`;
