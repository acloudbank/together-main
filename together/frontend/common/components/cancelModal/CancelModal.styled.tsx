import {
  styled,
  Typography,
  Modal as UiModal,
  Button as UiButton,
  Body2Regular,
} from "ui";
import { colors } from "ui/colors";

const { Title: UiTitle } = Typography;

export const Modal = styled(UiModal)`
  &.ant-modal .ant-modal-content {
    padding: 30px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.ant-modal .ant-modal-footer {
    margin-top: 0;
    width: 100%;
  }
  &.ant-modal .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled(UiButton)`
  width: 100%;
  margin-inline-start: 0 !important;
  &.ant-btn:first-child {
    margin-bottom: 8px;
  }
`;

export const InnerErrorBox = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const OuterErrorBox = styled.div`
  width: 190px;
  height: 190px;
  background-color: ${colors.radioCardBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 12px;
`;

export const ErrorTitle = styled(UiTitle)`
  margin-bottom: 8px;
  margin-top: 0;
  text-align: center;
`;

export const ErrorDescription = styled(Body2Regular)`
  text-align: center;
  margin-bottom: 44px;
`;
