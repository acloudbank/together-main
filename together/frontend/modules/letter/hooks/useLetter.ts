import { useApolloQuery, useRouter } from "common";
import { GetLetterByIdQuery, useGetLetterByIdQuery } from "generated-graphql";

type UseLetterResult = {
  letter?: GetLetterByIdQuery;
  isLoadingLetter: boolean;
};

export function useLetter(): UseLetterResult {
  const router = useRouter();
  const { id } = router.query;

  const [result, { isLoading: isLoadingLetter }] = useApolloQuery(
    useGetLetterByIdQuery,
    {
      variables: {
        letterId: id,
      },
      skip: !id,
    }
  );

  return {
    letter: result,
    isLoadingLetter,
  };
}
