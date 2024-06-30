import { Button as UiButton, Form as UiForm, styled } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Form = styled(UiForm)``;

export const FormItem = styled(UiForm.Item)`
  margin-bottom: 8px;
`;

export const Button = styled(UiButton)`
  background-color: ${colors.textColor};
  color: ${colors.white};
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;

export const CategoryTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
