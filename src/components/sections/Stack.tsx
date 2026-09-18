// ============================================================
// Stack — Tecnologías y Habilidades
//
// Grilla de 4 columnas tipo tabla de periódico técnico.
// Sin SectionNumber. Sin barras de progreso.
// Padding generoso en celdas para respiro visual.
// ============================================================

const DOMAINS = [
  {
    id: "lenguajes",
    label: "Lenguajes y Core",
    items: ["JavaScript", "TypeScript", "Python"],
    note: "Primario",
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "React Native", "HTML5", "CSS3"],
    note: "Ecosistema principal",
  },
  {
    id: "backend",
    label: "Backend y Datos",
    items: ["Node.js", "Express", "PostgreSQL", "MySQL", "API RESTful"],
    note: "Enfoque actual",
  },
  {
    id: "herramientas",
    label: "Herramientas",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Modelado de datos",
      "Arquitectura de Software",
      "Desarrollo con IA",
    ],
    note: "Metodologías",
  },
] as const;

export function Stack() {
  return (
    <section
      id="stack"
      className="snap-section flex flex-col justify-between"
      style={{
        height: "calc(100vh - 65px)",
        minHeight: "calc(100vh - 65px)",
        borderBottom: "1px solid var(--color-ink)",
      }}
    >
      {/* Header */}
      <div
        className="px-site pt-8 pb-5"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Stack Técnico
            </h2>
          </div>
        </div>
      </div>

      {/* Grilla de 4 columnas — padding generoso para respiro visual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {DOMAINS.map((domain, index) => (
          <div
            key={domain.id}
            className="flex flex-col"
            style={{
              // Padding interno: horizontal usa la misma variable que el sitio
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              paddingLeft: "var(--px-site)",
              paddingRight: "var(--px-site)",
              borderRight:
                index < DOMAINS.length - 1
                  ? "1px solid var(--color-ink)"
                  : "none",
            }}
          >
            {/* Índice de columna */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-muted)",
                marginBottom: "0.75rem",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Nombre del dominio */}
            <span
              className="text-label"
              style={{
                color: "var(--color-ink)",
                marginBottom: "2rem",
                display: "block",
              }}
            >
              {domain.label}
            </span>

            {/* Lista tipográfica — sin pills, sin colores */}
            <ul className="list-none flex flex-col gap-2 flex-1">
              {domain.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                    lineHeight: 1.3,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Nota de pie del dominio */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-ink-muted)",
                marginTop: "2rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-paper-warm)",
              }}
            >
              {domain.note}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
