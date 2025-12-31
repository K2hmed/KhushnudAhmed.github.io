import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl",
        "border border-border/60 dark:border-border/55",
        "bg-surface/88 dark:bg-surface/72",
        "shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.55)]",
        "backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
