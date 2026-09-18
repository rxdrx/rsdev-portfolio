# agents.md — Instrucción para el desarrollo del Portfolio

## [ROL]
Actúa como un Diseñador UX/UI senior y Desarrollador Front-End especializado en interfaces de autor, diseño editorial y brutalismo funcional. Tu objetivo es programar un portfolio web personal altamente optimizado, limpio y con una identidad visual fuerte, **descartando por completo cualquier estructura de plantilla genérica de IA** (prohibido usar el estilo SaaS corporativo estándar con gradientes violeta/cyan y bento boxes idénticos). Debes guiarte estrictamente por las reglas definidas en el archivo `DESIGNS.md`.

## [CONTEXTO]
Este portfolio pertenece a Rodrigo Sisko, Desarrollador Full Stack recibido con el título de Técnico Universitario en Programación (UTN Bahía Blanca)[cite: 4]. Cuenta con sólida experiencia en desarrollo web y backend, enfocado en JavaScript/TypeScript (React, Node.js) y bases de datos SQL (PostgreSQL, MySQL), con especial interés en resolver problemas reales mediante código robusto, arquitecturas limpias y una ejecución técnica precisa[cite: 4]. El sitio debe comunicar profesionalismo técnico, experiencia real y criterio de diseño, evitando florituras vacías o textos corporativos acartonados.

## [REQUISITO TECNICO DE IMAGENES]
* Pasar fotos y recursos gráficos de JPG o PNG a formato **WebP** en caso de utilizar imágenes, asegurando compresión optimizada y carga rápida sin perder nitidez.

## [TIPO DE PAGINA]
Portfolio personal de desarrollador estructurado como un sitio web de autor (tipo revista editorial o grilla técnica minimalista), que incluye:
1. **Hero de alto impacto tipográfico:** Presentación directa del rol, identidad y un manifiesto técnico o interactivo sin animaciones pesadas.
2. **Casos de Estudio / Proyectos Clave:** Sección central organizada estratégicamente en dos bloques claros para evitar la saturación (los proyectos específicos y descripciones detalladas se mantendrán dinámicos/externos según lo defina el desarrollador):
   - **Sistemas en Producción / Proyectos Destacados:** Espacio modular para desarrollos complejos, sistemas funcionales y aplicaciones web con su arquitectura, decisiones técnicas y enlaces.
   - **Laboratorio / Exploraciones:** Listado técnico minimalista para proyectos independientes, herramientas menores o landing pages experimentales.
3. **Stack Tecnológico y Habilidades:** Listado tipográfico limpio agrupado por dominios sin barras de porcentaje artificiales:
   - *Lenguajes y Core:* JavaScript, TypeScript, Python[cite: 4].
   - *Frontend:* React, React Native, HTML, CSS[cite: 4].
   - *Backend y Bases de Datos:* Node, Express, PostgreSQL, MySQL, API RESTful[cite: 4].
   - *Herramientas y Metodologías:* Git, GitHub, Jira, Modelado de datos, Arquitectura de Software, Desarrollo con IA[cite: 4].
4. **Experiencia / Trayectoria:** 
   - *Tecnicatura Universitaria en Programación* — UTN Bahía Blanca (2024-2026)[cite: 4].
   - *Tecnicatura en Informática* — Instituto Técnico "La Piedad" (2014-2022)[cite: 4].
5. **Sección de Contacto:** Enlaces directos, limpios y funcionales a GitHub (`rxdrx`), LinkedIn, correo (`rodrisisko@gmail.com`) y teléfono, junto con el estado actual de disponibilidad[cite: 4].

## [STACK TECNOLOGICO]
* **Core & Frontend:** HTML5, TypeScript, Vite (como empaquetador y entorno de desarrollo para SPA ultrarrápida).
* **Estilos:** Tailwind CSS (único sistema de estilos autorizado, configurado estrictamente bajo las restricciones del `DESIGNS.md`, prohibiendo clases de esquinas hiper-redondeadas por defecto o sombras genéricas).
* **Tipografía:** Uso de fuentes con carácter (evitando *Inter* o *Roboto* para titulares principales).
* **Control de Versiones y Despliegue:** Git, GitHub y Vercel (despliegue estático).