// =========================================================
// TISION - landing.js
// Formularios de correo de la landing.
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Formularios de correo ----------
  // El envío es simulado: no hay servidor
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll('.lp-form').forEach(function (form) {
    const campo = form.querySelector('input');
    const mensaje = form.querySelector('.lp-form-mensaje');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const correo = campo.value.trim();

      if (!formatoCorreo.test(correo)) {
        campo.classList.add('lp-error');
        campo.setAttribute('aria-invalid', 'true');
        mensaje.className = 'lp-form-mensaje lp-mal';
        mensaje.textContent = 'Escribe un correo válido, por ejemplo tu@correo.com';
        campo.focus();
        return;
      }

      campo.classList.remove('lp-error');
      campo.removeAttribute('aria-invalid');
      campo.value = '';
      mensaje.className = 'lp-form-mensaje lp-bien';
      mensaje.textContent = '¡Ya estás dentro! Te hemos enviado tu código del 15% a ' + correo + '.';
    });

    // Al volver a escribir se quita el error
    campo.addEventListener('input', function () {
      campo.classList.remove('lp-error');
      campo.removeAttribute('aria-invalid');
      mensaje.textContent = '';
    });
  });

});
