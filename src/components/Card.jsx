import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[26px] bg-white/55 p-6 shadow-soft backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
