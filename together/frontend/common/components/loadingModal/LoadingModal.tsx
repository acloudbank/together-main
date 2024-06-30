import * as Styled from "./LoadingModal.styled";

type Props = { open: boolean };

export const LoadingModal = ({ open }: Props): JSX.Element => {
  return (
    <>
      <Styled.Modal footer={null} open={open} centered closable={false}>
        <Styled.SpinContainer>
          <Styled.Spin indicator={<Styled.LoadingOutlined />} />
        </Styled.SpinContainer>
        <Styled.Description>Just a few more seconds!</Styled.Description>
      </Styled.Modal>
    </>
  );
};
