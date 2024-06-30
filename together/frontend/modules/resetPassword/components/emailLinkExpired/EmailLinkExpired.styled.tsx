import { styled, BodyRegular, CtaLarge } from "ui";
import { customVariables } from "ui/customVariables";

export const Description = styled(BodyRegular)`
  margin-bottom: 16px;
`;

export const ActionContainer = styled.div`
  position: fixed;
  bottom: ${customVariables.submitButtonBottomSpace};
  display: flex;
  flex-direction: column;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
`;

export const BackButton = styled(CtaLarge)`
  text-align: center;
`;
