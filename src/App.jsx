import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './styles/global.css';

import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/marciocamello.png",
            name: "Marcio Camello",
            role: "Front-end developer",
        },
        content: [
            {
                type: "paragraph",
                content: "Fala galeraa 👋",
            },
            {
                type: "paragraph",
                content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                content: "jane.design/doctorcare"
            },
        ],
        publishedAt: new Date('2022-07-01T00:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/epicgames.png",
            name: "Epic Games",
            role: "Engineer",
        },
        content: [
            {
                type: "paragraph",
                content: "Fala galeraa 👋",
            },
            {
                type: "paragraph",
                content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                content: "jane.design/doctorcare"
            },
        ],
        publishedAt: new Date('2022-07-05T00:00:00'),
    }
];

export function App() {

  return (
    <div>
        <Header/>

        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {posts.map( post => (
                    <Post 
                        key={`post-${post.id}`} 
                        post={post} 
                    />
                ))}
            </main>
        </div>
    </div>
  )
}