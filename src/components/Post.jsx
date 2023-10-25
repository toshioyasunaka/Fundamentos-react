import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/toshioyasunaka.png" />
          <div className={styles.authorInfo}>
            <strong>Toshio Yasunaka</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='18 de Outubro às 05:49h' dateTime='2023-10-18 05:49:34'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}