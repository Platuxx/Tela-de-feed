import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/137788007?v=4" />
          <div className={styles.authorInfo}>
            <strong>Kalebe Fernandes</strong>
            <span>Aprendendo programação</span>
          </div>
        </div>

        <time title="1 de agosto de 2023 ás 08:19h" dateTime="2023-08-01 08:17:20">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <p>
          👉 {""} <a href=""> jane.design/doctorcare </a>{" "}
        </p>
        <p>
          <a href=""> #novoprojeto </a>
          {""}
          <a href=""> #nlw</a>
          {""}
          <a href=""> #rocketseat</a>
        </p>
      </div>

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
