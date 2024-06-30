import { RadioChangeEvent } from "antd";
import { useApolloMutation } from "common";
import {
  GetLetterByIdDocument,
  GetLetterByIdQuery,
  LetterStatus_Enum,
  usePersonalizeStepUpdateLetterByIdMutation,
  usePersonalizeStepInsertLetterMutation,
  Language_Enum,
} from "generated-graphql";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Form, FormInstance } from "ui";

type PersonalizeFormValues = {
  name: string;
  surname: string;
  state: string;
  city: string;
  street: string;
  unit: string;
};

type UserPersonalizeStepResult = {
  form: FormInstance<PersonalizeFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  isLoading: boolean;
  handleSubmit: (values: PersonalizeFormValues) => Promise<void>;
  language: Language_Enum;
  handleLanguageValueChange: (e: RadioChangeEvent) => void;
};

type Args = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
};
export function usePersonalizeStep({
  next,
  letter,
}: Args): UserPersonalizeStepResult {
  const [form] = Form.useForm<PersonalizeFormValues>();
  const [language, setLanguage] = useState<Language_Enum>(
    letter?.letters_by_pk?.language
  );

  const handleLanguageValueChange = useCallback(
    (e: RadioChangeEvent) => {
      setLanguage(e.target.value);
    },
    [setLanguage]
  );

  const handleChange = useCallback(
    async (_changedValues, allValues) => {
      form.setFieldsValue(allValues);
    },
    [form]
  );

  const [insertLetter, _insertLetterData, { isLoading: insertIsLoading }] =
    useApolloMutation(usePersonalizeStepInsertLetterMutation, {});

  const [updateLetterById, _updateLetterData, { isLoading: updateIsLoading }] =
    useApolloMutation(usePersonalizeStepUpdateLetterByIdMutation, {});

  const handleCreateLetter = useCallback(
    async (values: PersonalizeFormValues) => {
      const [result, { errors }] = await insertLetter({
        variables: {
          creatorName: values.name,
          creatorSurname: values.surname,
          unit: values.unit,
          street: values.street,
          city: values.city,
          state: values.state,
          status: LetterStatus_Enum.SubjectStep,
          language: language,
        },
      });
      if (!errors) {
        next(result?.insert_letters_one?.id);
      }
    },
    [insertLetter, next, language]
  );

  const handleUpdateLetter = useCallback(
    async (values: PersonalizeFormValues) => {
      const [_result, { errors }] = await updateLetterById({
        variables: {
          id: letter?.letters_by_pk?.id,
          creatorName: values.name,
          creatorSurname: values.surname,
          unit: values.unit,
          street: values.street,
          city: values.city,
          state: values.state,
          status: LetterStatus_Enum.SubjectStep,
          language: language,
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

  const handleSubmit = useMemo(() => {
    return letter?.letters_by_pk?.id ? handleUpdateLetter : handleCreateLetter;
  }, [handleUpdateLetter, letter, handleCreateLetter]);

  useEffect(() => {
    const theLetter = letter?.letters_by_pk;
    if (theLetter) {
      form.setFieldsValue({
        name: theLetter.creatorName,
        surname: theLetter.creatorSurname,
        city: theLetter.city,
        state: theLetter.state,
        street: theLetter.street,
        unit: theLetter.unit,
      });
      setLanguage(theLetter.language);
    }
  }, [letter, form]);

  return {
    form,
    handleChange,
    isLoading: letter?.letters_by_pk?.id ? updateIsLoading : insertIsLoading,
    handleSubmit,
    language,
    handleLanguageValueChange,
  };
}
