import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import styles from "./App.module.css";

import "./global.css";



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: "Filipe Deschamps",
      role: "Estudante",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "https://tabnews.com.br" },
    ],
    publishedAt: new Date("2023-06-04 00:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: "Filipe Deschamps",
      role: "Estudante",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "https://tabnews.com.br" },
    ],
    publishedAt: new Date("2023-06-04 00:00:00"),
  },
];

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
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
