/*
 * UI translation dictionaries (site "chrome": nav, headings, buttons, labels).
 * Portfolio CONTENT (bio, experience bullets, project descriptions) lives in
 * src/data/portfolio.ts as { es, en } objects. Edit copy in these two files.
 */

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.skipToContent": "Saltar al contenido",

    "theme.toggle": "Cambiar tema",
    "lang.toggle": "Cambiar idioma",

    "hero.role": "Desarrollador Full-Stack",
    "hero.and": "y entusiasta de la ciberseguridad",
    "hero.tagline":
      "Construyo aplicaciones web de principio a fin y me apasiona escribir software seguro.",
    "hero.available": "Disponible para nuevos proyectos",

    "about.title": "Sobre mí",

    "experience.title": "Experiencia",
    "experience.education": "Educación",

    "skills.title": "Habilidades",
    "skills.group.languages": "Lenguajes",
    "skills.group.frameworks": "Frameworks y herramientas",
    "skills.group.security": "Seguridad",
    "skills.group.soft": "Habilidades blandas",

    "projects.title": "Proyectos",
    "projects.note":
      "Muchos de mis proyectos personales son de código abierto y sin fines de lucro, creados para resolver necesidades propias. Algunos los desarrollo con ayuda de IA (“vibe coding”), pero reviso y valido cada línea antes de publicarla.",
    "projects.viewCode": "Código",
    "projects.viewLive": "Ver sitio",
    "projects.archive": "Otros proyectos",
    "projects.private": "Privado",

    "contact.title": "Contacto",
    "contact.lead":
      "¿Tienes una idea o una oportunidad? Escríbeme por correo o por LinkedIn y te responderé lo antes posible.",

    "footer.builtWith": "Hecho con Astro, React y Tailwind CSS.",
    "footer.nowPlaying": "Sonando ahora",
    "footer.backToTop": "Volver arriba",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.skipToContent": "Skip to content",

    "theme.toggle": "Toggle theme",
    "lang.toggle": "Change language",

    "hero.role": "Full-Stack Developer",
    "hero.and": "& cybersecurity enthusiast",
    "hero.tagline":
      "I build web applications end to end and care deeply about writing secure software.",
    "hero.available": "Available for new projects",

    "about.title": "About me",

    "experience.title": "Experience",
    "experience.education": "Education",

    "skills.title": "Skills",
    "skills.group.languages": "Languages",
    "skills.group.frameworks": "Frameworks & tools",
    "skills.group.security": "Security",
    "skills.group.soft": "Soft skills",

    "projects.title": "Projects",
    "projects.note":
      "Many of my personal projects are open-source and non-profit, built to solve my own needs. Some are developed with AI assistance (“vibe coding”), but I review and validate every line before shipping it.",
    "projects.viewCode": "Code",
    "projects.viewLive": "Live site",
    "projects.archive": "More projects",
    "projects.private": "Private",

    "contact.title": "Contact",
    "contact.lead":
      "Have an idea or an opportunity? Reach out by email or LinkedIn and I'll get back to you as soon as I can.",

    "footer.builtWith": "Built with Astro, React & Tailwind CSS.",
    "footer.nowPlaying": "Now playing",
    "footer.backToTop": "Back to top",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];
