import React, { useEffect, useMemo, useState } from "react";

export default function Navbar({ onReset, rightPillLabel = "Tools Stack", rightCTA = "Let’s connect" }) {
  const links = ["Home", "Projects", "Experience", "Skills", "Education", "Contact"];
  const [toolsOpen, setToolsOpen] = useState(false);

  const tools = useMemo(
    () => [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "NLP",
      "Bayesian Stats",
      "SQL",
      "PySpark",
      "Hadoop",
      "HDFS",
      "Kibana",
      "Excel",
      "AWS",
      "GCP",
      "Azure",
      "Tableau",
    ],
    []
  );

  // Close on ESC + lock scroll when open
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setToolsOpen(false);
    }
    if (toolsOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [toolsOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/80 dark:bg-slate-950/55 dark:border-slate-700/70">
        <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fg text-bg font-semibold">
              KA
            </div>

            {/* Centered-ish nav: give it its own space and align visually */}
            <nav className="hidden md:flex items-center gap-7 ml-6">
              {links.map((t) => (
                <a
                  key={t}
                  href={`#${t.toLowerCase()}`}
                  className="text-sm font-semibold tracking-[0.14em] text-muted hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
                >
                  {t.toUpperCase()}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Tools Stack -> Drawer */}
            <button
              type="button"
              className="hidden rounded-full border border-border bg-surface/55 px-5 py-2 text-sm font-semibold text-fg hover:bg-surface/75 transition-colors md:inline-flex"
              onClick={() => setToolsOpen(true)}
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
              className="rounded-full border border-border bg-surface/45 px-3 py-2 text-xs font-semibold text-muted hover:bg-surface/75 transition-colors"
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
              className="ml-1 rounded-full border border-border bg-surface/45 px-3 py-2 text-xs font-semibold text-muted hover:bg-surface/75 transition-colors"
              title="Reset visitor choice"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Drawer overlay + panel */}
      <div
        className={[
          "fixed inset-0 z-[70]",
          toolsOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!toolsOpen}
      >
        {/* overlay */}
        <button
          type="button"
          onClick={() => setToolsOpen(false)}
          className={[
            "absolute inset-0 w-full h-full",
            "bg-slate-950/25 backdrop-blur-sm",
            "transition-opacity duration-200",
            toolsOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Close tools drawer"
        />

        {/* panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[360px] max-w-[92vw]",
            "bg-surface/80 dark:bg-slate-950/70",
            "border-l border-border/70",
            "shadow-[0_30px_90px_rgba(0,0,0,0.20)]",
            "backdrop-blur-xl",
            "transition-transform duration-250 ease-out",
            toolsOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Tools Stack"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
            <div className="text-lg font-semibold text-fg">Tools Stack</div>
            <button
              type="button"
              onClick={() => setToolsOpen(false)}
              className="rounded-full border border-border bg-surface/50 px-3 py-2 text-sm font-semibold text-muted hover:bg-surface/70 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm text-muted">
              The core tools I use to build ML systems and analytics workflows.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {tools.map((t) => (
                <div
                  key={t}
                  className={[
                    "rounded-2xl border border-border/70 bg-surface/55 px-4 py-3",
                    "text-sm font-semibold text-fg",
                    "hover:bg-surface/75 transition-colors",
                  ].join(" ")}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
