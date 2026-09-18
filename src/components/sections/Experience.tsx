// ============================================================
// Experience — Trayectoria / Formación (Multilingüe)
// ============================================================

import { useLanguage } from "@/context/LanguageContext";
import { EXPERIENCE_TEXT, EXPERIENCE } from "@/lib/data";

export function Experience() {
  const { lang } = useLanguage();
  const educationList = EXPERIENCE[lang];
  const t = EXPERIENCE_TEXT[lang];

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
              {t.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Entradas */}
      <div className="flex flex-col">
        {educationList.map((entry) => (
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

              {/* Badge de estado */}
              <div className="pt-1">
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backgroundColor: "var(--color-paper-warm)",
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
