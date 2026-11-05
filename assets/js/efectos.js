// =========================================================
// TISION - efectos.js
// Versión minimalista: cambia los textos de enlaces y botones
// por iconos SVG y añade los efectos visuales.
// Se carga en todas las páginas, después de script.js / landing.js.
// =========================================================

// Los efectos están activos por defecto (aunque el sistema pida menos
// movimiento) y se pueden apagar con el botón flotante. La elección se guarda.
function efectosApagados() {
  try { return localStorage.getItem('tision-efectos') === 'off'; } catch (e) { return false; }
}
document.documentElement.classList.toggle('sin-efectos', efectosApagados());

(function () {

  const sinMovimiento = efectosApagados();

  // =========================================================
  // 1. ICONOS EN LUGAR DE TEXTO
  // El texto original se queda en un <span class="solo-lectores">:
  // lo leen los lectores de pantalla y script.js sigue
  // encontrándolo con textContent (filtros, etc.).
  // =========================================================
  const T = {
    casa:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v12h14V9"/>',
    bolsa:     '<path d="M5 7h14l-1 14H6Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    bolsaMas:  '<path d="M5 7h14l-1 14H6Z"/><path d="M9 7a3 3 0 0 1 6 0"/><path d="M12 11v6M9 14h6"/>',
    cuadros:   '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    capas:     '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    info:      '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    correo:    '<rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/>',
    lluvia:    '<path d="M7 15a4 4 0 1 1 1-7.9A5 5 0 0 1 18 9a3 3 0 0 1 0 6Z"/><path d="m8 18-1 3M12 18l-1 3M16 18l-1 3"/>',
    arco:      '<path d="M5 21V10a7 7 0 0 1 14 0v11"/><path d="M9 21v-9a3 3 0 0 1 6 0v9"/><path d="M3 21h18"/>',
    sol:       '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    sudadera:  '<path d="M9 3a3 3 0 0 0 6 0"/><path d="M9 3 4 6l-2 8 3 1 1-4v10h12V11l1 4 3-1-2-8-5-3"/><path d="M10.5 7v3M13.5 7v3"/>',
    camiseta:  '<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.4-2.2Z"/>',
    pantalon:  '<path d="M6 2h12l1 20h-5l-2-12-2 12H5Z"/><path d="M6 6h12"/>',
    abrigo:    '<path d="M8 2h8l4 4v16H4V6Z"/><path d="M12 6v16M8 2l4 4 4-4"/>',
    gorro:     '<path d="M4 16a8 8 0 0 1 16 0Z"/><path d="M12 8V6M2 16h20"/>',
    gafas:     '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4M2 15l2-8h2M22 15l-2-8h-2"/>',
    lista:     '<path d="M4 6h16M4 12h16M4 18h16"/>',
    flecha:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
    volver:    '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    escudo:    '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/>',
    papel:     '<path d="M6 2h9l5 5v15H6Z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>',
    camion:    '<path d="M1 6h13v11H1ZM14 10h4l3 3v4h-7"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/>',
    devolver:  '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    galleta:   '<path d="M21 12a9 9 0 1 1-9-9 3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 3Z"/><path d="M8.5 9h.01M15 15h.01M10 15.5h.01M7 13h.01"/>',
    ayuda:     '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    ok:        '<path d="M4 12.5 9.5 18 20 6"/>',
    cerrar:    '<path d="M6 6l12 12M18 6 6 18"/>',
    ajustes:   '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    camara:    '<path d="M3 7h4l2-3h6l2 3h4v13H3Z"/><circle cx="12" cy="13" r="4"/>',
    gota:      '<path d="M12 2s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',
    libro:     '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8Z"/>',
    tarjeta:   '<rect x="2" y="5" width="20" height="14"/><path d="M2 10h20"/>',
    enviar:    '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    destello:  '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2Z"/>'
  };

  // Texto (en minúsculas, sin flechas ni ▾) → icono
  const ICONOS = {
    'inicio': T.casa,
    'tienda': T.bolsa,
    'ir a la tienda': T.bolsa,
    'ver toda la tienda': T.bolsa,
    'volver a la tienda': T.volver,
    'colecciones': T.cuadros,
    'categorias': T.capas,
    'sobre tision': T.info,
    'contacto': T.correo,
    'moss season': T.lluvia,
    'static garden': T.arco,
    'field theory': T.sol,
    'todo': T.lista,
    'sudaderas': T.sudadera,
    'camisetas': T.camiseta,
    'pantalones': T.pantalon,
    'abrigos': T.abrigo,
    'gorros': T.gorro,
    'accesorios': T.gafas,
    'anadir al carrito': T.bolsaMas,
    'finalizar compra': T.tarjeta,
    'ver todo': T.flecha,
    'ver prendas': T.flecha,
    'ver coleccion': T.flecha,
    'ver la coleccion': T.flecha,
    'mas informacion': T.correo,
    'comprar': T.flecha,
    'pasear por el jardin': T.flecha,
    'quiero mi 15%': T.flecha,
    'quiero acceso': T.flecha,
    'apuntarme': T.flecha,
    'privacidad': T.escudo,
    'terminos y condiciones': T.papel,
    'envios': T.camion,
    'devoluciones': T.devolver,
    'cookies': T.galleta,
    'ayuda': T.ayuda,
    'aceptar todas': T.ok,
    'rechazar': T.cerrar,
    'configurar': T.ajustes,
    'guardar seleccion': T.ok,
    'lookbook': T.camara,
    'cuidados': T.gota,
    'cuaderno de campo': T.libro,
    'enviar mensaje': T.enviar,
    'enviar otro mensaje': T.enviar,
    'nuevo': T.destello,
    '': T.flecha                  // .flecha-circulo solo tenía "→"
  };

  function normalizar(texto) {
    return texto
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[→←▾]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  function svg(trazos) {
    return '<svg class="icono ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + trazos + '</svg>';
  }

  const SELECTOR = 'a, button, .flecha-circulo, .etiqueta';

  function iconizar(el) {
    // Ya convertido, o tiene otros elementos dentro (tarjetas, iconos...)
    if (el.querySelector('.ico') || el.querySelector('*:not(br)')) return;
    const original = el.textContent.trim();
    const clave = normalizar(original);
    if (!(clave in ICONOS) || (clave === '' && !el.classList.contains('flecha-circulo'))) return;

    el.innerHTML = svg(ICONOS[clave]) + (original ? '<span class="solo-lectores">' + original + '</span>' : '');
    el.classList.add('con-icono');
    if (original && !/[→←]/.test(original)) el.title = original.replace(/\s*▾/, '');
  }

  function iconizarTodo(raiz) {
    if (raiz.matches && raiz.matches(SELECTOR)) iconizar(raiz);
    if (raiz.querySelectorAll) raiz.querySelectorAll(SELECTOR).forEach(iconizar);
  }

  // =========================================================
  // 2. TÍTULOS QUE SUBEN PALABRA A PALABRA
  // =========================================================
  function partirEnPalabras(titulo) {
    let n = 0;
    (function recorrer(nodo) {
      Array.from(nodo.childNodes).forEach(function (hijo) {
        if (hijo.nodeType === 1) {
          if (hijo.matches('span, em')) {
            const caja = document.createElement('span');
            caja.className = 'palabra';
            caja.innerHTML = '<span style="--i:' + (n++) + '"></span>';
            hijo.replaceWith(caja);
            caja.firstChild.appendChild(hijo);
          } else {
            recorrer(hijo);
          }
          return;
        }
        if (hijo.nodeType !== 3 || !hijo.textContent.trim()) return;
        const trozo = document.createDocumentFragment();
        hijo.textContent.split(/(\s+)/).forEach(function (parte) {
          if (!parte) return;
          if (/^\s+$/.test(parte)) { trozo.appendChild(document.createTextNode(parte)); return; }
          const caja = document.createElement('span');
          caja.className = 'palabra';
          caja.innerHTML = '<span style="--i:' + (n++) + '"></span>';
          caja.firstChild.textContent = parte;
          trozo.appendChild(caja);
        });
        hijo.replaceWith(trozo);
      });
    })(titulo);
  }

  // =========================================================
  // ARRANQUE
  // =========================================================
  document.addEventListener('DOMContentLoaded', function () {

    iconizarTodo(document.body);

    // Lo que script.js pinta más tarde (tarjetas, carrito, cookies...)
    new MutationObserver(function (cambios) {
      cambios.forEach(function (cambio) {
        cambio.addedNodes.forEach(function (nodo) {
          if (nodo.nodeType === 1) iconizarTodo(nodo);
          else if (nodo.parentElement && nodo.parentElement.matches(SELECTOR)) iconizar(nodo.parentElement);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });

    // ---------- Botón para apagar / encender los efectos ----------
    const interruptor = document.createElement('button');
    interruptor.type = 'button';
    interruptor.className = 'boton-efectos';
    interruptor.setAttribute('aria-pressed', String(!sinMovimiento));
    interruptor.title = sinMovimiento ? 'Activar efectos' : 'Quitar efectos';
    interruptor.innerHTML = svg(T.destello) + '<span class="solo-lectores">' + interruptor.title + '</span>';
    interruptor.addEventListener('click', function () {
      try { localStorage.setItem('tision-efectos', sinMovimiento ? 'on' : 'off'); } catch (e) {}
      location.reload();
    });
    document.body.appendChild(interruptor);

    // ---------- Barra de progreso ----------
    const progreso = document.createElement('div');
    progreso.className = 'progreso';
    document.body.appendChild(progreso);

    // ---------- Cabecera que se esconde al bajar ----------
    const cabecera = document.querySelector('.header');
    let ultimoY = window.scrollY;

    // (Las imágenes están fijas: sin paralaje, sin inclinación ni cortinas,
    // que hacían ir lenta la página)

    function alHacerScroll() {
      const y = window.scrollY;
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      progreso.style.transform = 'scaleX(' + (alto > 0 ? y / alto : 0) + ')';

      if (cabecera) {
        const menuAbierto = document.querySelector('.menu-toggle:checked');
        cabecera.classList.toggle('oculta', y > ultimoY && y > 160 && !menuAbierto);
      }
      ultimoY = y;
    }
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    alHacerScroll();

    if (sinMovimiento) return;

    // ---------- Títulos por palabras ----------
    const titulos = document.querySelectorAll('h1, h2');
    const verTitulo = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('titulo-visible');
          verTitulo.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    titulos.forEach(function (t) {
      if (t.closest('.cookies, .panel-carrito, .buscador')) return;
      partirEnPalabras(t);
      verTitulo.observe(t);
    });

    // ---------- Contadores que suben (cifras con número) ----------
    document.querySelectorAll('.cifras strong, .cifras b, .lp-prueba strong').forEach(function (el) {
      const texto = el.textContent;
      const coincide = texto.match(/[\d.,]+/);
      if (!coincide) return;
      const decimales = (coincide[0].split(',')[1] || '').length;
      const final = parseFloat(coincide[0].replace(/\./g, '').replace(',', '.'));
      const vigilar = new IntersectionObserver(function (entradas) {
        if (!entradas[0].isIntersecting) return;
        vigilar.disconnect();
        const inicio = performance.now();
        (function paso(ahora) {
          const t = Math.min(1, (ahora - inicio) / 1600);
          const valor = final * (1 - Math.pow(1 - t, 3));
          el.textContent = texto.replace(coincide[0], valor.toLocaleString('es-ES', { minimumFractionDigits: decimales, maximumFractionDigits: decimales }));
          if (t < 1) requestAnimationFrame(paso);
        })(inicio);
      });
      vigilar.observe(el);
    });

    // ---------- Logo que se desordena al pasar el ratón ----------
    const logo = document.querySelector('.logo');
    if (logo && logo.firstChild && logo.firstChild.nodeType === 3) {
      const nodoTexto = logo.firstChild;
      const palabra = nodoTexto.textContent;
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*';
      logo.addEventListener('mouseenter', function () {
        let vuelta = 0;
        const intervalo = setInterval(function () {
          nodoTexto.textContent = palabra.split('').map(function (l, i) {
            return i < vuelta ? l : letras[Math.floor(Math.random() * letras.length)];
          }).join('');
          vuelta += 0.5;
          if (vuelta > palabra.length) { clearInterval(intervalo); nodoTexto.textContent = palabra; }
        }, 35);
      });
    }

    // (La transición entre páginas la hace el CSS con @view-transition)

    // ---------- La foto toma el color del circulito ----------
    document.addEventListener('mouseover', function (e) {
      const bola = e.target.closest('.producto .color');
      if (!bola) return;
      const foto = bola.closest('.producto').querySelector('.producto-imagen');
      const color = getComputedStyle(bola).backgroundColor;
      foto.style.setProperty('background-color', 'color-mix(in srgb, ' + color + ' 35%, var(--hueco))', 'important');
      bola.addEventListener('mouseleave', function () { foto.style.removeProperty('background-color'); }, { once: true });
    });

  });

})();

// =========================================================
// EFECTOS INTENSOS
// Intro y partículas al hacer clic.
// =========================================================
(function () {

  if (efectosApagados()) return;
  // Colores de la página actual (cambian con cada colección)
  function paleta() {
    const estilo = getComputedStyle(document.body);
    return ['--amarillo', '--verde', '--destacado', '--verde-claro'].map(function (v) {
      return estilo.getPropertyValue(v).trim() || '#F6DC5C';
    });
  }

  // ---------- Intro: cortina con el logo (una vez por visita) ----------
  let yaVisto = false;
  try { yaVisto = sessionStorage.getItem('tision-intro') === '1'; } catch (e) {}
  if (!yaVisto) {
    const intro = document.createElement('div');
    intro.className = 'intro';
    intro.setAttribute('aria-hidden', 'true');
    intro.innerHTML = '<div class="intro-logo">' +
      'TISION'.split('').map(function (l, i) { return '<span style="--i:' + i + '">' + l + '</span>'; }).join('') +
      '</div><div class="intro-barra"></div>';
    document.documentElement.appendChild(intro);
    setTimeout(function () { intro.classList.add('intro-fuera'); }, 1500);
    setTimeout(function () { intro.remove(); }, 2600);
    try { sessionStorage.setItem('tision-intro', '1'); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {

    // ---------- Partículas al hacer clic ----------
    document.addEventListener('pointerdown', function (e) {
      const colores = paleta();
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('span');
        const angulo = (Math.PI * 2 * i) / 16 + Math.random() * 0.4;
        const distancia = 50 + Math.random() * 70;
        p.className = 'particula';
        p.style.left = e.clientX + 'px';
        p.style.top = e.clientY + 'px';
        p.style.background = colores[i % colores.length];
        p.style.setProperty('--dx', (Math.cos(angulo) * distancia).toFixed(0) + 'px');
        p.style.setProperty('--dy', (Math.sin(angulo) * distancia).toFixed(0) + 'px');
        p.style.setProperty('--tam', (4 + Math.random() * 8).toFixed(0) + 'px');
        document.body.appendChild(p);
        p.addEventListener('animationend', function () { p.remove(); });
      }
    });

  });

})();

// =========================================================
// LLUVIA EN CANVAS (bloque "La colección" de Moss Season)
// Gotas con viento que sigue al ratón y salpicaduras.
// =========================================================
(function () {

  if (efectosApagados()) return;

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lluvia-lienzo').forEach(function (lienzo) {
      const bloque = lienzo.parentElement;
      const ctx = lienzo.getContext('2d');
      const ppp = Math.min(window.devicePixelRatio || 1, 2);
      let ancho = 0, alto = 0;
      let gotas = [];
      let salpicaduras = [];
      let viento = 0, vientoObjetivo = 0;
      let visible = false;

      function nuevaGota(desdeArriba) {
        const cerca = Math.random();               // 0 = lejos, 1 = cerca
        return {
          x: Math.random() * (ancho + 200) - 100,
          y: desdeArriba ? -Math.random() * 200 : Math.random() * alto,
          largo: 10 + cerca * 26,
          velocidad: 9 + cerca * 14,
          grosor: 0.6 + cerca * 1.4,
          opacidad: 0.15 + cerca * 0.45,
          suelo: alto * (0.35 + Math.random() * 0.65)   // donde "choca"
        };
      }

      function medir() {
        const r = bloque.getBoundingClientRect();
        ancho = r.width;
        alto = r.height;
        lienzo.width = ancho * ppp;
        lienzo.height = alto * ppp;
        ctx.setTransform(ppp, 0, 0, ppp, 0, 0);
        const total = Math.round(ancho * alto / 3500);
        gotas = [];
        for (let i = 0; i < total; i++) gotas.push(nuevaGota(false));
      }

      // El viento se inclina hacia donde está el ratón
      bloque.addEventListener('mousemove', function (e) {
        const r = bloque.getBoundingClientRect();
        vientoObjetivo = ((e.clientX - r.left) / r.width - 0.5) * 12;
      });
      bloque.addEventListener('mouseleave', function () { vientoObjetivo = 0; });

      // Solo se anima cuando el bloque está en pantalla
      new IntersectionObserver(function (entradas) {
        visible = entradas[0].isIntersecting;
      }).observe(bloque);

      function dibujar() {
        requestAnimationFrame(dibujar);
        if (!visible) return;

        viento += (vientoObjetivo - viento) * 0.04;
        ctx.clearRect(0, 0, ancho, alto);
        ctx.lineCap = 'round';

        gotas.forEach(function (g, i) {
          const dx = viento * (g.velocidad / 23);
          ctx.strokeStyle = 'rgba(220, 235, 200,' + g.opacidad + ')';
          ctx.lineWidth = g.grosor;
          ctx.beginPath();
          ctx.moveTo(g.x, g.y);
          ctx.lineTo(g.x + dx * (g.largo / g.velocidad), g.y + g.largo);
          ctx.stroke();

          g.x += dx;
          g.y += g.velocidad;

          if (g.y > g.suelo) {
            if (g.grosor > 1.2) {
              salpicaduras.push({ x: g.x, y: g.suelo + g.largo, r: 1, vida: 1 });
            }
            gotas[i] = nuevaGota(true);
          }
        });

        // Salpicaduras: anillos que se abren y se apagan
        salpicaduras = salpicaduras.filter(function (s) {
          ctx.strokeStyle = 'rgba(220, 235, 200,' + (s.vida * 0.5) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(s.x, s.y, s.r * 2.2, s.r * 0.7, 0, 0, Math.PI * 2);
          ctx.stroke();
          s.r += 0.7;
          s.vida -= 0.06;
          return s.vida > 0;
        });
      }

      medir();
      window.addEventListener('resize', medir);
      // Al filtrar productos el bloque cambia de alto
      if ('ResizeObserver' in window) new ResizeObserver(medir).observe(bloque);
      dibujar();
    });
  });

})();
