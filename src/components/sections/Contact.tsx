// ============================================================
// Contact — Sección de Contacto
//
// Título "Hablemos." reducido a escala proporcional con el resto.
// Banda de disponibilidad full-width.
// Tabla editorial de links: plataforma / URL / meta / flecha.
// Sin SectionNumber. Sin formularios.
// ============================================================

const CONTACT_LINKS = [
  {
    id: "contact-github",
    platform: "GitHub",
    href: "https://github.com/rxdrx",
    display: "github.com/rxdrx",
    meta: "Código y proyectos",
  },
  {
    id: "contact-linkedin",
    platform: "LinkedIn",
    href: "https://linkedin.com/in/rodrigo-sisko",
    display: "linkedin.com/in/rodrigo-sisko",
    meta: "Perfil profesional",
  },
  {
    id: "contact-email",
    platform: "Email",
    href: "mailto:rodrisisko@gmail.com",
    display: "rodrisisko@gmail.com",
    meta: "Respuesta en 24–48 hs",
  },
] as const;

export function Contact() {
  return (
    <div
      id="contacto"
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      {/* Header — título a escala proporcional con las demás secciones */}
      <div
        className="px-site pt-8 pb-6"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        <div className="flex items-end justify-between gap-6">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: "var(--color-ink)",
            }}
          >
            Hablemos
            <span style={{ color: "var(--color-accent)" }}>.</span>
          </h2>
          {/* Disponibilidad inline */}
          <div className="flex items-center gap-2 shrink-0 mb-1">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{
                backgroundColor: "#4ade80",
                boxShadow: "0 0 5px #4ade8066",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
              }}
            >
              Disponible
            </span>
          </div>
        </div>
      </div>

      {/* Banda de disponibilidad — full-width, acento amarillo */}
      <div
        className="flex items-center justify-between px-site py-2.5"
        style={{
          backgroundColor: "var(--color-accent)",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}
        >
          Disponible para proyectos freelance y posiciones remotas
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            color: "var(--color-ink)",
            opacity: 0.65,
          }}
        >
          Septiembre 2026
        </span>
      </div>

      {/* Lista editorial de links */}
      <div className="flex flex-col">
        {CONTACT_LINKS.map((link, index) => (
          <a
            key={link.id}
            id={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group"
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr auto auto",
              alignItems: "center",
              gap: "1rem 2rem",
              padding: "1rem var(--px-site)",
              borderBottom:
                index < CONTACT_LINKS.length - 1
                  ? "1px solid var(--color-ink)"
                  : "none",
              textDecoration: "none",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--color-paper-warm)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            <span className="text-label">{link.platform}</span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {link.display}
            </span>
            <span
              className="hidden md:block text-label"
              style={{ textAlign: "right" }}
            >
              {link.meta}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--color-ink-muted)",
                display: "inline-block",
                transition: "transform 0.15s ease",
              }}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
