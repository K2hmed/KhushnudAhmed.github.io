import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl border border-border/70 bg-surface/65 shadow-soft backdrop-blur",
        "p-7", // default padding (Projects can override with p-0)
        "dark:bg-surface/70 dark:border-border/70",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
