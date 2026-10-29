# Prompts para generar las imágenes de TISION

Prompts para crear con **Nano Banana** (Gemini) y con **ChatGPT** (generador de imágenes) las fotos de **Field Theory**, la única colección que todavía usa ilustraciones SVG. La tienda, Moss Season y Static Garden ya tienen sus fotos.

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

## Trucos si algo sale mal

| Problema | Qué añadir al prompt |
|---|---|
| Sale ilustración o 3D en vez de foto | `photorealistic, shot on a 50mm lens, real fabric texture` |
| Colores demasiado saturados | `muted, desaturated, earthy palette, matte finish` |
| Aparecen logos o letras raras | `no logos, no text, no labels` (o `only the word "TISION", spelled exactly`) |
| La prenda sale torcida o cortada | `full garment visible, centered, front view, nothing cropped` |
| Las fotos de una colección no se parecen | Sube una imagen ya generada y añade `match the lighting, background color and style of the reference image` |
| Para sacar la misma prenda en otro color | Nano Banana: sube la foto y pide `same garment, change the color to #XXXXXX, keep everything else identical` |
