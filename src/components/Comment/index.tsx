import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Common/Avatar";
import { CommentType } from "../Post";

interface CommentProps {
    comment: CommentType;
    onDeleteComment: (comment: CommentType) => void;
}

import styles from "./Comment.module.css";

export function Comment({ comment, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleRemoveComment() {
        onDeleteComment(comment);
    }

    function handleLike() {
        setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/marciocamello.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcio Camello</strong>
                            <time title={new Date().toLocaleString()} dateTime={new Date().toLocaleString()}>
                                Published at 1h ago
                            </time>
                        </div>

                        <button onClick={handleRemoveComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        Claps <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
