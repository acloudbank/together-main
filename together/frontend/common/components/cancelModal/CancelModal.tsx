import { useRouter } from "common/hooks";
import { ZipperMouthFaceIcon } from "ui";

import * as Styled from "./CancelModal.styled";

type Props = {
  open: boolean;
  handleCancelWithoutSaving: () => void;
  handleSaveAndCancel: () => void;
  closeCancelModal: () => void;
};
export const CancelModal = ({
  open,
  handleCancelWithoutSaving,
  handleSaveAndCancel,
  closeCancelModal
}: Props): JSX.Element => {
  return (
    <>
      <Styled.Modal
        open={open}
        onCancel={closeCancelModal}
        centered
        footer={[
          <Styled.Button
            key="submit"
            type="primary"
            onClick={handleSaveAndCancel}
          >
            Cancel & save the draft
          </Styled.Button>,
          <Styled.Button
            key="close"
            type="default"
            onClick={handleCancelWithoutSaving}
          >
            Cancel without saving
          </Styled.Button>,
        ]}
      >
        <Styled.OuterErrorBox>
          <Styled.InnerErrorBox>
            <ZipperMouthFaceIcon />
          </Styled.InnerErrorBox>
        </Styled.OuterErrorBox>
        <Styled.ErrorTitle level={2}>
          Are you sure you want to cancel your progress?
        </Styled.ErrorTitle>
        <Styled.ErrorDescription>
          You&apos;re almost done! Are you sure
          <br />
          you want to cancel all your efforts?
          <br />
        </Styled.ErrorDescription>
      </Styled.Modal>
    </>
  );
};
