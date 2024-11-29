import { Header } from "./components/header"
import { Post } from "./components/Post"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post
            author="Diego Fernandes"
            content="Lorem lorem lorem lorem roreerererere"
          />
          <Post
            author="hennrike Fernandes"
            content="Lorem lorem lorem lorem roreerererere"
          />
        </main>
      </div>
    </div>
  )
}
