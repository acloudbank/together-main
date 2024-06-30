import { useState } from "react";
import * as Styled from "./CommentCardList.styled";
import { RollbackOutlinedIcon, ArrowDownOutlinedIcon, ArrowUpOutlinedIcon } from "ui";
import { Comment } from "../../hooks/types";

type CommentCardListProps = {
  item?: Comment;
  setSelectedCommentId?: (id: string) => void;
  countTotalReplies?: (replies: Comment[]) => number;
};

export const CommentCardList = ({ item, setSelectedCommentId, countTotalReplies }: CommentCardListProps) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <Styled.ListItem key={item.id}>
      <Styled.Meta
        avatar={<Styled.UserAvatar src={"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"} />}
        title={
          <Styled.ProfileNameAndTime>
            {item.user.username}
            <Styled.CommentCreatedAtLabel>{`/ ${item.created_at}`}</Styled.CommentCreatedAtLabel>
          </Styled.ProfileNameAndTime>}
        description={<Styled.CommentContent>{item.content}</Styled.CommentContent>}
      />
      <Styled.ActionsContainer>
        <Styled.ReplyAndLikeContainer>
          <Styled.RepliesButton type="text" icon={<RollbackOutlinedIcon />}
            onClick={() => { setSelectedCommentId(item.id) }}
          >
            Reply
          </Styled.RepliesButton>
          <Styled.Like>
            <Styled.LikeCount>{1}</Styled.LikeCount>
            <Styled.LikeIcon />
          </Styled.Like>
        </Styled.ReplyAndLikeContainer>
        {item.replies && item.replies.length > 0 && (
          <Styled.RepliesContainer>
            <Styled.RepliesButton
              type="link"
              icon={showReplies ? <ArrowUpOutlinedIcon /> : <ArrowDownOutlinedIcon />}
              onClick={() => setShowReplies(!showReplies)}
            >
              {`${countTotalReplies(item.replies)} ${countTotalReplies(item.replies) === 1 ? "reply" : "replies"}`}
            </Styled.RepliesButton>
          </Styled.RepliesContainer>
        )}
      </Styled.ActionsContainer>
      {showReplies && item.replies && item.replies.length > 0 && (
        <Styled.NestedCommentsContainer>
          {item.replies.map((reply, index) => (
            <CommentCardList
              key={`nested-comment-${index}`}
              item={reply}
              setSelectedCommentId={setSelectedCommentId}
              countTotalReplies={countTotalReplies}
            />
          ))}
        </Styled.NestedCommentsContainer>
      )}
    </Styled.ListItem>
  );
};

