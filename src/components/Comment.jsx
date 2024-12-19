import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/hennrikesocher.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time dateTime="2024-05-11 00:02:13">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar Comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="curtir">
            <ThumbsUp size={24} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
