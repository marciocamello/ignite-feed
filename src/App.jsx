import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './styles/global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
        <Header/>

        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                <Post 
                    author ="Marcio"
                    content = "Loren test" 
                />
                <Post 
                    author ="Andre"
                    content = "Test" 
                />
            </main>
        </div>
    </div>
  )
}