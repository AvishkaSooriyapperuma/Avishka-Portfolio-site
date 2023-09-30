import Terminal from "../components/Terminal";
// Import the Head component from next/head
import Head from 'next/head';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <h1>
      avishkasoori:$ <br/> <span className={styles.help}>type &quot;help&quot; to start</span>
      </h1>


      <Terminal />
    </div>
  );
}
