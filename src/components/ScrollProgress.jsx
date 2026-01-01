import { useEffect, useMemo, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);

      // Micro-interaction: user is scrolling
      setIsScrolling(true);

      // Reset isScrolling after 300ms of no scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 300);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const isDark = useMemo(
    () => document.documentElement.classList.contains("dark"),
    []
  );

  const fill = isDark
    ? "linear-gradient(90deg, #E07A5F 0%, #D86B55 45%, #4FA3A3 100%)"
    : "linear-gradient(90deg, #E07A5F 0%, #D86B55 45%, #2F7F7F 100%)";

  return (
    <div
      className={`fixed top-0 left-0 z-[60] w-full transition-all duration-200`}
      style={{
        height: isScrolling ? "6px" : "4px", // grows only while scrolling
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Track */}
      <div className={isDark ? "h-full bg-white/10" : "h-full bg-black/10"} />

      {/* Fill */}
      <div
        className="absolute left-0 top-0 h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: fill,
          boxShadow: isDark
            ? "0 0 10px rgba(224,122,95,0.25)"
            : "0 0 10px rgba(47,127,127,0.22)",
        }}
      />
    </div>
  );
}
