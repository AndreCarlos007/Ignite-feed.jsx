import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'


const comments = [
  1,
  2,
  
];

const Post = ({author, publishedAt, content}) => {
console.log('data recebida', publishedAt)
const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
  locale: ptBR
});

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
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

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                  {publishedDateRelativeToNow}
              </time>
          </header>

          <div className={styles.content}>
           {
            content.map(line => {
              if(line.type == 'paragraph') {
                return <p>{line.content}</p>
              }else if(line.type == 'link'){
                return <p><a href="#">{line.content}</a></p>
              }

            })
           }
          </div>

          <form className={styles.commentForm}>
            <textarea 
            placeholder='Deixe um comentário'
            />
            
            <footer>
              <button type='submit'>Publicar</button>
            </footer>
          
          </form>

          <div className={styles.commentList}>
            {comments.map(comment =>{
              return <Comment />
            })}
          </div>
            
      </article>

  )
}

export default Post
