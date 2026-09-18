// ============================================================
// Navbar — Barra de navegación editorial
//
// Movimiento de autor: borde inferior 1px de lado a lado, sticky.
// Sin "rs.dev", sin decoraciones. Nombre completo como ancla.
// Conectada a LanguageContext para switch reactivo ES / EN.
// ============================================================

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentNavLinks = NAV_LINKS[lang];

  return (
    <header
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: scrolled
          ? "rgba(245, 242, 237, 0.96)"
          : "var(--color-paper)",
        borderBottom: "1px solid var(--color-ink)",
        backdropFilter: scrolled ? "blur(4px)" : "none",
        transition: "background-color 0.2s ease",
      }}
    >
      <nav
        className="flex items-center justify-between px-site py-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Switch de Idioma (ES / EN) — Izquierda */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1"
          style={{
            border: "1px solid var(--color-ink)",
            backgroundColor: "var(--color-paper-warm)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
          }}
        >
          <button
            type="button"
            onClick={() => setLang("es")}
            style={{
              color: lang === "es" ? "var(--color-ink)" : "var(--color-ink-muted)",
              fontWeight: lang === "es" ? 700 : 400,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              textDecoration: lang === "es" ? "underline" : "none",
              textUnderlineOffset: "3px",
            }}
          >
            ES
          </button>
          <span style={{ color: "var(--color-ink-muted)", opacity: 0.4 }}>/</span>
          <button
            type="button"
            onClick={() => setLang("en")}
            style={{
              color: lang === "en" ? "var(--color-ink)" : "var(--color-ink-muted)",
              fontWeight: lang === "en" ? 700 : 400,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              textDecoration: lang === "en" ? "underline" : "none",
              textUnderlineOffset: "3px",
            }}
          >
            EN
          </button>
        </div>

        {/* Links de navegación */}
        <ul className="flex items-center gap-8 list-none">
          {currentNavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-label transition-colors duration-150"
                style={{ color: "var(--color-ink-muted)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--color-ink)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--color-ink-muted)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === "#top") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const targetId = link.href === "#trayectoria" ? "#contacto" : link.href;
                    const target = document.querySelector(targetId) as HTMLElement | null;
                    if (target) {
                      const navHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 42;
                      window.scrollTo({ top: target.offsetTop - navHeight, behavior: "smooth" });
                    }
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Espaciador derecho para equilibrar la barra */}
        <div style={{ width: "62px" }} />
      </nav>
    </header>
  );
}
