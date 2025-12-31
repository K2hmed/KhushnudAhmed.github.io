import React from "react";

export default function Navbar({ onReset, rightPillLabel, rightCTA }) {
  const links = ["Home", "Projects", "Experience", "Skills", "Education", "Contact"];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fg text-bg font-semibold">
            KA
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="text-xs tracking-widest text-muted hover:text-fg transition-colors"
              >
                {t.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Tools stack pill */}
          <button
            className="hidden rounded-full border border-border bg-surface/50 px-5 py-2 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors md:inline-flex"
            onClick={() => alert("Hook this to a modal listing your stack.")}
          >
            {rightPillLabel}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white
                       hover:brightness-95 active:brightness-90
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {rightCTA}
          </a>

          {/* Reset */}
          <button
            onClick={onReset}
            className="ml-1 rounded-full border border-border bg-surface/40 px-3 py-2 text-xs font-semibold text-muted hover:bg-surface/70 transition-colors"
            title="Reset visitor choice"
          >
            Reset
          </button>
        </div>
      </div>
    </header>
  );
}
