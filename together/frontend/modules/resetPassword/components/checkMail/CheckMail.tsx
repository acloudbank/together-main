import { Dispatch, SetStateAction } from "react";

import * as Styled from "./CheckMail.styled";
import { useCheckMail } from "./hooks";

type Props = {
  emailSentTo: string;
  setEmailSentTo: Dispatch<SetStateAction<string>>;
};
export const CheckMail = ({
  setEmailSentTo,
  emailSentTo,
}: Props): JSX.Element => {
  const { handleClick } = useCheckMail({ emailSentTo });

  return (
    <>
      <Styled.Description>{`We sent a recover link to ${emailSentTo}. Please check your email and change your password`}</Styled.Description>
      <Styled.ResentBox>
        <Styled.ResentLink onClick={handleClick}>Click here</Styled.ResentLink>
        <Styled.ResetLinkDescription>
          if you did not get an email
        </Styled.ResetLinkDescription>
      </Styled.ResentBox>
      <Styled.ActionContainer>
        <Styled.BackButton onClick={() => setEmailSentTo("")}>
          Back
        </Styled.BackButton>
      </Styled.ActionContainer>
    </>
  );
};
