import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import { Comment } from "../Comment";
import { AuthorInfo } from "../Common/AuthorInfo";
import { Avatar } from "../Common/Avatar";

export type AuthorType = {
    name: string;
    role: string;
    avatarUrl: string;
}

export type ContentType = {
    type: "paragraph" | "link";
    content: string;
}

export type PostType = {
    id: string;
    content: ContentType[];
    author: AuthorType;
    publishedAt: Date;
}

export type CommentType = string;

export interface PostProps {
    post: PostType;
}

import styles from "./Post.module.css";

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState<CommentType[]>(["Very good Devon, congrats!!"]);

    const [comment, setComment] = useState<CommentType>("");

    const publishedDateFormat = format(post.publishedAt, "LLLL d 'at' HH:mm aaa");
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        addSuffix: true,
    });

    function handleSaveComment(event: React.FormEvent) {
        event.preventDefault();

        setComments([...comments, comment]);

        setComment("");
    }

    function handleChangeComment(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setComment(event.target.value);
    }

    function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Please, write a comment");
    }

    function deleteComment(comment: CommentType) {
        const commentsWithoutDeleted = comments.filter((c) => c !== comment);
        setComments(commentsWithoutDeleted);
    }

    const isCommentEmpty = comment.trim().length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <AuthorInfo author={post.author} />
                    </div>
                </div>

                <time
                    title={publishedDateRelativeToNow}
                    dateTime={post.publishedAt.toISOString()}
                >
                    {publishedDateFormat}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((item: ContentType) => (
                    <div key={`content-${item.content}`}>
                        {item.type === "paragraph" && <p>{item.content}</p>}
                        {item.type === "link" && (
                            <p>
                                <a href="#">{item.content}</a>
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <form className={styles.commentForm} onSubmit={handleSaveComment}>
                <strong>Leave your comment</strong>

                <textarea
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={handleChangeComment}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isCommentEmpty}>
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={`comment-${comment}`}
                        comment={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    );
}
