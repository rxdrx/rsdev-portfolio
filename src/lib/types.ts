// ============================================================
// TIPOS TIPADOS — Portfolio Rodrigo Sisko
// Definiciones completas de tipos para datos e i18n
// ============================================================

export type Language = "es" | "en";

export interface Project {
  /** Identificador único del proyecto */
  id: string;
  /** Título del proyecto */
  title: string;
  /** Descripción técnica concisa (1–2 oraciones) */
  description: string;
  /** Stack de tecnologías utilizadas */
  stack: string[];
  /** URL del repositorio (opcional) */
  repoUrl?: string;
  /** URL del deploy en producción (opcional) */
  liveUrl?: string;
  /** Año o rango de años: "2024" o "2023–2024" */
  year: string;
  /** Categoría para filtros futuros (opcional) */
  category?: string;
  /** ¿Está actualmente en producción? */
  inProduction?: boolean;
}

export interface LabProject {
  /** Nombre del experimento/herramienta */
  name: string;
  /** Tecnología principal o etiqueta técnica */
  tech: string;
  /** Año */
  year: string;
  /** Descripción breve (1 oración, opcional) */
  description?: string;
  /** URL del repo o demo (opcional) */
  url?: string;
}

export interface StackDomain {
  id: string;
  /** Nombre del dominio (ej: "Frontend", "Backend") */
  domain: string;
  /** Lista de tecnologías en ese dominio */
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  /** Período: "2024 — 2026" */
  period: string;
  /** Institución */
  institution: string;
  /** Título o carrera */
  title: string;
  /** Ubicación */
  location: string;
  /** Estado académico (ej: "Titulado" / "Graduated") */
  status: string;
  /** Detalle o resumen de la formación */
  detail: string;
  /** Etiquetas asociadas */
  tags: string[];
}
