import {
  styled,
  BodySemiBold,
  CtaSmall,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const NavigatorContainer = styled.div`
  padding-top: ${customVariables.navigatorsTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  flex: 0 1 auto;
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BackText = styled(CtaSmall)`
  color: ${colors.iconColor};
  margin-left: 8px;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 12px 12px 0 0;
`;