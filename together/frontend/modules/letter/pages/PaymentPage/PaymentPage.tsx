import {
  CreationLayout,
  UserRole,
  WithAuthentication,
  useRouter,
} from "common";
import { useLetter } from "modules/letter/hooks";
import { NextPage } from "next";
import { CloseOutlinedIcon, LeftOutlinedIcon } from "ui";

import * as Styled from "./PaymentPage.styled";
import { useCallback } from "react";

const PaymentPage: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { letter, isLoadingLetter } = useLetter();

  if ((!letter || !letter.letters_by_pk) && !isLoadingLetter) {
    router.push("/create-letter");
  }

  const toExplore = useCallback(() => {
    router.push("/explore");
  }, [router]);

  return (
    <>
      <CreationLayout hasBackground={true}>
        <Styled.PageContainer>
          <Styled.NavigatorContainer>
            <LeftOutlinedIcon />
            <CloseOutlinedIcon onClick={toExplore} />
          </Styled.NavigatorContainer>

          <Styled.Container>
            <div></div>
          </Styled.Container>
        </Styled.PageContainer>
      </CreationLayout>
    </>
  );
};

PaymentPage.requiresAuthentication = true;
PaymentPage.requiredRoles = [UserRole.User];

export default PaymentPage;
