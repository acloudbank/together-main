import * as Styled from "./Comments.styled";
import { CommentCard, CommentsSortModal } from "./components";
import { LoadingModal, useCurrentUser, useRouter } from "common";
import { useComments, useCommentsPage, useCommentsSortModal, useIssuesUsers } from "./hooks";
import { SwapOutlinedIcon } from "ui";
import { Order_By } from "generated-graphql";
import { IssuePageBottomBar } from "../issuePageBottomBar";
import { MeatBallsMenu } from "modules/explore/components";
import { useIssues, useMeatBallsMenu } from "modules/explore/pages/ExplorePage/hooks";
import { useState } from "react";

type CommentsProps = {
  likeCount?: number;
  isDuscussionPage?: boolean;
};

export const Comments = ({ likeCount, isDuscussionPage }: CommentsProps): JSX.Element => {
  const [parentId, setParentId] = useState(null);
  const router = useRouter();
  const [currentUser] = useCurrentUser();
  const { issueId } = router.query as { issueId: string };
  const { isCommentsSortModalOpen, openCommentsSortModal, closeCommentsSortModal, sortBy, sortByNewOneFirst, sortByOldOneFirst } = useCommentsSortModal();
  const { data, isLoadingComments } = useComments({ issueId, sortBy, userId: currentUser?.id });
  const {
    comments,
    selectedCommentId,
    setSelectedCommentId,
    countTotalReplies,
  } = useCommentsPage({ data });

  const {
    handleJoinIssue,
    handleLeaveIssue,
    insertIsLoading,
  } = useIssuesUsers({
    sortBy,
    userId: currentUser?.id,
    issuesUsersId: data?.issues_by_pk?.issues_users[0]?.id,
    issueId
  });

  const {
    selectedIssueId,
    closeMeatBallsMenu,
    isMeatBallsMenuOpen,
    openMeatBallsMenu,
  } = useMeatBallsMenu();

  const {
    hideIssue,
    unHideIssue,
    userHiddenList,
  } = useIssues({
    userId: currentUser?.id,
    selectedIssueId,
  });

  const commentsCount = data?.issues_by_pk?.comments_aggregate.aggregate?.count;
  const isUserJoinedIssue = data?.issues_by_pk.issues_users.length > 0;

  const NoCommentsContainer = (
    <Styled.NoCommentsContainer>
      <Styled.MessageAndIconContainer>
        <Styled.SmilingFaceIcon />
        <Styled.GreetingMessage>Be the first to start a discussion about the issue!</Styled.GreetingMessage>
      </Styled.MessageAndIconContainer>
      {!isDuscussionPage &&
        <Styled.WriteCommentButtton shape="round"
          onClick={() => {
            router.push(`/issue/${issueId}/discussion`);
          }}>Write a comment</Styled.WriteCommentButtton>
      }
    </Styled.NoCommentsContainer>
  );

  const CommentsContainer = (
    <Styled.CommentsContainer>

      <CommentCard
        comments={comments}
        setSelectedCommentId={setSelectedCommentId}
        countTotalReplies={countTotalReplies}
      />
      <CommentsSortModal
        isOpen={isCommentsSortModalOpen}
        handleCancel={closeCommentsSortModal}
        sortByNewOneFirst={sortByNewOneFirst}
        sortByOldOneFirst={sortByOldOneFirst}
      />
    </Styled.CommentsContainer>
  );

  const UserIsNotJoinedIssueContainer = (
    <Styled.NoCommentsContainer>
      <Styled.MessageAndIconContainer>
        <Styled.HandRightIcon />
        <Styled.GreetingMessage>Join the issue to be a part of discussion!</Styled.GreetingMessage>
      </Styled.MessageAndIconContainer>
    </Styled.NoCommentsContainer>
  );

  const NotJoinedContent = isUserJoinedIssue ? CommentsContainer : UserIsNotJoinedIssueContainer;

  const PageContent = commentsCount === 0 ? NoCommentsContainer : NotJoinedContent;

  const MainContent = (
    <Styled.MainContainer>
      <Styled.SortAndLabelContainer>
        <Styled.CommentLabelAndCount>{commentsCount} Comments</Styled.CommentLabelAndCount>
        <Styled.SortContainer
          onClick={() => {
            openCommentsSortModal();
          }}>
          {sortBy === Order_By.Desc ? "New One First" : "Old One First"}
          <SwapOutlinedIcon />
        </Styled.SortContainer>
      </Styled.SortAndLabelContainer>
      {PageContent}
      <IssuePageBottomBar
        issueId={issueId}
        likeCount={likeCount}
        handleJoinIssue={handleJoinIssue}
        isUserJoinedIssue={isUserJoinedIssue}
        openMeatBallsMenu={openMeatBallsMenu}
        insertIsLoading={insertIsLoading}
        isDuscussionPage={isDuscussionPage}
        selectedCommentId={selectedCommentId}
      />
      <MeatBallsMenu
        handleCancel={closeMeatBallsMenu}
        isOpen={isMeatBallsMenuOpen}
        issueId={selectedIssueId}
        hideIssue={hideIssue}
        unHideIssue={unHideIssue}
        isUserJoinedIssue={isUserJoinedIssue}
        handleLeaveIssue={handleLeaveIssue}
        handleJoinIssue={handleJoinIssue}
        isExplorePage={false}
        isIssueHidden={
          !userHiddenList?.userIssueLists?.length
            ? false
            : userHiddenList.userIssueLists[0].userIssueListEntries
              .map((entry) => entry.issueId)
              .includes(selectedIssueId)
        }
      />
    </Styled.MainContainer>
  );

  const PageContentWithLoadingModal = isLoadingComments ? (
    <LoadingModal open={isLoadingComments} />
  ) : (
    MainContent
  );

  return <>{PageContentWithLoadingModal}</>
};
