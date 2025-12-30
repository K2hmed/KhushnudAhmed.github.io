import React, { useState } from "react";

export default function Gate({ open, defaultChoice = "recruiter", onEnter }) {
  const [choice, setChoice] = useState(defaultChoice);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-4">
      <div className="w-full max-w-2xl rounded-[28px] bg-white/70 p-10 shadow-soft backdrop-blur">
        <div className="text-center text-xs tracking-[0.25em] text-rose-400">
          WELCOME
        </div>

        <h1 className="mt-4 text-center font-display text-4xl font-semibold text-neutral-900">
          Before we dive in, who are you?
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-700">
          I tailor this portfolio for recruiters or students seeking ML support.
          Pick your path to personalize the experience.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setChoice("recruiter")}
            className={[
              "h-11 w-40 rounded-full border text-sm font-semibold",
              choice === "recruiter"
                ? "border-rose-300 bg-white text-neutral-900"
                : "border-neutral-200 bg-white/60 text-neutral-700 hover:bg-white",
            ].join(" ")}
          >
            Recruiter
          </button>

          <button
            onClick={() => setChoice("student")}
            className={[
              "h-11 w-40 rounded-full border text-sm font-semibold",
              choice === "student"
                ? "border-rose-300 bg-white text-neutral-900"
                : "border-neutral-200 bg-white/60 text-neutral-700 hover:bg-white",
            ].join(" ")}
          >
            Student
          </button>
        </div>

        <button
          onClick={() => onEnter(choice)}
          className="mx-auto mt-7 block h-12 w-full max-w-md rounded-full bg-rose-300 text-sm font-semibold text-white shadow-soft hover:bg-rose-400"
        >
          Enter Portfolio
        </button>
      </div>
    </div>
  );
}
