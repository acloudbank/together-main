import {
  CreationLayout,
  UnknownErrorModal,
  UserRole,
  WithAuthentication,
  useRouter,
} from "common";
import { NextPage } from "next";

import * as Styled from "./ViewLetterPage.styled";
import { LeftOutlinedIcon } from "ui";
import {
  useLetterContentGenerator,
  useLetter,
  useLetterContent,
} from "modules/letter/hooks";
import { useCallback } from "react";

const ViewLetterPage: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { letter, isLoadingLetter } = useLetter();
  const { savedLetterContent } = useLetterContent({ letter });
  const {
    regeneratedLetterContent,
    regenerationLoading,
    regenerateLetterContent,
    isErrorModalOpen,
    handleCloseErrorModal,
  } = useLetterContentGenerator({ letter });

  if ((!letter || !letter.letters_by_pk) && !isLoadingLetter) {
    router.push("/create-letter");
  }

  if (letter && letter.letters_by_pk && !savedLetterContent) {
    router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
  }

  const toLetterCreation = useCallback(
    (_e) => {
      router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
    },
    [router, letter]
  );

  const toEditLetter = useCallback(() => {
    router.push(
      `/create-letter/edit?id=${letter?.letters_by_pk?.id}&contentId=${savedLetterContent?.id}`
    );
  }, [router, letter, savedLetterContent]);

  return (
    <>
      <CreationLayout hasBackground={false}>
        <Styled.PageContainer>
          <Styled.NavigatorContainer>
            <LeftOutlinedIcon
              onClick={!regenerationLoading ? toLetterCreation : () => {}}
            />
            <Styled.EditAndExitFullScreenIconsContainer>
              <Styled.ExitFullScreenIcon
                onClick={!regenerationLoading ? toLetterCreation : () => {}}
              />
              <Styled.EditIcon
                onClick={!regenerationLoading ? toEditLetter : () => {}}
              />
            </Styled.EditAndExitFullScreenIconsContainer>
          </Styled.NavigatorContainer>

          {/* Representative info */}
          <Styled.RepresentativeContainer>
            <Styled.RepresentativeAvatar />
            <Styled.RepresentativeInfo>
              <Styled.RepresentativeName>{`${
                savedLetterContent?.representative.firstname
              } ${
                savedLetterContent?.representative.middlename
                  ? `${savedLetterContent?.representative.middlename.charAt(
                      0
                    )}.`
                  : ""
              } ${
                savedLetterContent?.representative.lastname
              }`}</Styled.RepresentativeName>
              <Styled.RepresentativePosition>
                Senator / Head of streets department
              </Styled.RepresentativePosition>
            </Styled.RepresentativeInfo>
          </Styled.RepresentativeContainer>
          <Styled.LetterPreset>
            {regenerationLoading
              ? regeneratedLetterContent
              : savedLetterContent?.content}
          </Styled.LetterPreset>

          <Styled.SubmitContainer>
            <Styled.Button
              disabled={regenerationLoading}
              type="default"
              htmlType="button"
              onClick={(_e) => {
                regenerateLetterContent(savedLetterContent?.id);
              }}
              loading={regenerationLoading}
            >
              {regenerationLoading ? "Generating" : "Regenerate letter"}
            </Styled.Button>
          </Styled.SubmitContainer>
        </Styled.PageContainer>
        <UnknownErrorModal
          open={isErrorModalOpen}
          handleCancel={handleCloseErrorModal}
        />
      </CreationLayout>
    </>
  );
};

ViewLetterPage.requiresAuthentication = true;
ViewLetterPage.requiredRoles = [UserRole.User];

export default ViewLetterPage;
