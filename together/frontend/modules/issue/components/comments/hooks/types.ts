export type User = {
    id: string;
    username: string
}

export type Comment = {
    user: User;
    parentCommentId: string;
    id: string;
    content: string;
    created_at: string;
    replies: Comment[];
};
