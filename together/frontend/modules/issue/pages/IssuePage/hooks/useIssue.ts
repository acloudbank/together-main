import { useApolloQuery, useRouter } from "common";
import { GetIssueByIdQuery, useGetIssueByIdQuery } from "generated-graphql";

type UseIssueResult = {
  issue?: GetIssueByIdQuery;
  isLoadingIssue: boolean;
};

export function useIssue(): UseIssueResult {
  const router = useRouter();
  const { id } = router.query;

  const [result, { isLoading: isLoadingIssue }] = useApolloQuery(
    useGetIssueByIdQuery,
    {
      variables: {
        issueId: id,
      },
      skip: !id,
    }
  );
  return {
    issue: result,
    isLoadingIssue,
  };
}
