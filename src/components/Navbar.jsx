import React from "react";

export default function Navbar({ onReset, rightPillLabel, rightCTA }) {
  const links = ["Home", "Projects", "Experience", "Skills", "Education", "Contact"];

  return (
    <header className="sticky top-0 z-40 bg-white/55 backdrop-blur-md border-b border-slate-200/70 dark:bg-slate-900/60 dark:border-slate-700/60">
      <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fg text-bg font-semibold">
            KA
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="
                  relative text-sm font-semibold tracking-wide
                  text-muted hover:text-fg
                  transition-colors
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[1.5px] after:w-0
                  after:bg-slate-400/70 dark:after:bg-slate-500/70
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full border border-border bg-surface/50 px-5 py-2 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors md:inline-flex"
            onClick={() => alert("Hook this to a modal listing your stack.")}
          >
            {rightPillLabel}
          </button>

          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white
                       hover:brightness-95 active:brightness-90
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {rightCTA}
          </a>

          {/* Dark mode toggle */}
          <button
            className="rounded-full border border-border bg-surface/40 px-3 py-2 text-xs font-semibold text-muted hover:bg-surface/70 transition-colors"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
            }}
            title="Toggle dark mode"
          >
            Dark
          </button>

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
