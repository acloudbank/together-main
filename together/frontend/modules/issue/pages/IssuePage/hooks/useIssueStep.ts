import { useApolloMutation, useRouter } from "common";
import {
  GetIssueByIdQuery,
  IssueStatus_Enum,
  useDeleteIssueByIdMutation,
  usePrivacySelectionStepInsertIssueMutation,
} from "generated-graphql";
import { useCallback, useEffect, useState } from "react";

type Args = {
  issue?: GetIssueByIdQuery;
};

type UseIssueStepResult = {
  step: number;
  handleNext: () => void;
  handlePrevious: () => void;
  isCancelModalOpen: boolean;
  handleSaveAndCancel: () => void;
  handleCancelWithoutSaving: () => void;
  openCancelModal: () => void;
  closeCancelModal: () => void;
};

export function useIssueStep({ issue }: Args): UseIssueStepResult {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
  const [prevIssueId, setPrevIssueId] = useState<string>(
    issue?.issues_by_pk?.id
  );

  if (issue?.issues_by_pk && issue?.issues_by_pk?.id !== prevIssueId) {
    setPrevIssueId(issue.issues_by_pk.id);
    let step = 0;
    const theIssue = issue.issues_by_pk;
    if (theIssue) {
      switch (theIssue.status) {
        case IssueStatus_Enum.IssueDetailsStep:
          step = 1;
          break;
        case IssueStatus_Enum.CategoryStep:
          step = 2;
          break;
        case IssueStatus_Enum.CompletedStep:
          step = 3;
          break;
      }
      setStep(step);
    }
  }

  const [insertIssue, _insertIssueData, { isLoading: _insertIsLoading }] =
    useApolloMutation(usePrivacySelectionStepInsertIssueMutation, {});

  const [deleteIssue, _deleteIssueData, { isLoading: _deleteIsLoading }] =
    useApolloMutation(useDeleteIssueByIdMutation, {});

  const handleNext = useCallback(
    (issueId?: string) => {
      if (!issueId || issueId === "") {
        setStep(step + 1);
      } else {
        router.push(`/create-issue/?id=${issueId}`);
        setStep(step + 1);
      }
    },
    [setStep, step, router]
  );

  const handleCancelWithoutSaving = useCallback(() => {
    if (!issue || !issue.issues_by_pk) {
      router.push("/explore");
    } else {
      //TODO: This should change based on the editMode state
      deleteIssue({
        variables: {
          id: issue.issues_by_pk.id,
        },
      });
      router.push("/explore");
    }
  }, [router, issue, deleteIssue]);

  const handleSaveAndCancel = useCallback(() => {
    if (issue && issue.issues_by_pk) {
      router.push("/explore");
    } else {
      insertIssue({
        variables: {
          isPrivate: false,
          status: IssueStatus_Enum.PrivacySelectionStep,
        },
      });
      router.push("/explore");
    }
  }, [router, issue, insertIssue]);

  const openCancelModal = useCallback(() => {
    setIsCancelModalOpen(true);
  }, []);

  const closeCancelModal = useCallback(() => {
    setIsCancelModalOpen(false);
  }, []);

  const handlePrevious = useCallback(() => {
    if (step === 0) {
      openCancelModal();
    } else {
      setStep(step - 1);
    }
  }, [step, openCancelModal]);

  return {
    step,
    handleNext,
    handlePrevious,
    isCancelModalOpen,
    handleSaveAndCancel,
    handleCancelWithoutSaving,
    openCancelModal,
    closeCancelModal,
  };
}
