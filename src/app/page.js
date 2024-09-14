import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";

const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
      "id": 101,
      "name": "Amanda Silva",
      "username": "amandasilva_dev",
      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

export default function Home() {
  return (
      <main className={styles.main}>
        <CardPost post={post} />
      </main>
  );
}
