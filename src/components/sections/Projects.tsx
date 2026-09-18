import { ProjectCard } from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS, DEFAULT_PLACEHOLDERS, PROJECTS_TEXT } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/lib/types";

export function Projects() {
  const { lang } = useLanguage();
  const t = PROJECTS_TEXT[lang];
  const featuredProjects = FEATURED_PROJECTS[lang];
  const defaultPlaceholders = DEFAULT_PLACEHOLDERS[lang];

  // Población de 5 proyectos (reales o placeholders) + 1 tarjeta "Ver más"
  const displayProjects: Project[] = Array.from({ length: 5 }, (_, i) => {
    return featuredProjects[i] || defaultPlaceholders[i];
  });

  return (
    <section
      id="proyectos"
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
                fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                paddingBottom: "0.5rem",
              }}
            >
              {t.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Grilla principal 3x2 — 6 cards visibles (3 arriba, 3 abajo) */}
      <div className="px-site py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Tarjeta 6 (Abajo a la derecha): Ver más */}
          <MoreProjectsCard />
        </div>
      </div>
    </section>
  );
}

// ── Tarjeta especial "Ver más" (abajo a la derecha, slot 6) ────────
function MoreProjectsCard() {
  const { lang } = useLanguage();
  const t = PROJECTS_TEXT[lang];

  return (
    <article
      className="border-editorial flex flex-col justify-between py-8 px-8 h-full transition-all duration-150 cursor-pointer"
      style={{
        minHeight: "260px",
        backgroundColor: "var(--color-accent)",
        boxShadow: "var(--shadow-hard-sm)",
      }}
      onClick={() => {
        window.open("https://github.com/rxdrx?tab=repositories", "_blank", "noopener,noreferrer");
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hard)";
        (e.currentTarget as HTMLElement).style.transform = "translate(-1px, -1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hard-sm)";
        (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
      }}
    >
      <div className="flex flex-col gap-4 px-2 my-auto">
        <span className="text-label text-center" style={{ color: "var(--color-ink)" }}>
          {t.moreLabel}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            textAlign: "center",
          }}
        >
          {t.moreTitle}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            lineHeight: 1.6,
            color: "var(--color-ink)",
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          {t.moreDesc}
        </p>
      </div>
    </article>
  );
}
