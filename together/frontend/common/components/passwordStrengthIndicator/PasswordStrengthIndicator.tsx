import * as Styled from "./PasswordStrengthIndicator.styled";

export type Props = {
  score?: number;
};

export const PasswordStrengthIndicator = ({ score }): JSX.Element => {
  const levels = {
    weak: "#f5222d",
    fair: "#fa541c",
    good: "#a9db2c",
    strong: "#52c41b",
    default: "#d9d9d9",
  };

  return (
    <Styled.Flex>
      <Styled.StrengthIndicator
        backgroundColor={
          score === 0 || score === 1
            ? levels.weak
            : score === 2
            ? levels.fair
            : score === 3
            ? levels.good
            : score === 4
            ? levels.strong
            : levels.default
        }
      />
      <Styled.StrengthIndicator
        backgroundColor={
          score === 2
            ? levels.fair
            : score === 3
            ? levels.good
            : score === 4
            ? levels.strong
            : levels.default
        }
      />
      <Styled.StrengthIndicator
        backgroundColor={
          score === 3
            ? levels.good
            : score === 4
            ? levels.strong
            : levels.default
        }
      />
      <Styled.StrengthIndicator
        backgroundColor={score === 4 ? levels.strong : levels.default}
      />
    </Styled.Flex>
  );
};
