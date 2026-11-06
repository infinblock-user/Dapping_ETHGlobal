import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "120px 24px" }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 40 }}>No proof page here yet</h1>
      <p style={{ marginTop: 16, color: "var(--text-secondary)" }}>
        That handle has not put anything on the record.
      </p>
      <Link href="/" className="button button-ghost" style={{ marginTop: 32 }}>
        Back home
      </Link>
    </div>
  );
}
