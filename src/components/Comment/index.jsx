import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Common/Avatar';

import styles from './Comment.module.css';

export function Comment({comment, onDeleteComment}){

    function handleRemoveComment(){
        onDeleteComment(comment);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/marciocamello.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcio Camello</strong>
                            <time title={new Date()} dateTime={new Date()}>Published at 1h ago</time>
                        </div>

                        <button onClick={handleRemoveComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Claps <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}