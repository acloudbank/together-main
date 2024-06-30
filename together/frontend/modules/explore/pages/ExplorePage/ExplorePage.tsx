import { NextPage } from "next";
import {
  WithAuthentication,
  AuthenticatedLayout,
  useCurrentUser,
  LoadingModal,
  UserRole,
} from "../../../../common";
import { IssueCard, FilterBottomSheet, MeatBallsMenu } from "../../components";

import * as Styled from "./ExplorePage.styled";
import { useFilter, useIssues, useMeatBallsMenu } from "./hooks";
import { Issues } from "generated-graphql";
import InfiniteScroll from "react-infinite-scroll-component";

const ExplorePage: WithAuthentication<NextPage> = () => {
  const [currentUser, loadingCurrentUser] = useCurrentUser();

  const {
    selectedIssueId,
    closeMeatBallsMenu,
    isMeatBallsMenuOpen,
    openMeatBallsMenu,
  } = useMeatBallsMenu();

  const {
    issues,
    hideIssue,
    unHideIssue,
    userHiddenList,
    userLikedList,
    refetch,
    fetchMore,
    likeIssue,
    unLikeIssue,
  } = useIssues({
    userId: currentUser?.id,
    selectedIssueId,
  });

  const {
    isFilterOpen,
    closeFilter,
    openFilter,
    handleScaleTagChange,
    resultCount,
    filter,
    handleCategoryTagChange,
    handleShowHiddenIssuesValueChange,
    handleShowPublicOnlyValueChange,
    handleReset,
    handleSave,
    handleSearch,
  } = useFilter({ userId: currentUser?.id, refetch, issues });

  return (
    <AuthenticatedLayout>
      <LoadingModal open={loadingCurrentUser} />
      <Styled.PageContainer>
        <Styled.AuthenticatedHeaderContainer>
          <Styled.AvatarContainer>
            <Styled.UserAvatar size={48} />
          </Styled.AvatarContainer>
          <Styled.UserInfo>
            <Styled.UserName level={3}>
              Hello, {`${currentUser?.username}`}
            </Styled.UserName>
            <Styled.UserDescription>
              Let`s discover the Issues together!
            </Styled.UserDescription>
          </Styled.UserInfo>
        </Styled.AuthenticatedHeaderContainer>

        <Styled.SearchFilterContainer>
          <Styled.SearchContainer>
            <Styled.Search placeholder="Search" onChange={handleSearch} />
            <Styled.SearchOutlinedIcon />
          </Styled.SearchContainer>

          <Styled.FilterContainer onClick={openFilter}>
            <Styled.Filter>Filter</Styled.Filter>
            <Styled.FilterOutlinedWhiteIcon />
          </Styled.FilterContainer>
        </Styled.SearchFilterContainer>

        <Styled.IssuesContainer id="scrollableDiv">
          <InfiniteScroll
            dataLength={issues?.issues?.length || 0}
            next={() => {
              fetchMore({
                variables: {
                  offset: issues?.issues?.length || 0,
                },
              });
            }}
            hasMore={issues?.issues?.length < resultCount}
            loader={<></>}
            scrollableTarget="scrollableDiv"
          >
            <Styled.List
              dataSource={(issues?.issues as Issues[]) || []}
              renderItem={(issue: Issues) => (
                <Styled.ListItem key={issue.id}>
                  <IssueCard
                    key={issue.id}
                    title={issue.title}
                    content={issue.content}
                    category={issue.category}
                    id={issue.id}
                    likeCount={
                      issue.userIssueListEntries_aggregate?.aggregate?.count
                    }
                    likeIssue={likeIssue}
                    unLikeIssue={unLikeIssue}
                    creator={issue.user}
                    members={issue.issues_users}
                    openMeatBallsMenu={openMeatBallsMenu}
                    isIssueLiked={
                      !userLikedList?.userIssueLists?.length
                        ? false
                        : userLikedList.userIssueLists[0].userIssueListEntries
                            .map((entry) => entry.issueId)
                            .includes(issue.id)
                    }
                  />
                </Styled.ListItem>
              )}
            />
          </InfiniteScroll>
        </Styled.IssuesContainer>
      </Styled.PageContainer>

      <FilterBottomSheet
        filter={filter}
        resultCount={resultCount}
        isOpen={isFilterOpen}
        closeFilterBottomSheet={closeFilter}
        handleScaleTagChange={handleScaleTagChange}
        handleCategoryTagChange={handleCategoryTagChange}
        handleShowHiddenIssuesValueChange={handleShowHiddenIssuesValueChange}
        handleShowPublicOnlyValueChange={handleShowPublicOnlyValueChange}
        handleReset={handleReset}
        handleSave={handleSave}
      />

      <MeatBallsMenu
        handleCancel={closeMeatBallsMenu}
        isOpen={isMeatBallsMenuOpen}
        issueId={selectedIssueId}
        hideIssue={hideIssue}
        unHideIssue={unHideIssue}
        isIssueHidden={
          !userHiddenList?.userIssueLists?.length
            ? false
            : userHiddenList.userIssueLists[0].userIssueListEntries
                .map((entry) => entry.issueId)
                .includes(selectedIssueId)
        }
      />
    </AuthenticatedLayout>
  );
};

ExplorePage.requiresAuthentication = true;
ExplorePage.requiredRoles = [UserRole.User];

export default ExplorePage;
