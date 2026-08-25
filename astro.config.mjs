// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// ─────────────────────────────────────────────────────────────────────────────
// Deployment config.
//
// GitHub Pages (project page, e.g. https://dvher.github.io/portfolio_project):
//   - set `site` to "https://<user>.github.io"
//   - set `base`  to "/<repo-name>"   (must start with a slash, no trailing slash)
//
// GitHub Pages (user page, https://dvher.github.io) OR a custom domain/VPS:
//   - set `site` to the final URL and set `base` to "/"
//
// Everything in the app builds links through BASE_URL, so changing these two
// values is all that's needed to move between hosts.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = "https://dvher.github.io";
const BASE = "/portfolio";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  // Folder-based i18n: "/" (Spanish, default) and "/en" (English).
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
