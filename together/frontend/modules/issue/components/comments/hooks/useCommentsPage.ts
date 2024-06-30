import { GetCommentsByIssueIdQuery } from "generated-graphql";
import { Comment } from "./types";
import moment from 'moment';
import { useState } from "react";

type Args = {
  data: GetCommentsByIssueIdQuery | Comment[];
};

type UseCommentsResult = {
  comments?: GetCommentsByIssueIdQuery | Comment[];
  selectedCommentId: string | null;
  setSelectedCommentId: (commentId: string | null) => void;
  countTotalReplies: (replies: Comment[]) => number;
};

export function useCommentsPage({ data }: Args): UseCommentsResult {
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);

  let commentsTree: Comment[] = [];

  if (data) {
    const { issues_by_pk } = data as GetCommentsByIssueIdQuery;
    const comments = issues_by_pk.comments;

    const buildCommentsTree = (commentId: string) => {
      const comment = comments.find((comment) => comment.id === commentId);
      const replies = comments
        .filter((comment) => comment.parentCommentId === commentId)
        .map((child) => buildCommentsTree(child.id));
      return { ...comment, replies };
    };

    const rootComments = comments.filter((comment) => !comment.parentCommentId);

    commentsTree = rootComments.map((comment) => buildCommentsTree(comment.id));

    const formatTimestamps = (comment: Comment) => {
      const formattedComment = { ...comment };
      formattedComment.created_at = moment(comment.created_at).fromNow(true);
      formattedComment.replies = formattedComment.replies.map(formatTimestamps);
      return formattedComment;
    };

    commentsTree = commentsTree.map(formatTimestamps);
  }

  const countTotalReplies = (replies: Comment[]): number => {
    let count = replies.length;
    for (const reply of replies) {
      if (reply.replies && reply.replies.length > 0) {
        count += countTotalReplies(reply.replies);
      }
    }
    return count;
  };

  return {
    comments: commentsTree,
    selectedCommentId,
    setSelectedCommentId,
    countTotalReplies
  };
}
