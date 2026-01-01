import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,          // milliseconds
  y = 10,             // px translate
  once = true,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      requestAnimationFrame(() => setShown(true));
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  
  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-700",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        shown ? "opacity-100" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0px)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
