# Prompts para generar las imágenes de TISION

Prompts para crear con **Nano Banana** (Gemini) y con **ChatGPT** (generador de imágenes):

1. Las fotos de **Field Theory**, la única colección que todavía usa ilustraciones SVG. La tienda, Moss Season y Static Garden ya tienen sus fotos.
2. **[Las fotos de los otros colores de cada prenda](#fotos-de-los-otros-colores)**: cada producto se vende en 2 o 3 colores, pero solo tiene foto de uno.

Los prompts están en **inglés** porque los dos modelos dan mejores resultados así. Los títulos y las notas están en español.

---

## Cómo usarlos

1. **Empieza por el estilo base** de cada modelo. Pégalo una vez al principio del chat y luego ve pidiendo las imágenes de una en una. Así todas salen con la misma luz y el mismo tono.
2. **Fija el formato** que indica cada imagen:
   - **Nano Banana**: elige la proporción (1:1, 4:5, 16:9…) en el selector o escríbela en el prompt.
   - **ChatGPT**: solo admite tres tamaños. Usa el que se indica:
     - cuadrado: `1024×1024`
     - horizontal: `1536×1024`
     - vertical: `1024×1536`
3. **Para que una colección salga uniforme**, genera primero el hero y luego súbelo como referencia al pedir el resto: *"same lighting, colors and mood as the reference image"*. Nano Banana es especialmente bueno manteniendo la coherencia con una imagen de referencia.
4. **Guarda cada imagen con el nombre que se indica** (`field-01.png`, `field-hero.png`…) en una carpeta `assets/img-field/`, igual que se hizo con `img-moss` e `img-garden`. Después hay que cambiar las rutas `.svg` por las nuevas en el HTML y en `assets/js/productos.js`.

> Las prendas no deben llevar marcas reales. Solo el logo **TISION** cuando se indica. Si el texto sale mal escrito, pide: *"fix the text so it reads exactly TISION"*.

---

## Paletas de color

| Uso | Colores |
|---|---|
| **General (tienda y landing)** | verde bosque `#1F4D36` · amarillo `#F6DC5C` · crema `#F5F3EA` · verde claro `#DDE5C4` |
| **Field Theory** (prado, verano) | campo `#4F5B3A` · avena `#E3D9BC` · heno `#C9A24B` · amapola `#B4574A` · brezo `#8F7BA8` · aciano `#5E7393` · manzanilla `#F1EBD6` · rastrojo `#A39A74` |

---

## Estilo base

### Nano Banana

```text
You are the photographer for TISION, a minimalist, sustainable streetwear brand.
Every image in this chat must share one look: clean editorial fashion photography,
soft natural daylight, gentle shadows, muted and earthy colors, lots of negative space,
simple compositions, matte organic cotton textures, no clutter.
Never add real brand logos or random text. Only print the word "TISION" when I ask for it.
Wait for my image requests.
```

### ChatGPT

```text
I'm going to ask you for a series of images for TISION, a minimalist sustainable
streetwear brand. Keep this style in every image:
- Style: clean editorial fashion photography, realistic, not illustrated.
- Light: soft natural daylight, gentle shadows.
- Color: muted, earthy palette; I'll give hex codes for each image.
- Composition: simple, centered or rule-of-thirds, generous negative space.
- Materials: matte organic cotton, linen and knit textures.
- Avoid: real brand logos, watermarks, random text, extra people, busy backgrounds.
- Only print the word "TISION" when I explicitly ask for it, spelled exactly like that.
Confirm and wait for the first request.
```

### Estilo común de las fotos de producto

Todas las fichas de producto (`field-01` a `field-08`) siguen este formato. Ya va incluido en cada prompt:

> Prenda sola, sin modelo, con efecto "ghost mannequin" (o flat lay en los accesorios), centrada, sobre fondo liso del color de la colección, con una sombra suave debajo. Formato cuadrado.

---

## Field Theory (`assets/img/colecciones/field-*`)

**Ambiente:** prado al final del verano, hierba alta, amapolas, acianos y manzanilla. Estilo cuaderno de campo y luz dorada. Fondo de producto: avena `#E3D9BC`.

### field-hero.svg · Modelo en un prado con flores silvestres · 4:5 (ChatGPT 1024×1536)

**Nano Banana**
```text
Vertical 4:5 photo of a model standing in tall golden grass dotted with red poppies, blue
cornflowers and white chamomile, wearing an olive (#4F5B3A) hoodie, a large low sun behind,
warm hazy late-summer light, soft film grain, like a page from a field notebook.
```

**ChatGPT**
```text
Create a 1024x1536 image.
Subject: a model standing in tall golden grass, wearing an olive (#4F5B3A) hoodie.
Setting: late-summer meadow with red poppies, blue cornflowers and white chamomile.
Light: large low sun behind, warm hazy golden hour. Colors: oat (#E3D9BC), hay (#C9A24B),
poppy (#B4574A), cornflower (#5E7393). Soft film grain. No text.
```

### field-look-1.svg · Persona caminando entre hierba alta · 4:5

**Nano Banana**
```text
Vertical 4:5 photo from behind of a person walking through waist-high dry grass, hands brushing
the stalks, oat-colored (#E3D9BC) linen shirt, golden backlight, soft haze.
```

**ChatGPT**
```text
Create a 1024x1536 image. Person seen from behind walking through waist-high dry grass, hands
brushing the stalks, oat (#E3D9BC) linen shirt, golden backlight, soft haze. No text.
```

### field-look-2.svg · Modelo entre amapolas · 4:5

**Nano Banana**
```text
Vertical 4:5 photo of a model sitting among red poppies (#B4574A) in a green meadow, wearing a
cream t-shirt and poppy-red shorts, relaxed pose, soft afternoon light, muted colors.
```

**ChatGPT**
```text
Create a 1024x1536 image. Model sitting among red poppies (#B4574A) in a green meadow, cream
t-shirt and poppy red shorts, relaxed pose, soft afternoon light, muted colors. No text.
```

### field-look-3.svg · Manos con un ramo de flores silvestres · 4:5

**Nano Banana**
```text
Vertical 4:5 close-up of two hands holding a small bouquet of wildflowers (poppies, cornflowers,
chamomile, wheat), olive (#4F5B3A) sleeve cuffs visible, soft warm light, oat background.
```

**ChatGPT**
```text
Create a 1024x1536 image. Close-up of two hands holding a small wildflower bouquet (poppies,
cornflowers, chamomile, wheat stalks), olive (#4F5B3A) sleeve cuffs visible, warm soft light,
blurred oat (#E3D9BC) background. No text.
```

### Productos Field Theory · 1:1 (ChatGPT 1024×1024)

Plantilla: *ghost mannequin / flat lay, centrado, fondo liso avena `#E3D9BC`, sombra suave.*

| Archivo | Prenda | Nano Banana | ChatGPT |
|---|---|---|---|
| `field-01` | Hoodie Meadow | `Square product photo of an olive (#4F5B3A) oversized hoodie, ghost mannequin, on a plain oat (#E3D9BC) background, soft shadow.` | `Create a 1024x1024 image. Olive (#4F5B3A) oversized hoodie, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-02` | Camiseta Chamomile | `Square product photo of a chamomile-white (#F1EBD6) t-shirt with a tiny embroidered yellow flower on the chest, ghost mannequin, on a plain oat (#E3D9BC) background.` | `Create a 1024x1024 image. Off-white (#F1EBD6) t-shirt with a tiny embroidered chamomile flower on the chest, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-03` | Cargo Stubble | `Square product photo of stubble-colored (#A39A74) cargo trousers, ghost mannequin, on a plain oat (#E3D9BC) background, soft shadow.` | `Create a 1024x1024 image. Stubble beige (#A39A74) cargo trousers, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-04` | Gorra Hay | `Square product photo of a hay-yellow (#C9A24B) baseball cap with a small blank cream patch, three-quarter view, on a plain oat (#E3D9BC) background.` | `Create a 1024x1024 image. Hay yellow (#C9A24B) baseball cap with a small blank cream patch, three-quarter view, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-05` | Camisa Wildflower | `Square product photo of a cream short-sleeve camp-collar shirt with a sparse print of small poppies and cornflowers, ghost mannequin, on a plain oat (#E3D9BC) background.` | `Create a 1024x1024 image. Cream camp-collar short-sleeve shirt with a sparse print of small red poppies and blue cornflowers, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-06` | Short Poppy | `Square product photo of poppy-red (#B4574A) cotton shorts with drawstring, ghost mannequin, on a plain oat (#E3D9BC) background, soft shadow.` | `Create a 1024x1024 image. Poppy red (#B4574A) cotton drawstring shorts, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-07` | Crewneck Cornflower | `Square product photo of a cornflower-blue (#5E7393) crewneck sweatshirt, ghost mannequin, on a plain oat (#E3D9BC) background, soft shadow.` | `Create a 1024x1024 image. Cornflower blue (#5E7393) crewneck sweatshirt, ghost mannequin, centered on a plain oat (#E3D9BC) background, soft shadow. No text.` |
| `field-08` | Bandana Herbario | `Square flat lay photo of a poppy-red (#B4574A) cotton bandana with a small scattered white flower and leaf print, laid as a diamond, on a plain oat (#E3D9BC) background.` | `Create a 1024x1024 image. Flat lay of a poppy red (#B4574A) cotton bandana with a small scattered white flower and leaf print, laid out as a diamond, centered on a plain oat (#E3D9BC) background. No text.` |

---

## Fotos de los otros colores

Cada prenda tiene foto de un solo color. Aquí están los prompts de **Nano Banana** para sacar **la misma foto en los demás colores** que se venden (los que salen en `assets/js/productos.js` y en el selector de color de la ficha de producto). Se usan como referencia las fotos que ya hay en el proyecto, así que no hace falta generar nada desde cero.

### Cómo hacerlo en Nano Banana

1. Abre un chat nuevo y pega primero el **[estilo base de Nano Banana](#nano-banana)** de arriba.
2. **Adjunta la foto original** que indica cada tabla (por ejemplo `assets/img-moss/moss-01.png`) y pega el prompt de su fila. Nano Banana edita esa misma foto: mantiene la prenda, la luz, la sombra y el fondo y solo cambia el color.
3. Un color por mensaje. Si quieres el segundo color de la misma prenda, vuelve a adjuntar **la foto original**, no la que acabas de generar, para que no se vaya degradando.
4. Proporción **1:1**, igual que la original.
5. **Guarda cada imagen en la misma carpeta que la original** con el nombre `id-color.png` (color en minúsculas y sin tildes). Ejemplo: `assets/img-moss/moss-01-musgo.png`.

> Si cambia algo más que el color, responde en el mismo chat: *"only the color changes, everything else must stay identical to the reference image"*.

### ⚠️ Fotos que no coinciden con el primer color

En la ficha de producto, el primer color de la lista sale marcado por defecto. En estas tres prendas la foto actual es de otro color:

| Prenda | Foto actual | Primer color de la lista |
|---|---|---|
| Camiseta Logo (`prod-tshirt`) | Amarillo | Blanco |
| Pantalón Cargo Urban (`prop-pants`) | Verde oscuro (se acerca a Oliva) | Caqui |
| Gorra Clásica (`prop-cup`) | Beige | Verde |

Se puede arreglar poniendo primero en `productos.js` el color de la foto, o generando también la foto del primer color.

### Essentials (`assets/img-index/`)

| Archivo nuevo | Prenda · color | Prompt Nano Banana (adjunta `assets/img-index/<id>.png`) |
|---|---|---|
| `pro-sudadera-beige.png` | Sudadera Oversize · Beige `#E6DCC8` | `Edit the attached photo. Change only the color of the green fleece half-zip sweatshirt to warm beige (#E6DCC8), keeping the small chest logo in dark green. Keep the same model, face, hair, pose, trousers, lighting, framing and grey background. Photorealistic, no new text.` |
| `pro-sudadera-negro.png` | Sudadera Oversize · Negro `#222222` | `Edit the attached photo. Change only the color of the green fleece half-zip sweatshirt to near-black (#222222), keeping the small chest logo in cream. Keep the same model, face, hair, pose, trousers, lighting, framing and grey background. Photorealistic, no new text.` |
| `prod-tshirt-blanco.png` | Camiseta Logo · Blanco `#FFFFFF` | `Edit the attached photo. Change only the pale yellow t-shirt to clean white (#FFFFFF), keeping the small green logo on the chest. Keep the same model, cap, pose, trousers, lighting, framing and grey background. Photorealistic, no new text.` |
| `prod-tshirt-verde.png` | Camiseta Logo · Verde `#1F4D36` | `Edit the attached photo. Change only the pale yellow t-shirt to forest green (#1F4D36), with the small chest logo in cream. Keep the same model, cap, pose, trousers, lighting, framing and grey background. Photorealistic, no new text.` |
| `prop-pants-caqui.png` | Pantalón Cargo Urban · Caqui `#C8A87A` | `Edit the attached photo. Change only the color of the dark green cargo trousers to khaki (#C8A87A). Keep the same shape, pockets, drawstrings, folds, fabric texture, lighting, shadow and grey background. Photorealistic, no new text.` |
| `prop-pants-negro.png` | Pantalón Cargo Urban · Negro `#222222` | `Edit the attached photo. Change only the color of the dark green cargo trousers to near-black (#222222). Keep the same shape, pockets, drawstrings, folds, fabric texture, lighting, shadow and grey background. Photorealistic, no new text.` |
| `prop-cup-verde.png` | Gorra Clásica · Verde `#1F4D36` | `Edit the attached photo. Change only the beige cap to forest green (#1F4D36), with the embroidered logo in cream, spelled exactly "tision". Keep the same angle, shape, stitching, lighting, shadow and grey background. Photorealistic.` |
| `prop-cup-negro.png` | Gorra Clásica · Negro `#222222` | `Edit the attached photo. Change only the beige cap to near-black (#222222), with the embroidered logo in cream, spelled exactly "tision". Keep the same angle, shape, stitching, lighting, shadow and grey background. Photorealistic.` |

### Moss Season (`assets/img-moss/`)

| Archivo nuevo | Prenda · color | Prompt Nano Banana (adjunta `assets/img-moss/<id>.png`) |
|---|---|---|
| `moss-01-musgo.png` | Hoodie Moss Oversize · Musgo `#6F8F4E` | `Edit the attached photo. Change only the hoodie color to moss green (#6F8F4E). Keep the same ghost-mannequin shape, hood, kangaroo pocket, folds, cotton texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-01-corteza.png` | Hoodie Moss Oversize · Corteza `#4B3A2A` | `Edit the attached photo. Change only the hoodie color to dark bark brown (#4B3A2A). Keep the same ghost-mannequin shape, hood, kangaroo pocket, folds, cotton texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-02-negro.png` | Chaqueta Rain Shell · Negro `#222222` | `Edit the attached photo. Change only the rain jacket color to near-black (#222222), with the zippers in matching black. Keep the same shape, hood, pockets, folds, slightly technical fabric sheen, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-03-helecho.png` | T-Shirt Fern Print · Helecho `#2F5D3A` | `Edit the attached photo. Change only the t-shirt color to deep fern green (#2F5D3A) and print the fern on the chest in pale mist (#C9D1BC) so it stays visible. Keep the same shape, folds, cotton texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-04-corteza.png` | Pantalón Cargo Forest · Corteza `#4B3A2A` | `Edit the attached photo. Change only the cargo trousers color to dark bark brown (#4B3A2A). Keep the same shape, pockets, folds, fabric texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-04-negro.png` | Pantalón Cargo Forest · Negro `#222222` | `Edit the attached photo. Change only the cargo trousers color to near-black (#222222). Keep the same shape, pockets, folds, fabric texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-05-niebla.png` | Crewneck Dew · Niebla `#C9D1BC` | `Edit the attached photo. Change only the crewneck sweatshirt color to pale mist green-grey (#C9D1BC). Keep the same shape, ribbed cuffs and hem, folds, washed cotton texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-06-negro.png` | Gorro Mist Beanie · Negro `#222222` | `Edit the attached photo. Change only the knit beanie color to near-black (#222222), keeping the small cream label. Keep the same shape, rib knit texture, fold, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-06-niebla.png` | Gorro Mist Beanie · Niebla `#C9D1BC` | `Edit the attached photo. Change only the knit beanie color to pale mist green-grey (#C9D1BC), keeping the small cream label. Keep the same shape, rib knit texture, fold, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-07-niebla.png` | Calcetines Lichen · Niebla `#C9D1BC` | `Edit the attached photo. Change only the socks body color to pale mist green-grey (#C9D1BC), with the cuffs in a slightly darker grey. Keep the same pose, rib knit texture, lighting, shadow and pale sage background. Photorealistic, no text.` |
| `moss-08-corteza.png` | Tote Canopy · Corteza `#4B3A2A` | `Edit the attached photo. Change only the tote bag color to dark bark brown (#4B3A2A), keeping the word "TISION" printed in cream, spelled exactly like that. Keep the same shape, handles, canvas texture, lighting, shadow and pale sage background. Photorealistic.` |

### Static Garden (`assets/img-garden/`)

| Archivo nuevo | Prenda · color | Prompt Nano Banana (adjunta `assets/img-garden/<id>.png`) |
|---|---|---|
| `garden-01-crema.png` | Camisa Monstera Linen · Crema `#F4EFE3` | `Edit the attached photo. Change only the shirt base color to cream (#F4EFE3), with the monstera leaf print in light sage (#B9C7A6) tone-on-tone. Keep the same shape, collar, buttons, linen texture, folds, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-01-hoja.png` | Camisa Monstera Linen · Hoja `#2F5D44` | `Edit the attached photo. Change only the shirt base color to dark leaf green (#2F5D44), with the monstera leaf print in a slightly lighter green tone-on-tone. Keep the same shape, collar, buttons, linen texture, folds, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-02-arcilla.png` | Hoodie Terracota Pot · Arcilla `#E3C9B0` | `Edit the attached photo. Change only the hoodie color to soft clay beige (#E3C9B0). Keep the same shape, hood, kangaroo pocket, folds, cotton texture, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-03-salvia.png` | T-Shirt Botanical Print · Salvia `#B9C7A6` | `Edit the attached photo. Change only the t-shirt color to sage green (#B9C7A6), keeping the monstera leaf line drawing in dark green. Keep the same shape, folds, cotton texture, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-04-crema.png` | Pantalón Sage Linen · Crema `#F4EFE3` | `Edit the attached photo. Change only the linen trousers color to cream (#F4EFE3). Keep the same wide-leg shape, drawstring, folds, linen texture, lighting, shadow and cream background (make it slightly darker if needed so the trousers stand out). Photorealistic, no text.` |
| `garden-04-tierra.png` | Pantalón Sage Linen · Tierra `#4B3A2A` | `Edit the attached photo. Change only the linen trousers color to earthy dark brown (#4B3A2A). Keep the same wide-leg shape, drawstring, folds, linen texture, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-05-arcilla.png` | Delantal Jardinero · Arcilla `#E3C9B0` | `Edit the attached photo. Change only the apron body color to soft clay beige (#E3C9B0) and the front pocket to dark leaf green (#2F5D44). Keep the same shape, straps, canvas texture, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-06-crema.png` | Gorra Greenhouse · Crema `#F4EFE3` | `Edit the attached photo. Change only the cap color to cream (#F4EFE3), keeping the terracotta piping on the visor. Keep the same angle, shape, stitching, lighting, shadow and cream background (slightly darker if needed for contrast). Photorealistic, no text.` |
| `garden-06-terracota.png` | Gorra Greenhouse · Terracota `#C8734B` | `Edit the attached photo. Change only the cap color to terracotta (#C8734B), with the visor piping in cream. Keep the same angle, shape, stitching, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-07-hoja.png` | Tote Herbario · Hoja `#2F5D44` | `Edit the attached photo. Change only the tote bag color to dark leaf green (#2F5D44), with the leaf print in cream. Keep the same shape, handles, canvas texture, lighting, shadow and cream background. Photorealistic, no text.` |
| `garden-08-crema.png` | Calcetines Fern · Crema `#F4EFE3` | `Edit the attached photo. Change only the socks base color to cream (#F4EFE3), with the small fern pattern in sage green (#B9C7A6). Keep the same pose, knit texture, lighting, shadow and cream background (slightly darker if needed for contrast). Photorealistic, no text.` |

### Field Theory (`assets/img-field/`)

Estas prendas todavía no tienen foto. Primero genera la principal con el prompt **Nano Banana** de su fila en [Productos Field Theory](#productos-field-theory--11-chatgpt-10241024) y guárdala como `assets/img-field/field-0X.png`. Después adjúntala y pide los otros colores:

| Archivo nuevo | Prenda · color | Prompt Nano Banana (adjunta `assets/img-field/<id>.png`) |
|---|---|---|
| `field-01-avena.png` | Hoodie Meadow · Avena `#E3D9BC` | `Edit the attached photo. Change only the hoodie color to oat (#E3D9BC). Keep the same ghost-mannequin shape, hood, pocket, folds, cotton texture, lighting and shadow; make the background a slightly darker oat so the hoodie stands out. Photorealistic, no text.` |
| `field-01-aciano.png` | Hoodie Meadow · Aciano `#5E7393` | `Edit the attached photo. Change only the hoodie color to cornflower blue (#5E7393). Keep the same ghost-mannequin shape, hood, pocket, folds, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-02-heno.png` | Camiseta Chamomile · Heno `#C9A24B` | `Edit the attached photo. Change only the t-shirt color to hay yellow (#C9A24B), keeping the small embroidered chamomile flower in white and yellow. Keep the same shape, folds, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-02-campo.png` | Camiseta Chamomile · Campo `#4F5B3A` | `Edit the attached photo. Change only the t-shirt color to olive field green (#4F5B3A), keeping the small embroidered chamomile flower in white and yellow. Keep the same shape, folds, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-03-campo.png` | Cargo Stubble · Campo `#4F5B3A` | `Edit the attached photo. Change only the cargo trousers color to olive field green (#4F5B3A). Keep the same shape, pockets, folds, fabric texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-04-avena.png` | Gorra Hay · Avena `#E3D9BC` | `Edit the attached photo. Change only the cap color to oat (#E3D9BC), keeping the small blank patch in cream. Keep the same angle, shape, stitching, lighting and shadow; make the background a slightly darker oat for contrast. Photorealistic, no text.` |
| `field-04-campo.png` | Gorra Hay · Campo `#4F5B3A` | `Edit the attached photo. Change only the cap color to olive field green (#4F5B3A), keeping the small blank patch in cream. Keep the same angle, shape, stitching, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-05-brezo.png` | Camisa Wildflower · Brezo `#8F7BA8` | `Edit the attached photo. Change only the shirt base color to heather purple (#8F7BA8), keeping the small poppy and cornflower print but drawing it in cream and poppy red so it stays visible. Keep the same shape, collar, folds, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-06-campo.png` | Short Poppy · Campo `#4F5B3A` | `Edit the attached photo. Change only the shorts color to olive field green (#4F5B3A). Keep the same shape, drawstring, folds, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-06-avena.png` | Short Poppy · Avena `#E3D9BC` | `Edit the attached photo. Change only the shorts color to oat (#E3D9BC). Keep the same shape, drawstring, folds, cotton texture, lighting and shadow; make the background a slightly darker oat for contrast. Photorealistic, no text.` |
| `field-07-brezo.png` | Crewneck Cornflower · Brezo `#8F7BA8` | `Edit the attached photo. Change only the crewneck sweatshirt color to heather purple (#8F7BA8). Keep the same shape, ribbed cuffs and hem, folds, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-08-heno.png` | Bandana Herbario · Heno `#C9A24B` | `Edit the attached photo. Change only the bandana base color to hay yellow (#C9A24B), keeping the small scattered flower and leaf print in white. Keep the same diamond layout, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |
| `field-08-campo.png` | Bandana Herbario · Campo `#4F5B3A` | `Edit the attached photo. Change only the bandana base color to olive field green (#4F5B3A), keeping the small scattered flower and leaf print in white. Keep the same diamond layout, cotton texture, lighting, shadow and oat background. Photorealistic, no text.` |

---

## Trucos si algo sale mal

| Problema | Qué añadir al prompt |
|---|---|
| Sale ilustración o 3D en vez de foto | `photorealistic, shot on a 50mm lens, real fabric texture` |
| Colores demasiado saturados | `muted, desaturated, earthy palette, matte finish` |
| Aparecen logos o letras raras | `no logos, no text, no labels` (o `only the word "TISION", spelled exactly`) |
| La prenda sale torcida o cortada | `full garment visible, centered, front view, nothing cropped` |
| Las fotos de una colección no se parecen | Sube una imagen ya generada y añade `match the lighting, background color and style of the reference image` |
| Para sacar la misma prenda en otro color | Nano Banana: sube la foto y pide `same garment, change the color to #XXXXXX, keep everything else identical` |
