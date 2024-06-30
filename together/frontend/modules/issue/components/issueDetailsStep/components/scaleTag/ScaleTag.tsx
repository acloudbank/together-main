import { IssueFieldViewScale_Enum } from "generated-graphql";
import * as Styled from "./ScaleTag.styled";

type ScaleTagProps = {
  tag: IssueFieldViewScale_Enum;
  selected: boolean;
  onChange: (checked: boolean) => void;
};

export const ScaleTag = ({
  tag,
  selected,
  onChange,
}: ScaleTagProps): JSX.Element => {
  return (
    <Styled.ScaleTag checked={selected} onChange={onChange}>
      <Styled.TagTitleContainer>
        <Styled.ScaleTagTitle $selected={selected}>{tag}</Styled.ScaleTagTitle>
      </Styled.TagTitleContainer>
    </Styled.ScaleTag>
  );
};
