import React, { useState } from 'react'
import {format, formatDistanceToNow} from 'date-fns';

import { Comment } from '../Comment';
import { AuthorInfo } from '../Common/AuthorInfo';
import { Avatar } from '../Common/Avatar';

import styles from './Post.module.css';

export function Post({post}) {

    const [comments, setComments] = useState([
        'Very good Devon, congrats!!'
    ]);

    const [comment, setComment] = useState('');

    const publishedDateFormat = format(post.publishedAt, "LLLL d 'at' HH:mm aaa");
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        addSuffix: true
    });

    function handleSaveComment(event){
        event.preventDefault();

        setComments([
            ...comments,
            comment
        ]);

        setComment('');
    }   

    function handleChangeComment(event){
        setComment(event.target.value)
    }

    function deleteComment(comment){
        setComments(comments.filter(c => c !== comment));
    }

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar 
                    src={post.author.avatarUrl}
                />
                <div className={styles.authorInfo}>
                    <AuthorInfo 
                        author={post.author}
                    />
                </div>
            </div>

            <time title={publishedDateRelativeToNow} dateTime={post.publishedAt.toISOString()}>
                {publishedDateFormat}
            </time>
        </header>

        <div className={styles.content}>
            {post.content.map( item => (
                <div key={`content-${item.content}`}>
                    {item.type === 'paragraph' && (
                        <p>{item.content}</p>
                    )}
                    {item.type === 'link' && (
                        <p><a href="#">{item.content}</a></p>
                    )}
                </div>
            ))}
        </div>

        <form 
            className={styles.commentForm}
            onSubmit={handleSaveComment}
        >
            <strong>Leave your comment</strong>

            <textarea 
                placeholder='Write your comment here...'
                value={comment}
                onChange={handleChangeComment}
            />

            <footer>
                <button type='submit'>Publish</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => <Comment 
                key={`comment-${comment}`}
                comment={comment}
                onDeleteComment={deleteComment}
            />
            )}
        </div>
    </article>
  )
}
