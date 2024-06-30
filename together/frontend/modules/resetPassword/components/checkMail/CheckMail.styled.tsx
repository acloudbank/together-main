import { styled, BodyRegular, CtaLarge } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const Description = styled(BodyRegular)`
  margin-bottom: 16px;
`;

export const ResentBox = styled.div`
  display: flex;
`;

export const ResentLink = styled(BodyRegular)`
  margin-right: 4px;
  color: ${colors.linkColor};
`;
export const ResetLinkDescription = styled(BodyRegular)``;

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
