import {
  ApolloCache,
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import { useApolloMutation, useApolloQuery } from "common";
import {
  Issues_Bool_Exp,
  GetExploreIssuesQuery,
  IssueStatus_Enum,
  IssueFieldViewScale_Enum,
  IssueCategory_Enum,
  useGetUserIssueListQuery,
  UserIssueListType_Enum,
  useInsertUserIssueListMutation,
  useInsertUserIssueListEntryMutation,
  GetUserIssueListDocument,
  GetUserIssueListQuery,
  useDeleteUserIssueListEntryByIdMutation,
  GetExploreIssuesDocument,
  Exact,
  useGetExploreIssuesQuery,
  useInsertUserIssueListLikeEntryMutation,
  useDeleteUserIssueListLikeEntryByIdMutation,
} from "generated-graphql";
import { useCallback, useMemo } from "react";

import {
  ArrayParam,
  BooleanParam,
  StringParam,
  useQueryParams,
} from "use-query-params";
import { ISSUES_PER_FETCH } from "./constants";

type UseIssuesResult = {
  issues: GetExploreIssuesQuery;
  isIssuesLoading: boolean;
  hideIssue: () => Promise<void>;
  unHideIssue: () => Promise<void>;
  userHiddenList: GetUserIssueListQuery;
  userLikedList: GetUserIssueListQuery;
  likeIssue: (issueId: string) => Promise<void>;
  unLikeIssue: (issueId: string) => Promise<void>;
  refetch: (
    variables?: Partial<
      Exact<{
        limit: number;
        offset: number;
        where?: Issues_Bool_Exp;
      }>
    >
  ) => Promise<ApolloQueryResult<GetExploreIssuesQuery>>;
  fetchMore<
    TFetchData = GetExploreIssuesQuery,
    TFetchVars extends OperationVariables = Exact<{
      limit: number;
      offset: number;
      where?: Issues_Bool_Exp;
    }>
  >(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: GetExploreIssuesQuery,
        options: {
          fetchMoreResult: TFetchData;
          variables: TFetchVars;
        }
      ) => GetExploreIssuesQuery;
    }
  ): Promise<ApolloQueryResult<TFetchData>>;
};

type Args = { userId?: string; selectedIssueId: string };

export function useIssues({ userId, selectedIssueId }: Args): UseIssuesResult {
  //TODO: This should be in a different hook to avoid duplication
  const [query, _setQuery] = useQueryParams({
    categories: ArrayParam,
    fieldOfViews: ArrayParam,
    showHidden: BooleanParam,
    showPublicOnly: BooleanParam,
    title: StringParam,
  });

  // for initial load
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
    if (query.title) {
      where._and.push({ title: { _ilike: `%${query.title}%` } });
    }
    return where;
  }, [query, userId]);

  const [
    issues,
    { isLoading: isIssuesLoading, errors: _issuesErrors, fetchMore, refetch },
  ] = useApolloQuery(useGetExploreIssuesQuery, {
    variables: {
      limit: ISSUES_PER_FETCH,
      offset: 0,
      where: whereObject,
    },
    skip: !userId,
  });

  const [
    userHiddenList,
    { isLoading: _isUserHiddenListLoading, errors: _userHiddenListErrors },
  ] = useApolloQuery(useGetUserIssueListQuery, {
    variables: {
      userId: userId,
      type: UserIssueListType_Enum.Hidden,
    },
    skip: !userId,
  });

  const [
    userLikedList,
    { isLoading: _isUserLikeListLoading, errors: _userLikedListErrors },
  ] = useApolloQuery(useGetUserIssueListQuery, {
    variables: {
      userId: userId,
      type: UserIssueListType_Enum.Liked,
    },
    skip: !userId,
  });

  const [
    insertUserIssueList,
    _insertUserIssueListData,
    { isLoading: _IsInsertIssueListLoading },
  ] = useApolloMutation(useInsertUserIssueListMutation, {});

  const [
    insertUserIssueListEntry,
    _insertUserIssueListEntryData,
    { isLoading: _IsInsertIssueListEntryLoading },
  ] = useApolloMutation(useInsertUserIssueListEntryMutation, {});

  const [
    deleteUserIssueListEntry,
    _deleteUserIssueListEntryData,
    { isLoading: _IsDeleteIssueListEntryLoading },
  ] = useApolloMutation(useDeleteUserIssueListEntryByIdMutation, {});

  const [
    insertUserIssueListLikeEntry,
    _insertUserIssueListLikeEntryData,
    { isLoading: _IsInsertIssueListLikeEntryLoading },
  ] = useApolloMutation(useInsertUserIssueListLikeEntryMutation, {});

  const [
    deleteUserIssueLikeListEntry,
    _deleteUserIssueListLikeEntryData,
    { isLoading: _IsDeleteIssueListLikeEntryLoading },
  ] = useApolloMutation(useDeleteUserIssueListLikeEntryByIdMutation, {});

  const hideIssue = useCallback(async () => {
    try {
      // User has no hidden list
      if (
        !userHiddenList?.userIssueLists ||
        !userHiddenList.userIssueLists.length
      ) {
        const [
          insertUserIssueListResult,
          { errors: insertUserIssueListErrors },
        ] = await insertUserIssueList({
          variables: {
            type: UserIssueListType_Enum.Hidden,
          },
          refetchQueries: [
            {
              query: GetUserIssueListDocument,
              variables: {
                userId: userId,
                type: UserIssueListType_Enum.Hidden,
              },
            },
          ],
        });
        if (!insertUserIssueListErrors) {
          const [
            _insertUserIssueListEntryResult,
            { errors: _insertUserIssueListEntryErrors },
          ] = await insertUserIssueListEntry({
            variables: {
              issueId: selectedIssueId,
              userIssueListId:
                insertUserIssueListResult?.insert_userIssueLists_one?.id,
            },
            refetchQueries: [
              {
                query: GetUserIssueListDocument,
                variables: {
                  userId: userId,
                  type: UserIssueListType_Enum.Hidden,
                },
              },
              {
                query: GetExploreIssuesDocument,
                variables: {
                  limit: issues?.issues?.length || ISSUES_PER_FETCH,
                  offset: 0,
                  where: whereObject,
                },
              },
            ],
          });
        }
      } else {
        // User already has hidden list
        const [
          _insertUserIssueListEntryResult,
          { errors: _insertUserIssueListEntryErrors },
        ] = await insertUserIssueListEntry({
          variables: {
            issueId: selectedIssueId,
            userIssueListId: userHiddenList?.userIssueLists[0].id,
          },
          refetchQueries: [
            {
              query: GetUserIssueListDocument,
              variables: {
                userId: userId,
                type: UserIssueListType_Enum.Hidden,
              },
            },
            {
              query: GetExploreIssuesDocument,
              variables: {
                limit: issues?.issues?.length || ISSUES_PER_FETCH,
                offset: 0,
                where: whereObject,
              },
            },
          ],
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [
    userHiddenList,
    insertUserIssueList,
    insertUserIssueListEntry,
    selectedIssueId,
    whereObject,
    userId,
    issues,
  ]);

  const unHideIssue = useCallback(async () => {
    try {
      const [
        _deleteUserIssueListEntryResult,
        { errors: _deleteUserIssueListEntryErrors },
      ] = await deleteUserIssueListEntry({
        variables: {
          id: userHiddenList?.userIssueLists[0]?.userIssueListEntries.find(
            (entry) => entry.issueId === selectedIssueId
          )?.id,
        },
        refetchQueries: [
          {
            query: GetUserIssueListDocument,
            variables: {
              userId: userId,
              type: UserIssueListType_Enum.Hidden,
            },
          },
          {
            query: GetExploreIssuesDocument,
            variables: {
              limit: issues?.issues?.length || ISSUES_PER_FETCH,
              offset: 0,
              where: whereObject,
            },
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  }, [
    whereObject,
    deleteUserIssueListEntry,
    selectedIssueId,
    userId,
    userHiddenList,
    issues,
  ]);

  const likeIssue = useCallback(
    async (issueId: string) => {
      try {
        // User has no Like list
        if (
          !userLikedList?.userIssueLists ||
          !userLikedList.userIssueLists.length
        ) {
          const [
            insertUserIssueListResult,
            { errors: insertUserIssueListErrors },
          ] = await insertUserIssueList({
            variables: {
              type: UserIssueListType_Enum.Liked,
            },
            refetchQueries: [
              {
                query: GetUserIssueListDocument,
                variables: {
                  userId: userId,
                  type: UserIssueListType_Enum.Liked,
                },
              },
            ],
          });
          if (!insertUserIssueListErrors) {
            const [
              _insertUserIssueListEntryResult,
              { errors: _insertUserIssueListEntryErrors },
            ] = await insertUserIssueListLikeEntry({
              variables: {
                issueId: issueId,
                userIssueListId:
                  insertUserIssueListResult?.insert_userIssueLists_one?.id,
              },
              refetchQueries: [
                {
                  query: GetUserIssueListDocument,
                  variables: {
                    userId: userId,
                    type: UserIssueListType_Enum.Liked,
                  },
                },
              ],
            });
          }
        } else {
          // User already has Like list
          const [
            _insertUserIssueListEntryResult,
            { errors: _insertUserIssueListEntryErrors },
          ] = await insertUserIssueListLikeEntry({
            variables: {
              issueId: issueId,
              userIssueListId: userLikedList?.userIssueLists[0].id,
            },
            refetchQueries: [
              {
                query: GetUserIssueListDocument,
                variables: {
                  userId: userId,
                  type: UserIssueListType_Enum.Liked,
                },
              },
            ],
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    [userLikedList, insertUserIssueList, insertUserIssueListLikeEntry, userId]
  );

  const unLikeIssue = useCallback(
    async (issueId: string) => {
      try {
        const [
          _deleteUserIssueListEntryResult,
          { errors: _deleteUserIssueListEntryErrors },
        ] = await deleteUserIssueLikeListEntry({
          variables: {
            id: userLikedList?.userIssueLists[0]?.userIssueListEntries.find(
              (entry) => entry.issueId === issueId
            )?.id,
          },
          refetchQueries: [
            {
              query: GetUserIssueListDocument,
              variables: {
                userId: userId,
                type: UserIssueListType_Enum.Liked,
              },
            },
          ],
        });
      } catch (e) {
        console.log(e);
      }
    },
    [userId, userLikedList, deleteUserIssueLikeListEntry]
  );

  return {
    issues,
    isIssuesLoading,
    hideIssue,
    userHiddenList,
    userLikedList,
    unHideIssue,
    refetch,
    fetchMore,
    likeIssue,
    unLikeIssue,
  };
}
