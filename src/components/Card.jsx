import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-xl2 border border-border/70",
        "bg-surface/70 dark:bg-surface/75",
        "shadow-soft backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
