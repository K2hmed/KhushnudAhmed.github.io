import React, { useEffect, useRef } from "react";

/**
 * Subtle magnetic hover for CTAs.
 * - Only runs on fine pointers (mouse/trackpad).
 * - Resets cleanly on leave.
 */
export default function Magnetic({ children, strength = 10, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on touch devices
    const canHover = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
    if (!canHover) return;

    let raf = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Normalize by size so behavior is consistent across buttons
      const nx = dx / (r.width / 2);
      const ny = dy / (r.height / 2);

      const tx = Math.max(-1, Math.min(1, nx)) * strength;
      const ty = Math.max(-1, Math.min(1, ny)) * strength;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "translate3d(0,0,0)";
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={[
        "inline-block will-change-transform transition-transform duration-200 ease-out",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
