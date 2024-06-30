import { styled, Modal as UiModal, Spin as UiSpin, BodyRegular } from "ui";
import { LoadingOutlined as UiLoadingOutlined } from "@ant-design/icons";

export const Modal = styled(UiModal)`
  &.ant-modal {
    box-shadow: 3px 12px 46px 0px rgba(137, 143, 164, 0.24);
    width: 180px !important;
    height: 180px !important;
    border-radius: 12px;
  }
  &.ant-modal .ant-modal-content {
    padding: 34px 24px;
  }
  &.ant-modal .ant-modal-body {
    display: flex;
    flex-direction: column;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Spin = styled(UiSpin)``;

export const LoadingOutlined = styled(UiLoadingOutlined)`
  width: 44px !important;
  height: 44px !important;
  font-size: 44px !important;
`;

export const Description = styled(BodyRegular)`
  display: flex;
  justify-content: center;
  font-size: 16px !important;
  text-align: center;
`;
