import * as Styled from "./CommentCard.styled";
import { GetCommentsByIssueIdQuery } from "generated-graphql";
import { Comment } from "../../hooks/types";
import { CommentCardList } from "../commentCardList";
import { useRouter } from "next/router";

type CommentsProps = {
  comments?: GetCommentsByIssueIdQuery | Comment[];
  setSelectedCommentId?: (id: string) => void;
  countTotalReplies: (replies: Comment[]) => number;
};

export const CommentCard = ({ comments, setSelectedCommentId, countTotalReplies }: CommentsProps): JSX.Element => {
  const router = useRouter();
  const { issueId } = router.query as { issueId: string };

  const isDiscussionPage = router.pathname === `/issue/[issueId]/[comments]`;

  const renderFooter = isDiscussionPage ? null : (
    <Styled.JumpToDiscussionButton
      shape="round"
      onClick={() => {
        router.push(`/issue/${issueId}/discussion`);
      }}
    >
      Jump to discussion
    </Styled.JumpToDiscussionButton>
  );

  return (
    <>
      <Styled.MainContainer>
        <Styled.List
          itemLayout="vertical"
          size="large"
          dataSource={comments as Comment[]}
          renderItem={(item) =>
            <CommentCardList
              item={item as Comment}
              setSelectedCommentId={setSelectedCommentId}
              countTotalReplies={countTotalReplies}
            />}
          footer={renderFooter}
        />
      </Styled.MainContainer>
    </>
  );
};
