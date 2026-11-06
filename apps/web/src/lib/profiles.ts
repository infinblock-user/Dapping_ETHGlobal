import type { BuilderProfile } from "@dapping/proof-core";

// Seed profiles used for local development until the import pipeline lands.
const profiles: BuilderProfile[] = [
  {
    handle: "aarav",
    name: "Aarav Mehta",
    headline: "Full-stack engineer working on wallet UX and agent tooling",
    location: "Mumbai",
    links: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "X", url: "https://x.com/" },
    ],
    proofs: [
      {
        id: "p1",
        title: "Passkey onboarding flow for a consumer wallet",
        context: "Contract role, 4 months",
        source: "launch",
        date: "2026-08-14",
        endorsements: [
          { by: "riya", role: "Product lead", note: "Owned it end to end and cut drop-off in half." },
          { by: "dev", role: "Backend engineer" },
        ],
      },
      {
        id: "p2",
        title: "Open source MCP server for indexing protocol docs",
        context: "Side project",
        source: "github",
        url: "https://github.com/",
        date: "2026-06-02",
        endorsements: [{ by: "kabir", role: "Contributor" }],
      },
      {
        id: "p3",
        title: "Finalist, cross-chain intents track",
        context: "Hackathon, team of three",
        source: "event",
        date: "2025-12-07",
        endorsements: [],
      },
    ],
  },
];

export function getProfile(handle: string): BuilderProfile | undefined {
  return profiles.find((p) => p.handle === handle.toLowerCase());
}

export function listHandles(): string[] {
  return profiles.map((p) => p.handle);
}
