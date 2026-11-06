import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.wordmark}>dapp.ing</span>
        <span>Built at ETHGlobal Mumbai 2026</span>
      </div>
    </footer>
  );
}
