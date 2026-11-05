// =========================================================
// TISION - zen.js
// Versión todavía más minimalista. Se carga después de efectos.js:
// cambia por iconos lo que efectos.js deja en texto, convierte los
// title en etiquetas al pasar el ratón y añade tres efectos más
// (cursor propio, iconos con imán y fotos que se descubren).
// =========================================================
(function () {

  const sinEfectos = typeof efectosApagados === 'function' && efectosApagados();

  const T = {
    reloj:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    paleta:   '<path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.9-.7-1.2-.7-2s.6-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-5-4-9-9-9Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    regla:    '<path d="m3 17 14-14 4 4L7 21Z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>',
    lista:    '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
    gota:     '<path d="M12 2s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',
    camion:   '<path d="M1 6h13v11H1ZM14 10h4l3 3v4h-7"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/>',
    devolver: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    persona:  '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    correo:   '<rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/>',
    etiqueta: '<path d="M3 3h8l10 10-8 8L3 11Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    mensaje:  '<path d="M4 4h16v12H8l-4 4Z"/>',
    camiseta: '<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.4-2.2Z"/>',
    sudadera: '<path d="M9 3a3 3 0 0 0 6 0"/><path d="M9 3 4 6l-2 8 3 1 1-4v10h12V11l1 4 3-1-2-8-5-3"/><path d="M10.5 7v3M13.5 7v3"/>',
    pantalon: '<path d="M6 2h12l1 20h-5l-2-12-2 12H5Z"/><path d="M6 6h12"/>',
    abrigo:   '<path d="M8 2h8l4 4v16H4V6Z"/><path d="M12 6v16M8 2l4 4 4-4"/>',
    gorro:    '<path d="M4 16a8 8 0 0 1 16 0Z"/><path d="M12 8V6M2 16h20"/>',
    gafas:    '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4M2 15l2-8h2M22 15l-2-8h-2"/>'
  };

  // Categorías de la tienda, en el orden en que se muestran
  const CATEGORIAS = [
    ['sudaderas', 'Sudaderas', T.sudadera],
    ['camisetas', 'Camisetas', T.camiseta],
    ['pantalones', 'Pantalones', T.pantalon],
    ['abrigos', 'Abrigos', T.abrigo],
    ['gorros', 'Gorros', T.gorro],
    ['accesorios', 'Accesorios', T.gafas]
  ];

  function svg(trazos) {
    return '<svg class="icono ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + trazos + '</svg>';
  }

  function normalizar(texto) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9% ]/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  // Cambia el contenido de un elemento por un icono, guardando el texto
  // para lectores de pantalla y como etiqueta al pasar el ratón
  function aIcono(el, trazos, conTexto) {
    if (!el || el.querySelector('.ico')) return;
    const texto = el.textContent.replace(/[☼:]/g, '').trim();
    el.innerHTML = svg(trazos) + (conTexto ? el.innerHTML : '<span class="solo-lectores">' + texto + '</span>');
    if (!conTexto) el.dataset.tip = texto;
  }

  // ---------- 1. MÁS ICONOS ----------
  function iconizarZen(raiz) {

    // Tarjetas de icono + título + texto: queda el icono con su título de etiqueta
    raiz.querySelectorAll('.beneficio, .valor, .lp-ventaja, .cx-tarjeta').forEach(function (t) {
      if (t.dataset.tip) return;
      const titulo = t.querySelector('h3');
      if (!titulo) return;
      t.dataset.tip = titulo.textContent.trim();
      t.setAttribute('tabindex', '0');
      t.setAttribute('aria-label', titulo.textContent.trim());
    });

    // Categorías de la tienda: las fotos pasan a ser iconos (y están las seis)
    const categorias = raiz.querySelector('.categorias');
    if (categorias && !categorias.dataset.zen) {
      categorias.dataset.zen = '1';
      const primera = categorias.querySelector('a');
      const base = primera ? primera.getAttribute('href').split('?')[0] : 'pages/categoria.html';
      categorias.innerHTML = CATEGORIAS.map(function (c) {
        return '<a href="' + base + '?c=' + c[0] + '" class="categoria-card" data-tip="' + c[1] + '">' +
                 svg(c[2]) + '<span class="solo-lectores">' + c[1] + '</span></a>';
      }).join('');
    }

    // Equipo: el nombre y el puesto salen al pasar el ratón
    raiz.querySelectorAll('.equipo-persona').forEach(function (p) {
      if (p.dataset.tip) return;
      const nombre = p.querySelector('h3');
      const puesto = p.querySelector('p, small');
      p.dataset.tip = (nombre ? nombre.textContent.trim() : '') + (puesto ? ' · ' + puesto.textContent.trim() : '');
      p.setAttribute('tabindex', '0');
    });

    // Botones con icono + texto ("Ir a la tienda"...): se queda solo el icono
    raiz.querySelectorAll('a.boton, button.boton').forEach(function (b) {
      if (b.dataset.tip || !b.querySelector('svg')) return;
      const texto = b.textContent.replace(/[→←]/g, '').trim();
      if (!texto) return;
      Array.from(b.childNodes).forEach(function (n) {
        if (n.nodeType === 3 && n.textContent.trim()) {
          const oculto = document.createElement('span');
          oculto.className = 'solo-lectores';
          oculto.textContent = n.textContent.trim();
          n.replaceWith(oculto);
        }
      });
      b.dataset.tip = texto;
    });

    // Oferta de la tienda
    aIcono(raiz.querySelector('.oferta-aviso'), T.reloj);

    // Contador: "Dias" → "D"
    raiz.querySelectorAll('.contador-texto').forEach(function (c) {
      if (c.dataset.tip) return;
      c.dataset.tip = c.textContent.trim();
      c.textContent = c.textContent.trim().charAt(0).toUpperCase();
    });

    // Página de producto
    raiz.querySelectorAll('.ficha-ventajas li').forEach(function (li) {
      aIcono(li, /devoluc/i.test(li.textContent) ? T.devolver : T.camion);
    });
    raiz.querySelectorAll('.ficha-detalle summary').forEach(function (s) {
      const clave = normalizar(s.textContent);
      const icono = clave.indexOf('caracter') === 0 ? T.lista
        : clave.indexOf('guia') === 0 ? T.regla
        : clave.indexOf('composicion') === 0 ? T.gota
        : T.camion;
      aIcono(s, icono, true);
    });
    raiz.querySelectorAll('.ficha-opcion legend').forEach(function (l) {
      if (l.querySelector('.ico')) return;
      const esColor = /color/i.test(l.textContent);
      // "Color: Verde" → [paleta] Verde · "Talla" → [regla]
      l.innerHTML = svg(esColor ? T.paleta : T.regla) +
        '<span class="solo-lectores">' + (esColor ? 'Color' : 'Talla') + '</span>' +
        l.innerHTML.replace(/^\s*(Color|Talla)\s*:?\s*/i, '');
    });
    aIcono(raiz.querySelector('.ficha-guia-enlace'), T.regla);

    // Formulario de contacto: etiquetas → icono (el texto pasa al placeholder)
    const ICONOS_CAMPO = { nombre: T.persona, email: T.correo, motivo: T.etiqueta, mensaje: T.mensaje };
    raiz.querySelectorAll('.campo > label[for]').forEach(function (l) {
      const icono = ICONOS_CAMPO[l.getAttribute('for')];
      if (!icono || l.querySelector('.ico')) return;
      const campo = document.getElementById(l.getAttribute('for'));
      if (campo && 'placeholder' in campo && !campo.placeholder) campo.placeholder = l.textContent.trim();
      aIcono(l, icono);
    });
  }

  // ---------- 2. ETIQUETAS AL PASAR EL RATÓN ----------
  // El title nativo tarda en salir y es feo: se pasa a data-tip (zen.css lo dibuja)
  function prepararEtiqueta(el) {
    if (!el || !el.title) return;
    el.dataset.tip = el.title.replace(/\s*▾/, '');
    el.removeAttribute('title');
  }

  function fijarPosicion(el) {
    if (el.dataset.tip && getComputedStyle(el).position === 'static') el.style.position = 'relative';
  }

  document.addEventListener('pointerover', function (e) {
    const el = e.target.closest && e.target.closest('[title], [data-tip]');
    if (!el) return;
    prepararEtiqueta(el);
    fijarPosicion(el);
  });
  document.addEventListener('focusin', function (e) {
    prepararEtiqueta(e.target);
    fijarPosicion(e.target);
  });

  document.addEventListener('DOMContentLoaded', function () {

    iconizarZen(document.body);

    // Lo que script.js pinta después (fichas, tarjetas...)
    new MutationObserver(function (cambios) {
      cambios.forEach(function (c) {
        c.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          iconizarZen(n.parentElement || n);
          if (!sinEfectos) revelarFotos(n);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });

    if (sinEfectos) return;

    // ---------- 3. FOTOS QUE SE DESCUBREN AL ENTRAR EN PANTALLA ----------
    revelarFotos(document.querySelector('main') || document.body);

    // ---------- 4. ICONOS CON IMÁN ----------
    const IMANES = '.header-iconos a, .nav-link, .con-icono, .favorito, .beneficio, .valor, .lp-ventaja, .cx-tarjeta, .boton-efectos, .volver-arriba, .flecha-circulo';
    document.addEventListener('pointermove', function (e) {
      const iman = e.target.closest && e.target.closest(IMANES);
      if (!iman) return;
      const r = iman.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
      iman.classList.add('zen-iman');
      iman.style.translate = dx.toFixed(1) + 'px ' + dy.toFixed(1) + 'px';
      if (!iman.dataset.iman) {
        iman.dataset.iman = '1';
        iman.addEventListener('pointerleave', function () { iman.style.translate = ''; });
      }
    }, { passive: true });

    // ---------- 5. CURSOR PROPIO (solo con ratón) ----------
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const punto = document.createElement('div');
    const aro = document.createElement('div');
    punto.className = 'cursor-punto';
    aro.className = 'cursor-aro';
    punto.setAttribute('aria-hidden', 'true');
    aro.setAttribute('aria-hidden', 'true');
    document.body.append(aro, punto);
    document.documentElement.classList.add('zen-cursor');

    let x = -100, y = -100, ax = x, ay = y;
    document.addEventListener('pointermove', function (e) {
      x = e.clientX;
      y = e.clientY;
      punto.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      const encima = e.target.closest && e.target.closest('a, button, label, summary, input, select, textarea, .producto-imagen, [data-tip]');
      aro.classList.toggle('sobre', !!encima);
    }, { passive: true });
    document.addEventListener('pointerdown', function () { aro.classList.add('pulsado'); });
    document.addEventListener('pointerup', function () { aro.classList.remove('pulsado'); });
    document.addEventListener('pointerleave', function () { x = y = -100; });

    // El aro va con un poco de retraso: así se nota el movimiento
    (function seguir() {
      ax += (x - ax) * 0.18;
      ay += (y - ay) * 0.18;
      aro.style.transform = 'translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px)';
      requestAnimationFrame(seguir);
    })();
  });

  // Se vigila el contenedor de la foto, no la foto: recortada del todo,
  // el navegador la da por invisible y nunca llegaría a descubrirse
  const verFoto = 'IntersectionObserver' in window && new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.zen-revela').forEach(function (img) { img.classList.add('zen-visible'); });
      verFoto.unobserve(e.target);
    });
  }, { threshold: 0.15 });

  function revelarFotos(raiz) {
    if (!verFoto || !raiz.querySelectorAll || !raiz.closest('main')) return;
    raiz.querySelectorAll('img').forEach(function (img) {
      if (img.classList.contains('zen-revela') || !img.parentElement) return;
      img.classList.add('zen-revela');
      verFoto.observe(img.parentElement);
    });
  }

})();
