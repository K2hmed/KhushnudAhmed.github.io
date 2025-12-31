/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-serif", "Georgia", "serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },

      // Semantic theme tokens (powered by CSS variables)
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface2) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },

      borderRadius: {
        xl2: "28px",
      },

      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)", // keep your current look
      },
    },
  },
  plugins: [],
};
