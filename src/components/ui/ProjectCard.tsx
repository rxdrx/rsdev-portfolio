// ============================================================
// ProjectCard — Tarjeta modular para Proyectos Destacados
//
// Variantes:
//   - `featured`: ancho completo, tipografía más grande, layout horizontal
//   - default: tarjeta compacta para la grilla de 2 columnas
//
// Diseño: borde sólido 1px, sombra dura sin blur, sin rounded-2xl.
// ============================================================

import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className="border-editorial flex flex-col transition-all duration-150"
      style={{
        boxShadow: "var(--shadow-hard-sm)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = featured
          ? "var(--shadow-hard-lg)"
          : "var(--shadow-hard)";
        (e.currentTarget as HTMLElement).style.transform = "translate(-1px, -1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hard-sm)";
        (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
      }}
    >
      {featured ? (
        /* ── Variante Featured: layout horizontal ── */
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">
          {/* Contenido principal */}
          <div className="flex flex-col gap-5 p-8 md:p-10">
            {/* Header */}
            <div className="flex items-center gap-4">
              <span className="text-label">{project.year}</span>
              {project.inProduction && (
                <span className="text-label-accent">En producción</span>
              )}
              {project.category && (
                <span className="text-label">{project.category}</span>
              )}
            </div>

            {/* Título grande */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </h3>

            {/* Descripción */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "var(--color-ink-secondary)",
                maxWidth: "60ch",
              }}
            >
              {project.description}
            </p>

            {/* Stack */}
            <div
              className="flex flex-wrap gap-x-4 gap-y-1 pt-4"
              style={{ borderTop: "1px solid var(--color-paper-warm)" }}
            >
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Panel derecho: links */}
          <div
            className="flex flex-col justify-end gap-3 p-8"
            style={{ borderLeft: "1px solid var(--color-ink)" }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
              >
                ↗ Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                ↗ Repo
              </a>
            )}
          </div>
        </div>
      ) : (
        /* ── Variante Default: layout vertical compacto ── */
        <div className="flex flex-col gap-4 p-6 h-full">
          <div className="flex items-center justify-between">
            <span className="text-label">{project.year}</span>
            {project.inProduction && (
              <span className="text-label-accent">En producción</span>
            )}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              flex: 1,
            }}
          >
            {project.description}
          </p>

          <div
            className="flex flex-wrap gap-x-3 gap-y-1 py-3"
            style={{ borderTop: "1px solid var(--color-paper-warm)" }}
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-muted)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.repoUrl || project.liveUrl) && (
            <div className="flex gap-2 mt-auto">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: "0.7rem", padding: "0.4rem 0.9rem" }}
                >
                  ↗ Repo
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial"
                  style={{ fontSize: "0.7rem", padding: "0.4rem 0.9rem" }}
                >
                  ↗ Demo
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
