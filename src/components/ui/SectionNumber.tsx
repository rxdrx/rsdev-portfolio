// ============================================================
// SectionNumber — Movimiento de autor editorial
//
// Número gigante tipográfico como marca de agua de sección.
// Se posiciona absolute dentro de un contenedor relative+overflow-hidden.
// Usage: <div className="relative overflow-hidden"><SectionNumber number="01" /></div>
// ============================================================

interface SectionNumberProps {
  number: string;
  className?: string;
}

export function SectionNumber({ number, className = "" }: SectionNumberProps) {
  return (
    <span
      aria-hidden="true"
      className={`text-section-number select-none pointer-events-none absolute right-0 bottom-0 leading-none translate-y-1/4 ${className}`}
      style={{
        // El número se corta intencionalmente con overflow-hidden del padre
        // Crea tensión visual sin ocupar espacio de layout
        lineHeight: 0.85,
      }}
    >
      {number}
    </span>
  );
}
