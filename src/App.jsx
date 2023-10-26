// Components
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

// CSS
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/toshioyasunaka.png",
      name: "Toshio Yasunaka",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2023-10-25 06:15:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Senior Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2023-10-28 06:15:00')
  },
]

export function App() {
  return (
    <div>
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
    </div>
  )
}