import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/137788007?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}></div>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Kalebe Fernandes</strong>
            <time title="1 de agosto de 2023 ás 08:19h" dateTime="2023-08-01 08:17:20">
              Cerca de 2h atrás{" "}
            </time>
          </div>
          <button title="Deletar comentário">
            <Trash size={20} />
          </button>
        </header>

        <p>Muito bom Davi, parabéns!!!</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  );
}
