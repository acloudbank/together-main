import { styled } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NavigatorContainer = styled.div`
  padding-top: ${customVariables.navigatorsTopPadding};
  padding-inline: ${customVariables.pageInlinePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-inline: ${customVariables.pageInlinePadding};
  flex: 0 1 auto;
`;

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 12px 12px 0 0;
  padding: ${customVariables.pageInlinePadding};
  padding-bottom: 24px;
  overflow-y: auto;
  flex: 1 1 auto;
`;
