import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

import styles from "./App.module.css";


const posts = [
   {
       id: 1,
       author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/137788007?v=4"
        name: "Kalebe Fernandes"
        role: 'Aprendiz'
       }  
        
      content: [
        { type:'paragraph', content: 'Fala galeraa 👋'}
 
          { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }
          { type:'link', content: '👉 <a href=""> jane.design/doctorcare </a>'}
    

          publishedAt: new Date('2023-08-04 09:30:42')
     ]
   },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito"
        name: 'Felipe Scolari'
        role: 'Soccer coach'
      }
  
      content: [
           { type:'paragraph', content: 'Fala galeraa 👋'}
           { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }
           { type:'link', content: '👉 <a href=""> jane.design/doctorcare </a>'}
      ]
  
      publishedAt: new Date('2023-08-01 11:34:57')
    },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
         {posts.map(post => {
            return <Post />
         })}
        </main>
      </div>
    </div>
  );
}
