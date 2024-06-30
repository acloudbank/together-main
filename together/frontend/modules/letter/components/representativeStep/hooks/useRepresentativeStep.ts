import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useApolloMutation, useApolloQuery } from "common";
import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  GetRepresentativesQuery,
  LetterStatus_Enum,
  useGetRepresentativesQuery,
  useRepresentativeStepDeleteLetterContentsMutation,
  useRepresentativeStepInsertLetterContentsMutation,
  useUpdateLetterStatusByIdMutation,
} from "generated-graphql";
import { useCallback, useMemo, useState } from "react";

type UserRepresentativeStepResult = {
  representatives: GetRepresentativesQuery;
  isLoadingRepresentatives: boolean;
  selectedRepresentativesIds: string[];
  handleSelectAll: (e: CheckboxChangeEvent) => void;
  handleCheckboxChange: (e: CheckboxChangeEvent) => void;
  isLoading: boolean;
  handleSubmit: () => Promise<void>;
};

type Args = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
  generateLetterContents: () => Promise<void>;
};

export function useRepresentativeStep({
  next,
  letter,
  generateLetterContents,
}: Args): UserRepresentativeStepResult {
  const [
    representatives,
    { isLoading: isLoadingRepresentatives, errors: _representativesErrors },
  ] = useApolloQuery(useGetRepresentativesQuery);

  const [
    insertLetterContents,
    _insertLetterContentData,
    { isLoading: isLoadingInsert },
  ] = useApolloMutation(useRepresentativeStepInsertLetterContentsMutation, {});

  const [
    updateLetterStatusById,
    _updateLetterStatusData,
    { isLoading: isLoadingUpdateStatus },
  ] = useApolloMutation(useUpdateLetterStatusByIdMutation, {});

  const [
    deleteLetterContents,
    _deleteLetterContentsData,
    { isLoading: isLoadingDelete },
  ] = useApolloMutation(useRepresentativeStepDeleteLetterContentsMutation, {});

  const [selectedRepresentativesIds, setSelectedRepresentativesIds] = useState<
    string[]
  >([]);
  const [prevLetter, setPrevLetter] = useState<GetLetterByIdQuery>();

  if (letter !== prevLetter) {
    setPrevLetter(letter);
    if (letter && letter.letters_by_pk) {
      const theLetter = letter.letters_by_pk;
      if (theLetter.letterContents && theLetter.letterContents.length > 0) {
        const newSelectedRepresentativesIds = theLetter.letterContents.map(
          (letterContent) => letterContent.representative.id
        );
        setSelectedRepresentativesIds(newSelectedRepresentativesIds);
      }
    }
  }

  const isUpdateLetterContents = useMemo(() => {
    return (
      letter?.letters_by_pk?.letterContents &&
      letter?.letters_by_pk?.letterContents.length > 0
    );
  }, [letter]);

  const handleSelectAll = useCallback(
    (e: CheckboxChangeEvent) => {
      if (e.target.checked) {
        setSelectedRepresentativesIds(
          representatives.representatives.map(
            (representative) => representative.id
          )
        );
      } else {
        setSelectedRepresentativesIds([]);
      }
    },
    [representatives]
  );

  const handleCheckboxChange = useCallback(
    (e: CheckboxChangeEvent) => {
      if (e.target.checked) {
        const newSelectedRepresentativesIds = [
          ...selectedRepresentativesIds,
          e.target.value,
        ];
        setSelectedRepresentativesIds(newSelectedRepresentativesIds);
      } else {
        const newSelectedRepresentativesIds = selectedRepresentativesIds.filter(
          (id) => id !== e.target.value
        );
        setSelectedRepresentativesIds(newSelectedRepresentativesIds);
      }
    },
    [selectedRepresentativesIds]
  );

  const handleCreateLetterContents = useCallback(async () => {
    const inputs = selectedRepresentativesIds.map((id) => {
      return { letterId: letter?.letters_by_pk?.id, representativeId: id };
    });
    const [_result, { errors }] = await insertLetterContents({
      variables: {
        inputs: inputs,
      },
    });
    if (!errors) {
      const [_result, { errors }] = await updateLetterStatusById({
        variables: {
          id: letter?.letters_by_pk?.id,
          status: LetterStatus_Enum.AiParticipationStep,
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
        next();
        generateLetterContents();
      }
    }
  }, [
    insertLetterContents,
    next,
    letter,
    selectedRepresentativesIds,
    updateLetterStatusById,
    generateLetterContents,
  ]);

  const handleUpdateLetterContents = useCallback(async () => {
    const theLetter = letter.letters_by_pk;
    const letterContentsRepresentativeIds = theLetter?.letterContents?.map(
      (content) => content.representative?.id
    );
    const removedRepresentativeIds = letterContentsRepresentativeIds?.filter(
      (representativeId) =>
        !selectedRepresentativesIds.includes(representativeId)
    );
    const addedRepresentativeIds = selectedRepresentativesIds.filter(
      (representativeId) =>
        !letterContentsRepresentativeIds.includes(representativeId)
    );

    if (removedRepresentativeIds?.length) {
      await deleteLetterContents({
        variables: {
          letterId: theLetter?.id,
          representativeIds: removedRepresentativeIds,
        },
      });
    }
    if (addedRepresentativeIds?.length) {
      const inputs = addedRepresentativeIds.map((id) => {
        return { letterId: letter?.letters_by_pk?.id, representativeId: id };
      });
      const [_result, { errors: _errors }] = await insertLetterContents({
        variables: {
          inputs: inputs,
        },
      });
    }
    const [_result, { errors }] = await updateLetterStatusById({
      variables: {
        id: theLetter?.id,
        status: LetterStatus_Enum.AiParticipationStep,
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
      next();
      generateLetterContents();
    }
  }, [
    letter,
    selectedRepresentativesIds,
    deleteLetterContents,
    insertLetterContents,
    updateLetterStatusById,
    next,
    generateLetterContents,
  ]);

  const handleSubmit = useMemo(() => {
    return isUpdateLetterContents
      ? handleUpdateLetterContents
      : handleCreateLetterContents;
  }, [
    isUpdateLetterContents,
    handleCreateLetterContents,
    handleUpdateLetterContents,
  ]);

  return {
    representatives,
    isLoadingRepresentatives,
    selectedRepresentativesIds,
    handleSelectAll,
    handleCheckboxChange,
    isLoading: !isUpdateLetterContents
      ? isLoadingInsert || isLoadingUpdateStatus
      : isLoadingDelete || isLoadingInsert || isLoadingUpdateStatus,
    handleSubmit,
  };
}
