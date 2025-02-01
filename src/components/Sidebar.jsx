import React from 'react'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import Avatar from './Avatar'
const Sidebar = () => {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      
        <div className={styles.profile}>
            <Avatar src='https://www.github.com/AndreCarlos007.png' />
            <strong> André Carlos</strong>
            <span>Full Stack Developer</span>
        </div>

        <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu perfil</a>
        </footer>
      </aside>
    </div>
  )
}

export default Sidebar
