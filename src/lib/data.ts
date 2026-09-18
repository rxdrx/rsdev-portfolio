// ============================================================
// DATOS DEL PORTFOLIO — Rodrigo Sisko
// Editá este archivo para poblar el contenido del portfolio.
// Los componentes consumen estos datos de forma modular.
// ============================================================

import type { Project, StackDomain, ExperienceEntry } from "@/lib/types";

// ------------------------------------------------------------
// STACK TECNOLÓGICO
// Agrupado por dominios, sin barras de porcentaje artificiales
// ------------------------------------------------------------
export const STACK_DOMAINS: StackDomain[] = [
  {
    domain: "Lenguajes y Core",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    domain: "Frontend",
    items: ["React", "React Native", "HTML", "CSS"],
  },
  {
    domain: "Backend y Bases de Datos",
    items: ["Node.js", "Express", "PostgreSQL", "MySQL", "API RESTful"],
  },
  {
    domain: "Herramientas y Metodologías",
    items: ["Git", "GitHub", "Jira", "Modelado de Datos", "Arquitectura de Software", "Desarrollo con IA"],
  },
];

// ------------------------------------------------------------
// TRAYECTORIA / EXPERIENCIA
// ------------------------------------------------------------
export const EXPERIENCE: ExperienceEntry[] = [
  {
    institution: "UTN Bahía Blanca",
    title: "Tecnicatura Universitaria en Programación",
    period: "2024–2026",
    location: "Bahía Blanca, Argentina",
  },
  {
    institution: 'Instituto Técnico "La Piedad"',
    title: "Tecnicatura en Informática",
    period: "2014–2022",
    location: "Bahía Blanca, Argentina",
  },
];

// ------------------------------------------------------------
// PROYECTOS DESTACADOS — Sistemas en Producción
// TODO: Completá con tus proyectos reales.
// Seguí la interfaz `Project` definida en src/lib/types.ts
// ------------------------------------------------------------
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proyecto-1",
    title: "REGH E-commerce",
    description: "Proyecto de e-commerce de tipo marketplace. Hecho a medida de una propuesta de trabajo real en una página de freelancers.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
    repoUrl: "https://github.com/rxdrx/ecommerce-regh",
    //liveUrl: "",
    year: "2026",
    inProduction: false
  },
  {
    id: "proyecto-2",
    title: "PaSe app",
    description: "Es una aplicación movil realizada para ayudar a orientarse a personas no videntes y/o con deficiencias visuales.",
    stack: ["React Native", "TypeScript"],
    repoUrl: "https://github.com/rxdrx/paseapp",
    //liveUrl: "",
    year: "2026",
    inProduction: false
  },
  {
    id: "proyecto-3",
    title: "Proyecto Final Universidad",
    description: "Hicimos en equipo un sistema de gestión de stock para una tienda de calzado, diseñamos la base de datos, las tablas y relaciones. Los usuarios pueden registrarse y modificar sus datos personas. Los administradores disponen de un dashboard donde pueden controlar el stock y mas estadísticas de la tienda.",
    stack: ["JavaScript", "Express", "PostgreSQL", "Node.js", "Sequelize", "HTML", "CSS"],
    repoUrl: "https://github.com/rxdrx/backend-proyecto-final",
    //liveUrl: "",
    year: "2025 - 2026",
    inProduction: false
  },
  {
    id: "proyecto-4",
    title: "Landing page cafeteria",
    description: "Es una pagina web básica para una cafeteria.",
    stack: ["TypeScript", "HTML", "CSS", "Vite"],
    //repoUrl: "",
    liveUrl: "https://rxdrx.github.io/rsdev-landing-cafe/",
    year: "2026",
    inProduction: true
  },
  {
    id: "proyecto-5",
    title: "Landing page carpintería",
    description: "Es una pagina web que muestra productos de carpintería a medida, para una empresa familiar.",
    stack: ["TypeScript", "HTML", "CSS", "Vite"],
    repoUrl: "https://github.com/rxdrx/romia-carp",
    //liveUrl: "",
    year: "2026",
    inProduction: false
  },
];