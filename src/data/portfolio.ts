/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth.
 *
 *  Edit this file to change everything on the site. Prose that differs by
 *  language uses { es, en } objects; language-agnostic data (dates, links, tech
 *  tags) is written once.
 *
 *  Optional: set `site.spotifyEmbed` to show a "now playing" panel in the footer
 *  (left empty by default, which hides it).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Bilingual = { es: string; en: string };

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface Job {
  company: string;
  role: Bilingual;
  start: string; // display string, already localized-neutral (e.g. "Ene 2022")
  startEn?: string; // optional English variant of the date label
  end: Bilingual; // e.g. { es: "Oct 2022", en: "Oct 2022" } or "Presente"/"Present"
  location?: string;
  summary: Bilingual;
  highlights: Bilingual[];
  tags: string[];
}

export interface Education {
  school: string;
  degree: Bilingual;
  start: string;
  end: Bilingual;
}

export type BadgeKey = "open-source" | "non-profit" | "ai-reviewed" | "personal";

export interface Project {
  name: string;
  description: Bilingual;
  tags: string[];
  year?: string;
  repo?: string;
  live?: string;
  featured?: boolean;
  /** Accent pills shown above the tech tags (e.g. open-source, non-profit). */
  badges?: BadgeKey[];
}

/** Bilingual labels for project badges. */
export const badgeLabels: Record<BadgeKey, Bilingual> = {
  "open-source": { es: "Código abierto", en: "Open source" },
  "non-profit": { es: "Sin fines de lucro", en: "Non-profit" },
  "ai-reviewed": { es: "Asistido por IA · revisado", en: "AI-assisted · reviewed" },
  personal: { es: "Proyecto personal", en: "Personal project" },
};

export interface SkillGroup {
  key: "languages" | "frameworks" | "security" | "soft";
  items: string[];
}

// ── Site-wide config ─────────────────────────────────────────────────────────

export const site = {
  name: "Diego Vergara",
  // Optional: paste a Spotify *embed* URL to show a "now playing" panel in the
  // footer. In Spotify: Share → Embed track/album → copy the src from the iframe
  // (starts with https://open.spotify.com/embed/...). Leave empty ("") to hide it.
  spotifyEmbed: "",
  // Path to the CV inside /public (base path is added automatically in code).
  cvPath: "/Diego-Vergara-CV.pdf",
};

export const profile = {
  name: "Diego Vergara",
  location: "Santiago, Chile",
  email: "diegovher1@gmail.com",
  bio: {
    es: `Soy desarrollador full-stack radicado en Santiago de Chile. Actualmente construyo y mantengo aplicaciones web en Teamcore, trabajando principalmente con Python (Django y Flask) y Java, además de automatizar procesos de datos con machine learning. Antes me desempeñé como ingeniero en ciberseguridad, buscando y mitigando vulnerabilidades en aplicaciones e infraestructuras web bajo el marco OWASP. Me muevo cómodo entre el frontend y el backend, y me apasiona escribir software que además de funcionar, sea seguro.`,
    en: `I'm a full-stack developer based in Santiago, Chile. I currently build and maintain web applications at Teamcore, working mainly with Python (Django and Flask) and Java, and automating data pipelines with machine learning. Earlier I worked as a cybersecurity engineer, finding and mitigating vulnerabilities across web apps and infrastructure under the OWASP framework. I'm comfortable across the frontend and backend, and I care about writing software that not only works, but is secure.`,
  },
  facts: [
    { es: "Full-stack + ciberseguridad", en: "Full-stack + cybersecurity" },
    { es: "Basado en Santiago, Chile", en: "Based in Santiago, Chile" },
    { es: "Aprendizaje rápido y autónomo", en: "Fast, self-driven learner" },
    { es: "Titulado de U. Diego Portales", en: "Graduate of U. Diego Portales" },
  ] as Bilingual[],
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/dvher", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dvher", icon: "linkedin" },
  { label: "Email", href: "mailto:diegovher1@gmail.com", icon: "email" },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experience: Job[] = [
  {
    company: "Teamcore S.A",
    role: { es: "Desarrollador", en: "Software Developer" },
    start: "Nov 2023",
    end: { es: "Presente", en: "Present" },
    location: "Santiago, Chile",
    summary: {
      es: "Desarrollo y mantenimiento de aplicaciones web, y automatización de procesos de datos.",
      en: "Building and maintaining web applications and automating data workflows.",
    },
    highlights: [
      {
        es: "Desarrollo y mantenimiento de aplicaciones web en Python con Django y Flask.",
        en: "Develop and maintain web applications in Python using Django and Flask.",
      },
      {
        es: "Desarrollo y mantenimiento de aplicaciones web en Java sobre Apache Tomcat.",
        en: "Develop and maintain Java web applications running on Apache Tomcat.",
      },
      {
        es: "Automatización de la categorización de datos con Python y machine learning.",
        en: "Automated data categorization using Python and machine learning.",
      },
      {
        es: "Automatización de obtención de datos y generación de reportes con Python.",
        en: "Automated data collection and report generation with Python.",
      },
    ],
    tags: ["Python", "Django", "Flask", "Java", "Machine Learning"],
  },
  {
    company: "ITSec S.A",
    role: { es: "Ingeniero en Ciberseguridad", en: "Cybersecurity Engineer" },
    start: "Ene 2022",
    startEn: "Jan 2022",
    end: { es: "Oct 2022", en: "Oct 2022" },
    location: "Santiago, Chile",
    summary: {
      es: "Búsqueda y mitigación de vulnerabilidades en aplicaciones e infraestructuras web.",
      en: "Finding and mitigating vulnerabilities across web applications and infrastructure.",
    },
    highlights: [
      {
        es: "Búsqueda de vulnerabilidades en aplicaciones web e infraestructuras.",
        en: "Assessed web applications and infrastructure for vulnerabilities.",
      },
      {
        es: "Trabajo bajo el marco y las guías de OWASP.",
        en: "Worked under the OWASP framework and guidelines.",
      },
      {
        es: "Mitigación de vulnerabilidades y trabajo de prevención.",
        en: "Remediated vulnerabilities and drove preventive hardening.",
      },
      {
        es: "Desarrollo de aplicaciones de apoyo a las tareas de seguridad.",
        en: "Built internal applications supporting security work.",
      },
    ],
    tags: ["OWASP", "Web Security", "Pentesting", "Vulnerability Assessment"],
  },
];

export const education: Education[] = [
  {
    school: "Universidad Diego Portales",
    degree: {
      es: "Ingeniería en Informática y Telecomunicaciones",
      en: "BSc in Computer & Telecommunications Engineering",
    },
    start: "2019",
    end: { es: "Dic 2025", en: "Dec 2025" },
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    key: "languages",
    items: ["Python", "JavaScript", "TypeScript", "Go", "C / C++", "Rust", "PHP", "Java"],
  },
  {
    key: "frameworks",
    items: ["Django", "Flask", "React", "Astro", "Apache Tomcat", "Machine Learning", "Git"],
  },
  {
    key: "security",
    items: ["OWASP", "Web app pentesting", "Vulnerability assessment", "Hardening"],
  },
];

// Soft skills (rendered as a separate group; kept bilingual).
export const softSkills: Bilingual[] = [
  { es: "Adaptabilidad", en: "Adaptability" },
  { es: "Aprendizaje autónomo", en: "Self-driven learning" },
  { es: "Aprendizaje rápido", en: "Fast learner" },
  { es: "Trabajo en equipo", en: "Teamwork" },
  { es: "Resolución de problemas", en: "Problem solving" },
];

// ── Projects ─────────────────────────────────────────────────────────────────
// Only public repositories are linked here (this site is public).

export const projects: Project[] = [
  {
    name: "Nibbin",
    year: "2023",
    description: {
      es: "Desarrollo full-stack de la plataforma web y de su infraestructura, de principio a fin.",
      en: "End-to-end full-stack development of the web platform and its infrastructure.",
    },
    tags: ["Full-stack", "Web", "Infrastructure"],
    featured: true,
  },
  {
    name: "ReqTUI",
    description: {
      es: "Cliente HTTP para la terminal escrito en Go: una alternativa ligera a Postman o Insomnia, pensada para ser eficiente y cómoda desde la línea de comandos.",
      en: "A terminal-based HTTP client written in Go — a lightweight alternative to Postman or Insomnia, focused on efficiency and command-line usability.",
    },
    tags: ["Go", "TUI", "HTTP", "CLI"],
    repo: "https://github.com/dvher/reqtui",
    badges: ["open-source", "personal"],
    featured: true,
  },
  {
    name: "CrossSum",
    description: {
      es: "Juego de crucigrama matemático para Android, sin anuncios: rellena la grilla con números que satisfagan las ecuaciones. Puzzles generados proceduralmente, cuatro niveles de dificultad, modo offline y bilingüe (ES/EN).",
      en: "An ad-free Android math-crossword game: fill the grid with numbers that satisfy each equation. Procedurally generated puzzles, four difficulty levels, offline play and bilingual (EN/ES).",
    },
    tags: ["Kotlin", "Jetpack Compose", "Android", "Material 3"],
    repo: "https://github.com/dvher/crosssum",
    badges: ["open-source", "non-profit", "ai-reviewed"],
    featured: true,
  },
  {
    name: "3D Viewer",
    description: {
      es: "App móvil multiplataforma para ver y comparar modelos 3D (STL, 3MF, GLB/glTF, OBJ) desde el teléfono, con rotación por gestos, importación múltiple y un modo \"diff\" que superpone dos modelos para resaltar diferencias geométricas.",
      en: "A cross-platform mobile app to view and compare 3D models (STL, 3MF, GLB/glTF, OBJ) on your phone, with gesture rotation, multi-file import and a \"diff\" mode that overlays two models to highlight geometric differences.",
    },
    tags: ["React Native", "Expo", "three.js", "TypeScript"],
    repo: "https://github.com/dvher/3d_viewer_app",
    badges: ["open-source", "non-profit", "ai-reviewed"],
    featured: true,
  },
  {
    name: "Notes & Mood App",
    description: {
      es: "App móvil de notas y estado de ánimo, estilo Letterboxd: registra una de cinco emociones cada día, añade notas y sigue tu evolución con historial y estadísticas. Offline y bilingüe (ES/EN).",
      en: "A notes & mood mobile app, Letterboxd-style: log one of five emotions each day, add notes and track your trends with history and statistics. Offline and bilingual (EN/ES).",
    },
    tags: ["React Native", "Expo", "SQLite", "TypeScript"],
    repo: "https://github.com/dvher/note_taking_app",
    badges: ["open-source", "non-profit", "ai-reviewed"],
  },
  {
    name: "mcrcon_discord",
    description: {
      es: "Bot de Discord que implementa el protocolo RCON de Minecraft para ejecutar comandos del servidor directamente desde Discord. Escrito en Go.",
      en: "A Discord bot implementing Minecraft's RCON protocol to run server commands straight from Discord. Written in Go.",
    },
    tags: ["Go", "Discord", "RCON", "Minecraft"],
    repo: "https://github.com/dvher/mcrcon_discord",
    badges: ["open-source", "personal"],
  },
  {
    name: "Advent of Code",
    description: {
      es: "Mis soluciones a los desafíos de Advent of Code, resueltos en Go.",
      en: "My solutions to the Advent of Code challenges, written in Go.",
    },
    tags: ["Go", "Algorithms"],
    repo: "https://github.com/dvher/advent-of-code",
  },
  {
    name: "Blockchain",
    description: {
      es: "Implementación de una blockchain desde cero en Go, hecha como trabajo universitario para entender a fondo cómo funcionan las blockchains.",
      en: "A blockchain implemented from scratch in Go — university coursework built to understand how blockchains work under the hood.",
    },
    tags: ["Go", "Blockchain", "Cryptography"],
    repo: "https://github.com/dvher/blockchain",
  },
];
