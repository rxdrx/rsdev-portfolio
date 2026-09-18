// ============================================================
// Experience — Trayectoria / Formación
//
// Layout 2 columnas: período+estado izquierda / contenido derecha.
// Sin SectionNumber. Padding consistente con el resto del sitio.
// ============================================================

const EDUCATION = [
  {
    id: "utn",
    period: "2024 — 2026",
    institution: "Universidad Tecnológica Nacional",
    title: "Tecnicatura Universitaria en Programación",
    location: "Bahía Blanca, Argentina",
    status: "Titulado",
    detail:
      "Formación universitaria con énfasis en algoritmos, estructuras de datos, patrones de diseño, programación orientada a objetos, ciclo de vida del software y desarrollo de software.",
    tags: ["Algoritmos", "POO", "Bases de Datos"],
  },
  {
    id: "la-piedad",
    period: "2014 — 2022",
    institution: 'Instituto Técnico "La Piedad"',
    title: "Técnico en Informática",
    location: "Bahía Blanca, Argentina",
    status: "Titulado",
    detail:
      "Formación técnica secundaria en sistemas informáticos, hardware, redes, bases de datos, paquete office y programación básica.",
    tags: ["Hardware", "Redes", "Sistemas", "Programación"],
  },
] as const;

export function Experience() {
  return (
    <div
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      {/* Header */}
      <div
        className="px-site pb-1"
        style={{
          paddingTop: "3rem",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Formación Académica
            </h2>
          </div>
        </div>
      </div>

      {/* Entradas */}
      <div className="flex flex-col">
        {EDUCATION.map((entry) => (
          <div
            key={entry.id}
            className="grid grid-cols-1 lg:grid-cols-[30%_1fr]"
            style={{
              borderBottom: "1px solid var(--color-ink)",
              minHeight: "220px",
            }}
          >
            {/* Columna izq — Metadatos de la institución */}
            <div
              className="flex flex-col justify-center gap-2.5 px-site py-6"
              style={{ borderRight: "1px solid var(--color-ink)" }}
            >
              {/* Período */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "0.02em",
                }}
              >
                {entry.period}
              </span>

              {/* Institución */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                }}
              >
                {entry.institution}
              </span>

              {/* Badge de estado (Titulado) arriba de la ubicación */}
              <div className="pt-1">
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backgroundColor:
                      (entry.status as string) === "En curso"
                        ? "var(--color-accent)"
                        : "var(--color-paper-warm)",
                    padding: "0.2em 0.6em",
                    border: "1px solid var(--color-ink)",
                  }}
                >
                  {entry.status}
                </span>
              </div>

              {/* Ubicación */}
              <span
                className="text-label"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {entry.location}
              </span>
            </div>

            {/* Columna der — título + detalle + tags */}
            <div className="flex flex-col justify-center gap-4 px-site py-6">
              <div className="flex flex-col gap-3">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "var(--color-ink)",
                  }}
                >
                  {entry.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: "var(--color-ink-secondary)",
                    maxWidth: "60ch",
                  }}
                >
                  {entry.detail}
                </p>
              </div>

              {/* Tags al pie */}
              <div
                className="flex flex-wrap gap-x-5 gap-y-1 pt-4 mt-4"
                style={{ borderTop: "1px solid var(--color-paper-warm)" }}
              >
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
