import { useApolloMutation } from "common";
import { GetCommentsByIssueIdDocument, Order_By, useInsertIssuesUsersMutation, useDeleteIssuesUsersMutation } from "generated-graphql";
import { useCallback } from "react";

type Args = {
  sortBy: Order_By; // asc | desc
  userId?: string;
  issuesUsersId: string;
  issueId: string;
};

type UseIssuesUsersResult = {
  handleJoinIssue: (issueId: string) => Promise<void>;
  insertIsLoading: boolean;
  handleLeaveIssue: () => Promise<void>;
};

export function useIssuesUsers({ sortBy, userId, issuesUsersId, issueId }: Args): UseIssuesUsersResult {

  const [insertIssuesUsers, _insertIssuesUsersData, { isLoading: insertIsLoading }] =
    useApolloMutation(useInsertIssuesUsersMutation, {});

  const [deleteIssuesUsers, _deleteIssuesUsersData, { isLoading: deleteIsLoading }] =
    useApolloMutation(useDeleteIssuesUsersMutation, {});

  const handleJoinIssue = useCallback(
    async (issueId: string) => {
      const [_result, { errors }] = await insertIssuesUsers({
        variables: {
          issueId: issueId,
        },
        refetchQueries: [
          {
            query: GetCommentsByIssueIdDocument,
            variables: {
              issueId,
              sortBy,
              userId,
            },
          },
        ],
      });
    },
    [insertIssuesUsers, sortBy, userId]
  );

  const handleLeaveIssue = useCallback(
    async () => {
      const [_result, { errors }] = await deleteIssuesUsers({
        variables: {
          id: issuesUsersId,
        },
        refetchQueries: [
          {
            query: GetCommentsByIssueIdDocument,
            variables: {
              issueId,
              sortBy,
              userId,
            },
          },
        ],
      });

      console.log(_result);
      console.log(errors)
    },
    [deleteIssuesUsers, issueId, issuesUsersId, sortBy, userId]
  );

  return {
    handleJoinIssue,
    handleLeaveIssue,
    insertIsLoading
  };
}
