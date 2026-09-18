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
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "React Native", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    label: "Backend y Datos",
    items: ["Node.js", "Express", "PostgreSQL", "MySQL", "API RESTful"],
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
        className="px-site pb-3"
        style={{
          paddingTop: "3.0rem",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              Stack Técnico
            </h2>
          </div>
        </div>
      </div>

      {/* Grilla de 4 columnas centrada verticalmente */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((domain, index) => (
            <div
              key={domain.id}
              className="flex flex-col"
              style={{
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
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
                  marginBottom: "1.75rem",
                  display: "block",
                }}
              >
                {domain.label}
              </span>

              {/* Lista tipográfica con mayor espacio entre elementos */}
              <ul className="list-none flex flex-col gap-3.5">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
                      lineHeight: 1.4,
                      color: "var(--color-ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
