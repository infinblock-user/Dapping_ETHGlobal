import Link from "next/link";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Section } from "@/components/Section";
import styles from "./page.module.css";

const steps = [
  {
    title: "Import what you shipped",
    body: "Pull in public repos, launches and hackathon builds. Each one becomes a proof item with a link anyone can open.",
  },
  {
    title: "Get co-signed by peers",
    body: "Teammates who worked with you endorse the specific thing you built, not a generic skill tag.",
  },
  {
    title: "Share one proof page",
    body: "Send a single link to teams, grant programs and recruiters. The evidence is one click away.",
  },
];

const trust = [
  {
    title: "Evidence first",
    body: "Every claim points at something checkable. Claims without evidence are shown as unverified.",
  },
  {
    title: "Weighted, not counted",
    body: "Recent, co-signed work carries more weight than a long list of old or self-reported items.",
  },
  {
    title: "Yours to export",
    body: "Your proof page is plain JSON underneath. Take it with you whenever you want.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Proof pages for Web3 and AI builders</p>
          <h1 className={styles.title}>The work is real. Put it on the record.</h1>
          <p className={styles.lead}>
            Your best work lives across repos, demo days, group chats and old tweets. dapp.ing turns it
            into one proof page that teams can actually check.
          </p>
          <div className={styles.actions}>
            <Link href="/proof/aarav" className="button button-primary">
              See a proof page
            </Link>
            <a href="#how" className="button button-ghost">
              How it works
            </a>
          </div>
        </div>
      </section>

      <Section
        index="01"
        label="The problem"
        title="Builders ship a lot. Very little of it is legible."
        lead="Hiring in Web3 and AI still runs on screenshots, referrals and DMs from strangers. Good builders get missed, and bad actors get through."
      />

      <Section id="how" index="02" label="How it works" title="From scattered work to one record">
        <FeatureGrid items={steps} />
      </Section>

      <Section id="trust" index="03" label="Trust by design" title="Proof before popularity">
        <FeatureGrid items={trust} />
      </Section>

      <Section
        index="04"
        label="Get started"
        title="Start your proof page"
        lead="Bring one thing you shipped. We will help you turn it into a record people can verify."
      >
        <Link href="/proof/aarav" className="button button-primary">
          Open an example
        </Link>
      </Section>
    </>
  );
}
