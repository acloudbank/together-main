import { useCallback, useEffect, useMemo, useState } from "react";
import { Form, FormInstance } from "ui";
import { useApolloMutation } from "common";
import {
  useCategoryStepUpdateIssueMutation,
  GetIssueByIdDocument,
  GetIssueByIdQuery,
  IssueStatus_Enum,
  IssueCategory_Enum,
} from "generated-graphql";

type Props = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

type CategoryFormValues = {
  Category: string;
};

type CategoryStepResult = {
  form: FormInstance<CategoryFormValues>;
  handleCategoryChange: (tag: string, checked: boolean) => Promise<void>;
  selectedCategory: string;
  handleSubmit: (values: CategoryFormValues) => Promise<void>;
  isLoading: boolean;
};
export function useCategoryStep({
  handleNext,
  issue,
}: Props): CategoryStepResult {
  const [form] = Form.useForm<CategoryFormValues>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = useCallback(
    async (tag: string, checked: boolean) => {
      const nextSelectedTags = checked ? tag : "";
      form.setFieldsValue({ Category: nextSelectedTags });
      setSelectedCategory(nextSelectedTags);
    },
    [form]
  );

  const [
    updateIssueMutation,
    _updateIssueData,
    { isLoading: updateIsLoading },
  ] = useApolloMutation(useCategoryStepUpdateIssueMutation, {});

  const handleSubmit = useCallback(
    async (values: CategoryFormValues) => {
      const [_result, { errors }] = await updateIssueMutation({
        variables: {
          id: issue?.issues_by_pk?.id,
          category: values.Category.replace(" ", "_") as IssueCategory_Enum,
          status: IssueStatus_Enum.CompletedStep,
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
      form.setFieldsValue({ Category: theIssue.category });
      setSelectedCategory(theIssue.category);
    }
  }, [issue, form]);

  return {
    form,
    handleCategoryChange,
    selectedCategory,
    handleSubmit,
    isLoading: updateIsLoading,
  };
}
