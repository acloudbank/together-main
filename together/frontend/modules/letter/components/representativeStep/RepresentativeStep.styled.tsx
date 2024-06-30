import { Button as UiButton, styled, BodyRegular, UiKitCheckbox } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
`;

export const SelectionCount = styled(BodyRegular)``;

export const SelectAllContainer = styled.div`
  display: flex;
`;

export const SelectAllCheckbox = styled(UiKitCheckbox)`
  &.ant-checkbox-wrapper {
    flex-direction: row-reverse;
  }
`;

export const ListContainer = styled.div``;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;
