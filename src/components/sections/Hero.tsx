// ============================================================
// Hero — Alto Impacto Tipográfico (v2 — limpio)
//
// Cambios respecto a v1:
//   - Eliminada la barra superior con rol/años/disponibilidad
//   - Rol integrado debajo del nombre con jerarquía tipográfica clara
//   - Columna derecha: solo metadata contextual (sin links duplicados)
//   - Mantiene marquesina negra como cierre de sección
// ============================================================

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="snap-section relative flex flex-col justify-between"
      style={{
        height: "calc(100vh - 65px)",
        minHeight: "calc(100vh - 65px)",
        borderBottom: "1px solid var(--color-ink)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Línea vertical divisora — arranca desde el borde de la navbar */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "-65px",
          bottom: 0,
          right: "500px",
          width: "1px",
          backgroundColor: "var(--color-ink)",
        }}
      />

      {/* ── BLOQUE CENTRAL: grilla asétrica nombre + acerca de mí ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_500px]">

        {/* Columna izquierda: identidad completa */}
        <div
          className="flex flex-col justify-center px-site py-16 lg:py-0"
        >
          {/* Nombre principal — tipografía display al máximo */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(5rem, 14vw, 12rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              marginLeft: "-0.04em", // sangrado hacia el borde
            }}
          >
            Rodrigo
            <br />
            <em style={{ fontStyle: "italic" }}>
              Sisko
              <span style={{ color: "var(--color-accent)" }}>.</span>
            </em>
          </h1>

          {/* Rol — integrado debajo del nombre, jerarquía clara */}
          <div
            style={{
              marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                color: "var(--color-ink-secondary)",
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
              }}
            >
              Desarrollador Full Stack
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                color: "var(--color-ink-muted)",
                letterSpacing: "0.04em",
                lineHeight: 1.5,
              }}
            >
              JavaScript / TypeScript · React · Node.js · SQL
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
            style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}
          >
            <a
              href="#proyectos"
              className="btn-editorial"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#proyectos") as HTMLElement | null;
                if (target) {
                  const navHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 42;
                  window.scrollTo({ top: target.offsetTop - navHeight, behavior: "smooth" });
                }
              }}
            >
              Ver proyectos ↓
            </a>
            <a
              href="#contacto"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contacto") as HTMLElement | null;
                if (target) {
                  const navHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 42;
                  window.scrollTo({ top: target.offsetTop - navHeight, behavior: "smooth" });
                }
              }}
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Columna derecha amplia: Acerca de mí + Ubicación + Idiomas */}
        <aside
          className="flex flex-col justify-center px-site py-16 lg:py-20 gap-6"
          style={{ width: "100%" }}
        >
          {/* Bloque: Acerca de mí */}
          <div className="flex flex-col gap-3">
            <span className="text-label">Acerca de mí</span>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "var(--color-ink-secondary)",
              }}
            >
              Desarrollador Full Stack recibido de la UTN, enfocado en el desarrollo web y backend con JavaScript, TypeScript, React y bases de datos SQL.
              <br />
              <br />
              Orientado a diseñar arquitecturas limpias, estructurar bases de datos relacionales e integrar APIs RESTful para resolver problemas técnicos concretos con código robusto y mantenible.
            </p>
          </div>

          {/* Bloque: Ubicación */}
          <div
            className="flex flex-col gap-3 pt-5"
            style={{ borderTop: "1px solid var(--color-ink)" }}
          >
            <span className="text-label">Ubicación</span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                color: "var(--color-ink)",
              }}
            >
              Bahía Blanca, Argentina
            </span>
          </div>

          {/* Bloque: Idiomas */}
          <div
            className="flex flex-col gap-3 pt-5"
            style={{ borderTop: "1px solid var(--color-ink)" }}
          >
            <span className="text-label">Idiomas</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  Español
                </span>
                <span
                  className="text-label"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Nativo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  Inglés
                </span>
                <span
                  className="text-label"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Básico (estudiando)
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── PIE DEL HERO: "Scroll para explorar" en el flujo flex ── */}
      <div
        className="flex items-center justify-between px-site"
        style={{
          padding: "3px var(--px-site)",
          borderTop: "1px solid var(--color-ink)",
        }}
      >
        <span className="text-label" style={{ color: "var(--color-ink-muted)" }}>
          Scroll para explorar
        </span>
      </div>
    </section>
  );
}
