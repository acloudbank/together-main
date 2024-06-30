import { useCallback, useEffect, useState } from "react";
import { Form, FormInstance } from "ui";
import { useApolloMutation } from "common";
import {
  useIssueDetailsStepUpdateIssueMutation,
  GetIssueByIdDocument,
  GetIssueByIdQuery,
  IssueStatus_Enum,
  IssueFieldViewScale_Enum,
} from "generated-graphql";

type Props = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

type IssueDetailsFormValues = {
  Subject: string;
  IssueBody: string;
  Link: string;
  ScaleField: IssueFieldViewScale_Enum;
};

type IssueDetailsStepResult = {
  form: FormInstance<IssueDetailsFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  handleScaleTagChange: (
    tag: IssueFieldViewScale_Enum,
    checked: boolean
  ) => Promise<void>;
  selectedScaleTags: string;
  handleSubmit: (values: IssueDetailsFormValues) => Promise<void>;
  isLoading: boolean;
};
export function useIssueDetails({
  handleNext,
  issue,
}: Props): IssueDetailsStepResult {
  const [form] = Form.useForm<IssueDetailsFormValues>();
  const [selectedScaleTags, setSelectedScaleTags] = useState<string>("");

  const handleScaleTagChange = useCallback(
    async (tag: IssueFieldViewScale_Enum, checked: boolean) => {
      const nextSelectedTags = checked ? tag : undefined;
      form.setFieldsValue({ ScaleField: nextSelectedTags });
      setSelectedScaleTags(nextSelectedTags);
    },
    [form]
  );

  const handleChange = useCallback(
    async (_changedValues: any, allValues: IssueDetailsFormValues) => {
      form.setFieldsValue(allValues);
    },
    [form]
  );

  const [
    updateIssueMutation,
    _updateIssueData,
    { isLoading: updateIsLoading },
  ] = useApolloMutation(useIssueDetailsStepUpdateIssueMutation, {});

  const handleSubmit = useCallback(
    async (values: IssueDetailsFormValues) => {
      const [_result, { errors }] = await updateIssueMutation({
        variables: {
          id: issue?.issues_by_pk?.id,
          title: values.Subject,
          content: values.IssueBody,
          link: values.Link,
          fieldViewScale: values.ScaleField,
          status: IssueStatus_Enum.CategoryStep,
        },
        refetchQueries: [
          {
            query: GetIssueByIdDocument,
            variables: {
              issueId: issue?.issues_by_pk?.id,
            },
          },
        ],
      });
      if (!errors) {
        handleNext();
      }
    },
    [updateIssueMutation, handleNext, issue]
  );

  useEffect(() => {
    const theIssue = issue?.issues_by_pk;
    if (theIssue) {
      form.setFieldsValue({
        Subject: theIssue.title,
        IssueBody: theIssue.content,
        Link: theIssue.link,
        ScaleField: theIssue.fieldViewScale,
      });
      setSelectedScaleTags(theIssue.fieldViewScale);
    }
  }, [issue, form]);

  return {
    form,
    handleChange,
    handleScaleTagChange,
    selectedScaleTags,
    handleSubmit,
    isLoading: updateIsLoading,
  };
}
