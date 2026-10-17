"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projectConfig } from "./project-config";
import { ScoutProvider } from "./scout-provider";

const navigation = [
  { href: "/#rot-feed", label: "ROT FEED" },
  { href: "/#timeline", label: "LORE.EXE" }
];

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="scout-header brainrot-header">
      <div className="scout-header__inner">
        <Link className="scout-brand" href="/" aria-label="BRAINROT home">
          <span className="scout-brand__mark" aria-hidden="true">
            <img src="/brand/brainrot-logo.jpg" alt="" />
          </span>
          <span>
            <strong>BRAINROT</strong>
            <small>$BRAINROT // ROT ONLINE</small>
          </span>
        </Link>

        <nav className="scout-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <div className="scout-header__actions">
          {projectConfig.projectXUrl ? (
            <a className="scout-header-link scout-header-link--social" href={projectConfig.projectXUrl} target="_blank" rel="noopener noreferrer">X</a>
          ) : null}
          <button className="scout-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="brainrot-mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="scout-mobile-nav" id="brainrot-mobile-nav" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          {navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          {projectConfig.projectXUrl ? <a href={projectConfig.projectXUrl} target="_blank" rel="noopener noreferrer">BRAINROT X</a> : null}
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="scout-footer brainrot-footer">
      <div className="scout-footer__brand">
        <span className="scout-brand__mark" aria-hidden="true"><img src="/brand/brainrot-logo.jpg" alt="" /></span>
        <div>
          <strong>BRAINROT</strong>
          <p>THE INTERNET HAS A CONDITION.</p>
        </div>
      </div>
      <nav aria-label="Footer links">
        <Link href="/#rot-feed">Rot feed</Link>
        <Link href="/docs">Docs.exe</Link>
      </nav>
      <p className="scout-footer__risk">
        BRAINROT reward and distribution services are disabled. Nothing here is financial advice.
      </p>
    </footer>
  );
}

export function ScoutShell({ children, launchState }: { children: React.ReactNode; launchState: "prelaunch" | "live" }) {
  return (
    <ScoutProvider launchState={launchState}>
      <div className="scout-app brainrot-shell">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ScoutProvider>
  );
}
