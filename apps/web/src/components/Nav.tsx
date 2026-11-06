import Link from "next/link";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          dapp.ing
        </Link>
        <nav className={styles.links}>
          <a href="#how">How it works</a>
          <a href="#trust">Trust</a>
          <Link href="/proof/aarav" className="button button-ghost">
            See a proof page
          </Link>
        </nav>
      </div>
    </header>
  );
}
