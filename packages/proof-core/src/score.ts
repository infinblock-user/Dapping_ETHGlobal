import type { BuilderProfile, ProofItem, ProofSource } from "./types";

const SOURCE_WEIGHT: Record<ProofSource, number> = {
  launch: 1.0,
  github: 0.9,
  event: 0.7,
  peer: 0.6,
};

const HALF_LIFE_DAYS = 365;

function recency(dateIso: string, now: Date): number {
  const ageDays = (now.getTime() - new Date(dateIso).getTime()) / 86_400_000;
  return Math.pow(0.5, Math.max(ageDays, 0) / HALF_LIFE_DAYS);
}

/** Weight of a single proof: source quality, peer backing, and age. */
export function proofWeight(item: ProofItem, now = new Date()): number {
  const backing = 1 + Math.log2(1 + item.endorsements.length);
  return SOURCE_WEIGHT[item.source] * backing * recency(item.date, now);
}

/**
 * A 0..100 signal of how well-evidenced a profile is.
 * Rewards verifiable, recent, co-signed work rather than volume.
 */
export function proofScore(profile: BuilderProfile, now = new Date()): number {
  const raw = profile.proofs.reduce((sum, p) => sum + proofWeight(p, now), 0);
  return Math.round(100 * (1 - Math.exp(-raw / 6)));
}

export function sortByWeight(items: ProofItem[], now = new Date()): ProofItem[] {
  return [...items].sort((a, b) => proofWeight(b, now) - proofWeight(a, now));
}
