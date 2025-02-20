import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import styles from './App.module.css'
import './global.css'


const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/guilhermetrutaa.png',
        name: 'Guilherme Truta',
        role: 'Software Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare'} 
  
      ],
      publishedAt: new Date('2025-02-02T20:00:00Z')
    },
    
];


function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
        )
        })}
      </main>
     </div>
    </>
  )
}

export default App
