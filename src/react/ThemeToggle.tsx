import { useEffect, useState } from "react";

/*
 * ThemeToggle — flips the `dark` class on <html> and persists the choice.
 * The initial (no-flash) theme is set by an inline script in Layout.astro,
 * so this component only mirrors and updates that state.
 */

/** Swap the tab icon to match the theme (hrefs live on the <link> in Layout.astro). */
function setFavicon(dark: boolean) {
  const icon = document.getElementById("favicon") as HTMLLinkElement | null;
  const href = icon?.dataset[dark ? "dark" : "light"];
  if (icon && href) icon.href = href;
}

interface ThemeToggleProps {
  label: string;
}

export default function ThemeToggle({ label }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    setFavicon(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage errors */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className="transition-colors hover:text-accent"
    >
      [{isDark ? "light" : "dark"}]
    </button>
  );
}
