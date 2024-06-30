import { styled } from "../../../ui";

export const Page = styled.section<{ $backgroundColor?: string }>`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const Layout = styled.main``;
