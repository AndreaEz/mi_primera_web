const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const alerta = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  alerta.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    alerta.innerHTML = warnings;
  } else {
    alerta.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});