import { styled } from "../../../ui";

export const StrengthIndicator = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 2px;
  width: calc(100% / 4 - 5px);
  border-radius: 23px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
