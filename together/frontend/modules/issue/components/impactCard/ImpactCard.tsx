import * as Styled from "./ImpactCard.styled";
import { CircleArrowRightIcon } from "ui";

type ImpactCardProps = {
  cardTitle: string;
  count: number;
  isAchievementCard?: boolean;
};

export const ImpactCard = ({ cardTitle, count, isAchievementCard }: ImpactCardProps): JSX.Element => {

  const rednderAchievementCardsAndCount = (isAchievementCard: boolean | undefined, count: number) => {
    if (isAchievementCard) {
      return (
        <Styled.IconAndCountContainer>
          <Styled.IconContainer>
            <Styled.AchievementsIcons />
            <Styled.AchievementsIcons />
            <Styled.AchievementsIcons />
          </Styled.IconContainer>
          <Styled.CountCard>{count}+</Styled.CountCard>
        </Styled.IconAndCountContainer>
      )
    } else {
      return (
        <Styled.CountCard>{count}</Styled.CountCard>
      )
    }
  }

  return (
    <Styled.LinkableCard href="#">
      <Styled.CardLabelContainer>
        {rednderAchievementCardsAndCount(isAchievementCard, count)}
        <CircleArrowRightIcon />
      </Styled.CardLabelContainer>
      <Styled.LinkableCardLabel>{cardTitle}</Styled.LinkableCardLabel>
    </Styled.LinkableCard>
  );
};
