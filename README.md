# dapp.ing

**Where builder work becomes visible.**

dapp.ing gives Web3 and AI builders a single proof page. You bring the repos, launches and hackathon builds that are scattered across the internet. Teammates co-sign the specific things you built. The result is one link that teams, grant programs and recruiters can check in seconds.

Built at **ETHGlobal Mumbai 2026**.

## Why

Hiring and collaboration in Web3 and AI still run on screenshots, referrals and cold DMs. Strong builders get overlooked because their work isn't legible, while fake recruiters and impersonators thrive on the same lack of signal. dapp.ing puts evidence first: every claim points at something you can open.

## What's in this repo

| Path | What it is |
| --- | --- |
| `apps/web` | Next.js 15 (App Router) site: landing page, proof pages, JSON API |
| `packages/proof-core` | Shared types and the proof scoring model |
| `docs/` | Architecture notes and the scoring model |

### Proof pages

`/proof/[handle]` renders a builder's proof items ordered by weight, with peer endorsements and a 0 to 100 proof score. The same data is served as JSON from `/api/proof/[handle]`.

### Proof score

The score rewards **verifiable, recent, co-signed** work, not volume. Each item is weighted by:

- **Source quality:** shipped product > repository > event > peer reported
- **Peer backing:** grows logarithmically with endorsements, so ten co-signs don't count ten times
- **Recency:** a one-year half-life

See [`docs/scoring.md`](docs/scoring.md) for the formula.

## Getting started

Requires Node 20+ and pnpm 10.

```bash
pnpm install
cp .env.example apps/web/.env.local
pnpm dev
```

Open http://localhost:3000, then http://localhost:3000/proof/aarav for a seeded profile.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the web app in development mode |
| `pnpm build` | Production build |
| `pnpm lint` | Lint the web app |
| `pnpm typecheck` | Type-check the web app |

## Roadmap

- [x] Proof page and scoring model
- [x] JSON API for proof pages
- [ ] GitHub import for public repositories
- [ ] Endorsement requests by link
- [ ] Company pages that link to verified team members

## Design

Dark and achromatic, with emerald reserved for state. Headlines are set in Syne, body text in Inter. Copy is sentence case and left aligned. Tokens live in `apps/web/src/styles/tokens.css`.

## License

[MIT](LICENSE)
