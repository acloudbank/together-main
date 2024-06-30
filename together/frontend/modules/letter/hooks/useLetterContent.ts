import { useRouter } from "common";
import { LetterContents } from "generated-graphql";
import { GetLetterByIdQuery } from "generated-graphql";
import { useMemo } from "react";

type Args = {
  letter: GetLetterByIdQuery;
};

type UseLetterContentResult = {
  savedLetterContent: LetterContents;
};

export function useLetterContent({ letter }: Args): UseLetterContentResult {
  const router = useRouter();
  const { contentId } = router.query;
  const savedLetterContent = useMemo(() => {
    return letter?.letters_by_pk?.letterContents?.find(
      (_letterContent) => _letterContent?.id === contentId
    ) as LetterContents;
  }, [letter?.letters_by_pk?.letterContents, contentId]);

  return {
    savedLetterContent,
  };
}
