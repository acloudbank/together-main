import { useRouter } from "common/hooks";
import { ZipperMouthFaceIcon } from "ui";

import * as Styled from "./BadWordErrorModal.styled";

type Props = {
  open: boolean;
  handleCancel: () => void;
  handleOk: () => void;
};
export const BadWordErrorModal = ({
  open,
  handleCancel,
  handleOk,
}: Props): JSX.Element => {
  return (
    <>
      <Styled.Modal
        open={open}
        onCancel={handleCancel}
        centered
        footer={[
          <Styled.Button key="submit" type="primary" onClick={handleOk}>
            Change request
          </Styled.Button>,
        ]}
      >
        <Styled.OuterErrorBox>
          <Styled.InnerErrorBox>
            <ZipperMouthFaceIcon />
          </Styled.InnerErrorBox>
        </Styled.OuterErrorBox>
        <Styled.ErrorTitle level={2}>Oops...</Styled.ErrorTitle>
        <Styled.ErrorDescription>
          Your message includes language that
          <br />
          is offensive, discriminatory, hateful, or
          <br />
          otherwise inappropriate.
        </Styled.ErrorDescription>
      </Styled.Modal>
    </>
  );
};
