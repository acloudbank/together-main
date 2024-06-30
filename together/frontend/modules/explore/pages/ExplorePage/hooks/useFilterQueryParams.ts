import {
  IssueCategory_Enum,
  IssueFieldViewScale_Enum,
  IssueStatus_Enum,
  Issues_Bool_Exp,
  UserIssueListType_Enum,
} from "generated-graphql";
import { useMemo } from "react";
import { ArrayParam, BooleanParam, useQueryParams } from "use-query-params";

type Props = { userId?: string };

export function useFilterQueryParams({ userId }: Props) {
  const [query, setQuery] = useQueryParams({
    categories: ArrayParam,
    fieldOfViews: ArrayParam,
    showHidden: BooleanParam,
    showPublicOnly: BooleanParam,
  });
  const whereObject: Issues_Bool_Exp = useMemo(() => {
    let where = {
      _and: [{ status: { _eq: IssueStatus_Enum.CompletedStep } }],
    } as Issues_Bool_Exp;
    if (query.fieldOfViews?.length > 0) {
      where._and.push({
        fieldViewScale: {
          _in: query.fieldOfViews as IssueFieldViewScale_Enum[],
        },
      });
    }
    if (query.categories?.length > 0) {
      where._and.push({
        category: { _in: query.categories as IssueCategory_Enum[] },
      });
    }
    if (query.showPublicOnly) {
      where._and.push({ isPrivate: { _eq: false } });
    }
    if (!query.showHidden) {
      where._and.push({
        _not: {
          userIssueListEntries: {
            userIssueList: {
              _and: [
                { userId: { _eq: userId } },
                { type: { _eq: UserIssueListType_Enum.Hidden } },
              ],
            },
          },
        },
      });
    }
    return where;
  }, [query, userId]);

  return {
    query,
    setQuery,
    whereObject,
  };
}
