/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Change the accent by editing --accent in src/styles/global.css ──
        accent: "rgb(var(--accent) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          raised: "rgb(var(--surface-raised) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        // One typeface for everything: the page reads like a typed sheet.
        sans: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72ch",
      },
    },
  },
  plugins: [],
};
