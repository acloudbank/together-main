import * as Styled from "./CommentsSortModal.styled";

type Props = {
  isOpen: boolean;
  handleCancel: () => void;
  sortByNewOneFirst: () => void;
  sortByOldOneFirst: () => void;
};

export const CommentsSortModal = ({
  isOpen,
  handleCancel,
  sortByNewOneFirst,
  sortByOldOneFirst
}: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Modal closable={false} open={isOpen} footer={null} centered>
        <Styled.Menu>
          <Styled.MenuItem
            onClick={sortByNewOneFirst}
            >
            <Styled.MenuText>New one first</Styled.MenuText>
          </Styled.MenuItem>
          <Styled.MenuItem
            onClick={sortByOldOneFirst}
          >
            <Styled.MenuText>Old one first</Styled.MenuText>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.Cancel onClick={handleCancel}>Cancel</Styled.Cancel>
      </Styled.Modal>
    </Styled.Container>
  );
};
