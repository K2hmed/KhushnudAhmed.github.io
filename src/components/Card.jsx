import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-xl2 border border-border/70 bg-surface/65 shadow-soft backdrop-blur",
        "dark:bg-surface/70 dark:border-border/70",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
