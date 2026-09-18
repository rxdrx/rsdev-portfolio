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
      "Formación universitaria con énfasis en algoritmos, estructuras de datos, sistemas operativos y desarrollo de software. Proyecto final y trabajo práctico integrador.",
    tags: ["Algoritmos", "POO", "Bases de Datos", "Redes"],
  },
  {
    id: "la-piedad",
    period: "2014 — 2022",
    institution: 'Instituto Técnico "La Piedad"',
    title: "Técnico en Informática",
    location: "Bahía Blanca, Argentina",
    status: "Titulado",
    detail:
      "Formación técnica secundaria en sistemas informáticos, hardware, redes y programación básica. Base formal para el desarrollo profesional posterior.",
    tags: ["Hardware", "Redes", "Sistemas", "Programación"],
  },
] as const;

export function Experience() {
  return (
    <div
      id="trayectoria"
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      {/* Header */}
      <div
        className="px-site pt-8 pb-4"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.1,
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
            className="grid grid-cols-1 lg:grid-cols-[320px_1fr]"
            style={{ borderBottom: "1px solid var(--color-ink)" }}
          >
            {/* Columna izq — período + estado */}
            <div
              className="flex flex-col gap-2 py-6"
              style={{ padding: "1.5rem 1.5rem", borderRight: "1px solid var(--color-ink)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.4,
                }}
              >
                {entry.period}
              </span>
              <span
                className="text-label"
                style={{ color: "var(--color-ink-secondary)" }}
              >
                {entry.institution}
              </span>

              {/* Badge de estado */}
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
                  alignSelf: "flex-start",
                  border: "1px solid var(--color-ink)",
                }}
              >
                {entry.status}
              </span>

              <span
                className="text-label"
                style={{ marginTop: "auto", paddingTop: "1rem" }}
              >
                {entry.location}
              </span>
            </div>

            {/* Columna der — título + detalle + tags */}
            <div className="flex flex-col gap-3 px-site py-6">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--color-ink)",
                }}
              >
                {entry.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  lineHeight: 1.75,
                  color: "var(--color-ink-secondary)",
                  maxWidth: "55ch",
                }}
              >
                {entry.detail}
              </p>
              <div
                className="flex flex-wrap gap-x-5 gap-y-1 pt-4"
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
