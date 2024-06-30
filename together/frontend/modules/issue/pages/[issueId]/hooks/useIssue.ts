import { useApolloQuery } from "common";
import { GetIssueByIdQuery, useGetIssueByIdQuery } from "generated-graphql";

type Args = {
  issueId?: string;
};
type UseIssueResult = {
  issue: GetIssueByIdQuery;
  isLoadingIssue: boolean;
};
export function useIssue({ issueId }: Args): UseIssueResult {
  const [data, { isLoading: isLoadingIssue, errors: _issueErrors }] =
    useApolloQuery(useGetIssueByIdQuery, {
      variables: {
        issueId,
      },
      skip: !issueId,
    });
  return {
    issue: data,
    isLoadingIssue,
  };
}
