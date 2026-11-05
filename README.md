# TISION® · Ropa urbana esencial

Web de la marca de ropa **TISION** en versión minimalista: landing, tienda, tres colecciones, ficha de cada producto, carrito, página de la marca y contacto.

Proyecto de la asignatura **Diseño de Interfaces Web**, hecho con HTML, CSS y JavaScript sin librerías ni dependencias.

**La idea:** solo lo indispensable. Pocas secciones, mucho aire, iconos en lugar de texto (el nombre aparece al pasar el ratón) y efectos visuales que se pueden apagar.

---

## Cómo verla

No necesita instalación ni servidor: abre `index.html` en el navegador. Es la landing y desde ella se entra a la tienda.

> El carrito, los favoritos, las cookies y el interruptor de efectos se guardan en el navegador (`localStorage`). Para empezar de cero, borra los datos del sitio.

---

## Páginas

| Página | Archivo | Qué tiene |
|---|---|---|
| Landing | `index.html` | Acceso anticipado con formulario de correo, las tres colecciones y las ventajas en iconos |
| Tienda | `tienda.html` | Hero, categorías en iconos, novedades y beneficios en iconos |
| Moss Season | `pages/moss-season.html` | Colección 01 · otoño. Bosque y lluvia animada |
| Static Garden | `pages/static-garden.html` | Colección 02 · jardín botánico. Arcos de invernadero |
| Field Theory | `pages/field-theory.html` | Colección 03 · verano. Cuaderno de campo con flores dibujadas |
| Categoría | `pages/categoria.html?c=…` | Productos de todas las colecciones filtrados por tipo |
| Producto | `pages/producto.html?id=…` | Ficha de cada prenda: colores, tallas, guía de tallas, composición y cuidados |
| Sobre Tision | `pages/sobre.html` | Valores en iconos y equipo |
| Contacto | `pages/contacto.html` | Formulario con validación |

**Categorías** (`?c=`): `sudaderas`, `camisetas`, `pantalones`, `abrigos`, `gorros`, `accesorios`. Sin parámetro se ve toda la tienda.

**Productos** (`?id=`): el nombre de su foto, por ejemplo `essentials-01`, `moss-03` o `field-06`.

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
│   ├── producto.html
│   ├── sobre.html
│   └── contacto.html
└── assets/
    ├── css/
    │   ├── style.css        Estilos base de toda la web
    │   ├── landing.css      Estilos de la landing
    │   ├── minimal.css      Sin sombras ni esquinas, líneas finas y efectos
    │   └── zen.css          Capa minimalista final (se carga la última)
    ├── js/
    │   ├── productos.js     Catálogo: 28 productos con colores, tallas y fichas
    │   ├── script.js        Tienda: carrito, favoritos, filtros, buscador y fichas
    │   ├── landing.js       Formularios de la landing
    │   ├── efectos.js       Iconos en lugar de texto y efectos visuales
    │   └── zen.js           Más iconos, etiquetas al pasar el ratón y efectos nuevos
    ├── img/
    │   ├── essentials/      Tienda y landing (essentials-01 … 04, essentials-hero)
    │   ├── moss/            Moss Season (moss-01 … 08, moss-hero, moss-lluvia)
    │   ├── garden/          Static Garden (garden-01 … 08, garden-arco-1 … 3)
    │   └── field/           Field Theory (field-01 … 08, field-hero)
    └── icons/
        └── favicon.svg
```

Cada foto de producto se llama como su `id`. Las fotos de los otros colores añaden el color al final: `moss-01-musgo.jpg`, `field-06-avena.jpg`…

---

## Funcionalidades

- **Ficha de producto**: se abre al pulsar la foto o el nombre de cualquier prenda. Colores, tallas (XS–XXL, 36–46 en pantalones o talla única), cantidad, guía de tallas con medidas, composición, cuidados y envíos.
- **Fotos por color**: al pulsar un color, en la tarjeta o en la ficha, la foto cambia a la prenda en ese color y es el color que se añade al carrito.
- **Carrito**: panel lateral con foto del color elegido, talla, cantidad y total. Se mantiene entre páginas.
- **Favoritos**: el corazón de cada prenda se queda marcado.
- **Filtros** en cada colección y **buscador** en la lupa (por nombre, colección, tipo o color).
- **Pop-up de cookies** la primera vez, con opción de configurar.
- **Formulario de contacto** con mensajes de error por campo.

### Efectos visuales

- **Intro** con el logo a pantalla completa (una vez por visita) y **transición entre páginas**.
- **Títulos** que entran palabra a palabra y **fotos** que se descubren de arriba abajo al aparecer.
- **Cursor propio**: un punto y un aro que se agranda sobre lo que se puede pulsar (solo con ratón).
- **Iconos con imán** que siguen un poco al ratón.
- **Lluvia animada** en Moss Season, con viento que sigue al ratón.
- **Partículas** de colores al hacer clic, barra de **progreso**, cabecera que se esconde al bajar y logo que se desordena.
- **Botón flotante** ✦ (abajo a la izquierda) para apagar o encender los efectos.

---

## Diseño

- **Minimalismo**: solo las secciones imprescindibles, sin sombras ni esquinas redondeadas, títulos finos y mucho aire. Los fondos de color se reservan para los heroes (verde claro) y para el pie y las ventajas (verde oscuro). Antes del pie, una línea fina con el botón «Más información» (icono de sobre) que lleva al formulario de contacto.
- **Iconos**: SVG de línea fina en el menú, las categorías, los botones, los filtros, el pie y los formularios. El texto sigue ahí para lectores de pantalla y como etiqueta al pasar el ratón.
- **Tipografías**: Inter e Instrument Serif (cursiva para las palabras destacadas), desde Google Fonts.
- **Colores**: variables en `:root` (`--verde`, `--amarillo`, `--crema`…). Cada colección las cambia con una clase en el `<body>` (`tema-moss`, `tema-static`, `tema-field`).
- **Responsive**: ordenador, tablet (900 px) y móvil (700 y 480 px), con menú hamburguesa.

---

## Accesibilidad

- Menú, submenús, carrito, buscador y fichas manejables con teclado; `Escape` cierra los paneles.
- Foco visible y etiquetas de los iconos también al llegar con el tabulador.
- Textos alternativos en las imágenes y `aria-label` en los iconos.
- Los efectos se pueden apagar con el botón flotante.

---

## Añadir un producto

1. Guarda su foto en la carpeta de su colección con el siguiente número (por ejemplo `assets/img/moss/moss-09.png`) y las de sus otros colores como `moss-09-color.jpg`.
2. Copia una tarjeta `<article class="producto">` en la página de su colección y cambia imagen, nombre, precio y colores.
3. Añádelo a `assets/js/productos.js` con el mismo `id` que la foto, su `tipo` y sus colores (con `img` en los que tengan foto propia). Si quieres, añade su descripción en `DETALLES`.

Con eso ya tiene ficha, aparece en el buscador y en su categoría, y se puede añadir al carrito.

---

## Notas

- El pago, «Mi cuenta» y el envío del formulario son simulados: no hay servidor.

---

© 2022–2026 TISION®. Todos los derechos reservados.
