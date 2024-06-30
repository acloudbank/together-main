import { Tag, styled, BodyRegular } from "ui";
import { colors } from "ui/colors";

export const ScaleTag = styled(Tag.CheckableTag)`
  &.ant-tag {
    border: 1px solid ${colors.borderColor};
    border-radius: 8px;
    width: 25%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.ant-tag-checkable-checked {
    background-color: black;
  }
`;

export const ScaleTagTitle = styled(BodyRegular)<{ $selected: boolean }>`
  color: ${(props) =>
    props.$selected ? `${colors.white}` : `${colors.iconColor}`} !important;
`;

export const TagTitleContainer = styled.div`
  text-align: center;
`;
