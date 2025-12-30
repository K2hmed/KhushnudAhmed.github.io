import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <h2 className="font-display text-5xl font-semibold text-neutral-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-neutral-700">{subtitle}</p>
      ) : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
