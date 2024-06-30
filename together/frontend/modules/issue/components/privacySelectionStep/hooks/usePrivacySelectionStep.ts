import { useApolloMutation } from "common";
import { RadioChangeEvent } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Form, FormInstance } from "ui";
import {
  GetIssueByIdQuery,
  GetIssueByIdDocument,
  usePrivacySelectionStepInsertIssueMutation,
  usePrivacySelectionStepUpdateIssueMutation,
  IssueStatus_Enum,
} from "generated-graphql";

type PrivacySelectionFormValues = {
  privacy: string;
};

type Props = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

type UsePrivacySelectionResult = {
  form: FormInstance<PrivacySelectionFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  handleSubmit: (values: PrivacySelectionFormValues) => Promise<void>;
  handlePrivacyValueChange: (e: RadioChangeEvent) => void;
  selectedPrivacy: string;
  isLoading: boolean;
};

export function usePrivacySelectionStep({
  handleNext,
  issue,
}: Props): UsePrivacySelectionResult {
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>("");
  const [form] = Form.useForm<PrivacySelectionFormValues>();

  const handleChange = useCallback(
    async (_changedValues: any, allValues: { privacy?: string }) => {
      form.setFieldsValue(allValues);
    },
    [form]
  );

  const [insertIssue, _insertIssueData, { isLoading: insertIsLoading }] =
    useApolloMutation(usePrivacySelectionStepInsertIssueMutation, {});

  const [
    updateIssueMutation,
    _updateIssueData,
    { isLoading: updateIsLoading },
  ] = useApolloMutation(usePrivacySelectionStepUpdateIssueMutation, {});

  const handleIssueCreate = useCallback(
    async (value: PrivacySelectionFormValues) => {
      const [result, { errors }] = await insertIssue({
        variables: {
          isPrivate: value.privacy === "Private" ? true : false,
          status: IssueStatus_Enum.IssueDetailsStep,
        },
      });
      if (!errors) {
        handleNext(result?.insert_issues_one?.id);
      }
    },
    [handleNext, insertIssue]
  );

  const handleIssueUpdate = useCallback(
    async (value: PrivacySelectionFormValues) => {
      const [_result, { errors }] = await updateIssueMutation({
        variables: {
          id: issue?.issues_by_pk?.id,
          isPrivate: value.privacy === "Private" ? true : false,
          status: IssueStatus_Enum.IssueDetailsStep,
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
    [handleNext, updateIssueMutation, issue]
  );

  const handlePrivacyValueChange = useCallback(
    (e: RadioChangeEvent) => {
      setSelectedPrivacy(e.target.value);
    },
    [setSelectedPrivacy]
  );

  const handleSubmit = useMemo(() => {
    return issue?.issues_by_pk?.id ? handleIssueUpdate : handleIssueCreate;
  }, [handleIssueUpdate, issue, handleIssueCreate]);

  useEffect(() => {
    const theIssue = issue?.issues_by_pk;
    if (theIssue) {
      form.setFieldsValue({
        privacy: theIssue.isPrivate ? "Private" : "Public",
      });
      setSelectedPrivacy(theIssue.isPrivate ? "Private" : "Public");
    }
  }, [issue, form]);

  return {
    form,
    handleChange,
    handleSubmit,
    handlePrivacyValueChange,
    selectedPrivacy,
    isLoading: insertIsLoading || updateIsLoading,
  };
}
