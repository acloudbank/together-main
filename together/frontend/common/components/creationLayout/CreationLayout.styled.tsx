import { colors } from "ui/colors";
import { css, styled } from "ui";

export const Page = styled.section`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  ${({ hasBackground }: { hasBackground: boolean }) =>
    hasBackground
      ? css`
          background-color: ${colors.creationLayoutBackgroundColor};
        `
      : css`
          background-color: ${colors.white};
        `};
`;

export const Layout = styled.main`
  min-height: 100vh;
`;
