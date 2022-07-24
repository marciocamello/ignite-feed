import React from 'react'
import { AuthorInfo } from '../Common/AuthorInfo';
import { Avatar } from '../Common/Avatar';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar className={styles.avatar}/>
                <div className={styles.authorInfo}>
                    <AuthorInfo />
                </div>
            </div>

            <time title={new Date()} dateTime={new Date()}>Published at 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>{' '}<a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#rocketseat</a>{' '}
                <a href="">#rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Leave your comment</strong>

            <textarea 
                placeholder='Write your comment here...'
            />

            <footer>
                <button type='submit'>Publish</button>
            </footer>
        </form>
    </article>
  )
}
