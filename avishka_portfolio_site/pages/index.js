import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
      avishkasoori:$ <br/> <span className={styles.help}>type &quot;help&quot; to start</span>
      </h1>


      <Terminal />
    </div>
  );
}
