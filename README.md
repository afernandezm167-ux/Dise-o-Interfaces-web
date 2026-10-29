# TISION® · Ropa urbana esencial

Web de la marca de ropa **TISION**: una tienda con página de inicio, tres colecciones con identidad propia, tienda por categorías, carrito, página de la marca y formulario de contacto.

Proyecto de la asignatura **Diseño de Interfaces Web**, hecho con HTML, CSS y JavaScript sin librerías ni dependencias.

Esta es la **versión minimalista**: mismos colores y contenidos, pero sin sombras ni esquinas redondeadas, con mucho aire, iconos SVG en lugar de texto en menús y botones, fotos reales y efectos visuales.

---

## Cómo verla

No necesita instalación ni servidor: abre `index.html` en el navegador (es la landing; desde ella se entra a la tienda).

> El carrito, los favoritos y la elección de cookies se guardan en el navegador (`localStorage`). Para empezar de cero, borra los datos del sitio desde las herramientas del navegador.

---

## Páginas

| Página | Archivo | Qué tiene |
|---|---|---|
| Landing | `index.html` | Página de entrada: acceso anticipado con formulario de correo, colecciones, ventajas, opiniones y preguntas frecuentes |
| Tienda | `tienda.html` | Categorías, oferta con cuenta atrás, más vendidos, hero, novedades, beneficios y pop-up de cookies |
| Moss Season | `pages/moss-season.html` | Colección 01 · otoño. Bosque, lluvia animada y tonos musgo |
| Static Garden | `pages/static-garden.html` | Colección 02 · jardín botánico. Arcos de invernadero, serif y terracota |
| Field Theory | `pages/field-theory.html` | Colección 03 · verano. Cuaderno de campo con flores silvestres dibujadas |
| Tienda por categoría | `pages/categoria.html?c=…` | Productos de todas las colecciones filtrados por tipo |
| Sobre Tision | `pages/sobre.html` | Historia, valores, cifras y equipo |
| Contacto | `pages/contacto.html` | Formulario de contacto con validación |

**Categorías disponibles** (`?c=`): `sudaderas`, `camisetas`, `pantalones`, `abrigos`, `gorros`, `accesorios`. Sin parámetro se muestra toda la tienda.

---

## Estructura

```
├── index.html               Landing (lo primero que se abre)
├── tienda.html
├── README.md
├── pages/
│   ├── moss-season.html
│   ├── static-garden.html
│   ├── field-theory.html
│   ├── categoria.html
│   ├── sobre.html
│   └── contacto.html
└── assets/
    ├── css/
    │   ├── style.css            Estilos base de toda la web
    │   ├── landing.css          Estilos propios de la landing
    │   └── minimal.css          Capa minimalista (se carga la última)
    ├── js/
    │   ├── productos.js         Catálogo de los 28 productos
    │   ├── script.js            Interacción de la tienda y sus páginas
    │   ├── landing.js           Formularios de la landing
    │   └── efectos.js           Iconos en lugar de texto y efectos visuales
    ├── img-index/               Fotos de la tienda y la landing
    ├── img-moss/                Fotos de Moss Season
    ├── img-garden/              Fotos de Static Garden
    ├── img-field/               Fotos de Field Theory
    └── icons/
        └── favicon.svg
```

---

## Funcionalidades

- **Carrito**: se añade con el botón de cada tarjeta. Panel lateral con total, contador en la cabecera y se mantiene entre páginas.
- **Favoritos**: el corazón de cada producto se queda marcado.
- **Filtros** en cada colección (Todo, Sudaderas, Pantalones…) con contador de prendas.
- **Buscador** en la lupa de la cabecera: busca por nombre, colección, tipo o color y lleva a la colección de cada prenda.
- **Menú «Categorías»** con todas las categorías de la tienda.
- **Pop-up de cookies** al entrar por primera vez, con opción de configurar. Se puede volver a abrir desde «Cookies» en el pie.
- **Cuenta atrás** de la oferta (empieza siempre en 3 días, 0 h, 40 min y 12 s).
- **Formulario de contacto** con mensajes de error por campo y confirmación al enviar.
- **Botón «volver arriba»**.

### Efectos visuales (`efectos.js` + `minimal.css`)

- **Intro** con el logo a pantalla completa (una vez por visita).
- **Transición entre páginas** con la View Transitions API.
- **Títulos** que entran palabra a palabra.
- **Lluvia animada** en Moss Season: CSS en el hero y canvas con salpicaduras y viento que sigue al ratón en «La colección».
- **Tarjetas**: al pasar el ratón la foto sube con una sombra amarilla y se acerca; la foto toma el color del circulito por el que pasas.
- **Partículas** de colores al hacer clic, **iconos** que saltan, barra de **progreso**, cabecera que se esconde al bajar y logo que se desordena.
- **Botón flotante** (abajo a la izquierda) para apagar o encender los efectos. La elección se guarda en el navegador.

---

## Diseño

- **Tipografías**: Inter (texto y títulos) e Instrument Serif en cursiva para las palabras destacadas, desde Google Fonts.
- **Colores**: definidos como variables en `:root` (`--verde`, `--amarillo`, `--crema`…). Cada colección cambia esas variables con una clase en el `<body>` (`tema-moss`, `tema-static`, `tema-field`), así los mismos componentes adoptan la paleta de cada colección.
- **Imágenes**: fotos reales en la tienda y en las tres colecciones.
- **Minimalismo**: `minimal.css` quita sombras y esquinas redondeadas, oculta los textos secundarios y deja líneas finas y mucho aire.
- **Iconos**: SVG de línea fina. `efectos.js` cambia el texto de menús, filtros y botones por iconos; el texto se queda oculto para lectores de pantalla y aparece como aviso al pasar el ratón.
- **Responsive**: adaptado a ordenador, tablet (900 px) y móvil (700 px y 480 px), con menú hamburguesa.

---

## Accesibilidad y buenas prácticas

- Menú, submenús, carrito y buscador manejables con teclado; `Escape` cierra los paneles.
- Foco visible al navegar con el tabulador.
- Textos alternativos en las imágenes y `aria-label` en los iconos.
- Los efectos se pueden apagar con el botón flotante.
- Imágenes que están más abajo en la página con carga diferida (`loading="lazy"`).
- Meta descripción, etiquetas Open Graph y favicon en todas las páginas.

---

## Añadir un producto

1. Guarda su foto en la carpeta de su colección (por ejemplo `assets/img-moss/moss-09.png`).
2. Copia una tarjeta `<article class="producto">` en la página de su colección y cambia imagen, nombre, precio y colores.
3. Añade el producto a `assets/js/productos.js` con el mismo `id` que el nombre de la imagen y su `tipo` (`sudaderas`, `camisetas`, `pantalones`, `abrigos`, `gorros` o `accesorios`).

Con eso ya aparece en el buscador y en su categoría, y se puede añadir al carrito.

> Las rutas de `productos.js` son relativas a la raíz del proyecto; `script.js` las ajusta para que funcionen igual desde `tienda.html` que desde `pages/`.

---

## Notas

- El pago, «Mi cuenta» y el envío del formulario son simulados: no hay servidor.
- El equipo, las cifras y la historia de «Sobre Tision» son contenido de ejemplo.

---

© 2022–2026 TISION®. Todos los derechos reservados.
