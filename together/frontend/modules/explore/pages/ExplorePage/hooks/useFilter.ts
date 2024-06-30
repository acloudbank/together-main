import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Filter } from "./types";
import {
  Exact,
  GetExploreIssuesQuery,
  IssueCategory_Enum,
  IssueFieldViewScale_Enum,
  IssueStatus_Enum,
  Issues_Bool_Exp,
  UserIssueListType_Enum,
  useGetExploreIssuesCountQuery,
} from "generated-graphql";
import { cloneDeep } from "@apollo/client/utilities";
import {
  ArrayParam,
  BooleanParam,
  StringParam,
  useQueryParams,
} from "use-query-params";
import { ApolloQueryResult } from "@apollo/client";
import { useApolloQuery } from "common";
import { ISSUES_PER_FETCH } from "./constants";

type UseFilterResult = {
  isFilterOpen: boolean;
  closeFilter: () => void;
  openFilter: () => void;
  resultCount: number;
  handleScaleTagChange: (
    tag: IssueFieldViewScale_Enum,
    checked: boolean
  ) => void;
  filter: Filter;
  handleCategoryTagChange: (tag: IssueCategory_Enum, checked: boolean) => void;
  handleShowHiddenIssuesValueChange: (checked: boolean) => void;
  handleShowPublicOnlyValueChange: (checked: boolean) => void;
  handleReset: () => Promise<void>;
  handleSave: () => Promise<void>;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

type Args = {
  userId?: string;
  issues: GetExploreIssuesQuery;
  refetch: (
    variables?: Partial<
      Exact<{
        limit: number;
        offset: number;
        where?: Issues_Bool_Exp;
      }>
    >
  ) => Promise<ApolloQueryResult<GetExploreIssuesQuery>>;
};

export function useFilter({ userId, refetch, issues }: Args): UseFilterResult {
  const [resultCount, setResultCount] = useState<number>(0);
  //TODO: This should be in a different hook to avoid duplication
  const [query, setQuery] = useQueryParams({
    categories: ArrayParam,
    fieldOfViews: ArrayParam,
    showHidden: BooleanParam,
    showPublicOnly: BooleanParam,
    title: StringParam,
  });
  const [filter, setFilter] = useState<Filter>({
    categories: (query.categories as IssueCategory_Enum[]) ?? [],
    fieldOfViews: (query.fieldOfViews as IssueFieldViewScale_Enum[]) ?? [],
    showHidden: query.showHidden ?? false,
    showPublicOnly: query.showPublicOnly ?? false,
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const whereObject: Issues_Bool_Exp = useMemo(() => {
    let where = {
      _and: [{ status: { _eq: IssueStatus_Enum.CompletedStep } }],
    } as Issues_Bool_Exp;
    if (filter.fieldOfViews?.length > 0) {
      where._and.push({
        fieldViewScale: {
          _in: filter.fieldOfViews,
        },
      });
    }
    if (filter.categories?.length > 0) {
      where._and.push({
        category: { _in: filter.categories },
      });
    }
    if (filter.showPublicOnly) {
      where._and.push({ isPrivate: { _eq: false } });
    }
    if (!filter.showHidden) {
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
    if (query.title) {
      where._and.push({ title: { _ilike: `%${query.title}%` } });
    }
    return where;
  }, [filter, userId, query]);

  const [
    _resultCount,
    { isLoading: _isIssuesCountLoading, errors: _countErrors },
  ] = useApolloQuery(useGetExploreIssuesCountQuery, {
    variables: {
      where: whereObject,
    },
    skip: !userId,
    fetchPolicy: "network-only",
  });
  if (
    _resultCount?.issues_aggregate?.aggregate?.count &&
    _resultCount?.issues_aggregate?.aggregate?.count !== resultCount
  ) {
    setResultCount(_resultCount?.issues_aggregate?.aggregate?.count);
  }

  const closeFilter = useCallback(() => {
    setIsFilterOpen(false);
    setFilter({
      categories: (query.categories as IssueCategory_Enum[]) ?? [],
      fieldOfViews: (query.fieldOfViews as IssueFieldViewScale_Enum[]) ?? [],
      showHidden: query.showHidden ?? false,
      showPublicOnly: query.showPublicOnly ?? false,
    });
  }, [query]);

  const openFilter = useCallback(() => {
    setIsFilterOpen(true);
  }, []);

  const handleScaleTagChange = useCallback(
    (tag: IssueFieldViewScale_Enum, checked: boolean) => {
      if (checked) {
        const newFilter = cloneDeep(filter);
        newFilter.fieldOfViews.push(tag);
        setFilter(newFilter);
      } else {
        const newFilter = cloneDeep(filter);
        newFilter.fieldOfViews = newFilter.fieldOfViews.filter(
          (view) => view !== tag
        );
        setFilter(newFilter);
      }
    },
    [filter]
  );

  const handleCategoryTagChange = useCallback(
    (tag: IssueCategory_Enum, checked: boolean) => {
      if (checked) {
        const newFilter = cloneDeep(filter);
        newFilter.categories.push(tag);
        setFilter(newFilter);
      } else {
        const newFilter = cloneDeep(filter);
        newFilter.categories = newFilter.categories.filter(
          (category) => category !== tag
        );
        setFilter(newFilter);
      }
    },
    [filter]
  );

  const handleShowHiddenIssuesValueChange = useCallback(
    (checked: boolean) => {
      setFilter({ ...filter, showHidden: checked });
    },
    [filter]
  );

  const handleShowPublicOnlyValueChange = useCallback(
    (checked: boolean) => {
      setFilter({ ...filter, showPublicOnly: checked });
    },
    [filter]
  );

  const handleSearch = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setQuery({
        title: e.target.value,
      });
      const clonedWhereObject = cloneDeep(whereObject);

      const newWhereClauses = clonedWhereObject._and?.filter(
        (clause) => !clause.title
      );

      const newWhereObject = { _and: [...newWhereClauses] };
      if (e.target.value) {
        newWhereObject._and.push({ title: { _ilike: `%${e.target.value}%` } });
      }
      // For scroll bug
      const issuePerFetch =
        issues?.issues?.length === ISSUES_PER_FETCH
          ? ISSUES_PER_FETCH + 1
          : ISSUES_PER_FETCH;
      try {
        await refetch({
          limit: issuePerFetch,
          offset: 0,
          where: newWhereObject,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [setQuery, refetch, issues, whereObject]
  );

  const handleSave = useCallback(async () => {
    setIsFilterOpen(false);
    setQuery({
      categories: filter.categories,
      fieldOfViews: filter.fieldOfViews,
      showHidden: filter.showHidden,
      showPublicOnly: filter.showPublicOnly,
    });
    // For scroll bug
    const issuePerFetch =
      issues?.issues?.length === ISSUES_PER_FETCH
        ? ISSUES_PER_FETCH + 1
        : ISSUES_PER_FETCH;
    try {
      await refetch({
        limit: issuePerFetch,
        offset: 0,
        where: whereObject,
      });
    } catch (e) {
      console.log(e);
    }
  }, [setQuery, filter, refetch, whereObject, issues]);

  const handleReset = useCallback(async () => {
    setIsFilterOpen(false);
    setFilter({
      categories: [],
      fieldOfViews: [],
      showHidden: false,
      showPublicOnly: false,
    });
    setQuery({
      categories: [],
      fieldOfViews: [],
      showHidden: false,
      showPublicOnly: false,
      title: "",
    });
    const issuePerFetch =
      issues?.issues?.length === ISSUES_PER_FETCH
        ? ISSUES_PER_FETCH + 1
        : ISSUES_PER_FETCH;
    try {
      await refetch({
        limit: issuePerFetch,
        offset: 0,
        where: {
          _and: [
            { status: { _eq: IssueStatus_Enum.CompletedStep } },
            {
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
            },
          ],
        },
      });
    } catch (e) {
      console.log(e);
    }
  }, [setQuery, refetch, issues, userId]);

  return {
    isFilterOpen,
    closeFilter,
    openFilter,
    resultCount,
    handleScaleTagChange,
    filter,
    handleCategoryTagChange,
    handleShowHiddenIssuesValueChange,
    handleShowPublicOnlyValueChange,
    handleReset,
    handleSave,
    handleSearch,
  };
}
