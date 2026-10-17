"use client";

import { EmptyState } from "./ui";

function PageHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="scout-page-heading">
      <div><span className="scout-kicker">{eyebrow}</span><h1>{title}</h1><p>{body}</p></div>
    </div>
  );
}

export function ReceiptsView() {
  return (
    <div className="scout-page">
      <PageHeading eyebrow="BRAINROT Services" title="RECEIPTS DISABLED." body="Reward and distribution services are unavailable." />
      <EmptyState title="SERVICE DISABLED." body="Reward receipts and holder data are no longer available." />
    </div>
  );
}

export function DocsView() {
  return (
    <div className="scout-page scout-page--docs">
      <PageHeading eyebrow="Documentation" title="Services disabled." body="Reward, distribution, and holder-data services are unavailable." />
      <div className="scout-doc-layout">
        <aside><a href="#status">Service status</a></aside>
        <div className="scout-doc-content">
          <section id="status"><span className="scout-kicker">01</span><h2>Service status</h2><p>Automated claims, token swaps, airdrops, reward receipts, and holder-data access have been disabled.</p></section>
        </div>
      </div>
    </div>
  );
}
