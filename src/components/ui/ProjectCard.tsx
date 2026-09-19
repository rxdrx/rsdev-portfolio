// ============================================================
// ProjectCard — Tarjeta modular para Proyectos Destacados (Multilingüe)
// Soporta 3 estados: En producción / Terminado / En desarrollo
// ============================================================

import type { Project } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_TEXT } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = PROJECTS_TEXT[lang];

  const projectStatus = project.status || (project.inProduction ? "production" : "development");
  const targetUrl = (projectStatus === "production" && project.liveUrl)
    ? project.liveUrl
    : project.repoUrl || project.liveUrl || "https://github.com/rxdrx";

  const renderBadge = () => {
    if (projectStatus === "production") {
      return <span className="text-label-accent">{t.inProduction}</span>;
    }
    if (projectStatus === "completed") {
      return (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-paper)",
            padding: "0.2em 0.6em",
            border: "1px solid var(--color-ink)",
          }}
        >
          {t.completed}
        </span>
      );
    }
    return (
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          backgroundColor: "var(--color-paper-warm)",
          border: "1px solid var(--color-ink)",
          padding: "0.2em 0.6em",
          color: "var(--color-ink-secondary)",
        }}
      >
        {t.inDevelopment}
      </span>
    );
  };

  return (
    <article
      className="border-editorial flex flex-col transition-all duration-150 cursor-pointer"
      style={{
        minHeight: "260px",
        boxShadow: "var(--shadow-hard-sm)",
      }}
      onClick={() => {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
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
        <div className="flex flex-col gap-5 p-8 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <span className="text-label">{project.year}</span>
            {renderBadge()}
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
      ) : (
        /* ── Variante Default: layout vertical compacto ── */
        <div className="flex flex-col gap-5 py-8 px-8 h-full justify-between">
          <div className="flex items-center justify-between px-2">
            <span className="text-label">{project.year}</span>
            {renderBadge()}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textAlign: "center",
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
              textAlign: "center",
              flex: 1,
            }}
          >
            {project.description}
          </p>

          <div
            className="flex flex-wrap justify-center gap-x-3.5 gap-y-1 py-3 px-2 mt-auto"
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
        </div>
      )}
    </article>
  );
}
