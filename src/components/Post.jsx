import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, publishedAt, content }) {
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if(line.type === 'paragraph') {
            return (
              <p key={index}>{line.content}</p>
            ) 
          } else if (line.type === 'link') {
            return (
              <p key={index}><a href="#">{line.content}</a></p>
            )
          }
        })}
      </div>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}