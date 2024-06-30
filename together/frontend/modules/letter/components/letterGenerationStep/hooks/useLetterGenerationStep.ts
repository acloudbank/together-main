import { useApolloMutation, useRouter } from "common";
import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterStatus_Enum,
  useLetterGenerationStepUpdateLetterByIdMutation,
} from "generated-graphql";
import { useCallback, useState } from "react";

type Args = {
  letter?: GetLetterByIdQuery;
};

type UseLetterGenerationStepResult = {
  duplicateByEmail: boolean;
  handleDuplicateByEmailValueChange: () => void;
  isLoading: boolean;
  handleSubmit: () => Promise<void>;
};

export function useLetterGenerationStep({
  letter,
}: Args): UseLetterGenerationStepResult {
  const [prevLetter, setPrevLetter] = useState<GetLetterByIdQuery>();
  const [duplicateByEmail, setDuplicateByEmail] = useState<boolean>(false);
  const router = useRouter();

  const [updateLetterById, _updateLetterData, { isLoading: updateIsLoading }] =
    useApolloMutation(useLetterGenerationStepUpdateLetterByIdMutation, {});

  if (letter !== prevLetter) {
    setPrevLetter(letter);
    if (letter && letter.letters_by_pk) {
      const theLetter = letter.letters_by_pk;
      setDuplicateByEmail(theLetter.sendEmail);
    }
  }

  const handleDuplicateByEmailValueChange = useCallback(() => {
    setDuplicateByEmail(!duplicateByEmail);
  }, [duplicateByEmail]);

  const handleSubmit = useCallback(async () => {
    const [_result, { errors }] = await updateLetterById({
      variables: {
        id: letter?.letters_by_pk?.id,
        status: LetterStatus_Enum.PaymentStep,
        sendEmail: duplicateByEmail,
      },
      refetchQueries: [
        {
          query: GetLetterByIdDocument,
          variables: {
            letterId: letter?.letters_by_pk?.id,
          },
        },
      ],
    });
    if (!errors) {
      router.push(`/create-letter/payment?id=${letter?.letters_by_pk?.id}`);
    }
  }, [updateLetterById, letter, duplicateByEmail, router]);

  return {
    duplicateByEmail,
    handleDuplicateByEmailValueChange,
    isLoading: updateIsLoading,
    handleSubmit,
  };
}
