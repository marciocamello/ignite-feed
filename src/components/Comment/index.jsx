import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/marciocamello.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcio Camello</strong>
                            <time title={new Date()} dateTime={new Date()}>Published at 1h ago</time>
                        </div>

                        <button title="Deelete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Very good Devon, congrats!!</p>
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