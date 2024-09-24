import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    console.log('Ops, algo está errado.')
  } else {
    return response.json();
  }
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
      <main className={styles.main}>
        {posts.map(post =>  <CardPost post={post} /> )}
      </main>
  );
}
