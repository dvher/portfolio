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
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.skipToContent": "Saltar al contenido",

    "theme.toggle": "Cambiar tema",
    "lang.toggle": "Cambiar idioma",

    "hero.role": "Desarrollador Full-Stack",
    "hero.and": "y entusiasta de la ciberseguridad",
    "hero.tagline":
      "Construyo aplicaciones web de principio a fin y me apasiona escribir software seguro.",
    "hero.cta.contact": "Contáctame",
    "hero.cta.cv": "Descargar CV",
    "hero.available": "Disponible para nuevos proyectos",

    "about.title": "Sobre mí",
    "about.eyebrow": "Quién soy",
    "about.location": "Santiago, Chile",
    "about.factsTitle": "En resumen",

    "experience.title": "Experiencia",
    "experience.eyebrow": "Mi trayectoria",
    "experience.present": "Presente",
    "experience.education": "Educación",

    "skills.title": "Habilidades",
    "skills.eyebrow": "Mi stack",
    "skills.group.languages": "Lenguajes",
    "skills.group.frameworks": "Frameworks y herramientas",
    "skills.group.security": "Seguridad",
    "skills.group.soft": "Habilidades blandas",

    "projects.title": "Proyectos",
    "projects.eyebrow": "Cosas que he construido",
    "projects.note":
      "Muchos de mis proyectos personales son de código abierto y sin fines de lucro, creados para resolver necesidades propias. Algunos los desarrollo con ayuda de IA (“vibe coding”), pero reviso y valido cada línea antes de publicarla.",
    "projects.viewCode": "Código",
    "projects.viewLive": "Ver sitio",

    "contact.title": "Contacto",
    "contact.eyebrow": "Trabajemos juntos",
    "contact.lead":
      "¿Tienes una idea o una oportunidad? Escríbeme por correo o por LinkedIn y te responderé lo antes posible.",

    "footer.builtWith": "Hecho con Astro, React y Tailwind CSS.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.nowPlaying": "Sonando ahora",
    "footer.backToTop": "Volver arriba",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.skipToContent": "Skip to content",

    "theme.toggle": "Toggle theme",
    "lang.toggle": "Change language",

    "hero.role": "Full-Stack Developer",
    "hero.and": "& cybersecurity enthusiast",
    "hero.tagline":
      "I build web applications end to end and care deeply about writing secure software.",
    "hero.cta.contact": "Get in touch",
    "hero.cta.cv": "Download CV",
    "hero.available": "Available for new projects",

    "about.title": "About me",
    "about.eyebrow": "Who I am",
    "about.location": "Santiago, Chile",
    "about.factsTitle": "At a glance",

    "experience.title": "Experience",
    "experience.eyebrow": "My track record",
    "experience.present": "Present",
    "experience.education": "Education",

    "skills.title": "Skills",
    "skills.eyebrow": "My stack",
    "skills.group.languages": "Languages",
    "skills.group.frameworks": "Frameworks & tools",
    "skills.group.security": "Security",
    "skills.group.soft": "Soft skills",

    "projects.title": "Projects",
    "projects.eyebrow": "Things I've built",
    "projects.note":
      "Many of my personal projects are open-source and non-profit, built to solve my own needs. Some are developed with AI assistance (“vibe coding”), but I review and validate every line before shipping it.",
    "projects.viewCode": "Code",
    "projects.viewLive": "Live site",

    "contact.title": "Contact",
    "contact.eyebrow": "Let's work together",
    "contact.lead":
      "Have an idea or an opportunity? Reach out by email or LinkedIn and I'll get back to you as soon as I can.",

    "footer.builtWith": "Built with Astro, React & Tailwind CSS.",
    "footer.rights": "All rights reserved.",
    "footer.nowPlaying": "Now playing",
    "footer.backToTop": "Back to top",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];
