import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { proofScore, sortByWeight } from "@dapping/proof-core";
import { ProofCard } from "@/components/ProofCard";
import { getProfile, listHandles } from "@/lib/profiles";
import styles from "./page.module.css";

type Params = Promise<{ handle: string }>;

export function generateStaticParams() {
  return listHandles().map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { handle } = await params;
  const profile = getProfile(handle);
  return { title: profile ? `${profile.name} · dapp.ing` : "Proof page · dapp.ing" };
}

export default async function ProofPage({ params }: { params: Params }) {
  const { handle } = await params;
  const profile = getProfile(handle);
  if (!profile) notFound();

  const score = proofScore(profile);
  const proofs = sortByWeight(profile.proofs);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <div>
          <p className="eyebrow">Proof page</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.headline}>{profile.headline}</p>
          <div className={styles.links}>
            {profile.location && <span>{profile.location}</span>}
            {profile.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.score} aria-label={`Proof score ${score} out of 100`}>
          <span className={styles.scoreValue}>{score}</span>
          <span className={styles.scoreLabel}>Proof score</span>
        </div>
      </header>

      <section className={styles.grid}>
        {proofs.map((item) => (
          <ProofCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
