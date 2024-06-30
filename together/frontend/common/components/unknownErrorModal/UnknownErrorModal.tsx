import { useRouter } from "common/hooks";
import { FaceWithSpiralEyesIcon } from "ui";

import * as Styled from "./UnknownErrorModal.styled";

type Props = {
  open: boolean;
  handleCancel: () => void;
  handleOk?: () => void;
};
export const UnknownErrorModal = ({
  open,
  handleCancel,
  handleOk,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Styled.Modal
        open={open}
        onCancel={handleCancel}
        centered
        footer={[
          <Styled.Button
            key="submit"
            type="primary"
            onClick={handleOk ? handleOk : () => router.reload()}
          >
            Reload page
          </Styled.Button>,
        ]}
      >
        <Styled.OuterErrorBox>
          <Styled.InnerErrorBox>
            <FaceWithSpiralEyesIcon />
          </Styled.InnerErrorBox>
        </Styled.OuterErrorBox>
        <Styled.ErrorTitle level={2}>Oops...</Styled.ErrorTitle>
        <Styled.ErrorDescription>
          An unknown error occurred
          <br />
          Please try again
        </Styled.ErrorDescription>
      </Styled.Modal>
    </>
  );
};
