import { Header } from "./components/header"
import { Post } from "./components/Post"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

//author: {avatar_url:"", name="", role="",}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diogo fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/rocketcare" },
    ],
    publishedAt: new Date("2024-12-06 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/hennrikesocher.png",
      name: "hennrike socher",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/rocketcare" },
    ],
    publishedAt: new Date("2024-12-10 20:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
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
