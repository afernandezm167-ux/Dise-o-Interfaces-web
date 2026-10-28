---
name: diseno-web
description: Proceso completo para diseñar y construir páginas web modernas (landing pages, webs de negocio, portafolios, blogs, páginas de producto) con HTML/CSS/JS o frameworks. Úsala siempre que el usuario pida crear, rediseñar, maquetar o mejorar visualmente una web o página, aunque no diga "diseño" (p. ej. "hazme una web para mi panadería", "mejora cómo se ve mi landing", "quiero un portafolio").
---

# Diseño web

Objetivo: entregar una web que se vea profesional, funcione en móvil y escritorio, sea accesible y cargue rápido. Sigue estos pasos en orden; cada uno evita un fallo típico de webs hechas con prisa.

## 1. Brief (rápido)
Deduce del mensaje: propósito, público, acción principal (comprar, contactar, reservar…), tono y contenido disponible. Pregunta solo lo que cambie el resultado; si falta contenido, usa textos realistas del negocio (nunca lorem ipsum) y márcalos para reemplazar.

## 2. Estructura
Define las secciones antes de escribir CSS. Típico para una landing: cabecera con navegación → hero (titular claro + CTA) → beneficios/servicios → prueba social → CTA final → pie con contacto. Usa HTML semántico (`header`, `nav`, `main`, `section`, `footer`) y una sola `h1`.

## 3. Sistema de diseño con tokens
Todo valor visual sale de variables en `:root`, así el diseño es coherente y fácil de cambiar:
- Color: `--bg`, `--surface`, `--text`, `--text-muted`, `--accent`, `--accent-contrast`, `--border`.
- Espaciado en escala (4/8/12/16/24/32/48/64/96 px).
- Radios, sombras y anchura máxima de contenido (~1100–1200px; texto ~65ch).
Para elegir paleta y fuentes, carga la skill **paletas-web** si está disponible; si no, elige 1 color de acento + neutros.

## 4. Tipografía
Máximo 2 familias (Google Fonts con `display=swap`). Escala fluida con `clamp()` para titulares, cuerpo 16–18px, interlineado 1.5–1.7. La jerarquía se crea con tamaño y peso, no con muchos colores.

## 5. Responsive mobile-first
Escribe estilos para móvil primero y amplía con `min-width` (≈640, 960px). Usa Grid/Flex con `gap`, imágenes `max-width:100%`, sin scroll horizontal, objetivos táctiles ≥44px y menú usable en móvil.

## 6. Accesibilidad
Contraste AA (4.5:1 texto normal), `alt` en imágenes, `label` en formularios, foco visible (`:focus-visible`), navegación por teclado y `prefers-reduced-motion` para animaciones.

## 7. Modo oscuro
Redefine los tokens en `@media (prefers-color-scheme: dark)`. Revisa que el acento siga teniendo contraste en fondo oscuro.

## 8. Rendimiento
Imágenes con `width/height`, `loading="lazy"` fuera del primer pantallazo y formatos modernos; CSS/JS mínimos, sin librerías pesadas para cosas que CSS resuelve; metaetiquetas `viewport`, `title` y `description`.

## 9. Verificación
Antes de entregar, abre la página (skill **webapp-testing** o el navegador integrado) y comprueba: anchura móvil (375px) y escritorio, modo oscuro, consola sin errores, enlaces y CTA funcionan. Corrige lo que falle y entonces entrega, explicando brevemente qué hiciste y qué contenido debe sustituir el usuario.
