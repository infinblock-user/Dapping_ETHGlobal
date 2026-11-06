# Architecture

```
┌──────────────┐     ┌─────────────────────┐
│  apps/web    │────▶│ packages/proof-core │
│  Next.js 15  │     │ types + scoring     │
└──────┬───────┘     └─────────────────────┘
       │
       ├── /                      landing page (static)
       ├── /proof/[handle]        proof page (statically generated per handle)
       └── /api/proof/[handle]    JSON: profile + score
```

## Data model

A `BuilderProfile` owns a list of `ProofItem`s. Each item has a `source`
(`launch`, `github`, `event`, `peer`), an optional evidence `url`, a date, and
the `Endorsement`s it has collected.

Profiles are currently read from `apps/web/src/lib/profiles.ts`. The import
pipeline (GitHub first) will write the same shape, so pages and the API stay
unchanged.

## Rendering

Proof pages are React Server Components. Scoring runs on the server, so the
client receives rendered HTML and no scoring logic.
