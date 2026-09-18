import { ProjectCard } from "@/components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/types";

// Placeholders de demostración cuando FEATURED_PROJECTS no tiene 5 elementos
const DEFAULT_PLACEHOLDERS: Project[] = [
  {
    id: "p1",
    title: "Sistema de Gestión Integrado",
    description:
      "Plataforma web con arquitectura en capas, autenticación JWT, gestión de roles y reportes dinámicos.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    year: "2025",
    inProduction: true,
  },
  {
    id: "p2",
    title: "API RESTful & Backend Core",
    description:
      "Servicio backend desacoplado con ORM, validación estricta de esquemas, consultas SQL optimizadas y OpenAPI.",
    stack: ["Node.js", "Express", "MySQL", "API RESTful"],
    year: "2025",
    inProduction: true,
  },
  {
    id: "p3",
    title: "Dashboard & Analítica Técnica",
    description:
      "Panel de control interactivo con métricas en tiempo real, visualización de datos y componentes modulares.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    year: "2024",
    inProduction: false,
  },
  {
    id: "p4",
    title: "E-commerce & Checkout Seguro",
    description:
      "Aplicación de comercio electrónico con catálogo dinámico, carrito de compras persistente e integración de pagos.",
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    inProduction: false,
  },
  {
    id: "p5",
    title: "Aplicación Móvil Cross-Platform",
    description:
      "App móvil para gestión de tareas y flujos de trabajo con sincronización de datos y soporte offline.",
    stack: ["React Native", "TypeScript", "API REST"],
    year: "2024",
    inProduction: false,
  },
];

export function Projects() {
  // Población de 5 proyectos (reales o placeholders) + 1 tarjeta "Ver más"
  const displayProjects: Project[] = Array.from({ length: 5 }, (_, i) => {
    return FEATURED_PROJECTS[i] || DEFAULT_PLACEHOLDERS[i];
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
              Proyectos Destacados
            </h2>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
              fontStyle: "italic",
              color: "var(--color-ink-muted)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              marginBottom: "0.75rem",
            }}
          >
            6 selecciones
          </span>
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

// ── Tarjeta especial "Ver más" (abaja a la derecha, slot 6) ────────
function MoreProjectsCard() {
  return (
    <article
      className="border-editorial flex flex-col justify-between p-6 h-full transition-all duration-150"
      style={{
        backgroundColor: "var(--color-accent)",
        boxShadow: "var(--shadow-hard-sm)",
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
      <div className="flex flex-col gap-4">
        <span className="text-label" style={{ color: "var(--color-ink)" }}>
          Repositorio &amp; Código
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
          }}
        >
          Explorá más proyectos
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            lineHeight: 1.6,
            color: "var(--color-ink)",
            opacity: 0.85,
          }}
        >
          Accedé al catálogo completo de repositorios, herramientas experimentales y prototipos en GitHub.
        </p>
      </div>

      <div className="pt-6 mt-auto">
        <a
          href="https://github.com/rxdrx?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-editorial w-full text-center block"
          style={{
            backgroundColor: "var(--color-ink)",
            color: "var(--color-paper)",
            borderColor: "var(--color-ink)",
          }}
        >
          Ver más ↗
        </a>
      </div>
    </article>
  );
}
