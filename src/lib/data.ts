// ============================================================
// DATOS DEL PORTFOLIO — Rodrigo Sisko (Multilingüe ES / EN)
// ============================================================

import type { Project, LabProject, StackDomain, ExperienceEntry, Language } from "@/lib/types";

// ------------------------------------------------------------
// NAVEGACIÓN
// ------------------------------------------------------------
export const NAV_LINKS: Record<Language, Array<{ label: string; href: string }>> = {
  es: [
    { label: "inicio", href: "#top" },
    { label: "proyectos", href: "#proyectos" },
    { label: "stack", href: "#stack" },
    { label: "trayectoria", href: "#trayectoria" },
    { label: "contacto", href: "#contacto" },
  ],
  en: [
    { label: "home", href: "#top" },
    { label: "projects", href: "#proyectos" },
    { label: "stack", href: "#stack" },
    { label: "experience", href: "#trayectoria" },
    { label: "contact", href: "#contacto" },
  ],
};

// ------------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------------
export const HERO_TEXT: Record<Language, {
  role: string;
  viewProjects: string;
  contact: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  locationTitle: string;
  locationValue: string;
  languagesTitle: string;
  spanish: string;
  spanishLevel: string;
  english: string;
  englishLevel: string;
  scrollExplore: string;
}> = {
  es: {
    role: "Desarrollador Full Stack",
    viewProjects: "Ver proyectos ↓",
    contact: "Contacto",
    aboutTitle: "Acerca de mí",
    aboutP1: "Desarrollador Full Stack recibido de la UTN, enfocado en el desarrollo web y backend con JavaScript, TypeScript, React y bases de datos SQL.",
    aboutP2: "Orientado a diseñar arquitecturas limpias, estructurar bases de datos relacionales e integrar APIs RESTful para resolver problemas técnicos concretos con código robusto y mantenible.",
    locationTitle: "Ubicación",
    locationValue: "Bahía Blanca, Argentina",
    languagesTitle: "Idiomas",
    spanish: "Español",
    spanishLevel: "Nativo",
    english: "Inglés",
    englishLevel: "Básico (estudiando)",
    scrollExplore: "Scroll para explorar",
  },
  en: {
    role: "Full Stack Developer",
    viewProjects: "View projects ↓",
    contact: "Contact",
    aboutTitle: "About me",
    aboutP1: "Full Stack Developer graduated from UTN, focused on web and backend development with JavaScript, TypeScript, React, and SQL databases.",
    aboutP2: "Oriented toward designing clean architectures, structuring relational databases, and integrating RESTful APIs to solve real technical problems with robust, maintainable code.",
    locationTitle: "Location",
    locationValue: "Bahía Blanca, Argentina",
    languagesTitle: "Languages",
    spanish: "Spanish",
    spanishLevel: "Native",
    english: "English",
    englishLevel: "Basic (learning)",
    scrollExplore: "Scroll to explore",
  },
};

// ------------------------------------------------------------
// PROYECTOS DESTACADOS & PLACEHOLDERS
// ------------------------------------------------------------
export const PROJECTS_TEXT: Record<Language, {
  title: string;
  inProduction: string;
  completed: string;
  inDevelopment: string;
  moreLabel: string;
  moreTitle: string;
  moreDesc: string;
}> = {
  es: {
    title: "Proyectos Destacados",
    inProduction: "En producción",
    completed: "Terminado",
    inDevelopment: "En desarrollo",
    moreLabel: "Repositorio & Código",
    moreTitle: "Explorá más proyectos",
    moreDesc: "Accedé al catálogo completo de repositorios, herramientas experimentales y prototipos en GitHub ↗",
  },
  en: {
    title: "Featured Projects",
    inProduction: "In production",
    completed: "Completed",
    inDevelopment: "In development",
    moreLabel: "Repository & Code",
    moreTitle: "Explore more projects",
    moreDesc: "Access the full catalog of repositories, experimental tools, and prototypes on GitHub ↗",
  },
};

export const FEATURED_PROJECTS: Record<Language, Project[]> = {
  es: [
    {
      id: "proyecto-1",
      title: "REGH E-commerce",
      description: "Proyecto de e-commerce de tipo marketplace. Hecho a medida de una propuesta de trabajo real en una página de freelancers.",
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
      repoUrl: "https://github.com/rxdrx/ecommerce-regh",
      year: "2026",
      status: "completed",
      inProduction: false,
    },
    {
      id: "proyecto-2",
      title: "PaSe app",
      description: "Es una aplicación móvil realizada para ayudar a orientarse a personas no videntes y/o con deficiencias visuales.",
      stack: ["React Native", "TypeScript"],
      repoUrl: "https://github.com/rxdrx/paseapp",
      year: "2026",
      status: "development",
      inProduction: false,
    },
    {
      id: "proyecto-3",
      title: "Proyecto Final Universidad",
      description: "Hicimos en equipo un sistema de gestión de stock para una tienda de calzado, diseñamos la base de datos, las tablas y relaciones. Los usuarios pueden registrarse y modificar sus datos personales. Los administradores disponen de un dashboard donde pueden controlar el stock y más estadísticas de la tienda.",
      stack: ["JavaScript", "Express", "PostgreSQL", "Node.js", "Sequelize", "HTML", "CSS"],
      repoUrl: "https://github.com/rxdrx/backend-proyecto-final",
      year: "2025 - 2026",
      status: "completed",
      inProduction: false,
    },
    {
      id: "proyecto-4",
      title: "Landing page cafetería",
      description: "Es una página web básica para una cafetería.",
      stack: ["TypeScript", "HTML", "CSS", "Vite"],
      liveUrl: "https://rxdrx.github.io/rsdev-landing-cafe/",
      year: "2026",
      status: "production",
      inProduction: true,
    },
    {
      id: "proyecto-5",
      title: "Landing page carpintería",
      description: "Es una página web que muestra productos de carpintería a medida, para una empresa familiar.",
      stack: ["TypeScript", "HTML", "CSS", "Vite"],
      repoUrl: "https://github.com/rxdrx/romia-carp",
      year: "2026",
      status: "completed",
      inProduction: false,
    },
  ],
  en: [
    {
      id: "proyecto-1",
      title: "REGH E-commerce",
      description: "Marketplace e-commerce project. Custom built based on a real job proposal on a freelancing platform.",
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
      repoUrl: "https://github.com/rxdrx/ecommerce-regh",
      year: "2026",
      status: "development",
      inProduction: false,
    },
    {
      id: "proyecto-2",
      title: "PaSe app",
      description: "Mobile application designed to assist blind and visually impaired individuals with navigation and orientation.",
      stack: ["React Native", "TypeScript"],
      repoUrl: "https://github.com/rxdrx/paseapp",
      year: "2026",
      status: "completed",
      inProduction: false,
    },
    {
      id: "proyecto-3",
      title: "University Final Project",
      description: "Developed a footwear store stock management system in a team, designing relational database schemas and tables. Features user authentication and a comprehensive admin dashboard for inventory management and store analytics.",
      stack: ["JavaScript", "Express", "PostgreSQL", "Node.js", "Sequelize", "HTML", "CSS"],
      repoUrl: "https://github.com/rxdrx/backend-proyecto-final",
      year: "2025 - 2026",
      status: "completed",
      inProduction: false,
    },
    {
      id: "proyecto-4",
      title: "Coffee Shop Landing Page",
      description: "Essential and responsive landing page website for a coffee shop.",
      stack: ["TypeScript", "HTML", "CSS", "Vite"],
      liveUrl: "https://rxdrx.github.io/rsdev-landing-cafe/",
      year: "2026",
      status: "production",
      inProduction: true,
    },
    {
      id: "proyecto-5",
      title: "Carpentry Landing Page",
      description: "Website showcasing handcrafted custom carpentry products for a family business.",
      stack: ["TypeScript", "HTML", "CSS", "Vite"],
      repoUrl: "https://github.com/rxdrx/romia-carp",
      year: "2026",
      status: "completed",
      inProduction: false,
    },
  ],
};

export const DEFAULT_PLACEHOLDERS: Record<Language, Project[]> = {
  es: [
    {
      id: "p1",
      title: "Sistema de Gestión Integrado",
      description: "Plataforma web con arquitectura en capas, autenticación JWT, gestión de roles y reportes dinámicos.",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      year: "2025",
      status: "production",
      inProduction: true,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p2",
      title: "API RESTful & Backend Core",
      description: "Servicio backend desacoplado con ORM, validación estricta de esquemas, consultas SQL optimizadas y OpenAPI.",
      stack: ["Node.js", "Express", "MySQL", "API RESTful"],
      year: "2025",
      status: "production",
      inProduction: true,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p3",
      title: "Dashboard & Analítica Técnica",
      description: "Panel de control interactivo con métricas en tiempo real, visualización de datos y componentes modulares.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      year: "2024",
      status: "completed",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p4",
      title: "E-commerce & Checkout Seguro",
      description: "Aplicación de comercio electrónico con catálogo dinámico, carrito de compras persistente e integración de pagos.",
      stack: ["React", "Node.js", "PostgreSQL"],
      year: "2024",
      status: "completed",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p5",
      title: "Aplicación Móvil Cross-Platform",
      description: "App móvil para gestión de tareas y flujos de trabajo con sincronización de datos y soporte offline.",
      stack: ["React Native", "TypeScript", "API REST"],
      year: "2024",
      status: "development",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
  ],
  en: [
    {
      id: "p1",
      title: "Integrated Management System",
      description: "Web platform featuring layered architecture, JWT authentication, role management, and dynamic reports.",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      year: "2025",
      status: "production",
      inProduction: true,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p2",
      title: "RESTful API & Backend Core",
      description: "Decoupled backend service with ORM, strict schema validation, optimized SQL queries, and OpenAPI.",
      stack: ["Node.js", "Express", "MySQL", "API RESTful"],
      year: "2025",
      status: "production",
      inProduction: true,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p3",
      title: "Technical Analytics Dashboard",
      description: "Interactive dashboard featuring real-time metrics, data visualization, and modular components.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      year: "2024",
      status: "completed",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p4",
      title: "E-commerce & Secure Checkout",
      description: "E-commerce application featuring dynamic catalog, persistent shopping cart, and payment integration.",
      stack: ["React", "Node.js", "PostgreSQL"],
      year: "2024",
      status: "completed",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
    {
      id: "p5",
      title: "Cross-Platform Mobile App",
      description: "Mobile application for task and workflow management with data synchronization and offline support.",
      stack: ["React Native", "TypeScript", "API REST"],
      year: "2024",
      status: "development",
      inProduction: false,
      repoUrl: "https://github.com/rxdrx",
    },
  ],
};

// ------------------------------------------------------------
// STACK TECNOLÓGICO
// ------------------------------------------------------------
export const STACK_TEXT: Record<Language, { title: string }> = {
  es: { title: "Stack Técnico" },
  en: { title: "Technical Stack" },
};

export const STACK_DOMAINS: Record<Language, StackDomain[]> = {
  es: [
    {
      id: "lenguajes",
      domain: "Lenguajes y Core",
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      id: "frontend",
      domain: "Frontend",
      items: ["React", "React Native", "HTML", "CSS"],
    },
    {
      id: "backend",
      domain: "Backend y Bases de Datos",
      items: ["Node.js", "Express", "PostgreSQL", "MySQL", "API RESTful"],
    },
    {
      id: "herramientas",
      domain: "Herramientas y Metodologías",
      items: ["Git", "GitHub", "Jira", "Modelado de datos", "Arquitectura de Software", "Desarrollo con IA"],
    },
  ],
  en: [
    {
      id: "lenguajes",
      domain: "Languages & Core",
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      id: "frontend",
      domain: "Frontend",
      items: ["React", "React Native", "HTML", "CSS"],
    },
    {
      id: "backend",
      domain: "Backend & Databases",
      items: ["Node.js", "Express", "PostgreSQL", "MySQL", "API RESTful"],
    },
    {
      id: "herramientas",
      domain: "Tools & Methodologies",
      items: ["Git", "GitHub", "Jira", "Data Modeling", "Software Architecture", "AI-Assisted Development"],
    },
  ],
};

// ------------------------------------------------------------
// TRAYECTORIA / EXPERIENCIA
// ------------------------------------------------------------
export const EXPERIENCE_TEXT: Record<Language, { title: string }> = {
  es: { title: "Formación Académica" },
  en: { title: "Academic Background" },
};

export const EXPERIENCE: Record<Language, ExperienceEntry[]> = {
  es: [
    {
      id: "utn",
      period: "2024 — 2026",
      institution: "Universidad Tecnológica Nacional",
      title: "Tecnicatura Universitaria en Programación",
      location: "Bahía Blanca, Argentina",
      status: "Titulado",
      detail: "Formación universitaria con énfasis en algoritmos, estructuras de datos, patrones de diseño, programación orientada a objetos, ciclo de vida del software y desarrollo de software.",
      tags: ["Algoritmos", "POO", "Bases de Datos"],
    },
    {
      id: "la-piedad",
      period: "2014 — 2022",
      institution: 'Instituto Técnico "La Piedad"',
      title: "Tecnicatura en Informática",
      location: "Bahía Blanca, Argentina",
      status: "Titulado",
      detail: "Formación técnica secundaria en sistemas informáticos, hardware, redes, bases de datos, paquete office y programación básica.",
      tags: ["Hardware", "Redes", "Sistemas", "Programación"],
    },
  ],
  en: [
    {
      id: "utn",
      period: "2024 — 2026",
      institution: "Universidad Tecnológica Nacional",
      title: "University Associate Degree in Programming",
      location: "Bahía Blanca, Argentina",
      status: "Graduated",
      detail: "University education focusing on algorithms, data structures, design patterns, object-oriented programming, software lifecycle, and software development.",
      tags: ["Algorithms", "OOP", "Databases"],
    },
    {
      id: "la-piedad",
      period: "2014 — 2022",
      institution: 'Instituto Técnico "La Piedad"',
      title: "Computer Technician",
      location: "Bahía Blanca, Argentina",
      status: "Graduated",
      detail: "High school technical education in computer systems, hardware, networking, databases, office software, and basic programming.",
      tags: ["Hardware", "Networking", "Systems", "Programming"],
    },
  ],
};

// ------------------------------------------------------------
// CONTACTO
// ------------------------------------------------------------
export const CONTACT_TEXT: Record<Language, {
  title: string;
  availableInline: string;
  availableBanner: string;
  bannerDate: string;
  copiedMessage: string;
  githubMeta: string;
  linkedinMeta: string;
  emailMeta: string;
}> = {
  es: {
    title: "Hablemos",
    availableInline: "Disponible",
    availableBanner: "Disponible para proyectos freelance y posiciones remotas",
    bannerDate: "Septiembre 2026",
    copiedMessage: "Copiado al portapapeles",
    githubMeta: "Código y proyectos",
    linkedinMeta: "Perfil profesional",
    emailMeta: "Copiar email",
  },
  en: {
    title: "Let's talk",
    availableInline: "Available",
    availableBanner: "Available for freelance projects and remote positions",
    bannerDate: "September 2026",
    copiedMessage: "Copied to clipboard",
    githubMeta: "Code and projects",
    linkedinMeta: "Professional profile",
    emailMeta: "Copy email",
  },
};

export const LAB_PROJECTS: LabProject[] = [];