export type ProofSource = "github" | "launch" | "event" | "peer";

export interface Endorsement {
  by: string; // handle of the endorsing builder
  role?: string;
  note?: string;
}

export interface ProofItem {
  id: string;
  title: string;
  context: string;
  source: ProofSource;
  url?: string;
  date: string; // ISO date
  endorsements: Endorsement[];
}

export interface BuilderProfile {
  handle: string;
  name: string;
  headline: string;
  location?: string;
  links: { label: string; url: string }[];
  proofs: ProofItem[];
}
