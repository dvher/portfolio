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

export type BadgeKey = "open-source" | "non-profit" | "ai-reviewed" | "personal" | "freelance";

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
  /** Companion repos shown next to the main link (e.g. a server or mobile client). */
  related?: { label: string; href: string }[];
}

/** Bilingual labels for project badges. */
export const badgeLabels: Record<BadgeKey, Bilingual> = {
  "open-source": { es: "Código abierto", en: "Open source" },
  "non-profit": { es: "Sin fines de lucro", en: "Non-profit" },
  "ai-reviewed": { es: "Asistido por IA · revisado", en: "AI-assisted · reviewed" },
  personal: { es: "Proyecto personal", en: "Personal project" },
  freelance: { es: "Freelance", en: "Freelance" },
};

export interface SkillGroup {
  key: "languages" | "frameworks" | "databases" | "infrastructure" | "security" | "soft";
  items: string[];
}

// ── Site-wide config ─────────────────────────────────────────────────────────

export const site = {
  name: "Diego Vergara",
  // Optional: paste a Spotify *embed* URL to show a "now playing" panel in the
  // footer. In Spotify: Share → Embed track/album → copy the src from the iframe
  // (starts with https://open.spotify.com/embed/...). Leave empty ("") to hide it.
  spotifyEmbed: "",
  // Path to each language's CV inside /public (base path is added automatically in code).
  cvPath: { es: "/Diego-Vergara-CV-ES.pdf", en: "/Diego-Vergara-CV-EN.pdf" } as Bilingual,
};

export const profile = {
  name: "Diego Vergara",
  location: "Santiago, Chile",
  email: "diegovher1@gmail.com",
  bio: {
    es: `Soy desarrollador de software radicado en Santiago de Chile, con más de 3 años de experiencia profesional. En Teamcore construyo herramientas internas, aplicaciones web para clientes e integraciones de API en Python (Django y Flask) y Java. Antes me desempeñé como ingeniero en ciberseguridad, haciendo pentesting de aplicaciones web e infraestructura bajo el marco OWASP. Me muevo cómodo con Linux, Docker y despliegues autoalojados, y me apasiona escribir software que además de funcionar, sea seguro.`,
    en: `I'm a software developer based in Santiago, Chile, with 3+ years of professional experience. At Teamcore I build internal tools, client-facing web applications and API integrations in Python (Django and Flask) and Java. Earlier I worked as a cybersecurity engineer, pentesting web applications and infrastructure under the OWASP framework. I'm comfortable with Linux, Docker and self-hosted deployments, and I care about writing software that not only works, but is secure.`,
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
    role: { es: "Desarrollador de Software Junior", en: "Junior Software Developer" },
    start: "Nov 2023",
    end: { es: "Presente", en: "Present" },
    location: "Santiago, Chile",
    summary: {
      es: "Herramientas internas, aplicaciones web para clientes e integraciones de API.",
      en: "Internal tools, client-facing web applications and API integrations.",
    },
    highlights: [
      {
        es: "Desarrollo y mantengo herramientas internas de uso diario y aplicaciones web para clientes, en Python (Django, Flask) y Java sobre Apache Tomcat.",
        en: "Build and maintain internal tools used daily by the company and web applications used by its clients, in Python (Django, Flask) and Java on Apache Tomcat.",
      },
      {
        es: "Desarrollo integraciones de API en Python entre sistemas de la empresa y servicios externos.",
        en: "Develop API integrations in Python between company systems and external services.",
      },
      {
        es: "Construí un scraper de Mercado Público en Python (requests, MySQL, Django) que descarga los datos más recientes de compras públicas y los valida y depura.",
        en: "Built a Mercado Público scraper in Python (requests, MySQL, Django) that downloads the latest public-procurement data and validates and cleans it.",
      },
    ],
    tags: ["Python", "Django", "Flask", "Java", "Apache Tomcat", "MySQL", "Web scraping"],
  },
  {
    company: "EKMA (ekma.cl)",
    role: { es: "Desarrollador Full-Stack freelance", en: "Freelance Full-Stack Developer" },
    start: "2023",
    end: { es: "Vigente", en: "Ongoing" },
    summary: {
      es: "Empresa de construcción y obras civiles menores.",
      en: "Construction and minor civil works company.",
    },
    highlights: [
      {
        es: "Construí de principio a fin el sitio web completo de la empresa con Hugo, servido con nginx en Docker sobre un VPS, y lo mantengo funcionando hasta hoy.",
        en: "Built the company's whole website, end to end with Hugo, served by nginx in Docker on a VPS, and keep it running to this day.",
      },
      {
        es: "Participé en el trabajo de SEO que aumentó la visibilidad de la empresa en Google.",
        en: "Contributed to SEO work that made the company more visible on Google.",
      },
    ],
    tags: ["Hugo", "nginx", "Docker", "VPS", "SEO"],
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
        es: "Realicé pruebas de penetración en aplicaciones web e infraestructura con Burp Suite, Nmap y otras herramientas habituales, bajo el marco OWASP.",
        en: "Performed web application and infrastructure penetration tests with Burp Suite, Nmap and other standard pentesting tools, following the OWASP framework.",
      },
      {
        es: "Mitigué vulnerabilidades y colaboré en el trabajo de prevención y hardening.",
        en: "Mitigated vulnerabilities and contributed to preventive hardening.",
      },
      {
        es: "Desarrollé aplicaciones internas de apoyo a las tareas del equipo de seguridad.",
        en: "Built internal applications that supported the security team's work.",
      },
    ],
    tags: ["OWASP", "Pentesting", "Burp Suite", "Nmap", "Hardening"],
  },
];

export const education: Education[] = [
  {
    school: "Universidad Diego Portales",
    degree: {
      es: "Ingeniería Civil en Informática y Telecomunicaciones",
      en: "Civil Engineering in Computer Science and Telecommunications",
    },
    start: "2019",
    end: { es: "Dic 2025", en: "Dec 2025" },
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    key: "languages",
    items: ["Python", "Go", "TypeScript", "JavaScript", "Java", "Rust", "C", "C++", "PHP"],
  },
  {
    key: "frameworks",
    items: [
      "Django",
      "Flask",
      "Fastify",
      "React",
      "Svelte",
      "Astro",
      "Hugo",
      "Apache Tomcat",
      "REST APIs",
      "Web scraping",
      "Machine Learning",
    ],
  },
  {
    key: "databases",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    key: "infrastructure",
    items: ["Linux (NixOS)", "Git", "Docker", "nginx", "Nix", "Terraform", "VPS & cloud hosting"],
  },
  {
    key: "security",
    items: ["OWASP", "Web & infrastructure pentesting", "Burp Suite", "Nmap", "Hardening"],
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
    name: "Pogo",
    year: "2026",
    description: {
      es: "Notas adhesivas en Markdown que flotan sobre tus ventanas: ánclalas en su lugar, marca tareas y sincronízalas entre dispositivos mediante Pogo Pad, un servidor que alojas tú mismo. Las notas se cifran en disco (AES-256-GCM) y la sincronización admite cifrado de extremo a extremo opcional (Argon2id). Incluye Pogo Pocket, un widget de Android que sincroniza con el mismo servidor.",
      en: "Markdown sticky notes that float above your windows: anchor them in place, tick off tasks and sync them across devices through Pogo Pad, a server you host yourself. Notes are encrypted at rest (AES-256-GCM) and sync supports optional end-to-end encryption (Argon2id). Includes Pogo Pocket, an Android widget that syncs through the same server.",
    },
    tags: ["Go", "Wails", "Svelte", "SQLite", "Kotlin", "AES-256-GCM · Argon2id"],
    repo: "https://github.com/dvher/pogo",
    related: [
      { label: "Pogo Pad", href: "https://github.com/dvher/pogo_pad" },
      { label: "Pogo Pocket", href: "https://github.com/dvher/pogo_pocket" },
    ],
    badges: ["open-source", "non-profit", "ai-reviewed"],
    featured: true,
  },
  {
    name: "ReqTUI",
    description: {
      es: "Cliente HTTP para la terminal escrito en Go: una alternativa ligera a Postman o Insomnia, pensada para ser eficiente y cómoda desde la línea de comandos, con autenticación modular (API key, OAuth2, AWS SigV4). En desarrollo.",
      en: "A terminal-based HTTP client written in Go — a lightweight alternative to Postman or Insomnia, focused on efficiency and command-line usability, with pluggable auth (API key, OAuth2, AWS SigV4). Work in progress.",
    },
    tags: ["Go", "TUI", "HTTP", "CLI"],
    repo: "https://github.com/dvher/reqtui",
    badges: ["open-source", "personal"],
    featured: true,
  },
  {
    name: "Grades Calculator",
    year: "2026",
    description: {
      es: "Calcula las notas que te faltan para aprobar un ramo, con evaluaciones ponderadas anidadas, nota mínima de examen y escala configurable. Funciona sin conexión como app web (PWA), Android e iOS, con un servidor de sincronización opcional y autoalojado para respaldar y sincronizar entre dispositivos. Las tres versiones se validan con los mismos casos de prueba.",
      en: "Works out the grades you still need to pass a class, with nested weighted evaluations, a minimum exam grade and a configurable scale. Runs offline as a web app (PWA), Android and iOS app, with an optional self-hosted sync server to back up and sync across devices. All three implementations are checked against shared test cases.",
    },
    tags: ["TypeScript", "Kotlin", "Swift", "Fastify", "PostgreSQL"],
    repo: "https://github.com/dvher/grades_calculator",
    badges: ["open-source", "personal", "ai-reviewed"],
    featured: true,
  },
  {
    name: "3D Viewer",
    description: {
      es: 'App móvil multiplataforma para ver y comparar modelos 3D (STL, 3MF, GLB/glTF, OBJ) desde el teléfono, con rotación por gestos, importación múltiple y un modo "diff" que superpone dos modelos para resaltar diferencias geométricas.',
      en: 'A cross-platform mobile app to view and compare 3D models (STL, 3MF, GLB/glTF, OBJ) on your phone, with gesture rotation, multi-file import and a "diff" mode that overlays two models to highlight geometric differences.',
    },
    tags: ["React Native", "Expo", "three.js", "TypeScript"],
    repo: "https://github.com/dvher/3d_viewer_app",
    badges: ["open-source", "non-profit", "ai-reviewed"],
    featured: true,
  },
  {
    name: "Leaf",
    year: "2026",
    description: {
      es: "Lector de libros electrónicos minimalista para Android, iOS, escritorio y web (PWA): EPUB, MOBI, AZW3, PDF, CBZ y más, con temas y diseño de página personalizables, y sincronización entre dispositivos por WebRTC o una carpeta compartida.",
      en: "A minimal e-reader for Android, iOS, desktop and web (PWA): EPUB, MOBI, AZW3, PDF, CBZ and more, with customizable themes and page layout, and cross-device sync over WebRTC or a shared folder.",
    },
    tags: ["TypeScript", "Capacitor", "Tauri", "Rust", "WebRTC"],
    badges: ["personal", "ai-reviewed"],
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
];
