import React from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/KayoFontesLunga.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="11 de maio as 08:13h" dateTime='2022/05/11 08:13:09'> Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>Muito bom Guilherme!!</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

export default Comment
