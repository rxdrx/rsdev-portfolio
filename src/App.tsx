// ============================================================
// App — Ensamblaje de la SPA
// Soporta la vista principal y la vista secundaria de "Descubrí otros proyectos"
// ============================================================

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { MoreProjectsPage } from "@/components/pages/MoreProjectsPage";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "more-projects">("home");

  // Controller para transiciones de pantalla en la vista principal (~0.85s)
  useEffect(() => {
    if (currentView !== "home") return;

    let isScrolling = false;
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 15 || isScrolling) return;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(".snap-section")
      );
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      const navHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 65;

      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop - navHeight;
        if (currentScroll >= sectionTop - 50) {
          currentIndex = i;
        }
      }

      const targetIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (targetIndex >= 0 && targetIndex < sections.length) {
        e.preventDefault();
        isScrolling = true;
        let targetTop = 0;
        if (targetIndex > 0) {
          targetTop = sections[targetIndex].offsetTop - navHeight;
          if (targetIndex === 3) {
            const contactoTarget = document.querySelector("#contacto") as HTMLElement | null;
            if (contactoTarget) {
              targetTop = contactoTarget.offsetTop - navHeight;
            }
          }
        }

        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrolling = false;
        }, 850);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentView]);

  const handleNavigateToMoreProjects = () => {
    setCurrentView("more-projects");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div
      style={{
        backgroundColor: "var(--color-paper)",
        color: "var(--color-ink)",
        minHeight: "100vh",
      }}
    >
      <Navbar
        isSecondaryPage={currentView === "more-projects"}
        onBackToHome={handleBackToHome}
      />

      <main style={{ paddingTop: "65px" }}>
        {currentView === "home" ? (
          <>
            {/* Pantalla 1: Hero */}
            <Hero />

            {/* Pantalla 2: Proyectos Destacados */}
            <Projects onNavigateToMoreProjects={handleNavigateToMoreProjects} />

            {/* Pantalla 3: Stack Técnico */}
            <Stack />

            {/* Pantalla 4: Formación Académica + Contacto + Footer */}
            <section
              id="trayectoria"
              className="snap-section flex flex-col justify-start"
              style={{
                minHeight: "auto",
              }}
            >
              <Experience />
              <Contact />

              {/* Footer */}
              <footer
                style={{
                  marginTop: 0,
                  borderTop: "1px solid var(--color-ink)",
                  backgroundColor: "var(--color-ink)",
                  padding: "1rem var(--px-site)",
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
          </>
        ) : (
          /* Vista secundaria: Descubrí otros proyectos */
          <MoreProjectsPage />
        )}
      </main>
    </div>
  );
}

export default App;
