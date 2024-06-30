import { Tag, styled, CtaSmall } from "ui";
import { colors } from "ui/colors";

export const CategoryTag = styled(Tag.CheckableTag)`
  &.ant-tag {
    border: 1px solid ${colors.borderColor};
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 6px;
    min-width: 115px;
  }
  &.ant-tag-checkable-checked {
    background-color: #78d6bf;
    border: 2px solid ${colors.textColor};
  }
`;

export const CategoryTagTitle = styled(CtaSmall)`
  color: ${colors.textColor};
`;

export const TagTitleContainer = styled.div`
  text-align: center;
`;
