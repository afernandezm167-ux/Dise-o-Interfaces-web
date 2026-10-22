// =========================================================
// TISION - script.js
// Cada bloque comprueba si su parte existe en la página,
// así el mismo archivo sirve para todas las páginas.
// =========================================================

// Raíz del proyecto: script.js está en assets/js/, así las rutas
// funcionan igual desde index.html que desde pages/
const RAIZ = new URL('../../', document.currentScript.src);

function ruta(relativa) {
  return new URL(relativa, RAIZ).href;
}

// ---------- Utilidades ----------
function leer(clave, porDefecto) {
  try {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : porDefecto;
  } catch (e) {
    return porDefecto;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (e) {}
}

function precio(n) {
  return n.toFixed(2).replace('.', ',') + ' €';
}

function catalogo() {
  return typeof PRODUCTOS !== 'undefined' ? PRODUCTOS : [];
}

function buscarProducto(id) {
  return catalogo().find(function (p) { return p.id === id; });
}

// El id de un producto es el nombre de su imagen (moss-01, pro-sudadera...)
function idDeTarjeta(tarjeta) {
  const img = tarjeta.querySelector('img');
  if (!img) return null;
  const archivo = img.getAttribute('src').split('/').pop();
  return archivo.replace(/\.[a-z]+$/i, '');
}

function parametro(nombre) {
  return new URLSearchParams(location.search).get(nombre);
}

const ICONO_CORAZON = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
const ICONO_CERRAR = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';

const TIPOS = {
  sudaderas: 'Sudaderas',
  abrigos: 'Abrigos',
  camisetas: 'Camisetas',
  pantalones: 'Pantalones',
  gorros: 'Gorros',
  accesorios: 'Accesorios'
};

// Qué tipos de producto muestra cada filtro / categoría
const GRUPOS = {
  sudaderas: ['sudaderas'],
  abrigos: ['abrigos'],
  camisetas: ['camisetas'],
  pantalones: ['pantalones'],
  gorros: ['gorros'],
  accesorios: ['gorros', 'accesorios']
};

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
}

// ---------- Aviso flotante ----------
function avisar(mensaje) {
  let aviso = document.getElementById('aviso');
  if (!aviso) {
    aviso = document.createElement('div');
    aviso.id = 'aviso';
    aviso.className = 'aviso';
    aviso.setAttribute('role', 'status');
    aviso.setAttribute('aria-live', 'polite');
    document.body.appendChild(aviso);
  }
  aviso.textContent = mensaje;
  aviso.classList.add('visible');
  clearTimeout(avisar.temporizador);
  avisar.temporizador = setTimeout(function () {
    aviso.classList.remove('visible');
  }, 2400);
}

// ---------- Tarjeta de producto (para la página de categorías) ----------
function tarjetaHTML(p) {
  const colores = p.colores.map(function (c) {
    return '<span class="color ' + c.clase + '" title="' + c.nombre + '"></span>';
  }).join('');
  return (
    '<article class="producto">' +
      '<div class="producto-imagen">' +
        '<img src="' + ruta(p.img) + '" alt="' + p.alt + '" loading="lazy">' +
        (p.nuevo ? '<span class="etiqueta">Nuevo</span>' : '') +
        '<button class="favorito" aria-label="Añadir a favoritos">' + ICONO_CORAZON + '</button>' +
      '</div>' +
      '<div class="producto-info">' +
        '<h3 class="producto-nombre">' + p.nombre + '</h3>' +
        '<p class="producto-coleccion">' + p.coleccion + '</p>' +
        '<p class="producto-precio">' + precio(p.precio) + '</p>' +
        '<div class="colores">' + colores + '</div>' +
        '<button class="boton boton-verde boton-bloque">Añadir al carrito</button>' +
      '</div>' +
    '</article>'
  );
}

// =========================================================
// PÁGINA DE CATEGORÍA (categoria.html)
// =========================================================
function pintarCategoria() {
  const lista = document.getElementById('categoria-lista');
  if (!lista) return;

  // En la tienda cada categoría muestra solo su tipo de prenda
  const c = parametro('c');
  const grupo = TIPOS[c] ? [c] : null;
  const productos = catalogo().filter(function (p) { return !grupo || grupo.indexOf(p.tipo) !== -1; });

  const titulo = grupo ? TIPOS[c] : 'Toda la tienda';
  document.title = titulo + ' | TISION';
  document.getElementById('categoria-titulo').textContent = titulo;
  document.getElementById('categoria-total').textContent = productos.length + (productos.length === 1 ? ' prenda' : ' prendas');

  document.querySelectorAll('.categoria-chips .cx-chip').forEach(function (chip) {
    const activa = (chip.dataset.c || '') === (grupo ? c : '');
    chip.classList.toggle('activo', activa);
    if (activa) chip.setAttribute('aria-current', 'page');
  });

  lista.innerHTML = productos.map(tarjetaHTML).join('');
}

// =========================================================
// CARRITO
// =========================================================
const Carrito = {
  lineas: leer('tision-carrito', []),

  total: function () {
    return this.lineas.reduce(function (s, l) { return s + l.cantidad; }, 0);
  },

  anadir: function (id, color, talla, cantidad) {
    const p = buscarProducto(id);
    if (!p) return;
    color = color || (p.colores[0] ? p.colores[0].nombre : '');
    talla = talla || (['gorros', 'accesorios', 'jardineria'].indexOf(p.tipo) !== -1 ? 'Única' : 'M');
    const igual = this.lineas.find(function (l) { return l.id === id && l.color === color && l.talla === talla; });
    if (igual) {
      igual.cantidad += cantidad || 1;
    } else {
      this.lineas.push({ id: id, color: color, talla: talla, cantidad: cantidad || 1 });
    }
    this.actualizar();
    avisar(p.nombre + ' añadido al carrito');
  },

  quitar: function (indice) {
    this.lineas.splice(indice, 1);
    this.actualizar();
  },

  actualizar: function () {
    guardar('tision-carrito', this.lineas);
    const total = this.total();
    document.querySelectorAll('.carrito-contador').forEach(function (c) {
      c.textContent = total;
      c.classList.remove('salta');
      void c.offsetWidth;
      c.classList.add('salta');
    });
    this.pintarPanel();
  },

  pintarPanel: function () {
    const cuerpo = document.getElementById('panel-carrito-lineas');
    if (!cuerpo) return;
    let suma = 0;
    if (!this.lineas.length) {
      cuerpo.innerHTML = '<p class="panel-vacio">Tu carrito está vacío.</p>';
    } else {
      cuerpo.innerHTML = this.lineas.map(function (l, i) {
        const p = buscarProducto(l.id);
        if (!p) return '';
        suma += p.precio * l.cantidad;
        return '<div class="panel-linea">' +
                 '<span class="panel-img"><img src="' + ruta(p.img) + '" alt=""></span>' +
                 '<div><span class="panel-nombre">' + p.nombre + '</span>' +
                 '<p>' + l.color + ' · ' + l.talla + ' · x' + l.cantidad + '</p>' +
                 '<strong>' + precio(p.precio * l.cantidad) + '</strong></div>' +
                 '<button type="button" class="panel-quitar" data-quitar="' + i + '" aria-label="Quitar ' + p.nombre + '">' + ICONO_CERRAR + '</button>' +
               '</div>';
      }).join('');
    }
    document.getElementById('panel-carrito-total').textContent = precio(suma);
  },

  crearPanel: function () {
    const panel = document.createElement('aside');
    panel.className = 'panel-carrito';
    panel.id = 'panel-carrito';
    panel.setAttribute('aria-label', 'Carrito');
    panel.hidden = true;
    panel.innerHTML =
      '<div class="panel-fondo" data-cerrar-panel></div>' +
      '<div class="panel-caja" role="dialog" aria-modal="true" aria-labelledby="panel-carrito-titulo">' +
        '<div class="panel-cabecera"><h2 id="panel-carrito-titulo">Tu carrito</h2>' +
          '<button type="button" class="panel-cerrar" data-cerrar-panel aria-label="Cerrar carrito">' + ICONO_CERRAR + '</button></div>' +
        '<div class="panel-lineas" id="panel-carrito-lineas"></div>' +
        '<div class="panel-pie"><p>Total <strong id="panel-carrito-total">0,00 €</strong></p>' +
          '<button type="button" class="boton boton-verde boton-bloque" id="panel-pagar">Finalizar compra</button>' +
          '<p class="panel-nota">Envío gratis a partir de 60 €</p></div>' +
      '</div>';
    document.body.appendChild(panel);

    panel.addEventListener('click', function (e) {
      if (e.target.closest('[data-cerrar-panel]')) Carrito.cerrar();
      const quitar = e.target.closest('[data-quitar]');
      if (quitar) Carrito.quitar(parseInt(quitar.dataset.quitar, 10));
      if (e.target.id === 'panel-pagar') {
        if (!Carrito.lineas.length) return avisar('Añade algo al carrito primero');
        Carrito.lineas = [];
        Carrito.actualizar();
        Carrito.cerrar();
        avisar('¡Pedido realizado! Gracias por comprar en TISION');
      }
    });
  },

  abrir: function () {
    const panel = document.getElementById('panel-carrito');
    this.pintarPanel();
    panel.hidden = false;
    document.body.style.overflow = 'hidden';
    panel.querySelector('.panel-cerrar').focus();
  },

  cerrar: function () {
    document.getElementById('panel-carrito').hidden = true;
    document.body.style.overflow = '';
  }
};

// =========================================================
// FAVORITOS
// =========================================================
const Favoritos = {
  ids: leer('tision-favoritos', []),

  marcar: function () {
    const ids = this.ids;
    document.querySelectorAll('.favorito').forEach(function (b) {
      const tarjeta = b.closest('.producto, .vendido');
      const id = tarjeta && (tarjeta.dataset.id || idDeTarjeta(tarjeta));
      const activo = ids.indexOf(id) !== -1;
      b.classList.toggle('activo', activo);
      b.setAttribute('aria-pressed', activo);
    });
  },

  alternar: function (id, nombre) {
    const i = this.ids.indexOf(id);
    if (i === -1) {
      this.ids.push(id);
      avisar((nombre || 'Producto') + ' guardado en favoritos');
    } else {
      this.ids.splice(i, 1);
      avisar((nombre || 'Producto') + ' quitado de favoritos');
    }
    guardar('tision-favoritos', this.ids);
    this.marcar();
  }
};

// =========================================================
// FILTROS DE LAS COLECCIONES (chips "Todo", "Sudaderas"...)
// =========================================================
function filtrar(chip) {
  const seccion = chip.closest('section');
  if (!seccion || chip.closest('.categoria-chips')) return false;
  const grupo = GRUPOS[normalizar(chip.textContent)];
  let visibles = 0;

  seccion.querySelectorAll('.cx-chip').forEach(function (c) { c.classList.toggle('activo', c === chip); });
  seccion.querySelectorAll('.producto').forEach(function (t) {
    const p = buscarProducto(idDeTarjeta(t));
    const mostrar = !grupo || (p && grupo.indexOf(p.tipo) !== -1);
    t.hidden = !mostrar;
    if (mostrar) visibles++;
  });

  const contador = seccion.querySelector('.seccion-cabecera .ver-todo');
  if (contador && contador.tagName === 'SPAN') {
    contador.textContent = visibles + (visibles === 1 ? ' prenda' : ' prendas');
  }
  return true;
}

// =========================================================
// BUSCADOR
// =========================================================
function crearBuscador() {
  const caja = document.createElement('div');
  caja.className = 'buscador';
  caja.id = 'buscador';
  caja.hidden = true;
  caja.innerHTML =
    '<div class="buscador-caja" role="dialog" aria-modal="true" aria-label="Buscar productos">' +
      '<div class="buscador-barra">' +
        '<label for="buscador-campo" class="solo-lectores">Buscar</label>' +
        '<input type="search" id="buscador-campo" placeholder="Busca sudaderas, Moss Season, aciano..." autocomplete="off">' +
        '<button type="button" class="buscador-cerrar" aria-label="Cerrar buscador">' + ICONO_CERRAR + '</button>' +
      '</div>' +
      '<div class="buscador-resultados" id="buscador-resultados"></div>' +
    '</div>';
  document.body.appendChild(caja);

  const campo = caja.querySelector('input');
  const resultados = caja.querySelector('#buscador-resultados');

  function pintar() {
    const q = normalizar(campo.value);
    if (!q) {
      resultados.innerHTML = '<p class="buscador-ayuda">Escribe el nombre de una prenda, una colección o un color.</p>';
      return;
    }
    const encontrados = catalogo().filter(function (p) {
      const texto = normalizar([p.nombre, p.coleccion, TIPOS[p.tipo], p.detalle].concat(p.colores.map(function (c) { return c.nombre; })).join(' '));
      return q.split(/\s+/).every(function (palabra) { return texto.indexOf(palabra) !== -1; });
    });
    resultados.innerHTML = encontrados.length
      ? encontrados.map(function (p) {
          return '<a class="buscador-item" href="' + ruta(p.pagina) + '">' +
                   '<img src="' + ruta(p.img) + '" alt="">' +
                   '<span><strong>' + p.nombre + '</strong><small>Ver en ' + p.coleccion + ' · ' + TIPOS[p.tipo] + '</small></span>' +
                   '<em>' + precio(p.precio) + '</em></a>';
        }).join('')
      : '<p class="buscador-ayuda">No hay resultados para «' + campo.value + '».</p>';
  }

  campo.addEventListener('input', pintar);
  caja.addEventListener('click', function (e) {
    if (e.target === caja || e.target.closest('.buscador-cerrar')) cerrarBuscador();
  });
  pintar();
}

function abrirBuscador() {
  const caja = document.getElementById('buscador');
  caja.hidden = false;
  document.body.style.overflow = 'hidden';
  caja.querySelector('input').focus();
}

function cerrarBuscador() {
  document.getElementById('buscador').hidden = true;
  document.body.style.overflow = '';
}

// =========================================================
// INICIO: todo lo que se engancha al cargar la página
// =========================================================
document.addEventListener('DOMContentLoaded', function () {

  pintarCategoria();

  Carrito.crearPanel();
  Carrito.actualizar();
  Favoritos.marcar();
  crearBuscador();

  // Si se llega a una colección con ?filtro=sudaderas, se aplica el filtro
  const filtroInicial = parametro('filtro');
  if (filtroInicial) {
    document.querySelectorAll('.cx-chip').forEach(function (chip) {
      if (normalizar(chip.textContent) === filtroInicial) filtrar(chip);
    });
  }

  // ---------- Clics (delegados: sirven también para tarjetas creadas con JS) ----------
  document.addEventListener('click', function (e) {

    // Añadir al carrito desde una tarjeta
    const botonCompra = e.target.closest('.producto-info .boton');
    if (botonCompra) {
      Carrito.anadir(idDeTarjeta(botonCompra.closest('.producto')));
      return;
    }

    // Favoritos
    const fav = e.target.closest('.favorito');
    if (fav) {
      const tarjeta = fav.closest('.producto, .vendido');
      const id = tarjeta.dataset.id || idDeTarjeta(tarjeta);
      const p = buscarProducto(id);
      const nombre = p ? p.nombre : (tarjeta.querySelector('h3') || {}).textContent;
      Favoritos.alternar(id, nombre);
      return;
    }

    // Filtros de colección
    const chip = e.target.closest('.cx-chip');
    if (chip && filtrar(chip)) {
      e.preventDefault();
      return;
    }

    // Iconos de la cabecera
    const icono = e.target.closest('.header-iconos a');
    if (icono) {
      const que = icono.getAttribute('aria-label');
      if (que === 'Buscar') { e.preventDefault(); abrirBuscador(); }
      if (que === 'Carrito') { e.preventDefault(); Carrito.abrir(); }
      if (que === 'Favoritos') {
        e.preventDefault();
        const n = Favoritos.ids.length;
        avisar(n ? 'Tienes ' + n + (n === 1 ? ' prenda' : ' prendas') + ' en favoritos' : 'Aún no tienes favoritos');
      }
      if (que === 'Mi cuenta') { e.preventDefault(); avisar('El área de cliente estará disponible pronto'); }
    }
  });

  // ---------- Teclado: Escape cierra buscador, carrito y menú ----------
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    const buscador = document.getElementById('buscador');
    if (buscador && !buscador.hidden) cerrarBuscador();
    const panel = document.getElementById('panel-carrito');
    if (panel && !panel.hidden) Carrito.cerrar();
    const menu = document.getElementById('menu-toggle');
    if (menu && menu.checked) {
      menu.checked = false;
      menu.dispatchEvent(new Event('change'));
    }
  });

  // ---------- Menú móvil accesible ----------
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcono = document.querySelector('.menu-icono');
  if (menuToggle && menuIcono) {
    menuIcono.setAttribute('role', 'button');
    menuIcono.setAttribute('tabindex', '0');
    menuIcono.setAttribute('aria-expanded', 'false');
    menuIcono.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.checked = !menuToggle.checked;
        menuToggle.dispatchEvent(new Event('change'));
      }
    });
    menuToggle.addEventListener('change', function () {
      menuIcono.setAttribute('aria-expanded', menuToggle.checked);
      menuIcono.setAttribute('aria-label', menuToggle.checked ? 'Cerrar menú' : 'Abrir menú');
    });
  }

  // Los "Colecciones ▾" / "Categorías ▾" no navegan, solo abren su submenú
  document.querySelectorAll('.desplegable > .nav-link').forEach(function (enlace) {
    enlace.setAttribute('aria-haspopup', 'true');
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const li = enlace.parentElement;
      const abierto = li.classList.toggle('abierto');
      enlace.setAttribute('aria-expanded', abierto);
    });
  });

  // ---------- Botón "volver arriba" ----------
  const arriba = document.createElement('button');
  arriba.type = 'button';
  arriba.className = 'volver-arriba';
  arriba.setAttribute('aria-label', 'Volver arriba');
  arriba.innerHTML = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(arriba);
  arriba.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function () {
    arriba.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  // ---------- Aparecer al hacer scroll ----------
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !sinMovimiento) {
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.seccion-cabecera, .producto, .vendido, .categoria-card, .beneficio, .cx-tarjeta, .lamina, .cx-foto, .cx-muestra, .cx-otra, .valor, .equipo-persona, .linea-hito')
      .forEach(function (el, i) {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add('revelar');
        el.style.transitionDelay = (i % 4) * 70 + 'ms';
        observador.observe(el);
      });
  }

  // ---------- Formulario de contacto ----------
  const formulario = document.querySelector('.contacto-pagina .formulario');
  if (formulario) {
    formulario.setAttribute('novalidate', '');
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      let primerError = null;

      formulario.querySelectorAll('input, select, textarea').forEach(function (campo) {
        const contenedor = campo.closest('.campo, .check');
        if (!contenedor) return;
        let error = contenedor.querySelector('.campo-error');
        if (!error) {
          error = document.createElement('span');
          error.className = 'campo-error';
          error.id = 'error-' + (campo.id || campo.name);
          contenedor.appendChild(error);
        }
        let mensaje = '';
        if (campo.validity.valueMissing) {
          mensaje = campo.type === 'checkbox' ? 'Tienes que aceptar la política de privacidad' : 'Este campo es obligatorio';
        } else if (campo.validity.typeMismatch) {
          mensaje = 'Escribe un correo válido, por ejemplo nombre@correo.com';
        } else if (campo.tagName === 'TEXTAREA' && campo.value.trim().length < 10) {
          mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres)';
        }
        error.textContent = mensaje;
        campo.setAttribute('aria-invalid', mensaje ? 'true' : 'false');
        if (mensaje) campo.setAttribute('aria-describedby', error.id);
        if (mensaje && !primerError) primerError = campo;
      });

      if (primerError) {
        primerError.focus();
        return;
      }

      const nombre = formulario.querySelector('#nombre').value.trim().split(' ')[0];
      const exito = document.createElement('div');
      exito.className = 'formulario-exito';
      exito.setAttribute('role', 'status');
      exito.innerHTML =
        '<span class="formulario-exito-icono"><svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>' +
        '<h3>¡Gracias, ' + nombre + '!</h3>' +
        '<p>Hemos recibido tu mensaje. Te responderemos en menos de 24 horas.</p>' +
        '<button type="button" class="boton boton-verde">Enviar otro mensaje</button>';
      formulario.hidden = true;
      formulario.parentNode.appendChild(exito);
      exito.querySelector('button').addEventListener('click', function () {
        formulario.reset();
        exito.remove();
        formulario.hidden = false;
      });
    });
  }
});


// =========================================================
// POP-UP DE COOKIES
// Se muestra al abrir la página si el usuario aún no ha elegido.
// La elección se guarda en localStorage.
// =========================================================
document.addEventListener('DOMContentLoaded', function () {
  const CLAVE = 'tision-cookies';

  const popup = document.getElementById('cookies');
  if (!popup) return;

  const config = document.getElementById('cookies-config');
  const botonConfigurar = document.getElementById('cookies-configurar');
  const botonRechazar = document.getElementById('cookies-rechazar');
  const botonAceptar = document.getElementById('cookies-aceptar');
  const checkAnaliticas = document.getElementById('cookie-analiticas');
  const checkMarketing = document.getElementById('cookie-marketing');

  function leerEleccion() {
    try {
      return localStorage.getItem(CLAVE);
    } catch (e) {
      return null;
    }
  }

  function guardarEleccion(preferencias) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(preferencias));
    } catch (e) {}
  }

  function abrir(conOpciones) {
    const previas = JSON.parse(leerEleccion() || '{}');
    checkAnaliticas.checked = !!previas.analiticas;
    checkMarketing.checked = !!previas.marketing;
    config.hidden = !conOpciones;
    botonConfigurar.textContent = conOpciones ? 'Guardar selección' : 'Configurar';
    popup.hidden = false;
    document.body.style.overflow = 'hidden';
    botonAceptar.focus();
  }

  function cerrar(preferencias) {
    guardarEleccion(preferencias);
    popup.hidden = true;
    document.body.style.overflow = '';
    if (location.hash === '#cookies') history.replaceState(null, '', location.pathname + location.search);
  }

  // Si ya eligió antes, no se vuelve a mostrar (salvo desde el enlace del footer)
  if (location.hash === '#cookies') {
    abrir(true);
  } else if (!leerEleccion()) {
    abrir(false);
  }

  document.querySelectorAll('[data-abrir-cookies]').forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      abrir(true);
    });
  });

  // "Configurar" muestra las opciones; al pulsarlo otra vez guarda la selección
  botonConfigurar.addEventListener('click', function () {
    if (config.hidden) {
      config.hidden = false;
      botonConfigurar.textContent = 'Guardar selección';
    } else {
      cerrar({
        necesarias: true,
        analiticas: checkAnaliticas.checked,
        marketing: checkMarketing.checked
      });
    }
  });

  botonRechazar.addEventListener('click', function () {
    cerrar({ necesarias: true, analiticas: false, marketing: false });
  });

  botonAceptar.addEventListener('click', function () {
    cerrar({ necesarias: true, analiticas: true, marketing: true });
  });
});


// =========================================================
// CONTADOR DE LA OFERTA
// Cada vez que se recarga la página empieza en
// 3 días, 0 horas, 40 minutos y 12 segundos.
// =========================================================
document.addEventListener('DOMContentLoaded', function () {
  const numeros = document.querySelectorAll('.contador .contador-numero');
  if (numeros.length !== 4) return;

  const [dias, horas, minutos, segundos] = numeros;

  let restante = 3 * 86400 + 0 * 3600 + 40 * 60 + 12;

  function dosCifras(n) {
    return String(n).padStart(2, '0');
  }

  function pintar() {
    dias.textContent = dosCifras(Math.floor(restante / 86400));
    horas.textContent = dosCifras(Math.floor((restante % 86400) / 3600));
    minutos.textContent = dosCifras(Math.floor((restante % 3600) / 60));
    segundos.textContent = dosCifras(restante % 60);
  }

  pintar();

  const intervalo = setInterval(function () {
    restante--;
    pintar();
    if (restante <= 0) clearInterval(intervalo);
  }, 1000);
});
