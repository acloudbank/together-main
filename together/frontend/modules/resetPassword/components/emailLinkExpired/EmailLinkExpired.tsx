import { useRouter } from "common";
import * as Styled from "./EmailLinkExpired.styled";

export const EmailLinkExpired = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Styled.Description>
        It seems that your link has expired or has already been used. Please
        start over and request a new one.
      </Styled.Description>
      <Styled.ActionContainer>
        <Styled.BackButton
          onClick={() => {
            router.push("/login");
          }}
        >
          Back
        </Styled.BackButton>
      </Styled.ActionContainer>
    </>
  );
};
