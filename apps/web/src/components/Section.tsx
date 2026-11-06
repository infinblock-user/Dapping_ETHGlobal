import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  index: string;
  label: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

export function Section({ id, index, label, title, lead, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <p className="eyebrow">
          {index} / {label}
        </p>
        <h2 className={styles.title}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </section>
  );
}
