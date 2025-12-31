import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        // Base surface
        "rounded-2xl",
        "bg-[#f9fafb]/88 dark:bg-slate-900/75",

        // Borders
        "border border-slate-200/60 dark:border-slate-700/55",

        // Depth
        "shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)]",

        // Subtle polish
        "backdrop-blur-sm",

        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
