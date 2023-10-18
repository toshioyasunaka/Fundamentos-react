// Components
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

// CSS
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Toshio Yasunaka" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam animi, tempore nihil dolore perferendis sit temporibus cum, quasi aliquam quidem aut iure tenetur accusantium dicta? Enim fuga laboriosam repellat." 
          />

          <Post 
            author="Walter Yasunaka" 
            content="Um novo post muito legal." 
          />
        </main>

      </div>
    </div>
  )
}