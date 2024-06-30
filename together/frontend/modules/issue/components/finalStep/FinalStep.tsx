import router from "next/router";
import * as Styled from "./FinalStep.styled";
import { LoveYouGestureIcon } from "ui";

export const FinalStep = (): JSX.Element => {
  return (
    <Styled.FinalStepContainer>
      <Styled.IconContainer>
        <Styled.InnerBox>
         <LoveYouGestureIcon />
        </Styled.InnerBox>
      </Styled.IconContainer>
      <Styled.Title>You are awasome!!</Styled.Title>
      <Styled.FinalMessage>
        You have successfully created your first post. Back to the issue and start conversation
      </Styled.FinalMessage>
      <Styled.SubmitContainer>
        <Styled.Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            router.push("/explore");
          }}
        >
          Go to the issue
        </Styled.Button>
      </Styled.SubmitContainer>
    </Styled.FinalStepContainer>
  );
};
