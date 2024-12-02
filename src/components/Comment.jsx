import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/hennrikesocher.png" />
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
          <p>Muito bom, Parabens!!</p>
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