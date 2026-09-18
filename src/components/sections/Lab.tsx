// ============================================================
// Lab — Laboratorio / Exploraciones
//
// Diseño: tabla editorial de una línea por ítem.
// Columnas: índice | nombre | tecnología | año | link
// Sin tarjetas. Sin bento. Estructura tipo tabla de periódico.
// ============================================================

import { SectionNumber } from "@/components/ui/SectionNumber";
import { LabItem } from "@/components/ui/LabItem";
import { LAB_PROJECTS } from "@/lib/data";

export function Lab() {
  const hasProjects = LAB_PROJECTS.length > 0;

  return (
    <section
      id="laboratorio"
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      {/* Header de sección */}
      <div
        className="relative px-6 md:px-10 pt-16 pb-10 overflow-hidden"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        <SectionNumber number="02" />

        <div className="relative z-10 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-label">Experimentos y herramientas</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Laboratorio
            </h2>
          </div>
          {hasProjects && (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontStyle: "italic",
                color: "var(--color-ink-muted)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {LAB_PROJECTS.length} experimento{LAB_PROJECTS.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* Tabla de ítems */}
      <div className="px-6 md:px-10 py-4">
        {hasProjects ? (
          <div>
            {/* Cabecera de tabla — estilo hoja de cálculo editorial */}
            <div
              className="grid py-3 mb-1"
              style={{
                gridTemplateColumns: "2rem 1fr auto auto 1.5rem",
                gap: "1rem 2rem",
                borderBottom: "1px solid var(--color-ink)",
              }}
            >
              <span className="text-label">#</span>
              <span className="text-label">Proyecto</span>
              <span className="text-label">Tech</span>
              <span className="text-label">Año</span>
              <span />
            </div>
            {LAB_PROJECTS.map((project, index) => (
              <LabItem key={`${project.name}-${index}`} project={project} index={index} />
            ))}
            <div style={{ borderTop: "1px solid var(--color-ink)", marginTop: "0" }} />
          </div>
        ) : (
          <LabPlaceholder />
        )}
      </div>
    </section>
  );
}

function LabPlaceholder() {
  // Placeholder con estructura de tabla visible
  const emptyRows = ["CLI tool · TypeScript", "Landing page · React", "Script de automatización · Python"];

  return (
    <div className="flex flex-col">
      {/* Cabecera de tabla */}
      <div
        className="grid py-3"
        style={{
          gridTemplateColumns: "2rem 1fr auto auto",
          gap: "1rem 2rem",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        <span className="text-label">#</span>
        <span className="text-label">Proyecto</span>
        <span className="text-label">Tech</span>
        <span className="text-label">Año</span>
      </div>

      {/* Filas vacías */}
      {emptyRows.map((hint, i) => (
        <div
          key={i}
          className="grid items-center py-5"
          style={{
            gridTemplateColumns: "2rem 1fr auto auto",
            gap: "1rem 2rem",
            borderBottom: "1px dashed var(--color-paper-warm)",
            opacity: 0.5,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--color-ink-muted)",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "var(--color-ink-muted)",
              fontStyle: "italic",
            }}
          >
            {hint.split(" · ")[0]}
          </span>
          <span className="text-label">{hint.split(" · ")[1]}</span>
          <span className="text-label">—</span>
        </div>
      ))}

      <div style={{ borderTop: "1px solid var(--color-ink)" }} />

      {/* Instrucción */}
      <p
        className="mt-6 mb-4"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--color-ink-muted)",
        }}
      >
        Completá{" "}
        <code
          style={{
            backgroundColor: "var(--color-accent)",
            padding: "0.1em 0.4em",
            color: "var(--color-ink)",
          }}
        >
          LAB_PROJECTS
        </code>{" "}
        en <code style={{ color: "var(--color-ink)" }}>src/lib/data.ts</code>
      </p>
    </div>
  );
}
