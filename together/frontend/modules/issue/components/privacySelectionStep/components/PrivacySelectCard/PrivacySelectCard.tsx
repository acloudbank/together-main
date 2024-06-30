import { ReactElement } from "react";
import * as Styled from "./PrivacySelectCard.styled";

type Props = {
  title: string;
  content: string;
  cardIcon: ReactElement<any, any>;
  value: string;
  selected?: boolean;
  isPrivateCard?: boolean;
};

export const PrivacySelectCard = ({
  title,
  content,
  cardIcon,
  value,
  selected,
  isPrivateCard,
}: Props): JSX.Element => {
  return (
    <>
      <Styled.RadioCard value={value}>
        <Styled.Card $selected={selected} $isPrivate={isPrivateCard}>
          <Styled.FirstSection>
            <Styled.PrivacyIconContainer>
              {cardIcon}
            </Styled.PrivacyIconContainer>
            <Styled.ArrowIconContainer>
              {selected ? <Styled.ArrowWhiteIcon /> : <Styled.ArrowBlackIcon />}
            </Styled.ArrowIconContainer>
          </Styled.FirstSection>
          <Styled.SecondSection>
            <Styled.Title level={4} $selected={selected}>
              {title}
            </Styled.Title>
            <Styled.Content>{content}</Styled.Content>
          </Styled.SecondSection>
        </Styled.Card>
        {isPrivateCard && (
          <Styled.BottomContainer>Go premium</Styled.BottomContainer>
        )}
      </Styled.RadioCard>
    </>
  );
};
