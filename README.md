# Diego Vergara — Portfolio

Personal portfolio of **Diego Vergara**, full-stack developer & cybersecurity enthusiast.
Bilingual (Español / English), warm "paper & ink" light/dark themes with a signal-orange accent and
Instrument Serif display type.  

This project is mostly vibe-coded and reviewed by me, made public just as an example for anyone who is looking for inspiration.

Built with **Astro + React + TypeScript + Tailwind CSS**, managed with **pnpm**.
Inspired by [Gothsec/Astro-portfolio](https://github.com/Gothsec/Astro-portfolio).

## Getting started

Requires **Node ≥ 20** and **pnpm ≥ 9** (run `corepack enable` if you don't have pnpm).

```sh
pnpm install
pnpm dev        # http://localhost:4321
```

| Command         | Action                                          |
| --------------- | ----------------------------------------------- |
| `pnpm dev`      | Start the dev server                            |
| `pnpm build`    | Type-check (`astro check`) and build to `dist/` |
| `pnpm preview`  | Preview the production build locally            |
| `pnpm format`   | Format the codebase with Prettier               |

## Editing the content

Everything is content-driven — you shouldn't need to touch the components:

- **`src/data/portfolio.ts`** — your bio, experience, education, skills, projects, and social links.
  Text that differs by language is written as `{ es: "...", en: "..." }`.
- **`src/i18n/ui.ts`** — the site "chrome": nav labels, section titles, button text, form labels.

### Things to fill in (search for `TODO` in `src/data/portfolio.ts`)

- **Contact** — the Contact section is a plain `mailto:` link plus social links (no third-party
  form service). Update `profile.email` / `socials` in `src/data/portfolio.ts`.
- **Spotify "now playing"** (optional) — in Spotify use *Share → Embed*, copy the iframe `src`,
  and set `site.spotifyEmbed`. Left as `""` by default, which hides the panel entirely.
- **CV** — replace `public/Diego-Vergara-CV.pdf` to update the downloadable résumé.

### Changing the accent color

Edit the `--accent*` variables in **`src/styles/global.css`** (values are `R G B` channels;
there is one set for the light theme and one for dark). Buttons, links, markers and the hero
grid all follow the accent.

## Deployment

### GitHub Pages (default, automated)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. In `astro.config.mjs`, set `SITE` and `BASE`:
   - **Project page** (`https://<user>.github.io/<repo>`): `SITE = "https://<user>.github.io"`,
     `BASE = "/<repo>"`.
   - **User page** (`https://<user>.github.io`) or **custom domain**: `SITE = "<final url>"`,
     `BASE = "/"`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`.

### Custom domain / VPS (later)

Set `SITE` to your domain and `BASE = "/"`, then `pnpm build` and serve the static `dist/`
folder with any web server (Nginx, Caddy, etc.).

## Project structure

```
public/            static assets (favicon, CV, og image)
src/
├── components/    Astro UI (Nav, Hero, About, Experience, Skills, Projects, Contact, Footer)
├── data/          portfolio.ts — content source of truth
├── i18n/          ui.ts (dictionaries) + utils.ts (helpers)
├── layouts/       Layout.astro — <head>, SEO, theme init
├── react/         React islands (ThemeToggle)
├── pages/         index.astro (es) + en/index.astro (en)
└── styles/        global.css — theme tokens
```
