import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-12">
      <div className="mb-10 border-t border-border/60 pt-12" />
      <h2 className="font-display text-5xl font-semibold text-fg">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted">{subtitle}</p> : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
