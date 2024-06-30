import { useApolloMutation, useRouter } from "common";
import {
  GetLetterByIdQuery,
  LetterStatus_Enum,
  usePersonalizeStepInsertLetterMutation,
} from "generated-graphql";
import { useCallback, useState } from "react";

type Args = {
  letter?: GetLetterByIdQuery;
};

type UseLetterStepResult = {
  currentStep: number;
  next: () => void;
  previous: () => void;
  openCancelModal: () => void;
  closeCancelModal: () => void;
  handleSaveAndCancel: () => void;
  isCancelModalOpen: boolean;
};

export function useLetterStep({ letter }: Args): UseLetterStepResult {
  const router = useRouter();
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [prevLetterId, setPrevLetterId] = useState<string>(
    letter?.letters_by_pk?.id
  );

  const [insertLetter, _insertLetterData, { isLoading: insertIsLoading }] =
    useApolloMutation(usePersonalizeStepInsertLetterMutation, {});

  if (letter?.letters_by_pk && letter?.letters_by_pk?.id !== prevLetterId) {
    setPrevLetterId(letter.letters_by_pk.id);
    let step = 0;
    const theLetter = letter?.letters_by_pk;
    if (theLetter) {
      switch (theLetter.status) {
        case LetterStatus_Enum.SubjectStep:
          step = 1;
          break;
        case LetterStatus_Enum.PurposeStep:
          step = 2;
          break;
        case LetterStatus_Enum.RepresentativeStep:
          step = 3;
          break;
        //
        case LetterStatus_Enum.AiParticipationStep:
          step = 4;
          break;
        case LetterStatus_Enum.PaymentStep:
          step = 4;
          break;
        default:
          step = 1;
      }
      setCurrentStep(step);
    }
  }

  const next = useCallback(
    (letterId?: string) => {
      if (!letterId || letterId === "") {
        setCurrentStep(currentStep + 1);
      } else {
        // Only for initial step
        router.push(`/create-letter/?id=${letterId}`);
      }
    },
    [setCurrentStep, currentStep, router]
  );

  const previous = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push(`/explore`);
    }
  }, [setCurrentStep, currentStep, router]);

  const openCancelModal = useCallback(() => {
    setIsCancelModalOpen(true);
  }, []);

  const closeCancelModal = useCallback(() => {
    setIsCancelModalOpen(false);
  }, []);

  // const handleCancelWithoutSaving = useCallback(() => {
  //   if (!issue || !issue.issues_by_pk) {
  //     router.push("/explore");
  //   } else {
  //     deleteIssue({
  //       variables: {
  //         id: issue.issues_by_pk.id,
  //       },
  //     });
  //     router.push("/explore");
  //   }
  // }, [router, issue, deleteIssue]);

  const handleSaveAndCancel = useCallback(() => {
    if (letter && letter.letters_by_pk) {
      router.push("/explore");
    } else {
      insertLetter({
        variables: {
          creatorName: "",
          creatorSurname: "",
          unit: "",
          street: "",
          city: "",
          state: "",
          status: LetterStatus_Enum.PersonalizeStep,
        },
      });
      router.push("/explore");
    }
  }, [router, letter, insertLetter]);

  return {
    currentStep,
    next,
    previous,
    openCancelModal,
    closeCancelModal,
    handleSaveAndCancel,
    isCancelModalOpen,
  };
}
