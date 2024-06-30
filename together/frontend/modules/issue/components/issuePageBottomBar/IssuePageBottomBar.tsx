import * as Styled from "./IssuePageBottomBar.styled";
import { WriteComment } from "../comments/components";

type IssuePageBottomBarProps = {
  likeCount?: number;
  issueId?: string;
  handleJoinIssue?: (issueId: string) => void;
  isUserJoinedIssue?: boolean;
  openMeatBallsMenu?: (issueId: string) => void;
  insertIsLoading?: boolean;
  isDuscussionPage?: boolean;
  selectedCommentId?: string;
};

export const IssuePageBottomBar = ({ likeCount, handleJoinIssue, issueId, isUserJoinedIssue, openMeatBallsMenu, insertIsLoading, isDuscussionPage = false, selectedCommentId }: IssuePageBottomBarProps): JSX.Element => {

  const renderJoinButton = () => {
    if (insertIsLoading) {
      return <Styled.JoinButton shape="round" loading={insertIsLoading}>Waiting...</Styled.JoinButton>
    } else {
      return <Styled.JoinButton shape="round" onClick={() => {
        if (!isUserJoinedIssue) {
          handleJoinIssue(issueId)
        }
      }}>{isUserJoinedIssue ? 'Discuss' : 'Join'}</Styled.JoinButton>
    }
  }

  const IssuePageConten = (
    <Styled.IssuePageContainer>
      <Styled.Actions>
        <Styled.Save>
          <Styled.SaveCount>{likeCount}</Styled.SaveCount>
          <Styled.SaveOutlinedIcon />
        </Styled.Save>
        <Styled.Share>
          <Styled.ShareOutlinedIcon />
        </Styled.Share>
        <Styled.EllipsisIcon
          onClick={() => {
            openMeatBallsMenu(issueId);
          }}
        />
      </Styled.Actions>
      {renderJoinButton()}
    </Styled.IssuePageContainer>
  );

  const DiscussionPageContent = (
    <Styled.DiscussionPageContainer>
      <WriteComment selectedCommentId={selectedCommentId}/>
    </Styled.DiscussionPageContainer>
  );

  const PageContent = isDuscussionPage ? DiscussionPageContent : IssuePageConten;

  return (
    <Styled.BottomContainer>
      {PageContent}
    </Styled.BottomContainer>
  );
};
