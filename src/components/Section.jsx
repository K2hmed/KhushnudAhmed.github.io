/*import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section className="py-10 lg:py-12">
      {/* Subtle separator with tighter spacing */}
     /* <div className="mb-7 border-t border-border/50" />

      {/* Anchor is placed AFTER the separator so you never land "between" sections */}
      /*<div id={id} className="scroll-mt-[76px]" />

      <h2 className="font-display text-5xl font-semibold text-fg">{title}</h2>

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      ) : null}

      <div className="mt-8">{children}</div>
    </section>
  );
}*/

import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-[76px] py-10">
      <div className="mb-8 border-t border-border/50 pt-8" />
      <h2 className="font-display text-5xl font-semibold text-fg">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted">{subtitle}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
