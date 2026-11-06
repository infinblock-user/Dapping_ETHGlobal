import type { ProofItem } from "@dapping/proof-core";
import styles from "./ProofCard.module.css";

const SOURCE_LABEL: Record<ProofItem["source"], string> = {
  github: "Repository",
  launch: "Shipped product",
  event: "Event",
  peer: "Peer reported",
};

export function ProofCard({ item }: { item: ProofItem }) {
  const date = new Date(item.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  const verified = item.endorsements.length > 0 || Boolean(item.url);

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span>{SOURCE_LABEL[item.source]}</span>
        <span>{date}</span>
      </div>
      <h3 className={styles.title}>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      <p className={styles.context}>{item.context}</p>

      {item.endorsements.length > 0 ? (
        <ul className={styles.endorsements}>
          {item.endorsements.map((e) => (
            <li key={e.by}>
              <span className={styles.by}>@{e.by}</span>
              {e.role && <span className={styles.role}> · {e.role}</span>}
              {e.note && <p className={styles.note}>{e.note}</p>}
            </li>
          ))}
        </ul>
      ) : null}

      <span className={verified ? styles.badge : styles.badgeMuted}>
        {verified ? "Evidence attached" : "Unverified"}
      </span>
    </article>
  );
}
