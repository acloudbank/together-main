import * as Styled from "./Logo.styled";

type Props = {
  header: string;
  description: string;
  backgroundUrl: string;
};

export const Logo = ({ header, description, backgroundUrl }: Props) => {
  return (
    <>
      <Styled.LogoContainer backgroundUrl={backgroundUrl}>
        <Styled.TextContainer>
          <Styled.Header level={1}>{header}</Styled.Header>
          <Styled.Description>{description}</Styled.Description>
        </Styled.TextContainer>
      </Styled.LogoContainer>
    </>
  );
};
