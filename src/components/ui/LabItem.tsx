// ============================================================
// LabItem — Item minimalista para Laboratorio / Exploraciones
//
// Diseño: tipografía limpia, sin tarjetas, sin decoración.
// Lista editorial de una línea por proyecto.
// ============================================================

import type { LabProject } from "@/lib/types";

interface LabItemProps {
  project: LabProject;
  index: number;
}

export function LabItem({ project, index }: LabItemProps) {
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-baseline justify-between gap-4 py-4 border-t border-[var(--color-ink)] transition-colors duration-150 cursor-pointer hover:bg-[var(--color-paper-warm)]"
      >
        {/* Número de ítem + nombre */}
        <div className="flex items-baseline gap-4 flex-1 min-w-0">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--color-ink-muted)",
              letterSpacing: "0.1em",
              flexShrink: 0,
              minWidth: "2rem",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col min-w-0">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                lineHeight: 1.2,
                color: "var(--color-ink)",
              }}
            >
              {project.name}
            </span>
            {project.description && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--color-ink-muted)",
                  marginTop: "0.15rem",
                }}
              >
                {project.description}
              </span>
            )}
          </div>
        </div>

        {/* Metadata: tech + año + flecha */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-label">{project.tech}</span>
          <span className="text-label">{project.year}</span>
          <span
            style={{
              fontSize: "1rem",
              color: "var(--color-ink-muted)",
              transition: "transform 0.15s ease",
            }}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 inline-block"
          >
            ↗
          </span>
        </div>
      </a>
    );
  }

  return (
    <div className="group flex items-baseline justify-between gap-4 py-4 border-t border-[var(--color-ink)] transition-colors duration-150">
      {/* Número de ítem + nombre */}
      <div className="flex items-baseline gap-4 flex-1 min-w-0">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--color-ink-muted)",
            letterSpacing: "0.1em",
            flexShrink: 0,
            minWidth: "2rem",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-col min-w-0">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              lineHeight: 1.2,
              color: "var(--color-ink)",
            }}
          >
            {project.name}
          </span>
          {project.description && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-ink-muted)",
                marginTop: "0.15rem",
              }}
            >
              {project.description}
            </span>
          )}
        </div>
      </div>

      {/* Metadata: tech + año */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-label">{project.tech}</span>
        <span className="text-label">{project.year}</span>
      </div>
    </div>
  );
}
