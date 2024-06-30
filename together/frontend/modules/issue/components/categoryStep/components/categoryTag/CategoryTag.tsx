import * as Styled from "./CategoryTag.styled";

type CategoryTagProps = {
  tag: string;
  selected: boolean;
  onChange: (checked: boolean) => void;
};

export const CategoryTag = ({
  tag,
  selected,
  onChange,
}: CategoryTagProps): JSX.Element => {
  return (
    <Styled.CategoryTag checked={selected} onChange={onChange}>
      <Styled.TagTitleContainer>
        <Styled.CategoryTagTitle>{tag}</Styled.CategoryTagTitle>
      </Styled.TagTitleContainer>
    </Styled.CategoryTag>
  );
};
