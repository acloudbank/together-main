import { NextPage } from "next";
import {
  UserRole,
  WithAuthentication,
  CreationLayout,
  CancelModal,
  LoadingModal,
} from "../../../../common";
import router from "next/router";
import { LeftOutlinedIcon, CloseOutlinedIcon } from "ui";
import * as Styled from "./IssuePage.styled";
import { useIssue, useIssueStep } from "./hooks";
import {
  PrivacySelectionStep,
  IssueDetailsStep,
  FinalStep,
  CategoryStep,
  CreationForm,
} from "modules/issue/components";
import { IssueStatus_Enum } from "generated-graphql";

const IssuePage: WithAuthentication<NextPage> = () => {
  const { issue, isLoadingIssue } = useIssue();
  const {
    step,
    handleNext,
    handlePrevious,
    isCancelModalOpen,
    openCancelModal,
    handleCancelWithoutSaving,
    handleSaveAndCancel,
    closeCancelModal,
  } = useIssueStep({
    issue,
  });

  const steps = [
    {
      title: "Set privacy",
      content: <PrivacySelectionStep handleNext={handleNext} issue={issue} />,
    },
    {
      title: "Fill in the details",
      content: <IssueDetailsStep handleNext={handleNext} issue={issue} />,
    },
    {
      title: "Choose the category",
      content: <CategoryStep handleNext={handleNext} issue={issue} />,
    },
    {
      title: "",
      content: <FinalStep />,
    },
  ];

  const isCompletedStep =
    issue?.issues_by_pk?.status === IssueStatus_Enum.CompletedStep;

  return (
    <>
      <CreationLayout hasBackground={!isCompletedStep}>
        {isLoadingIssue ? (
          <LoadingModal open={true} />
        ) : (
          <Styled.PageContainer>
            <Styled.NavigatorContainer $isCompletedStep={isCompletedStep}>
              {isCompletedStep ? null : (
                <Styled.BackContainer onClick={handlePrevious}>
                  <Styled.LeftOutlinedIcon />
                  <Styled.BackText>BACK</Styled.BackText>
                </Styled.BackContainer>
              )}
              <CloseOutlinedIcon
                onClick={
                  !isCompletedStep
                    ? openCancelModal
                    : () => {
                        router.push("/explore");
                      }
                }
              />
            </Styled.NavigatorContainer>

            {/* ProgressContainer and StepContainer is inside CreationForm */}
            <CreationForm
              steps={steps}
              step={step}
              hasHideSteps={isCompletedStep}
            />
          </Styled.PageContainer>
        )}

        <CancelModal
          open={isCancelModalOpen}
          handleCancelWithoutSaving={handleCancelWithoutSaving}
          handleSaveAndCancel={handleSaveAndCancel}
          closeCancelModal={closeCancelModal}
        />
      </CreationLayout>
    </>
  );
};

IssuePage.requiresAuthentication = true;
IssuePage.requiredRoles = [UserRole.User];

export default IssuePage;
