import * as Styled from "./CreateCard.styled";
type Props = {
  title: string;
  content: string;
  url: string;
  Icon: React.FC<{}>;
};
export const CreateCard = ({
  title,
  content,
  url,
  Icon,
}: Props): JSX.Element => {
  return (
    <>
      <Styled.LinkWithoutStyles href={url}>
        <Styled.Card>
          <Styled.LogoContainer>
            <Styled.Logo>
              <Icon />
            </Styled.Logo>
            <Styled.RightArrow />
          </Styled.LogoContainer>
          <Styled.Title level={4}>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
        </Styled.Card>
      </Styled.LinkWithoutStyles>
    </>
  );
};
