import { GetIssueByIdQuery } from "generated-graphql";
import { useCallback, useState } from "react";

type UseOpenedIssuePageProps = {
  issue?: GetIssueByIdQuery;
};

type UseIssuePageResult = {
  formattedDate: (date: string) => string;
  handleReadHideIssueContent: () => void;
  readHide: boolean;
};

export function useIssuePage({
  issue,
}: UseOpenedIssuePageProps): UseIssuePageResult {
  const [readHide, setReadHide] = useState(true);

  const formattedDate = useCallback(
    (date: string) => {
      return new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    [issue?.issues_by_pk?.created_at]
  );

  const handleReadHideIssueContent = useCallback(() => {
    setReadHide(!readHide);
  }, [readHide]);

  return {
    formattedDate,
    handleReadHideIssueContent,
    readHide,
  };
}
