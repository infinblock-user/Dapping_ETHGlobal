import styles from "./FeatureGrid.module.css";

export interface Feature {
  title: string;
  body: string;
}

export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className={styles.grid}>
      {items.map((f, i) => (
        <article key={f.title} className={styles.card}>
          <span className={styles.step}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{f.title}</h3>
          <p className={styles.body}>{f.body}</p>
        </article>
      ))}
    </div>
  );
}
