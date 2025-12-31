import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-border/60 dark:border-border/55",
        "bg-surface/88 dark:bg-surface/72",
        "backdrop-blur-sm",
        "shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.55)]",
        "p-6", // default padding so content never looks outside
        className, // allow overrides like p-7, p-8, etc.
      ].join(" ")}
    >
      {children}
    </div>
  );
}
