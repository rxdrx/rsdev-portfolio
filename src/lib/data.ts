// ============================================================
// DATOS DEL PORTFOLIO — Rodrigo Sisko
// Editá este archivo para poblar el contenido del portfolio.
// Los componentes consumen estos datos de forma modular.
// ============================================================

import type { Project, LabProject, StackDomain, ExperienceEntry } from "@/lib/types";

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
  // Ejemplo de estructura (descomenta y completá):
  // {
  //   id: "nombre-proyecto",
  //   title: "Nombre del Proyecto",
  //   description: "Descripción técnica concisa de qué resuelve y cómo.",
  //   stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  //   repoUrl: "https://github.com/rxdrx/nombre-repo",
  //   liveUrl: "https://tu-proyecto.vercel.app",
  //   year: "2024",
  //   inProduction: true,
  // },
];

// ------------------------------------------------------------
// LABORATORIO / EXPLORACIONES
// TODO: Listado de proyectos menores, herramientas o experimentos.
// Seguí la interfaz `LabProject` definida en src/lib/types.ts
// ------------------------------------------------------------
export const LAB_PROJECTS: LabProject[] = [
  // Ejemplo de estructura (descomenta y completá):
  // {
  //   name: "Nombre del experimento",
  //   tech: "TypeScript",
  //   year: "2024",
  //   description: "Una oración sobre qué hace.",
  //   url: "https://github.com/rxdrx/repo",
  // },
];
