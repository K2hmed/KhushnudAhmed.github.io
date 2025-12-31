import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-10 sm:py-12"
    >
      {/* subtle separator with tighter spacing */}
      <div className="mb-8 border-t border-border/60 pt-8" />

      <h2 className="font-display text-5xl font-semibold text-fg">{title}</h2>

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      ) : null}

      <div className="mt-8">{children}</div>
    </section>
  );
}
