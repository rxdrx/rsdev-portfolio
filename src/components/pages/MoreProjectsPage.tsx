// ============================================================
// MoreProjectsPage — Vista secundaria: "Descubrí otros proyectos"
// ============================================================

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MORE_PROJECTS_PAGE_TEXT } from "@/lib/data";

export function MoreProjectsPage() {
  const { lang } = useLanguage();
  const t = MORE_PROJECTS_PAGE_TEXT[lang];
  const [page, setPage] = useState<number>(1);

  // 6 tarjetas por página
  const cards = Array.from({ length: 6 });

  return (
    <section
      className="snap-section flex flex-col justify-between"
      style={{
        minHeight: "calc(100vh - 65px)",
      }}
    >
      {/* Header achicado y centrado en la fila */}
      <div
        className="px-site flex items-center justify-start"
        style={{
          height: "52px",
          minHeight: "52px",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: 0,
            padding: 0,
          }}
        >
          {t.moreProjectsTitle}
        </h2>
      </div>

      {/* Grilla de tarjetas + Paginación pegada a la derecha */}
      <div
        className="px-site flex-1 flex flex-col justify-center items-center my-auto pt-2 pb-4 w-full"
        style={{ marginTop: "-1.5rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((_, index) => (
            <article
              key={index}
              className="border-editorial flex flex-col justify-between py-8 px-8 transition-all duration-150"
              style={{
                minHeight: "260px",
                backgroundColor: "var(--color-paper-warm)",
                boxShadow: "var(--shadow-hard-sm)",
              }}
            >
              {/* Header de la tarjeta */}
              <div className="flex items-center justify-between px-2">
                <span className="text-label" style={{ color: "var(--color-ink)" }}>
                  {t.page} {page} — 0{index + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    backgroundColor: "var(--color-paper)",
                    border: "1px solid var(--color-ink)",
                    padding: "0.2em 0.6em",
                    color: "var(--color-ink-secondary)",
                  }}
                >
                  {t.comingSoon}
                </span>
              </div>

              {/* Centro: Próximamente */}
              <div className="flex flex-col items-center justify-center my-auto py-6">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--color-ink-secondary)",
                    textAlign: "center",
                  }}
                >
                  {t.comingSoon}
                </h3>
              </div>

              {/* Footer de la tarjeta */}
              <div
                className="flex justify-center py-3 px-2 mt-auto"
                style={{ borderTop: "1px solid var(--color-ink)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-muted)",
                  }}
                >
                  ---
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Paginación pegada cerca de las tarjetas y ubicada a la derecha */}
        <div className="flex items-center justify-end gap-3 pt-3 w-full">
          {[1, 2, 3].map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => {
                setPage(pageNum);
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 700,
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--color-ink)",
                backgroundColor:
                  page === pageNum ? "var(--color-ink)" : "var(--color-paper-warm)",
                color: page === pageNum ? "var(--color-paper)" : "var(--color-ink)",
                cursor: "pointer",
                boxShadow: page === pageNum ? "none" : "var(--shadow-hard-sm)",
                transition: "all 0.15s ease",
              }}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </div>

      {/* Footer al pie de la página secundaria */}
      <footer
        style={{
          marginTop: "0.5rem",
          borderTop: "1px solid var(--color-ink)",
          backgroundColor: "var(--color-ink)",
          padding: "0.75rem var(--px-site)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
            color: "var(--color-paper)",
            opacity: 0.5,
          }}
        >
          © 2026 Rodrigo Sisko
        </span>
      </footer>
    </section>
  );
}
