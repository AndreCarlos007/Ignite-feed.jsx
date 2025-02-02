import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { useState } from 'react'



const Post = ({author, publishedAt, content}) => {
const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
  locale: ptBR
});

const [comments, setComments] = useState([
  'Post muito bacana ein!',
])

function deleteComment(commentToDelete) {
  const commentWithoutDeleteOne = comments.filter(comment => {
    return comment !== commentToDelete
  })
    setComments(commentWithoutDeleteOne)
}

const [newCommentText, setNewCommenText] = useState('')

function handleNewCommentChange() {
  event.target.setCustomValidity('');
    setNewCommenText(event.target.value)
    
}

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
})

function handleCreateNewComment() {
  event.preventDefault()
  
  setComments([...comments, newCommentText]);
  setNewCommenText('')
}

function handleNewCommentInvalid() {
  event.target.setCustomValidity('Esse campo é obrigatório!');
}

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
                return <p key={line.content}>{line.content}</p>
              }else if(line.type == 'link'){
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }

            })
           }
          </div>

          <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
            value={newCommentText} 
            onChange={handleNewCommentChange}
            name='comment'
            placeholder='Deixe um comentário'
            onInvalid={handleNewCommentInvalid}
            required
            />
            
            <footer>
              <button type='submit'>Publicar</button>
            </footer>
          
          </form>

          <div className={styles.commentList}>
            {comments.map(comment =>{
              return (
              <Comment 
                key={comment} 
                onDeleteComment={deleteComment} 
                content={comment}
                />
              )
            })}
          </div>
            
      </article>

  )
}

export default Post
