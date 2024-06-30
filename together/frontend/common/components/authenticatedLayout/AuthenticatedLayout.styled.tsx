import { customVariables } from "ui/customVariables";
import { styled } from "../../../ui";

export const Page = styled.section`
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

export const Layout = styled.main`
  height: calc(
    100vh -
      (${customVariables.actionBarHeight} + ${customVariables.pageBlockPadding})
  );
  overflow-y: auto;
`;
