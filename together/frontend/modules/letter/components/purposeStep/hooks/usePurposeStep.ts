import { useApolloMutation } from "common";
import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterStatus_Enum,
  usePurposeStepUpdateLetterByIdMutation,
} from "generated-graphql";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Form, FormInstance } from "ui";
import { trim } from "lodash";

type PurposeFormValues = {
  feelings: string;
  expectations: string;
  additionalInfo?: string;
};

type UserPurposeStepResult = {
  form: FormInstance<PurposeFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  isLoading: boolean;
  handleSubmit: (values: PurposeFormValues) => Promise<void>;
  selectedFeelings: string[];
  feelings: string[];
  selectedExpectations: string[];
  expectations: string[];
  handleFeelingClick: (feeling: string) => void;
  handleExpectationClick: (expectation: string) => void;
};

type Args = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
};

export function usePurposeStep({ next, letter }: Args): UserPurposeStepResult {
  const feelings = useMemo(() => {
    return [
      "Angry",
      "Worried",
      "Upset",
      "Frustrated",
      "Hopeless",
      "Empowered",
      "Motivated",
    ];
  }, []);

  const expectations = useMemo(() => {
    return [
      "Take action",
      "Address the problem",
      "Find a solution",
      "Prioritize issue",
      "Respond to my issue",
    ];
  }, []);

  const [form] = Form.useForm<PurposeFormValues>();
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [selectedExpectations, setSelectedExpectations] = useState<string[]>(
    []
  );
  const [prevLetter, setPrevLetter] = useState<GetLetterByIdQuery>();

  if (letter !== prevLetter) {
    setPrevLetter(letter);
    if (letter?.letters_by_pk?.feelings) {
      const newFeelings = feelings.filter((feeling) =>
        letter?.letters_by_pk?.feelings.includes(feeling)
      );
      setSelectedFeelings(newFeelings);
    }
    if (letter?.letters_by_pk?.expectations) {
      const newExpectations = expectations.filter((expectation) =>
        letter?.letters_by_pk?.expectations.includes(expectation)
      );
      setSelectedExpectations(newExpectations);
    }
  }

  const [updateLetterById, _updateLetterData, { isLoading }] =
    useApolloMutation(usePurposeStepUpdateLetterByIdMutation, {});

  const handleSubmit = useCallback(
    async (values: PurposeFormValues) => {
      const [_result, { errors }] = await updateLetterById({
        variables: {
          id: letter?.letters_by_pk?.id,
          feelings: values.feelings,
          expectations: values.expectations,
          additionalInformation: values.additionalInfo,
          status: LetterStatus_Enum.RepresentativeStep,
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
      }
    },
    [updateLetterById, next, letter]
  );

  const handleChange = useCallback(
    async (changedValues, allValues) => {
      if (changedValues.feelings) {
        const newFeelings = feelings.filter((feeling) =>
          changedValues.feelings.includes(feeling)
        );
        setSelectedFeelings(newFeelings);
      } else if (changedValues.expectations) {
        const newExpectations = expectations.filter((expectation) =>
          changedValues.expectations.includes(expectation)
        );
        setSelectedExpectations(newExpectations);
      } else {
        setSelectedFeelings([]);
        setSelectedExpectations([]);
      }
      form.setFieldsValue(allValues);
    },
    [feelings, expectations, form]
  );

  const handleFeelingClick = useCallback(
    (feeling: string) => {
      const values = form.getFieldsValue();
      if (selectedFeelings.includes(feeling)) {
        const newFeelings = selectedFeelings.filter((sf) => sf !== feeling);
        setSelectedFeelings(newFeelings);
        form.setFieldValue(
          "feelings",
          trim(values.feelings.replace(feeling, ""))
        );
      } else {
        const newFeelings = [...selectedFeelings, feeling];
        setSelectedFeelings(newFeelings);
        form.setFieldValue(
          "feelings",
          values?.feelings && values.feelings !== ""
            ? trim(values.feelings.concat(` ${feeling}`))
            : trim(`${feeling}`)
        );
      }
    },
    [selectedFeelings, form]
  );

  const handleExpectationClick = useCallback(
    (expectation: string) => {
      const values = form.getFieldsValue();
      if (selectedExpectations.includes(expectation)) {
        const newExpectations = selectedExpectations.filter(
          (se) => se !== expectation
        );
        setSelectedExpectations(newExpectations);
        form.setFieldValue(
          "expectations",
          trim(values.expectations.replace(expectation, ""))
        );
      } else {
        const newExpectations = [...selectedExpectations, expectation];
        setSelectedExpectations(newExpectations);
        form.setFieldValue(
          "expectations",
          values?.expectations && values.expectations !== ""
            ? trim(values.expectations.concat(` ${expectation}`))
            : trim(`${expectation}`)
        );
      }
    },
    [selectedExpectations, form]
  );

  useEffect(() => {
    const theLetter = letter?.letters_by_pk;
    if (theLetter) {
      form.setFieldsValue({
        feelings: theLetter.feelings,
        expectations: theLetter.expectations,
        additionalInfo: theLetter.additionalInformation,
      });
    }
  }, [letter, form]);

  return {
    handleChange,
    handleSubmit,
    form,
    isLoading,
    selectedFeelings,
    selectedExpectations,
    handleFeelingClick,
    feelings,
    expectations,
    handleExpectationClick,
  };
}
