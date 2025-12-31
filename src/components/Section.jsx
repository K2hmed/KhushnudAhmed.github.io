import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      // Match sticky navbar height so the section top sits "under" the navbar,
      // not leaving room to show the previous section.
      className="scroll-mt-28 py-10 lg:py-12"
    >
      {/* subtle separator + tighter spacing */}
      <div className="mb-8 border-t border-border/50 pt-8" />

      <h2 className="font-display text-5xl font-semibold text-fg">{title}</h2>

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      ) : null}

      <div className="mt-8">{children}</div>
    </section>
  );
}
