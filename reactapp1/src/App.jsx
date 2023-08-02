import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Kalebe" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non veniam eligendi tempora! At natus, quo esse reprehenderit hic sint optio tenetur eum quae quidem itaque quas nobis veniam ex vero!" />;
          <Post author="Cacau" content="É Agroguer não Agroger" />
        </main>
      </div>
    </div>
  );
}
