import { RadioChangeEvent } from "antd";
import { useApolloMutation } from "common";
import { Form, FormInstance } from "ui";
import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterStatus_Enum,
  useSubjectStepUpdateLetterByIdMutation,
} from "generated-graphql";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LetterSubjectType } from "../types";

type UseSubjectStepResult = {
  letterSubjectType: LetterSubjectType;
  handleLetterSubjectTypeChange: (e: RadioChangeEvent) => void;
  form: FormInstance<SubjectFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  isLoading: boolean;
  handleSubmit: (values: SubjectFormValues) => Promise<void>;
  //TODO: This should change when selected issue is implemented
  handleSelectedIssueSubmit: () => void;
};

type Args = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
  issueId?: string;
};

type SubjectFormValues = {
  topic: string;
};

export function useSubjectStep({ next, letter }: Args): UseSubjectStepResult {
  const [form] = Form.useForm<SubjectFormValues>();
  const [letterSubjectType, setLetterSubjectType] = useState<LetterSubjectType>(
    LetterSubjectType.BasedOnIssue
  );
  const [selectedIssueId, setSelectedIssueId] = useState<string>();

  const [updateLetterById, _updateLetterData, { isLoading: updateIsLoading }] =
    useApolloMutation(useSubjectStepUpdateLetterByIdMutation, {});

  const handleChange = useCallback(
    async (_changedValues, allValues) => {
      form.getFieldsValue(allValues);
    },
    [form]
  );

  const handleLetterSubjectTypeChange = useCallback(
    (e: RadioChangeEvent) => {
      setLetterSubjectType(e.target.value);
      setSelectedIssueId(undefined);
    },
    [setLetterSubjectType, setSelectedIssueId]
  );

  // TODO: This should change when selected issue is implemented
  const handleSelectedIssueSubmit = useCallback(() => {}, []);

  const handleSubmit = useCallback(
    async (values: SubjectFormValues) => {
      const [_result, { errors }] = await updateLetterById({
        variables: {
          id: letter?.letters_by_pk?.id,
          topic: values.topic,
          status: LetterStatus_Enum.PurposeStep,
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

  useEffect(() => {
    const theLetter = letter?.letters_by_pk;
    if (theLetter) {
      form.setFieldsValue({
        topic: theLetter.topic,
      });
    }
  }, [letter, form]);

  return {
    letterSubjectType,
    handleLetterSubjectTypeChange,
    form,
    handleChange,
    // TODO: This should change when selecting issue is implemented
    isLoading: updateIsLoading,
    handleSubmit,
    handleSelectedIssueSubmit,
  };
}
