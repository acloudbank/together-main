import { useCallback } from "react";
import { Form, FormInstance } from "ui";
import { useApolloMutation, useCurrentUser, useRouter } from "common";
import {
  GetCommentsByIssueIdDocument,
  Order_By,
  useInsertCommentsMutation,
} from "generated-graphql";

type Props = {
  selectedCommentId?: string;
};

type WriteCommentFormValues = {
  Content: string;
};

type WriteCommentResultResult = {
  form: FormInstance<WriteCommentFormValues>;
  handleChange: (_changedValues: any, allValues: any) => Promise<void>;
  handleSubmit: (values: WriteCommentFormValues) => Promise<void>;
  insertIsLoading: boolean;
};
export function useWriteComment({selectedCommentId} : Props): WriteCommentResultResult {
  const [form] = Form.useForm<WriteCommentFormValues>();
  const router = useRouter();
  const [currentUser] = useCurrentUser();
  const { issueId } = router.query as { issueId: string };

  const handleChange = useCallback(
    async (_changedValues: any, allValues: WriteCommentFormValues) => {
      form.setFieldsValue(allValues);
    },
    [form]
  );

  const [
    insertCommentsMutation,
    _insertCommentsData,
    { isLoading: insertIsLoading },
  ] = useApolloMutation(useInsertCommentsMutation);

  const handleSubmit = useCallback(
    async (values: WriteCommentFormValues) => {
      const [_result, { errors }] = await insertCommentsMutation({
        variables: {
          content: values.Content,
          parentCommentId: selectedCommentId,
          issueId,
        },
        refetchQueries: [
          {
            query: GetCommentsByIssueIdDocument,
            variables: {
              issueId,
              sortBy: Order_By.Desc,
              userId: currentUser?.id,
            },
          },
        ],
      });
      form.resetFields();
    },
    [currentUser?.id, form, insertCommentsMutation, issueId, selectedCommentId]
  );

  return {
    form,
    handleChange,
    handleSubmit,
    insertIsLoading
  };
}
