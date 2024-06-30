import { NextPage } from "next";
import {
  UserRole,
  WithAuthentication,
  CreationLayout,
  LoadingModal,
  CancelModal,
} from "../../../../common";

import * as Styled from "./LetterPage.styled";
import { CloseOutlinedIcon } from "ui";
import { useRouter } from "common";
import {
  LetterGenerationStep,
  PersonalizeStep,
  PurposeStep,
  RepresentativeStep,
  SubjectStep,
} from "../../components";
import { useLetter, useLetterContentGenerator } from "../../hooks";
import { useLetterStep } from "./hooks";
import { useCallback } from "react";

const LETTER_GENERATION_STEP = 4;

const LetterPage: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { letter, isLoadingLetter } = useLetter();
  const {
    currentStep,
    next,
    previous,
    isCancelModalOpen,
    handleSaveAndCancel,
    closeCancelModal,
    openCancelModal,
  } = useLetterStep({ letter });
  const {
    letterContents,
    generationLoading,
    generateLetterContents,
    isErrorModalOpen,
    handleCloseErrorModal,
    handleOkErrorModalInLetterGenerationStep,
  } = useLetterContentGenerator({
    letter,
    previous,
  });
  const steps = [
    {
      title: "Let's make your first step towards change",
      content: <PersonalizeStep letter={letter} next={next}></PersonalizeStep>,
    },
    {
      title: "What's the subject that best fit your request",
      content: <SubjectStep letter={letter} next={next} />,
    },
    {
      title: "Shortly describe the purpose of your appeal",
      content: <PurposeStep letter={letter} next={next} />,
    },
    {
      title: "Choose your representatives",
      content: (
        <RepresentativeStep
          letter={letter}
          next={next}
          generateLetterContents={generateLetterContents}
        />
      ),
    },
    {
      title: "Check the info & move on!",
      content: (
        <LetterGenerationStep
          letter={letter}
          letterContents={letterContents}
          generationLoading={generationLoading}
          isErrorModalOpen={isErrorModalOpen}
          handleCloseErrorModal={handleCloseErrorModal}
          handleOkErrorModal={handleOkErrorModalInLetterGenerationStep}
        />
      ),
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const toExplore = useCallback(() => {
    router.push("/explore");
  }, [router]);

  return (
    <>
      <CreationLayout hasBackground={currentStep !== LETTER_GENERATION_STEP}>
        {isLoadingLetter ? (
          <LoadingModal open={true} />
        ) : (
          <Styled.PageContainer>
            {!generationLoading && (
              <>
                <Styled.NavigatorContainer>
                  <Styled.BackContainer onClick={previous}>
                    <Styled.LeftOutlinedIcon />
                    <Styled.BackText>BACK</Styled.BackText>
                  </Styled.BackContainer>

                  <Styled.CloseOutlinedIcon onClick={toExplore} />
                </Styled.NavigatorContainer>

                <Styled.ProgressContainer>
                  <Styled.Steps
                    current={currentStep}
                    items={items}
                    responsive={false}
                    type={"navigation"}
                  />
                  <Styled.StepTitle level={2}>
                    {steps[currentStep].title}
                  </Styled.StepTitle>
                </Styled.ProgressContainer>
              </>
            )}

            {currentStep !== LETTER_GENERATION_STEP ? (
              <Styled.StepContainer>
                <div>{steps[currentStep].content}</div>
              </Styled.StepContainer>
            ) : (
              <Styled.LetterGenerationStepContainer>
                <div>{steps[currentStep].content}</div>
              </Styled.LetterGenerationStepContainer>
            )}
          </Styled.PageContainer>
        )}
        {/* <CancelModal
          open={isCancelModalOpen}
          //handleCancelWithoutSaving={handleCancelWithoutSaving}
          handleSaveAndCancel={handleSaveAndCancel}
          closeCancelModal={closeCancelModal}
        /> */}
      </CreationLayout>
    </>
  );
};

LetterPage.requiresAuthentication = true;
LetterPage.requiredRoles = [UserRole.User];

export default LetterPage;
