import React from "react";

export default function VisitorToggle({ value = "recruiter", onChange }) {
  const isRecruiter = value === "recruiter";

  return (
    <div
      className="
        relative w-full rounded-full border border-border/60 bg-white/55 dark:bg-slate-900/35
        p-1 overflow-hidden
        backdrop-blur-md
      "
      role="tablist"
      aria-label="Visitor type"
    >
      {/* Sliding highlight */}
      <div
        className={[
          "absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full",
          "bg-slate-900 dark:bg-slate-100",
          "shadow-[0_10px_25px_rgba(0,0,0,0.18)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
          "transition-transform duration-500",
          // “water glide” feel
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          // ✨ watery ripple highlight (ADD THIS)
          "before:content-[''] before:absolute before:inset-0 before:rounded-full",
          "before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%)]",
          "before:opacity-70",
          isRecruiter ? "translate-x-0" : "translate-x-[calc(100%+0.5rem)]",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-2">
        <button
          type="button"
          onClick={() => onChange?.("recruiter")}
          className={[
            "h-12 rounded-full font-semibold",
            "transition-colors duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            isRecruiter ? "text-white dark:text-slate-900" : "text-fg/75 hover:text-fg",
          ].join(" ")}
          role="tab"
          aria-selected={isRecruiter}
        >
          Recruiter
        </button>

        <button
          type="button"
          onClick={() => onChange?.("student")}
          className={[
            "h-12 rounded-full font-semibold",
            "transition-colors duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            !isRecruiter ? "text-white dark:text-slate-900" : "text-fg/75 hover:text-fg",
          ].join(" ")}
          role="tab"
          aria-selected={!isRecruiter}
        >
          Student
        </button>
      </div>
    </div>
  );
}
