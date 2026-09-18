# DESIGNS.md — Sistema de Dirección de Arte y Anti-Patrones Visuales

Este documento define las reglas estrictas de diseño, tipografía, color y composición para cualquier interfaz generada en este repositorio. Su propósito es **erradicar por completo el sesgo visual de la IA** (evitando el cliché del SaaS moderno con gradientes lilas, fuentes corporativas aburridas y tarjetas simétricas).

---

## 1. Arquetipos de Diseño Disponibles
Antes de codear, se debe adoptar **uno** de los siguientes arquetipos según la atmósfera del proyecto (prohibido mezclarlos arbitrariamente):

*   **Editorial / Revista de autor:** Fuerte contraste tipográfico (serifas con carácter en títulos y sans geométrica o monoespaciada para datos), líneas divisorias finas, grillas asimétricas, uso intencional del espacio en blanco y jerarquías claras inspiradas en la imprenta tradicional.
*   **Brutalismo Funcional / Técnico:** Estética cruda, bordes marcados (borders sólidos de 1px o 2px), uso intensivo de tipografías monoespaciadas, paletas limitadas a blanco, negro y un color de acento industrial estridente (ej. amarillo seguridad o verde terminal), sin gradientes suaves ni sombras difusas (`box-shadow` dura o nula).
*   **Neominimalismo Orgánico / Artesanal:** Paletas terrenales y cálidas (fondos arena, grises perla, acentos terracota o musgo), formas sutilmente irregulares, texturas mediante patrones CSS (ruido o tramados muy sutiles), ausencia de esquinas perfectamente redondeadas por defecto (`rounded-lg` prohibido; usar esquinas rectas o redondeos muy específicos).

---

## 2. Reglas Prohibidas (Los "AI-Tells")
Cualquier interfaz que contenga alguno de los siguientes elementos será considerada un fallo de diseño y deberá ser descartada:
1.  **El combo cliché de colores:** Prohibido usar el degradado típico de violeta a cian sobre fondo negro espacial (`bg-slate-950` con `from-purple-500 to-cyan-500`).
2.  **Tarjetas flotantes idénticas (Bento box genérico):** Queda prohibida la típica grilla de 3 columnas con tarjetas de vidrio (`backdrop-blur`, bordes blancos semitransparentes y un iconito SVG flotando arriba a la izquierda). La información debe estructurarse de formas más variadas (listas tipográficas, bloques colindantes, tablas editoriales, desalineaciones controladas).
3.  **Ilustraciones corporativas de 2020:** Cero personajes flotando con extremidades desproporcionadas, plantas abstractas minimalistas o vectores planos de personas sentadas frente a notebooks gigantes.
4.  **Redondeos excesivos genéricos:** Evitar el uso masivo de `rounded-2xl` o `rounded-3xl` en contenedores principales sin una justificación de diseño clara.

---

## 3. Especificaciones Técnicas y de Estilo

### A. Color y Tokens (OKLCH o Hex con propósito)
*   Las paletas deben ser acotadas: un color base de fondo, un color principal de alto contraste para texto, y **un único color de acento** (usado exclusivamente para llamadas a la acción clave, nunca decorativo).
*   No usar grises puros (`#808080`) para textos secundarios; utilizar grises con matices sutiles tintados (cálidos o fríos según el fondo).

### B. Tipografía con Carácter
*   **Títulos:** Prohibido usar *Inter* o *Roboto* para los encabezados principales si se busca identidad. Se deben priorizar fuentes con personalidad (ej. tipografías Serif de alto contraste, grotescas pesadas o monoespaciadas con buen kerning).
*   **Cuerpo:** Usar familias limpias pero con excelente legibilidad en tamaños pequeños, asegurando un *line-height* generoso (mínimo `1.5` o `1.6`) y anchos de línea controlados (`max-w-prose`) para evitar la fatiga visual en bloques de texto.

### C. Composición y Movimientos de Autor (Signatures)
Cada landing debe incorporar al menos **un "movimiento de autor"** que rompa la monotonía:
*   Una barra de navegación flotante con borde inferior continuo que se extienda de lado a lado.
*   Uso de números gigantes tipográficos (estilo editorial) para marcar secciones o pasos en lugar de iconos genéricos.
*   Contenedores con bordes expuestos o marquesinas de texto en movimiento sutil para dar dinamismo sin recurrir a animaciones pesadas de scroll.

---

## 4. Instrucción para la IA al interpretar este archivo
> *"Cuando recibas los requerimientos específicos de la landing en el `agents.md` o en el prompt, lee primero este `DESIGNS.md`. Selecciona el arquetipo que mejor se adapte al rubro, descarta explícitamente los patrones prohibidos y construye la interfaz priorizando la asimetría, la jerarquía tipográfica real y la identidad por sobre la estructura predecible de plantilla."*
