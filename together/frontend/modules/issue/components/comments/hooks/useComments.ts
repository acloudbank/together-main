import { useApolloQuery } from "common";
import { GetCommentsByIssueIdQuery, Order_By, useGetCommentsByIssueIdQuery } from "generated-graphql";
import { Comment } from "./types";

type Args = {
  issueId?: string;
  sortBy: Order_By; // asc | desc
  userId?: string;
};

type UseCommentsResult = {
  data?: GetCommentsByIssueIdQuery;
  isLoadingComments: boolean;
};

export function useComments({ issueId, sortBy, userId }: Args): UseCommentsResult {
  const [data, { isLoading: isLoadingComments, errors: _commentsErrors }] = useApolloQuery(
    useGetCommentsByIssueIdQuery,
    {
      variables: {
        issueId,
        sortBy,
        userId,
      },
      skip: !userId,
    }
  );

  return {
    data,
    isLoadingComments,
  };
}
