import { useRef } from "react";
import {
  BottomSheet as SprintBottomSheet,
  BottomSheetRef,
} from "react-spring-bottom-sheet";
import * as Styled from "./BottomSheet.styled";
import { CreateCard } from "./components";

type Props = { isOpen: boolean; closeBottomSheet: () => void };

export const BottomSheet = ({
  isOpen,
  closeBottomSheet,
}: Props): JSX.Element => {
  const sheetRef = useRef<BottomSheetRef>();
  return (
    <SprintBottomSheet open={isOpen} ref={sheetRef}>
      <Styled.HeaderContainer>
        <Styled.Header level={2}>Impact the community directly!</Styled.Header>
        <Styled.CloseIcon onClick={closeBottomSheet} />
      </Styled.HeaderContainer>
      <Styled.CardContainer>
        <CreateCard
          key="create-issue"
          url="/create-issue"
          title="CREATE AN ISSUE"
          content="if you want to make a difference in your community and bring attention to the topics that matter to you most"
          Icon={Styled.DirectHitIcon}
        />
        <CreateCard
          key="create-letter"
          url="/create-letter"
          title="CREATE A LETTER"
          content="if you have a specific complaint, a suggestion or an improvement and send it directly to your representatives"
          Icon={Styled.MemoIcon}
        />
      </Styled.CardContainer>
    </SprintBottomSheet>
  );
};
