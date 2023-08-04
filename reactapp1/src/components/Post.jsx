import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/137788007?v=4" />
          <div className={styles.authorInfo}>
            <strong>Kalebe Fernandes</strong>
            <span>Aprendendo programação</span>
          </div>
        </div>

        <time title="1 de agosto de 2023 ás 08:19h" dateTime="2023-08-01 08:17:20">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
