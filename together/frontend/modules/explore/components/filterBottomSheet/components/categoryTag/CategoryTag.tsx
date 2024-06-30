import * as Styled from "./CategoryTag.styled";

type CategoryTagProps = {
  tag: string;
  selected: boolean;
  onChange: (checked: boolean) => void;
  checkedBackgroundColor: string;
};

export const CategoryTag = ({
  tag,
  selected,
  onChange,
  checkedBackgroundColor,
}: CategoryTagProps): JSX.Element => {
  return (
    <Styled.CategoryTag
      checked={selected}
      onChange={onChange}
      $checkedBackgroundColor={checkedBackgroundColor}
    >
      <Styled.TagTitleContainer>
        <Styled.CategoryTagTitle>{tag}</Styled.CategoryTagTitle>
      </Styled.TagTitleContainer>
    </Styled.CategoryTag>
  );
};
