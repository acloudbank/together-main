import {
  BadWordErrorModal,
  CreationLayout,
  UserRole,
  WithAuthentication,
  useRouter,
} from "common";
import { useLetterContent, useLetter } from "modules/letter/hooks";
import { NextPage } from "next";

import * as Styled from "./EditLetterPage.styled";
import { useEditLetterPage } from "./hooks";

const EditLetterPage: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { letter, isLoadingLetter } = useLetter();
  const { savedLetterContent } = useLetterContent({ letter });
  const {
    content,
    textareaRef,
    height,
    handleLetterChange,
    divRef,
    loading,
    contextHolder,
    handleCancelEditLetter,
    isBadWordModalOpen,
    handleCancelBadWordModal,
    handleSave,
    isUpdateLoading,
  } = useEditLetterPage({
    letter,
    savedLetterContent,
  });

  if ((!letter || !letter.letters_by_pk) && !isLoadingLetter) {
    router.push("/create-letter");
  }

  if (letter && letter.letters_by_pk && !savedLetterContent) {
    router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
  }

  return (
    <>
      <CreationLayout hasBackground={false}>
        {contextHolder}
        <Styled.PageContainer>
          <Styled.NavigatorContainer>
            <Styled.EditTitle level={2}>Edit the letter</Styled.EditTitle>
            <Styled.CloseIcon
              onClick={(_e) => {
                router.push(`/create-letter?id=${letter?.letters_by_pk?.id}`);
              }}
            />
          </Styled.NavigatorContainer>
          <Styled.TextAreaContainer height={height}>
            <Styled.TextArea
              onChange={(e) => {
                handleLetterChange(e);
              }}
              ref={textareaRef}
              bordered={false}
              value={content}
              height={height}
            />
            <Styled.OverlayTextArea ref={divRef}>
              {loading && content}
            </Styled.OverlayTextArea>
          </Styled.TextAreaContainer>
          <Styled.ActionButtonsContainer>
            <Styled.CancelButton
              htmlType="button"
              type="default"
              onClick={handleCancelEditLetter}
            >
              Cancel
            </Styled.CancelButton>
            <Styled.SaveButton
              htmlType="button"
              type="primary"
              onClick={handleSave}
              disabled={isUpdateLoading}
              loading={isUpdateLoading}
            >
              Save
            </Styled.SaveButton>
          </Styled.ActionButtonsContainer>
        </Styled.PageContainer>
        <BadWordErrorModal
          open={isBadWordModalOpen}
          handleCancel={handleCancelBadWordModal}
          handleOk={handleCancelBadWordModal}
        />
      </CreationLayout>
    </>
  );
};

EditLetterPage.requiresAuthentication = true;
EditLetterPage.requiredRoles = [UserRole.User];

export default EditLetterPage;
