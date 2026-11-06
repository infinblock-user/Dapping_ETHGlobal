# Proof score

For a proof item `i`:

```
weight(i) = source(i) × (1 + log2(1 + endorsements(i))) × 0.5^(age_days(i) / 365)
```

| Source | Weight |
| --- | --- |
| launch | 1.0 |
| github | 0.9 |
| event | 0.7 |
| peer | 0.6 |

The profile score squashes the summed weights into 0..100:

```
score = round(100 × (1 − e^(−Σ weight / 6)))
```

The saturating curve means the first few well-evidenced items matter most.
Adding many weak items barely moves the score.

Implementation: `packages/proof-core/src/score.ts`.
